defmodule Pleroma.Web.Push.Subscription do
  use Ecto.Schema
  import Ecto.Changeset
  alias Pleroma.{Repo, User}
  alias Pleroma.Web.OAuth.Token
  alias Pleroma.Web.Push.Subscription

  schema "push_subscriptions" do
    belongs_to(:user, User)
    belongs_to(:token, Token)
    field(:endpoint, :string)
    field(:key_p256dh, :string)
    field(:key_auth, :string)
    field(:data, :map, default: %{})

    timestamps()
  end

  @supported_alert_types ~w[follow favourite mention reblog]

  defp alerts(%{"data" => %{"alerts" => alerts}}) do
    alerts = Map.take(alerts, @supported_alert_types)
    %{"alerts" => alerts}
  end

  def create(
        %User{} = user,
        %Token{} = token,
        %{
          "subscription" => %{
            "endpoint" => endpoint,
            "keys" => %{"auth" => key_auth, "p256dh" => key_p256dh}
          }
        } = params
      ) do
    Repo.insert(%Subscription{
      user_id: user.id,
      token_id: token.id,
      endpoint: endpoint,
      key_auth: key_auth,
      key_p256dh: key_p256dh,
      data: alerts(params)
    })
  end

  def get(%User{id: user_id}, %Token{id: token_id}) do
    Repo.get_by(Subscription, user_id: user_id, token_id: token_id)
  end

  def update(user, token, params) do
    get(user, token)
    |> change(data: alerts(params))
    |> Repo.update()
  end

  def delete(user, token) do
    Repo.delete(get(user, token))
  end

  def delete_if_exists(user, token) do
    case get(user, token) do
      nil -> {:ok, nil}
      sub -> Repo.delete(sub)
    end
  end
end
