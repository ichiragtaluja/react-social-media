import "./Home.css";
import React from "react";
import { useState } from "react";
import { AiOutlineFileGif } from "react-icons/ai";
import { ImFilePicture } from "react-icons/im";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { usePosts } from "../../contexts/PostsProvider";

import { Post } from "../../components/Post/Post";
import { useAuth } from "../../contexts/AuthProvider";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider";

export const Home = () => {
  const { setSortBy, sortBy, allPosts, createPost } = usePosts();
  const { auth } = useAuth();

  const { loggedInUserState } = useLoggedInUser();

  console.log("user", loggedInUserState);

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

  const [postForm, setPostForm] = useState({
    firstName: loggedInUserState?.firstName,
    lastName: loggedInUserState?.lastName,
    content: "",
    mediaUrl: "",
  });
  console.log(postForm);
  const [isAjustmentOn, setIsAdjustmentOn] = useState(false);
  const sortTypes = ["Trending", "Oldest", "Latest"];

  const handleMediaInput = (e) => {
    const file = e.target.files[0];
    if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
      if (file.size < 10 * 1024 * 1024) {
        setPostForm({
          ...postForm,
          mediaUrl: URL.createObjectURL(file),
        });
      } else {
        alert("file must be less than 10mb");
      }
    } else {
      alert("file must be a Video (MP4/MOV) or an Image (JPEG/PNG)");
    }
  };

  return (
    <main className="feed">
      <form
        onSubmit={(e) => {
          createPost(e, postForm, auth.token);
        }}
        className="new-post-container"
      >
        <div className="img-container">
          <img src={loggedInUserState.avatarURL} />
        </div>
        <div className="input-container">
          <input
            onChange={(e) =>
              setPostForm({ ...postForm, content: e.target.value })
            }
            value={postForm.content}
            placeholder="What is happening?!"
          />
          <div className="input-btn-container">
            <div className="toolbar-container">
              <label htmlFor="media">
                {" "}
                <ImFilePicture />
              </label>
              <input onChange={handleMediaInput} type="file" id="media" />

              <AiOutlineFileGif />
            </div>
            <div className="post-btn-container">
              <input type="submit" value="Post" />
            </div>
          </div>
        </div>
      </form>

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
                <li
                  className={type === sortBy ? "isActive" : ""}
                  onClick={() => {
                    setSortBy(type);
                    setIsAdjustmentOn(!isAjustmentOn);
                  }}
                  key={type}
                >
                  {type}
                </li>
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
