import "./PostDetail.css";

import React from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "../../contexts/PostsProvider";
import { Post } from "../../components/Post/Post";
import { useAuth } from "../../contexts/AuthProvider";
import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";
import { Discover } from "../../components/Discover/Discover";

export const PostDetail = () => {
  const { postId } = useParams();
  const { allPosts, postLoading } = usePosts();
  const { auth } = useAuth();

  const post = allPosts?.find((post) => post?.id === postId);
  return (
    <>
      {" "}
      {auth.isAuth && <Header />}
      <div className="app-container">
        {auth.isAuth && <Navbar />}

        <main className="feed">{!postLoading && <Post post={post} />}</main>

        {auth.isAuth && <Discover className="discover" />}
      </div>
    </>
  );
};
