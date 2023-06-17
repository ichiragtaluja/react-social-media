import "./Comment.css";

import React from "react";
import { usePosts } from "../../../../contexts/PostsProvider";
import { useState } from "react";
import { useAuth } from "../../../../contexts/AuthProvider";

export const Comment = ({ comment, post }) => {
  const { _id, avatarURL, username, firstName, lastName, text } = comment;
  const { deleteComment, editComment } = usePosts();
  const [showCommentToolbar, setShowCommentToolbar] = useState(false);

  const [isEditComment, setIsEditComment] = useState(false);
  const { auth } = useAuth();

  const [userComment, setUserComment] = useState({ text: text });

  return (
    <div className="comment-card">
      <img src={avatarURL} alt={firstName} />
      <div className="comment-main-section">
        <div className="username-container">
          <p className="name">
            {firstName} {lastName}
          </p>
          <span className="username">@{username}</span>
          {username === auth.username && (
            <div className="comment-toolbar">
              <button
                onClick={() => setShowCommentToolbar(!showCommentToolbar)}
              >
                Edit
              </button>
              {showCommentToolbar && (
                <div className="comment-toolbar-menu-container">
                  <p
                    onClick={() => {
                      setIsEditComment(true);
                      setShowCommentToolbar(false);
                    }}
                  >
                    Edit
                  </p>
                  <p
                    onClick={() => {
                      deleteComment(post?._id, _id, auth.token);
                    }}
                  >
                    Delete
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
        {!isEditComment ? (
          <div>{text}</div>
        ) : (
          <div className="edit-comment-container">
            <input
              onChange={(e) => setUserComment({ text: e.target.value })}
              value={userComment.text}
            />
            <button
              onClick={() => {
                editComment(post._id, _id, userComment, auth.token);
                setIsEditComment(false);
              }}
            >
              Update
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
