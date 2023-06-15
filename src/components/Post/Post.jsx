import "./Post.css";
import { FaRegComment } from "react-icons/fa";
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { useState } from "react";

import React from "react";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider";
import { useAuth } from "../../contexts/AuthProvider";
import { usePosts } from "../../contexts/PostsProvider";
import { useNavigate } from "react-router-dom";
import { EditPostForm } from "../EditPostForm/EditPostForm";

export const Post = ({ post }) => {
  const {
    _id,
    avatarURL,
    firstName,
    lastName,
    username,
    createdAt,
    content,
    mediaUrl,
    comments,
    likes,
  } = post;

  const navigate = useNavigate();
  const [isEditPostClicked, setIsEditPostClicked] = useState(false);

  const [actionMenu, setActionMenu] = useState(false);
  const { likePost, dislikePost, deletePost } = usePosts();

  const { addBookmark, removeBookmark, loggedInUserState } = useLoggedInUser();
  const { auth } = useAuth();

  const isBookmarkedAlready = loggedInUserState.bookmarks.find(
    (postId) => postId === _id
  );

  const isLikedAlready = likes.likedBy.find(
    (user) => user.username === loggedInUserState.username
  );

  const getTimeDifference = (date) => {
    const datePosted = new Date(date);
    const currentTime = new Date();
    const milliseconds = currentTime - datePosted;
    const seconds = Math.floor(milliseconds / 1000);

    if (seconds > 59) {
      const minutes = Math.floor(seconds / 60);
      if (minutes > 59) {
        const hours = Math.floor(minutes / 60);
        if (hours > 23) {
          const days = Math.floor(hours / 24);
          if (days > 30) {
            const months = Math.floor(days / 30);
            if (months > 11) {
              const options = {
                year: "numeric",
                month: "short",
                day: "numeric",
              };
              return datePosted.toLocaleDateString("en-US", options);
            } else {
              return `${months} month${months === 1 ? "" : "s"} ago`;
            }
          } else {
            return `${days} day${days === 1 ? "" : "s"} ago`;
          }
        } else {
          return `${hours} hour${hours === 1 ? "" : "s"} ago`;
        }
      } else {
        return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
      }
    } else {
      return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
    }
  };
  return (
    <div className="post-card">
      <div className="profile-picture-container">
        <img
          onClick={() => {
            navigate(`/profile/${username}`);
          }}
          src={avatarURL}
        />
      </div>
      <div className="post-card-content">
        <div className="name-container">
          <div
            onClick={() => {
              navigate(`/profile/${username}`);
            }}
            className="username-container"
          >
            <span
              onClick={() => {
                navigate(`/profile/${username}`);
              }}
              className="name"
            >
              {firstName} {lastName}
            </span>{" "}
            <span
              onClick={() => {
                navigate(`/profile/${username}`);
              }}
              className="username"
            >{`@${username}`}</span>{" "}
            <span
              onClick={() => {
                navigate(`/profile/${username}`);
              }}
              className="date"
            >
              {getTimeDifference(createdAt)}
            </span>
          </div>
          {loggedInUserState.username === username && (
            <div
              className="edit"
              onClick={() => {
                setActionMenu(!actionMenu);
              }}
            >
              Edit
            </div>
          )}

          {actionMenu && (
            <div className="action-menu-container">
              <p
                onClick={() => {
                  setIsEditPostClicked(!isEditPostClicked);
                }}
              >
                Edit Post
              </p>
              <p
                onClick={() => {
                  deletePost(_id, auth.token);
                }}
              >
                Delete Post
              </p>
            </div>
          )}
        </div>
        {isEditPostClicked && (
          <div className="create-post-modal">
            <EditPostForm
              className="modal-content"
              setIsEditPostClicked={setIsEditPostClicked}
              post={post}
              setActionMenu={setActionMenu}
            />
          </div>
        )}

        <div className="caption-container">
          <p>{content}</p>
        </div>

        <div className="media">
          {mediaUrl && post.type !== "image" && (
            <video muted loop>
              <source src={mediaUrl} />
            </video>
          )}
          {mediaUrl && post.type === "image" && <img src={mediaUrl} />}
        </div>

        <div className="post-actions-container">
          <div className="comments-container">
            <FaRegComment />
            <span>{comments?.length}</span>
          </div>
          <div className="comments-container">
            {!isLikedAlready ? (
              <RiHeart3Line onClick={() => likePost(_id, auth.token)} />
            ) : (
              <RiHeart3Fill onClick={() => dislikePost(_id, auth.token)} />
            )}
            <span>{likes?.likeCount}</span>
          </div>
          <div className="comments-container">
            <BsShare />
            <span>{}</span>
          </div>
          <div className="comments-container">
            {!isBookmarkedAlready ? (
              <FaRegBookmark onClick={() => addBookmark(_id, auth.token)} />
            ) : (
              <FaBookmark onClick={() => removeBookmark(_id, auth.token)} />
            )}
            <span>{}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
