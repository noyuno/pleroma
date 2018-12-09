defmodule Pleroma.Plugs.UserIsAdminPlugTest do
  use Pleroma.Web.ConnCase, async: true

  alias Pleroma.Plugs.UserIsAdminPlug
  import Pleroma.Factory

  test "accepts a user that is admin", %{conn: conn} do
    user = insert(:user, info: %{is_admin: true})

    conn =
      build_conn()
      |> assign(:user, user)

    ret_conn =
      conn
      |> UserIsAdminPlug.call(%{})

    assert conn == ret_conn
  end

  test "denies a user that isn't admin", %{conn: conn} do
    user = insert(:user)

    conn =
      build_conn()
      |> assign(:user, user)
      |> UserIsAdminPlug.call(%{})

    assert conn.status == 403
  end

  test "denies when a user isn't set", %{conn: conn} do
    conn =
      build_conn()
      |> UserIsAdminPlug.call(%{})

    assert conn.status == 403
  end
end
