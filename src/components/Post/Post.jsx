import "./Post.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AttentionSeeker,
  Slide,
  Flip,
  Fade,
  JackInTheBox,
  Zoom,
} from "react-awesome-reveal";
import {
  FaBookmark,
  RiHeart3Fill,
  RiHeart3Line,
  FaRegBookmark,
  FaRegComment,
  RxDotsHorizontal,
  RxCross2,
  FiShare2,
} from "../../utils/icons";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider";
import { useAuth } from "../../contexts/AuthProvider";
import { usePosts } from "../../contexts/PostsProvider";
import { EditPostForm } from "../EditPostForm/EditPostForm";
import { useUser } from "../../contexts/UserProvider";
import { Comment } from "./components/Comment/Comment";
import { getTimeDifference } from "../../utils/date";
import { LikesModal } from "./components/LikesModal/LikesModal";
import { toast } from "react-hot-toast";

export const Post = ({ post }) => {
  const navigate = useNavigate();
  const [isEditPostClicked, setIsEditPostClicked] = useState(false);
  const [showLikesModal, setShowLikesModal] = useState(false);
  const [actionMenu, setActionMenu] = useState(false);
  const { likePost, dislikePost, deletePost } = usePosts();
  const [commentData, setCommentData] = useState({ text: "" });
  const [showComments, setShowComments] = useState(false);
  const { addBookmark, removeBookmark, loggedInUserState } = useLoggedInUser();
  const { auth } = useAuth();
  const { addComment } = usePosts();
  const { userState } = useUser();

  const isBookmarkedAlready = loggedInUserState.bookmarks?.find(
    (postId) => postId === post?._id
  );

  const userDetails = userState?.allUsers?.find(
    (user) => user?.username === post?.username
  );

  const loggedInUser = userState?.allUsers?.find(
    (user) => user?.username === auth?.username
  );

  const isFollowing = (user) =>
    loggedInUser?.following?.find(
      ({ username }) => username === user?.username
    );

  const isLikedAlready = post?.likes.likedBy.find(
    (user) => user.username === loggedInUserState.username
  );

  const copyHandler = (link) => {
    navigator.clipboard.writeText(link);
    toast.success("Link successfully copied");
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
                onClick={(e) => {
                  e.stopPropagation();
                  setActionMenu(!actionMenu);
                }}
              >
                <RxDotsHorizontal className="three-dots-icon" />
              </div>
            )}
            {actionMenu && (
              <div className="action-menu-container">
                <AttentionSeeker effect="headShake">
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEditPostClicked(!isEditPostClicked);
                      setActionMenu(false);
                    }}
                  >
                    Edit Post
                  </p>
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                      deletePost(post?._id, auth.token);
                      setActionMenu(false);
                    }}
                  >
                    Delete Post
                  </p>
                </AttentionSeeker>
              </div>
            )}
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
              <span className="number-of-comments">
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
              <FiShare2
                className="share-icon"
                onClick={() =>
                  copyHandler(
                    `https://quackalot.netlify.app/post-detail/${post?.id}`
                  )
                }
              />
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
                <LikesModal post={post} isFollowing={isFollowing} />
              </div>
            </div>
          )}
        </div>

        {showComments && (
          <div className="comments-section-container">
            {/* <Slide duration={1000} cascade> */}
            <div className="comments-input-section-container">
              <div className="user-profile-img-container">
                <img
                  src={loggedInUser?.avatarURL}
                  alt={loggedInUser?.firstName}
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

            {/* </Slide> */}
          </div>
        )}
      </div>
    </div>
  );
};
