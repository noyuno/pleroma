defmodule Pleroma.Application do
  use Application
  import Supervisor.Spec

  @name "Pleroma"
  @version Mix.Project.config()[:version]
  def name, do: @name
  def version, do: @version
  def named_version(), do: @name <> " " <> @version

  def user_agent() do
    info = "#{Pleroma.Web.base_url()} <#{Pleroma.Config.get([:instance, :email], "")}>"
    named_version() <> "; " <> info
  end

  # See http://elixir-lang.org/docs/stable/elixir/Application.html
  # for more information on OTP Applications
  @env Mix.env()
  def start(_type, _args) do
    import Cachex.Spec

    # Define workers and child supervisors to be supervised
    children =
      [
        # Start the Ecto repository
        supervisor(Pleroma.Repo, []),
        worker(Pleroma.Emoji, []),
        worker(
          Cachex,
          [
            :user_cache,
            [
              default_ttl: 25000,
              ttl_interval: 1000,
              limit: 2500
            ]
          ],
          id: :cachex_user
        ),
        worker(
          Cachex,
          [
            :object_cache,
            [
              default_ttl: 25000,
              ttl_interval: 1000,
              limit: 2500
            ]
          ],
          id: :cachex_object
        ),
        worker(
          Cachex,
          [
            :idempotency_cache,
            [
              expiration:
                expiration(
                  default: :timer.seconds(6 * 60 * 60),
                  interval: :timer.seconds(60)
                ),
              limit: 2500
            ]
          ],
          id: :cachex_idem
        ),
        worker(Pleroma.Web.Federator.RetryQueue, []),
        worker(Pleroma.Web.Federator, []),
        worker(Pleroma.Stats, []),
        worker(Pleroma.Web.Push, [])
      ] ++
        streamer_child() ++
        chat_child() ++
        [
          # Start the endpoint when the application starts
          supervisor(Pleroma.Web.Endpoint, []),
          worker(Pleroma.Gopher.Server, [])
        ]

    # See http://elixir-lang.org/docs/stable/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Pleroma.Supervisor]
    Supervisor.start_link(children, opts)
  end

  if Mix.env() == :test do
    defp streamer_child(), do: []
    defp chat_child(), do: []
  else
    defp streamer_child() do
      [worker(Pleroma.Web.Streamer, [])]
    end

    defp chat_child() do
      if Pleroma.Config.get([:chat, :enabled]) do
        [worker(Pleroma.Web.ChatChannel.ChatChannelState, [])]
      else
        []
      end
    end
  end
end
