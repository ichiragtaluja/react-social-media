import "./Profile.css";
import { useState } from "react";
import React from "react";
import { usePosts } from "../../contexts/PostsProvider";
import { useAuth } from "../../contexts/AuthProvider";
import { Post } from "../../components/Post/Post";
import { useUser } from "../../contexts/UserProvider";
import { CgCalendarDates } from "react-icons/cg";
import { useNavigate, useParams } from "react-router-dom";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider";
import { EditProfileModal } from "./components/EditProfileModal/EditProfileModal";
import { RxCross2 } from "react-icons/rx";

export const Profile = () => {
  const [showFollowers, setShowFollowers] = useState(false);

  const [showFollowing, setShowFollowing] = useState(false);

  const [isEditProfile, setIsEditProfile] = useState(false);

  const navigate = useNavigate();

  const { userState } = useUser();

  const { auth } = useAuth();

  const { username } = useParams();

  const { loggedInUserState, followUser, unfollowUser } = useLoggedInUser();

  const isOwnProfile = username === loggedInUserState?.username;

  const userDetails = userState?.allUsers?.find(
    (user) => user?.username === auth?.username
  );

  const { allPosts } = usePosts();

  const postsByUser = allPosts?.filter((post) => post.username === username);

  const user = userState?.allUsers?.find(
    ({ username: user }) => user === username
  );

  const createdOnDate = () => {
    const createdOn = new Date(user?.createdAt);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return createdOn.toLocaleDateString("en-US", options);
  };

  const isFollowing = (user) =>
    userDetails?.following?.find(({ username }) => username === user?.username);

  const followUnfollowHandler = (e, user) => {
    e.stopPropagation();
    const userFromAllUsers = userState?.allUsers?.find(
      ({ username }) => username === user?.username
    );
    !isFollowing(user)
      ? followUser(userFromAllUsers?._id, auth.token)
      : unfollowUser(userFromAllUsers?._id, auth.token);
  };

  return (
    <main className="feed">
      <div className="user-info-container">
        <div className="profilepicture-container">
          <img src={user?.avatarURL} alt={user?.firstName} />
          {isOwnProfile ? (
            <button onClick={() => setIsEditProfile(true)}>Edit Profile</button>
          ) : !loggedInUserState.following?.find(
              (user) => user.username === username
            ) ? (
            <button onClick={(e) => followUser(user?._id, auth.token)}>
              Follow
            </button>
          ) : (
            <button onClick={(e) => unfollowUser(user?._id, auth.token)}>
              Following
            </button>
          )}
        </div>
        <div className="username-container">
          <p className="name">
            {user?.firstName} {user?.lastName}
          </p>
          <p className="username">@{user?.username}</p>
        </div>
        <div className="bio-container">
          <p>{user?.bio}</p>
        </div>

        <div className="website-container">
          <a href={user?.website}>{user?.website}</a>
          <div className="joining-date-container">
            <CgCalendarDates />
            <span>Joined {createdOnDate()}</span>
          </div>
        </div>
        <div className="post-followers-following-container">
          <p>
            {postsByUser.length}
            <span>Posts</span>
          </p>
          <p
            className="post-following-count"
            onClick={() => {
              setShowFollowing(true);
            }}
          >
            {user?.following.length}
            <span>Following</span>
          </p>
          {showFollowing && (
            <div className="like-modal">
              <div className="likes-content">
                {" "}
                <div className="likes-header">
                  <h2>Following</h2>
                  <RxCross2
                    onClick={() => {
                      setShowFollowing(false);
                    }}
                  />
                </div>
                {user?.following?.map((user) => (
                  <div
                    onClick={() => {
                      navigate(`/profile/${user.username}`);
                      setShowFollowing(false);
                    }}
                    key={user?._id}
                    className="discover-user-card"
                  >
                    <div
                      onClick={() => {
                        navigate(`/profile/${user.username}`);
                        setShowFollowing(false);
                      }}
                      className="discover-user-img-container"
                    >
                      <img src={user?.avatarURL} alt={user?.firstName} />
                    </div>
                    <div className="user-name-username-container">
                      <p className="name">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p className="username">@{user?.username}</p>
                    </div>
                    <div className="follow-container">
                      {user?.username !== auth?.username && (
                        <button onClick={(e) => followUnfollowHandler(e, user)}>
                          {!isFollowing(user) ? "Follow" : "Following"}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <p
            className="post-follower-count"
            onClick={() => {
              setShowFollowers(true);
            }}
          >
            {user?.followers.length}
            <span>Followers</span>
          </p>
          {showFollowers && (
            <div className="like-modal">
              <div className="likes-content">
                {" "}
                <div className="likes-header">
                  <h2>Followers</h2>
                  <RxCross2
                    onClick={() => {
                      setShowFollowers(false);
                    }}
                  />
                </div>
                {user?.followers?.map((user) => (
                  <div
                    onClick={() => {
                      navigate(`/profile/${user.username}`);
                      setShowFollowers(false);
                    }}
                    key={user?._id}
                    className="discover-user-card"
                  >
                    <div
                      onClick={() => {
                        navigate(`/profile/${user.username}`);
                        setShowFollowers(false);
                      }}
                      className="discover-user-img-container"
                    >
                      <img src={user?.avatarURL} alt={user?.firstName} />
                    </div>
                    <div className="user-name-username-container">
                      <p className="name">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p className="username">@{user?.username}</p>
                    </div>
                    <div className="follow-container">
                      {user?.username !== auth?.username && (
                        <button onClick={(e) => followUnfollowHandler(e, user)}>
                          {!isFollowing(user) ? "Follow" : "Following"}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="user-posts-container">
        {postsByUser.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
      {isEditProfile && (
        <div className="create-post-modal">
          <EditProfileModal
            className="modal-content"
            setIsEditProfile={setIsEditProfile}
          />
        </div>
      )}
    </main>
  );
};
