import "./Post.css";
import { FaRegComment } from "react-icons/fa";
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { useState } from "react";
import React from "react";
import { RxDotsHorizontal } from "react-icons/rx";

import { useLoggedInUser } from "../../contexts/LoggedInUserProvider";
import { useAuth } from "../../contexts/AuthProvider";
import { usePosts } from "../../contexts/PostsProvider";
import { useNavigate } from "react-router-dom";
import { EditPostForm } from "../EditPostForm/EditPostForm";
import { useUser } from "../../contexts/UserProvider";
import { RxCross2 } from "react-icons/rx";
import { Comment } from "./components/Comment/Comment";

import { Slide, Fade, Zoom, Bounce } from "react-awesome-reveal";

export const Post = ({ post }) => {
  const navigate = useNavigate();

  const [isEditPostClicked, setIsEditPostClicked] = useState(false);

  const [showLikesModal, setShowLikesModal] = useState(false);

  const [actionMenu, setActionMenu] = useState(false);

  const { likePost, dislikePost, deletePost } = usePosts();

  const [commentData, setCommentData] = useState({ text: "" });

  const [showComments, setShowComments] = useState(false);

  const {
    addBookmark,
    removeBookmark,
    loggedInUserState,
    followUser,
    unfollowUser,
  } = useLoggedInUser();

  const { auth } = useAuth();

  const { addComment } = usePosts();

  const { userState } = useUser();

  const isBookmarkedAlready = loggedInUserState.bookmarks?.find(
    (postId) => postId === post?._id
  );

  const userDetails = userState?.allUsers?.find(
    (user) => user?.username === post?.username
  );

  const isFollowing = (user) =>
    userDetails?.following?.find(({ username }) => username === user?.username);

  const followUnfollowHandler = (e, user) => {
    e.stopPropagation();
    const userFromAllUsers = userState?.allUsers?.find(
      ({ username }) => username === user?.username
    );
    !isFollowing(user)
      ? followUser(userFromAllUsers?._id, auth.token)
      : unfollowUser(userFromAllUsers?._id, auth.token);
  };

  const isLikedAlready = post?.likes.likedBy.find(
    (user) => user.username === loggedInUserState.username
  );
  //to be done aftr site is hosted
  const copyHandler = (link) => {
    navigator.clipboard.writeText(link);
  };

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
            navigate(`/profile/${post?.username}`);
          }}
          src={userDetails?.avatarURL}
          alt={userDetails?.firstName}
        />{" "}
      </div>

      <div className="post-card-content">
        <div className="name-container">
          <div
            onClick={() => {
              navigate(`/profile/${post?.username}`);
            }}
            className="username-container"
          >
            {/* <Slide direction="up"> */}
            <span
              onClick={() => {
                navigate(`/profile/${post?.username}`);
              }}
              className="name"
            >
              {post?.firstName} {post?.lastName}
            </span>{" "}
            <span
              onClick={() => {
                navigate(`/profile/${post?.username}`);
              }}
              className="username"
            >
              {" "}
              {`@${post?.username}`}
            </span>
            {"  "}
            <span
              onClick={() => {
                navigate(`/profile/${post?.username}`);
              }}
              className="date"
            >
              {getTimeDifference(post?.createdAt)}
            </span>
            {loggedInUserState.username === post?.username && (
              <div
                className="edit"
                onClick={() => {
                  setActionMenu(!actionMenu);
                }}
              >
                <RxDotsHorizontal className="three-dots-icon" />
              </div>
            )}
            {actionMenu && (
              <div className="action-menu-container">
                <p
                  onClick={() => {
                    setIsEditPostClicked(!isEditPostClicked);
                    setActionMenu(false);
                  }}
                >
                  Edit Post
                </p>
                <p
                  onClick={() => {
                    deletePost(post?._id, auth.token);
                    setActionMenu(false);
                  }}
                >
                  Delete Post
                </p>
              </div>
            )}
            {/* </Slide> */}
          </div>
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
          <p>{post?.content}</p>
        </div>

        <div
          onClick={() => navigate(`/post-detail/${post?.id}`)}
          className="media"
        >
          {post?.mediaUrl && post.type !== "image" && (
            <video controls autoPlay muted loop>
              <source src={post?.mediaUrl} />
            </video>
          )}
          {post?.mediaUrl && post?.type === "image" && (
            <img src={post?.mediaUrl} alt="" />
          )}
        </div>

        <div className="post-actions-container">
          <Slide
            fraction="0"
            duration="350"
            direction="up"
            cascade
            damping={0.3}
          >
            <div
              onClick={() => setShowComments(!showComments)}
              className="comments-container"
            >
              {/* <Slide cascade direction="up"> */}
              <FaRegComment className="comment-icon" />
              {/* </Slide> */}
              <span>
                <Slide direction="up">{post?.comments?.length}</Slide>
              </span>
            </div>
            <div className="comments-container">
              {/* <Slide direction="up"> */}
              {!isLikedAlready ? (
                <RiHeart3Line
                  className="like-icon"
                  onClick={() => likePost(post?._id, auth.token)}
                />
              ) : (
                <RiHeart3Fill
                  className="like-icon like-done-icon"
                  onClick={() => dislikePost(post?._id, auth.token)}
                />
              )}
              {/* </Slide> */}
              <span
                onClick={() => {
                  setShowLikesModal(true);
                }}
              >
                <Slide direction="up">{post?.likes?.likeCount}</Slide>
              </span>
            </div>
            <div className="comments-container">
              <FiShare2 className="share-icon" onClick={() => {}} />
              <span>{}</span>
            </div>
            <div className="comments-container">
              {!isBookmarkedAlready ? (
                <FaRegBookmark
                  className="bookmark-icon"
                  onClick={() => addBookmark(post?._id, auth.token)}
                />
              ) : (
                <FaBookmark
                  className="bookmark-icon bookmark-done-icon"
                  onClick={() => removeBookmark(post?._id, auth.token)}
                />
              )}
              <span>{}</span>
            </div>
          </Slide>
        </div>
        <div className="likes-details-container">
          {/* <p
            className="number-of-likes"
            onClick={() => {
              setShowLikesModal(true);
            }}
          >
            {post?.likes?.likeCount}{" "}
            <span>{`Like${post?.likes?.likeCount === 1 ? "" : "s"}`}</span>
          </p> */}
          {showLikesModal && (
            <div className="like-modal">
              <div className="likes-content">
                <div className="likes-header">
                  <h2>Liked By</h2>
                  <RxCross2
                    className="close-likes-icon"
                    onClick={() => {
                      setShowLikesModal(false);
                    }}
                  />
                </div>
                {post?.likes?.likedBy.map((user) => (
                  <div
                    onClick={() => {
                      navigate(`/profile/${user.username}`);
                    }}
                    key={user?._id}
                    className="discover-user-card"
                  >
                    <div
                      onClick={() => {
                        navigate(`/profile/${user.username}`);
                      }}
                      className="discover-user-img-container"
                    >
                      <img src={user?.avatarURL} alt={user?.firstName} />
                    </div>
                    <div className="user-name-username-container">
                      <p className="name">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p className="username">@{user?.username}</p>
                    </div>
                    <div className="follow-container">
                      {user?.username !== auth?.username && (
                        <button onClick={(e) => followUnfollowHandler(e, user)}>
                          {!isFollowing(user) ? "Follow" : "Following"}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {showComments && (
          <div className="comments-section-container">
            <div className="comments-input-section-container">
              <div className="user-profile-img-container">
                <img
                  src={userDetails?.avatarURL}
                  alt={userDetails?.firstName}
                />
              </div>

              <div className="comments-textarea-btn-container">
                <textarea
                  placeholder="Quack your reply!"
                  onChange={(e) => setCommentData({ text: e.target.value })}
                  value={commentData?.text}
                  type="text"
                />
                <div className="comment-button-container">
                  <button
                    disabled={!commentData?.text}
                    onClick={() => {
                      addComment(post._id, commentData, auth.token);
                      setCommentData({ text: "" });
                    }}
                  >
                    Reply
                  </button>
                </div>
              </div>
            </div>

            <div className="all-comments-container">
              {post?.comments
                ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                ?.map((comment) => (
                  <Comment key={comment?._id} comment={comment} post={post} />
                ))}
            </div>
          </div>
        )}
      </div>
  
    </div>
  );
};
