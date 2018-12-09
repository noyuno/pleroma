defmodule Pleroma.Notification do
  use Ecto.Schema
  alias Pleroma.{User, Activity, Notification, Repo, Object}
  import Ecto.Query

  schema "notifications" do
    field(:seen, :boolean, default: false)
    belongs_to(:user, Pleroma.User)
    belongs_to(:activity, Pleroma.Activity)

    timestamps()
  end

  # TODO: Make generic and unify (see activity_pub.ex)
  defp restrict_max(query, %{"max_id" => max_id}) do
    from(activity in query, where: activity.id < ^max_id)
  end

  defp restrict_max(query, _), do: query

  defp restrict_since(query, %{"since_id" => since_id}) do
    from(activity in query, where: activity.id > ^since_id)
  end

  defp restrict_since(query, _), do: query

  def for_user(user, opts \\ %{}) do
    query =
      from(
        n in Notification,
        where: n.user_id == ^user.id,
        order_by: [desc: n.id],
        preload: [:activity],
        limit: 20
      )

    query =
      query
      |> restrict_since(opts)
      |> restrict_max(opts)

    Repo.all(query)
  end

  def set_read_up_to(%{id: user_id} = _user, id) do
    query =
      from(
        n in Notification,
        where: n.user_id == ^user_id,
        where: n.id <= ^id,
        update: [
          set: [seen: true]
        ]
      )

    Repo.update_all(query, [])
  end

  def get(%{id: user_id} = _user, id) do
    query =
      from(
        n in Notification,
        where: n.id == ^id,
        preload: [:activity]
      )

    notification = Repo.one(query)

    case notification do
      %{user_id: ^user_id} ->
        {:ok, notification}

      _ ->
        {:error, "Cannot get notification"}
    end
  end

  def clear(user) do
    query = from(n in Notification, where: n.user_id == ^user.id)

    Repo.delete_all(query)
  end

  def dismiss(%{id: user_id} = _user, id) do
    notification = Repo.get(Notification, id)

    case notification do
      %{user_id: ^user_id} ->
        Repo.delete(notification)

      _ ->
        {:error, "Cannot dismiss notification"}
    end
  end

  def create_notifications(%Activity{id: _, data: %{"to" => _, "type" => type}} = activity)
      when type in ["Create", "Like", "Announce", "Follow"] do
    users = get_notified_from_activity(activity)

    notifications = Enum.map(users, fn user -> create_notification(activity, user) end)
    {:ok, notifications}
  end

  def create_notifications(_), do: {:ok, []}

  # TODO move to sql, too.
  def create_notification(%Activity{} = activity, %User{} = user) do
    unless User.blocks?(user, %{ap_id: activity.data["actor"]}) or
             user.ap_id == activity.data["actor"] do
      notification = %Notification{user_id: user.id, activity: activity}
      {:ok, notification} = Repo.insert(notification)
      Pleroma.Web.Streamer.stream("user", notification)
      Pleroma.Web.Push.send(notification)
      notification
    end
  end

  def get_notified_from_activity(activity, local_only \\ true)

  def get_notified_from_activity(
        %Activity{data: %{"to" => _, "type" => type} = data} = activity,
        local_only
      )
      when type in ["Create", "Like", "Announce", "Follow"] do
    recipients =
      []
      |> maybe_notify_to_recipients(activity)
      |> maybe_notify_mentioned_recipients(activity)
      |> Enum.uniq()

    User.get_users_from_set(recipients, local_only)
  end

  def get_notified_from_activity(_, local_only), do: []

  defp maybe_notify_to_recipients(
         recipients,
         %Activity{data: %{"to" => to, "type" => type}} = activity
       ) do
    recipients ++ to
  end

  defp maybe_notify_mentioned_recipients(
         recipients,
         %Activity{data: %{"to" => to, "type" => type} = data} = activity
       )
       when type == "Create" do
    object = Object.normalize(data["object"])

    object_data =
      cond do
        !is_nil(object) ->
          object.data

        is_map(data["object"]) ->
          data["object"]

        true ->
          %{}
      end

    tagged_mentions = maybe_extract_mentions(object_data)

    recipients ++ tagged_mentions
  end

  defp maybe_notify_mentioned_recipients(recipients, _), do: recipients

  defp maybe_extract_mentions(%{"tag" => tag}) do
    tag
    |> Enum.filter(fn x -> is_map(x) end)
    |> Enum.filter(fn x -> x["type"] == "Mention" end)
    |> Enum.map(fn x -> x["href"] end)
  end

  defp maybe_extract_mentions(_), do: []
end
