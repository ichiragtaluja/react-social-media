import "./Discover.css";
import React from "react";
import { useUser } from "../../contexts/UserProvider";

export const Discover = () => {
  const { userState } = useUser();
  const whoToFollow = userState?.allUsers;
  console.log(whoToFollow);

  return (
    <div className="discover">
      <div className="discover-container">
        <div className="discover-header">
          <p>Who to follow?</p>
        </div>
        <div className="discover-body">
          {whoToFollow?.map((user) => (
            <div key={user?._id} className="discover-user-card">
              <div className="discover-user-img-container">
                <img src={user?.avatarURL} />
              </div>
              <div className="user-name-username-container">
                <p className="name">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="username">@{user?.username}</p>
              </div>
              <div>
                <button>Follow</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
