import React from "react";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider";
import "./Bookmark.css";
import { Post } from "../../components/Post/Post";

export const Bookmark = () => {
  const { loggedInUserState } = useLoggedInUser();
  console.log("hh", loggedInUserState);
  return (
    <main className="feed bookmark-container">
      {loggedInUserState?.bookmarks?.map((post) => (
        <Post key={post?._id} />
      ))}
    </main>
  );
};
