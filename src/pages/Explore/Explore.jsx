import "./Explore.css";
import { Post } from "../../components/Post/Post";

import React from "react";
import { usePosts } from "../../contexts/PostsProvider";

export const Explore = () => {
  const { allPosts } = usePosts();
  return (
    <main className="feed explore-page-container">
      {allPosts?.map((post) => {
        return <Post key={post?._id} post={post} />;
      })}
    </main>
  );
};
