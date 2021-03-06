use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :pleroma, Pleroma.Web.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

config :pleroma, Pleroma.Uploaders.Local, uploads: "test/uploads"

# Configure your database
config :pleroma, Pleroma.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "pleroma_test",
  hostname: System.get_env("DB_HOST") || "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# Reduce hash rounds for testing
config :pbkdf2_elixir, rounds: 1

config :pleroma, :websub, Pleroma.Web.WebsubMock
config :pleroma, :ostatus, Pleroma.Web.OStatusMock
config :tesla, adapter: Tesla.Mock

config :web_push_encryption, :vapid_details,
  subject: "mailto:administrator@example.com",
  public_key:
    "BLH1qVhJItRGCfxgTtONfsOKDc9VRAraXw-3NsmjMngWSh7NxOizN6bkuRA7iLTMPS82PjwJAr3UoK9EC1IFrz4",
  private_key: "_-XZ0iebPrRfZ_o0-IatTdszYa8VCH1yLN-JauK7HHA"

try do
  import_config "test.secret.exs"
rescue
  _ ->
    IO.puts(
      "You may want to create test.secret.exs to declare custom database connection parameters."
    )
end
