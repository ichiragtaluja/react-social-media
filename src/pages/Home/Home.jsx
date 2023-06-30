import "./Home.css";
import React from "react";
import { useState } from "react";
import { AttentionSeeker } from "react-awesome-reveal";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

import { usePosts } from "../../contexts/PostsProvider";
import { Post } from "../../components/Post/Post";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider";
import { CreatePostForm } from "../../components/CreatePostForm/CreatePostForm";
import { useAuth } from "../../contexts/AuthProvider";
import { Navbar } from "../../components/Navbar/Navbar";
import { Header } from "../../components/Header/Header";
import { Discover } from "../../components/Discover/Discover";

export const Home = () => {
  const { setSortBy, sortBy, allPosts, postLoading } = usePosts();
  const { auth } = useAuth();
  const { loggedInUserState } = useLoggedInUser();

  const allPostFromFollowers = allPosts.filter(
    (post) =>
      post.username === loggedInUserState.username ||
      loggedInUserState?.following?.some(
        (following) => following.username === post.username
      )
  );

  const sortedPosts = (sortBy, allPosts) => {
    if (sortBy === "Latest") {
      const sortedPosts = allPosts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      return sortedPosts;
    }
    if (sortBy === "Oldest") {
      const sortedPosts = allPosts.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      return sortedPosts;
    } else {
      const sortedPosts = allPosts.sort(
        (a, b) => b.likes.likeCount - a.likes.likeCount
      );
      return sortedPosts;
    }
  };

  const [isAjustmentOn, setIsAdjustmentOn] = useState(false);
  const sortTypes = ["Trending", "Oldest", "Latest"];

  return (
    <>
      {auth.isAuth && <Header />}
      <div className="app-container">
        {auth.isAuth && <Navbar />}

        <main className="feed">
          <CreatePostForm />

          <div className="sorting-container">
            <p>{sortBy} Posts</p>
            <TbAdjustmentsHorizontal
              onClick={() => setIsAdjustmentOn(!isAjustmentOn)}
              className="adjustment-btn"
            />
            {isAjustmentOn && (
              <div className="dropdown-list-container">
                <ul>
                  {sortTypes.map((type) => (
                    <AttentionSeeker
                      key={type}
                      duration={1000}
                      effect="headShake"
                    >
                      <li
                        className={type === sortBy ? "isActive" : ""}
                        onClick={() => {
                          setSortBy(type);
                          setIsAdjustmentOn(!isAjustmentOn);
                        }}
                        key={type}
                      >
                        {type}
                      </li>{" "}
                    </AttentionSeeker>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {!postLoading && (
            <div className="post-listing-container">
              {sortedPosts(sortBy, allPostFromFollowers).length ? (
                sortedPosts(sortBy, allPostFromFollowers)?.map((post) => {
                  return <Post key={post?._id} post={post} />;
                })
              ) : (
                <p className="no-bookmarks">
                  Sorry, there no posts to show! Follow people to see their
                  posts.
                </p>
              )}
            </div>
          )}
        </main>

        {auth.isAuth && <Discover className="discover" />}
      </div>
    </>
  );
};
