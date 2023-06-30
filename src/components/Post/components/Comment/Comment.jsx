import "./Comment.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { RxDotsHorizontal } from "react-icons/rx";

import { usePosts } from "../../../../contexts/PostsProvider";
import { useAuth } from "../../../../contexts/AuthProvider";
import { useUser } from "../../../../contexts/UserProvider";
import { getTimeDifference } from "../../../../utils/date";

export const Comment = ({ comment, post }) => {
  const navigate = useNavigate();
  const { userState } = useUser();
  const { _id, avatarURL, username, firstName, lastName, text, createdAt } =
    comment;
  const { deleteComment, editComment } = usePosts();
  const [showCommentToolbar, setShowCommentToolbar] = useState(false);

  const [isEditComment, setIsEditComment] = useState(false);
  const { auth } = useAuth();

  const [userComment, setUserComment] = useState({ text: text });

  const userDetails = userState?.allUsers?.find(
    (user) => user?.username === username
  );

  return (
    <div className="comment-card">
      <div>
        <img
          onClick={() => navigate(`/profile/${username}`)}
          className="comment-user-image"
          src={userDetails?.avatarURL}
          alt={userDetails?.firstName}
        />
      </div>

      <div className="comment-main-section">
        <div className="username-container">
          <p onClick={() => navigate(`/profile/${username}`)} className="name">
            {firstName} {lastName}
          </p>
          <span
            onClick={() => navigate(`/profile/${username}`)}
            className="username"
          >
            @{username}
          </span>{" "}
          <span className="date"> {getTimeDifference(createdAt)}</span>
          {username === auth?.username && (
            <div className="comment-toolbar">
              <div
                className="edit"
                onClick={() => setShowCommentToolbar(!showCommentToolbar)}
              >
                <RxDotsHorizontal className="three-dots-icon" />
              </div>
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
          <div className="user-comment">{text}</div>
        ) : (
          <div className="edit-comment-container">
            <textarea
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
