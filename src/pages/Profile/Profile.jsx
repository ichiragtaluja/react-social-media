import "./Profile.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { usePosts } from "../../contexts/PostsProvider";
import { Post } from "../../components/Post/Post";
import { EditProfileModal } from "./components/EditProfileModal/EditProfileModal";
import { UserInfo } from "./components/UserInfo/UserInfo";
import { useAuth } from "../../contexts/AuthProvider";
import { Header } from "../../components/Header/Header";
import { Discover } from "../../components/Discover/Discover";
import { Navbar } from "../../components/Navbar/Navbar";

export const Profile = () => {
  const [isEditProfile, setIsEditProfile] = useState(false);

  const { allPosts, postLoading } = usePosts();
  const { username } = useParams();
  const { auth } = useAuth();

  const postsByUser = allPosts?.filter((post) => post.username === username);

  return (
    <>
      {" "}
      {auth.isAuth && <Header />}
      <div className="app-container">
        {auth.isAuth && <Navbar />}

        <main className="feed">
          <UserInfo
            setIsEditProfile={setIsEditProfile}
            postsByUser={postsByUser}
          />
          <div className="user-posts-container">
            {!postLoading &&
              (postsByUser.length ? (
                postsByUser.map((post) => <Post key={post._id} post={post} />)
              ) : (
                <p className="no-bookmarks">You have not added any posts!</p>
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

        {auth.isAuth && <Discover className="discover" />}
      </div>
    </>
  );
};
