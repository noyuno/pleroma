defmodule Pleroma.NotificationTest do
  use Pleroma.DataCase
  alias Pleroma.Web.TwitterAPI.TwitterAPI
  alias Pleroma.Web.CommonAPI
  alias Pleroma.{User, Notification}
  alias Pleroma.Web.ActivityPub.Transmogrifier
  import Pleroma.Factory

  describe "create_notifications" do
    test "notifies someone when they are directly addressed" do
      user = insert(:user)
      other_user = insert(:user)
      third_user = insert(:user)

      {:ok, activity} =
        TwitterAPI.create_status(user, %{
          "status" => "hey @#{other_user.nickname} and @#{third_user.nickname}"
        })

      {:ok, [notification, other_notification]} = Notification.create_notifications(activity)

      notified_ids = Enum.sort([notification.user_id, other_notification.user_id])
      assert notified_ids == [other_user.id, third_user.id]
      assert notification.activity_id == activity.id
      assert other_notification.activity_id == activity.id
    end
  end

  describe "create_notification" do
    test "it doesn't create a notification for user if the user blocks the activity author" do
      activity = insert(:note_activity)
      author = User.get_by_ap_id(activity.data["actor"])
      user = insert(:user)
      {:ok, user} = User.block(user, author)

      assert nil == Notification.create_notification(activity, user)
    end

    test "it doesn't create a notification for user if he is the activity author" do
      activity = insert(:note_activity)
      author = User.get_by_ap_id(activity.data["actor"])

      assert nil == Notification.create_notification(activity, author)
    end
  end

  describe "get notification" do
    test "it gets a notification that belongs to the user" do
      user = insert(:user)
      other_user = insert(:user)

      {:ok, activity} =
        TwitterAPI.create_status(user, %{"status" => "hey @#{other_user.nickname}"})

      {:ok, [notification]} = Notification.create_notifications(activity)
      {:ok, notification} = Notification.get(other_user, notification.id)

      assert notification.user_id == other_user.id
    end

    test "it returns error if the notification doesn't belong to the user" do
      user = insert(:user)
      other_user = insert(:user)

      {:ok, activity} =
        TwitterAPI.create_status(user, %{"status" => "hey @#{other_user.nickname}"})

      {:ok, [notification]} = Notification.create_notifications(activity)
      {:error, _notification} = Notification.get(user, notification.id)
    end
  end

  describe "dismiss notification" do
    test "it dismisses a notification that belongs to the user" do
      user = insert(:user)
      other_user = insert(:user)

      {:ok, activity} =
        TwitterAPI.create_status(user, %{"status" => "hey @#{other_user.nickname}"})

      {:ok, [notification]} = Notification.create_notifications(activity)
      {:ok, notification} = Notification.dismiss(other_user, notification.id)

      assert notification.user_id == other_user.id
    end

    test "it returns error if the notification doesn't belong to the user" do
      user = insert(:user)
      other_user = insert(:user)

      {:ok, activity} =
        TwitterAPI.create_status(user, %{"status" => "hey @#{other_user.nickname}"})

      {:ok, [notification]} = Notification.create_notifications(activity)
      {:error, _notification} = Notification.dismiss(user, notification.id)
    end
  end

  describe "clear notification" do
    test "it clears all notifications belonging to the user" do
      user = insert(:user)
      other_user = insert(:user)
      third_user = insert(:user)

      {:ok, activity} =
        TwitterAPI.create_status(user, %{
          "status" => "hey @#{other_user.nickname} and @#{third_user.nickname} !"
        })

      {:ok, _notifs} = Notification.create_notifications(activity)

      {:ok, activity} =
        TwitterAPI.create_status(user, %{
          "status" => "hey again @#{other_user.nickname} and @#{third_user.nickname} !"
        })

      {:ok, _notifs} = Notification.create_notifications(activity)
      Notification.clear(other_user)

      assert Notification.for_user(other_user) == []
      assert Notification.for_user(third_user) != []
    end
  end

  describe "set_read_up_to()" do
    test "it sets all notifications as read up to a specified notification ID" do
      user = insert(:user)
      other_user = insert(:user)

      {:ok, activity} =
        TwitterAPI.create_status(user, %{
          "status" => "hey @#{other_user.nickname}!"
        })

      {:ok, activity} =
        TwitterAPI.create_status(user, %{
          "status" => "hey again @#{other_user.nickname}!"
        })

      [n2, n1] = notifs = Notification.for_user(other_user)
      assert length(notifs) == 2

      assert n2.id > n1.id

      {:ok, activity} =
        TwitterAPI.create_status(user, %{
          "status" => "hey yet again @#{other_user.nickname}!"
        })

      Notification.set_read_up_to(other_user, n2.id)

      [n3, n2, n1] = notifs = Notification.for_user(other_user)

      assert n1.seen == true
      assert n2.seen == true
      assert n3.seen == false
    end
  end

  describe "notification target determination" do
    test "it sends notifications to addressed users in new messages" do
      user = insert(:user)
      other_user = insert(:user)

      {:ok, activity} =
        CommonAPI.post(user, %{
          "status" => "hey @#{other_user.nickname}!"
        })

      assert other_user in Notification.get_notified_from_activity(activity)
    end

    test "it sends notifications to mentioned users in new messages" do
      user = insert(:user)
      other_user = insert(:user)

      create_activity = %{
        "@context" => "https://www.w3.org/ns/activitystreams",
        "type" => "Create",
        "to" => ["https://www.w3.org/ns/activitystreams#Public"],
        "actor" => user.ap_id,
        "object" => %{
          "type" => "Note",
          "content" => "message with a Mention tag, but no explicit tagging",
          "tag" => [
            %{
              "type" => "Mention",
              "href" => other_user.ap_id,
              "name" => other_user.nickname
            }
          ],
          "attributedTo" => user.ap_id
        }
      }

      {:ok, activity} = Transmogrifier.handle_incoming(create_activity)

      assert other_user in Notification.get_notified_from_activity(activity)
    end

    test "it does not send notifications to users who are only cc in new messages" do
      user = insert(:user)
      other_user = insert(:user)

      create_activity = %{
        "@context" => "https://www.w3.org/ns/activitystreams",
        "type" => "Create",
        "to" => ["https://www.w3.org/ns/activitystreams#Public"],
        "cc" => [other_user.ap_id],
        "actor" => user.ap_id,
        "object" => %{
          "type" => "Note",
          "content" => "hi everyone",
          "attributedTo" => user.ap_id
        }
      }

      {:ok, activity} = Transmogrifier.handle_incoming(create_activity)

      assert other_user not in Notification.get_notified_from_activity(activity)
    end

    test "it does not send notification to mentioned users in likes" do
      user = insert(:user)
      other_user = insert(:user)
      third_user = insert(:user)

      {:ok, activity_one} =
        CommonAPI.post(user, %{
          "status" => "hey @#{other_user.nickname}!"
        })

      {:ok, activity_two, _} = CommonAPI.favorite(activity_one.id, third_user)

      assert other_user not in Notification.get_notified_from_activity(activity_two)
    end

    test "it does not send notification to mentioned users in announces" do
      user = insert(:user)
      other_user = insert(:user)
      third_user = insert(:user)

      {:ok, activity_one} =
        CommonAPI.post(user, %{
          "status" => "hey @#{other_user.nickname}!"
        })

      {:ok, activity_two, _} = CommonAPI.repeat(activity_one.id, third_user)

      assert other_user not in Notification.get_notified_from_activity(activity_two)
    end
  end

  describe "notification lifecycle" do
    test "liking an activity results in 1 notification, then 0 if the activity is deleted" do
      user = insert(:user)
      other_user = insert(:user)

      {:ok, activity} = CommonAPI.post(user, %{"status" => "test post"})

      assert length(Notification.for_user(user)) == 0

      {:ok, _, _} = CommonAPI.favorite(activity.id, other_user)

      assert length(Notification.for_user(user)) == 1

      {:ok, _} = CommonAPI.delete(activity.id, user)

      assert length(Notification.for_user(user)) == 0
    end

    test "liking an activity results in 1 notification, then 0 if the activity is unliked" do
      user = insert(:user)
      other_user = insert(:user)

      {:ok, activity} = CommonAPI.post(user, %{"status" => "test post"})

      assert length(Notification.for_user(user)) == 0

      {:ok, _, _} = CommonAPI.favorite(activity.id, other_user)

      assert length(Notification.for_user(user)) == 1

      {:ok, _, _, _} = CommonAPI.unfavorite(activity.id, other_user)

      assert length(Notification.for_user(user)) == 0
    end

    test "repeating an activity results in 1 notification, then 0 if the activity is deleted" do
      user = insert(:user)
      other_user = insert(:user)

      {:ok, activity} = CommonAPI.post(user, %{"status" => "test post"})

      assert length(Notification.for_user(user)) == 0

      {:ok, _, _} = CommonAPI.repeat(activity.id, other_user)

      assert length(Notification.for_user(user)) == 1

      {:ok, _} = CommonAPI.delete(activity.id, user)

      assert length(Notification.for_user(user)) == 0
    end

    test "repeating an activity results in 1 notification, then 0 if the activity is unrepeated" do
      user = insert(:user)
      other_user = insert(:user)

      {:ok, activity} = CommonAPI.post(user, %{"status" => "test post"})

      assert length(Notification.for_user(user)) == 0

      {:ok, _, _} = CommonAPI.repeat(activity.id, other_user)

      assert length(Notification.for_user(user)) == 1

      {:ok, _, _} = CommonAPI.unrepeat(activity.id, other_user)

      assert length(Notification.for_user(user)) == 0
    end

    test "liking an activity which is already deleted does not generate a notification" do
      user = insert(:user)
      other_user = insert(:user)

      {:ok, activity} = CommonAPI.post(user, %{"status" => "test post"})

      assert length(Notification.for_user(user)) == 0

      {:ok, _deletion_activity} = CommonAPI.delete(activity.id, user)

      assert length(Notification.for_user(user)) == 0

      {:error, _} = CommonAPI.favorite(activity.id, other_user)

      assert length(Notification.for_user(user)) == 0
    end

    test "repeating an activity which is already deleted does not generate a notification" do
      user = insert(:user)
      other_user = insert(:user)

      {:ok, activity} = CommonAPI.post(user, %{"status" => "test post"})

      assert length(Notification.for_user(user)) == 0

      {:ok, _deletion_activity} = CommonAPI.delete(activity.id, user)

      assert length(Notification.for_user(user)) == 0

      {:error, _} = CommonAPI.repeat(activity.id, other_user)

      assert length(Notification.for_user(user)) == 0
    end

    test "replying to a deleted post without tagging does not generate a notification" do
      user = insert(:user)
      other_user = insert(:user)

      {:ok, activity} = CommonAPI.post(user, %{"status" => "test post"})
      {:ok, _deletion_activity} = CommonAPI.delete(activity.id, user)

      {:ok, _reply_activity} =
        CommonAPI.post(other_user, %{
          "status" => "test reply",
          "in_reply_to_status_id" => activity.id
        })

      assert length(Notification.for_user(user)) == 0
    end
  end
end
