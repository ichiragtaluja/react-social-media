import "./Discover.css";
import React from "react";
import { useUser } from "../../contexts/UserProvider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider";

export const Discover = () => {
  const { auth } = useAuth();
  const { loggedInUserState } = useLoggedInUser();

  const { userState } = useUser();

  const navigate = useNavigate();
  const whoToFollow = userState.allUsers?.filter((user) =>
    loggedInUserState?.following?.every(
      (following) =>
        following.username !== user.username && user.username !== auth.username
    )
  );

  return (
    <div className="discover">
      <div className="discover-container">
        <div className="discover-header">
          <p>Who to follow?</p>
        </div>
        <div className="discover-body">
          {whoToFollow?.map((user) => (
            <div key={user?._id} className="discover-user-card">
              <div
                onClick={() => {
                  navigate(`/profile/${user.username}`);
                }}
                className="discover-user-img-container"
              >
                <img src={user?.avatarURL} />
              </div>
              <div className="user-name-username-container">
                <p className="name">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="username">@{user?.username}</p>
              </div>
              <div className="follow-container">
                <button>Follow</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
