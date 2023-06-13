import React from "react";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider";
import "./Bookmark.css";
import { Post } from "../../components/Post/Post";
import { usePosts } from "../../contexts/PostsProvider";

export const Bookmark = () => {
  const { allPosts } = usePosts();
  const { loggedInUserState } = useLoggedInUser();
  const allBookmarkedPosts = allPosts.filter((post) =>
    loggedInUserState.bookmarks.find((postId) => postId === post._id)
  );
  return (
    <main className="feed bookmark-container">
      {allBookmarkedPosts?.map((post) => (
        <Post post={post} key={post?._id} />
      ))}
    </main>
  );
};
