import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthProvider";

export const ShowFollowersModal = ({
  user,
  setShowFollowers,
  followUnfollowHandler,
  isFollowing,
}) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  return user?.followers.length ? (
    user?.followers?.map((user) => (
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
    ))
  ) : (
    <p className="no-bookmarks">No followers</p>
  );
};
