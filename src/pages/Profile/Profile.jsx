import "./Profile.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { usePosts } from "../../contexts/PostsProvider";
import { Post } from "../../components/Post/Post";
import { EditProfileModal } from "./components/EditProfileModal/EditProfileModal";
import { UserInfo } from "./components/UserInfo/UserInfo";

export const Profile = () => {
  const [isEditProfile, setIsEditProfile] = useState(false);

  const { allPosts } = usePosts();
  const { username } = useParams();

  const postsByUser = allPosts?.filter((post) => post.username === username);

  return (
    <main className="feed">
      <UserInfo setIsEditProfile={setIsEditProfile} postsByUser={postsByUser} />
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
