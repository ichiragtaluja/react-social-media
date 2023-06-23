import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { useLoggedInUser } from "../../../../contexts/LoggedInUserProvider";
import { useUser } from "../../../../contexts/UserProvider";
import { useAuth } from "../../../../contexts/AuthProvider";
import { createdOnDate } from "../../../../utils/date";
import { ShowFollowersModal } from "../ShowFollowersModal/ShowFollowersModal";
import { ShowFollowingModal } from "../ShowFollowingModal/ShowFollowingModal";
import { CgCalendarDates, RxCross2 } from "../../../../utils/icons";

export const UserInfo = ({ setIsEditProfile, postsByUser }) => {
  const { userState } = useUser();
  const { auth } = useAuth();
  const { username } = useParams();
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const { loggedInUserState, followUser, unfollowUser } = useLoggedInUser();

  const isOwnProfile = username === loggedInUserState?.username;

  const userDetails = userState?.allUsers?.find(
    (user) => user?.username === auth?.username
  );

  const user = userState?.allUsers?.find(
    ({ username: user }) => user === username
  );

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
          <span>Joined {createdOnDate(user)}</span>
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
              <ShowFollowingModal
                user={user}
                isFollowing={isFollowing}
                followUnfollowHandler={followUnfollowHandler}
                setShowFollowing={setShowFollowing}
              />
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
              <ShowFollowersModal
                user={user}
                isFollowing={isFollowing}
                followUnfollowHandler={followUnfollowHandler}
                setShowFollowers={setShowFollowers}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
