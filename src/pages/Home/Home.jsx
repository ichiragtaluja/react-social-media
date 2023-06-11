import "./Home.css";
import React from "react";
import { useState } from "react";
import { AiOutlineFileGif } from "react-icons/ai";
import { ImFilePicture } from "react-icons/im";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { usePosts } from "../../contexts/PostsProvider";

import { Post } from "../../components/Post/Post";

export const Home = () => {
  const { setSortBy, sortBy, allPosts } = usePosts();

  const [isAjustmentOn, setIsAdjustmentOn] = useState(false);
  const sortTypes = ["Trending", "Oldest", "Latest"];

  return (
    <main className="feed">
      <div className="new-post-container">
        <div className="img-container">
          <img />
        </div>
        <div className="input-container">
          <input />
          <div className="input-btn-container">
            <div className="toolbar-container">
              <ImFilePicture />
              <AiOutlineFileGif />
            </div>
            <div className="post-btn-container">
              <button>Post</button>
            </div>
          </div>
        </div>
      </div>

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
        {allPosts?.map((post) => {
          return <Post post={post} />;
        })}
      </div>
    </main>
  );
};
