import "./Home.css";
import React from "react";
import { useState } from "react";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { usePosts } from "../../contexts/PostsProvider";
import { Post } from "../../components/Post/Post";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider";
import { CreatePostForm } from "../../components/CreatePostForm/CreatePostForm";
import {
  Zoom,
  Slide,
  Roll,
  Hinge,
  AttentionSeeker,
} from "react-awesome-reveal";

export const Home = () => {
  const { setSortBy, sortBy, allPosts } = usePosts();

  const { loggedInUserState } = useLoggedInUser();

  const allPostFromFollowers = allPosts.filter((post) =>
    loggedInUserState?.following?.some(
      (following) =>
        following.username === post.username ||
        post.username === loggedInUserState.username
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
                <AttentionSeeker duration={1000} effect="headShake">
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

      <div className="post-listing-container">
        {sortedPosts(sortBy, allPostFromFollowers)?.map((post) => {
          return <Post key={post?._id} post={post} />;
        })}
      </div>
    </main>
  );
};
