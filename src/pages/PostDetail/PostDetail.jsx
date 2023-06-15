import "./PostDetail.css";

import React from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "../../contexts/PostsProvider";
import { Post } from "../../components/Post/Post";

export const PostDetail = () => {
  const { postId } = useParams();
  const { allPosts } = usePosts();

  const post = allPosts?.find((post) => post?.id === postId);
  return (
    <main className="feed">
      <Post post={post} />
    </main>
  );
};
