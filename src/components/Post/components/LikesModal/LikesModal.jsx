import React from "react";
import { useNavigate } from "react-router-dom";

import { useLoggedInUser } from "../../../../contexts/LoggedInUserProvider";
import { useAuth } from "../../../../contexts/AuthProvider";
import { useUser } from "../../../../contexts/UserProvider";

export const LikesModal = ({ post, isFollowing }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { userState } = useUser();
  const { followUser, unfollowUser } = useLoggedInUser();

  const followUnfollowHandler = (e, user) => {
    e.stopPropagation();
    const userFromAllUsers = userState?.allUsers?.find(
      ({ username }) => username === user?.username
    );
    !isFollowing(user)
      ? followUser(userFromAllUsers?._id, auth.token)
      : unfollowUser(userFromAllUsers?._id, auth.token);
  };

  return post?.likes?.likedBy.map((user) => (
    <div
      onClick={() => {
        navigate(`/profile/${user.username}`);
      }}
      key={user?._id}
      className="discover-user-card"
    >
      <div
        onClick={() => {
          navigate(`/profile/${user.username}`);
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
  ));
};
