defmodule Pleroma.Web.MediaProxy do
  @base64_opts [padding: false]

  def url(nil), do: nil

  def url(""), do: nil

  def url(url = "/" <> _), do: url

  def url(url) do
    config = Application.get_env(:pleroma, :media_proxy, [])

    if !Keyword.get(config, :enabled, false) or String.starts_with?(url, Pleroma.Web.base_url()) do
      url
    else
      secret = Application.get_env(:pleroma, Pleroma.Web.Endpoint)[:secret_key_base]

      # The URL is url-decoded and encoded again to ensure it is correctly encoded and not twice.
      base64 =
        url
        |> URI.decode()
        |> URI.encode()
        |> Base.url_encode64(@base64_opts)

      sig = :crypto.hmac(:sha, secret, base64)
      sig64 = sig |> Base.url_encode64(@base64_opts)

      build_url(sig64, base64, filename(url))
    end
  end

  def decode_url(sig, url) do
    secret = Application.get_env(:pleroma, Pleroma.Web.Endpoint)[:secret_key_base]
    sig = Base.url_decode64!(sig, @base64_opts)
    local_sig = :crypto.hmac(:sha, secret, url)

    if local_sig == sig do
      {:ok, Base.url_decode64!(url, @base64_opts)}
    else
      {:error, :invalid_signature}
    end
  end

  def filename(url_or_path) do
    if path = URI.parse(url_or_path).path, do: Path.basename(path)
  end

  def build_url(sig_base64, url_base64, filename \\ nil) do
    [
      Pleroma.Config.get([:media_proxy, :base_url], Pleroma.Web.base_url()),
      "proxy",
      sig_base64,
      url_base64,
      filename
    ]
    |> Enum.filter(fn value -> value end)
    |> Path.join()
  end
end
