# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :pleroma, ecto_repos: [Pleroma.Repo]

config :pleroma, Pleroma.Repo, types: Pleroma.PostgresTypes

# Upload configuration
config :pleroma, Pleroma.Upload,
  uploader: Pleroma.Uploaders.Local,
  filters: [],
  proxy_remote: false,
  proxy_opts: []

config :pleroma, Pleroma.Uploaders.Local, uploads: "uploads"

config :pleroma, Pleroma.Uploaders.S3,
  bucket: nil,
  public_endpoint: "https://s3.amazonaws.com"

config :pleroma, Pleroma.Uploaders.MDII,
  cgi: "https://mdii.sakura.ne.jp/mdii-post.cgi",
  files: "https://mdii.sakura.ne.jp"

config :pleroma, :emoji, shortcode_globs: ["/emoji/custom/**/*.png"]

config :pleroma, :uri_schemes,
  valid_schemes: [
    "https",
    "http",
    "dat",
    "dweb",
    "gopher",
    "ipfs",
    "ipns",
    "irc",
    "ircs",
    "magnet",
    "mailto",
    "mumble",
    "ssb",
    "xmpp"
  ]

# Configures the endpoint
config :pleroma, Pleroma.Web.Endpoint,
  url: [host: "localhost"],
  protocol: "https",
  secret_key_base: "aK4Abxf29xU9TTDKre9coZPUgevcVCFQJe/5xP/7Lt4BEif6idBIbjupVbOrbKxl",
  signing_salt: "CqaoopA2",
  render_errors: [view: Pleroma.Web.ErrorView, accepts: ~w(json)],
  pubsub: [name: Pleroma.PubSub, adapter: Phoenix.PubSub.PG2],
  secure_cookie_flag: true

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :mime, :types, %{
  "application/xml" => ["xml"],
  "application/xrd+xml" => ["xrd+xml"],
  "application/activity+json" => ["activity+json"],
  "application/ld+json" => ["activity+json"]
}

config :pleroma, :websub, Pleroma.Web.Websub
config :pleroma, :ostatus, Pleroma.Web.OStatus
config :pleroma, :httpoison, Pleroma.HTTP
config :tesla, adapter: Tesla.Adapter.Hackney

# Configures http settings, upstream proxy etc.
config :pleroma, :http, proxy_url: nil

config :pleroma, :instance,
  name: "s.noyuno.space",
  email: "noyuno@users.noreply.github.com",
  description: "Pleromaインスタンス，代替フェディバースサーバ",
  limit: 5000,
  char_limit: 5000,
  upload_limit: 16_000_000,
  avatar_upload_limit: 2_000_000,
  background_upload_limit: 4_000_000,
  banner_upload_limit: 4_000_000,
  registrations_open: true,
  federating: true,
  allow_relay: true,
  rewrite_policy: Pleroma.Web.ActivityPub.MRF.NoOpPolicy,
  public: true,
  quarantined_instances: [],
  managed_config: true,
  allowed_post_formats: [
    "text/plain",
    "text/html",
    "text/markdown"
  ],
  finmoji_enabled: true,
  mrf_transparency: true

config :pleroma, :markup,
  # XXX - unfortunately, inline images must be enabled by default right now, because
  # of custom emoji.  Issue #275 discusses defanging that somehow.
  allow_inline_images: true,
  allow_headings: false,
  allow_tables: false,
  allow_fonts: false,
  scrub_policy: [
    Pleroma.HTML.Transform.MediaProxy,
    Pleroma.HTML.Scrubber.Default
  ]

config :pleroma, :fe,
  theme: "pleroma-dark",
  logo: "/static/logo.png",
  logo_mask: true,
  logo_margin: "0.1em",
  background: "/static/aurora_borealis.jpg",
  redirect_root_no_login: "/main/all",
  redirect_root_login: "/main/friends",
  show_instance_panel: true,
  scope_options_enabled: false,
  formatting_options_enabled: false,
  collapse_message_with_subject: false,
  hide_post_stats: false,
  hide_user_stats: false

config :pleroma, :activitypub,
  accept_blocks: true,
  unfollow_blocked: true,
  outgoing_blocks: true,
  follow_handshake_timeout: 500

config :pleroma, :user, deny_follow_blocked: true

config :pleroma, :mrf_normalize_markup, scrub_policy: Pleroma.HTML.Scrubber.Default

config :pleroma, :mrf_rejectnonpublic,
  allow_followersonly: false,
  allow_direct: false

config :pleroma, :mrf_simple,
  media_removal: [],
  media_nsfw: [],
  federated_timeline_removal: [],
  reject: [],
  accept: []

config :pleroma, :media_proxy,
  enabled: false,
  # base_url: "https://cache.pleroma.social",
  proxy_opts: [
    # inline_content_types: [] | false | true,
    # http: [:insecure]
  ]

config :pleroma, :chat, enabled: false

config :ecto, json_library: Jason

config :phoenix, :format_encoders, json: Jason

config :pleroma, :gopher,
  enabled: false,
  ip: {0, 0, 0, 0},
  port: 9999

config :pleroma, :suggestions,
  enabled: false,
  third_party_engine:
    "http://vinayaka.distsn.org/cgi-bin/vinayaka-user-match-suggestions-api.cgi?{{host}}+{{user}}",
  timeout: 300_000,
  limit: 23,
  web: "https://vinayaka.distsn.org/?{{host}}+{{user}}"

config :pleroma, :http_security,
  enabled: true,
  sts: false,
  sts_max_age: 31_536_000,
  ct_max_age: 2_592_000,
  referrer_policy: "same-origin"

config :cors_plug,
  max_age: 86_400,
  methods: ["POST", "PUT", "DELETE", "GET", "PATCH", "OPTIONS"],
  expose: [
    "Link",
    "X-RateLimit-Reset",
    "X-RateLimit-Limit",
    "X-RateLimit-Remaining",
    "X-Request-Id",
    "Idempotency-Key"
  ],
  credentials: true,
  headers: ["Authorization", "Content-Type", "Idempotency-Key"]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
