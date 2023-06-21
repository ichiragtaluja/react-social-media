import "./EditPostForm.css";
import React from "react";

import { IoMdClose } from "react-icons/io";
import { AiOutlineFileGif } from "react-icons/ai";
import { ImFilePicture } from "react-icons/im";
import { useState, useEffect } from "react";
import { BsEmojiSmile } from "react-icons/bs";

import "../CreatePostForm/CreatePostForm.css";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider";
import { useAuth } from "../../contexts/AuthProvider";
import { usePosts } from "../../contexts/PostsProvider";

export const EditPostForm = ({
  setIsEditPostClicked,
  className,
  post,
  setActionMenu,
}) => {
  const { editPost } = usePosts();
  const { auth } = useAuth();
  const { loggedInUserState } = useLoggedInUser();

  const [showEmojiModal, setShowEmojiModal] = useState(false);

  const [postEditForm, setPostEditForm] = useState({
    content: post?.content,
    mediaUrl: post?.mediaUrl,
    type: "video",
  });

  console.log("form", postEditForm);
  const emojis = [
    "😀",
    "😁",
    "😅",
    "😂",
    "😇",
    "😎",
    "😍",
    "🤩",
    "🥺",
    "😘",
    "😛",
    "🥳",
    "🤣",
    "👻",
    "👍🏻",
    "😤",
    "🥶",
    "🤭",
    "🫣",
    "🤬",
    "🫠",
    "🫤",
    "🤯",
  ];

  const handleEditMediaInput = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file?.type?.startsWith("image/") || file?.type?.startsWith("video/")) {
      if (file.size < 10 * 1024 * 1024) {
        setPostEditForm((prev) => ({
          ...prev,
          mediaUrl: URL.createObjectURL(file),
          type: file?.type?.startsWith("image/") ? "image" : "video",
        }));
      } else {
        alert("file must be less than 10mb");
      }
    } else {
      alert("file must be a Video (MP4/MOV) or an Image (JPEG/PNG)");
    }
  };

  useEffect(() => {
    setPostEditForm((prev) => ({
      ...prev,
      content: post?.content,
      mediaUrl: post?.mediaUrl,
      type: post?.type || "video",
    }));
  }, [loggedInUserState]);

  return (
    <>
      <form
        onSubmit={(e) => {
          editPost(e, post._id, postEditForm, auth.token);
          setPostEditForm({
            content: "",
            mediaUrl: "",
          });
          setIsEditPostClicked(false);
          setActionMenu(false);
        }}
        className={`new-post-container ${className}`}
      >
        <div className="img-container">
          <img
            src={loggedInUserState?.avatarURL}
            alt={loggedInUserState?.firstName}
          />
        </div>
        <div className="input-container">
          <div className="text-content-container">
            <textarea
              onChange={(e) =>
                setPostEditForm((prev) => ({
                  ...prev,
                  content: e.target.value,
                }))
              }
              value={postEditForm.content}
              placeholder="What is happening?!"
            />
            {setIsEditPostClicked && (
              <IoMdClose
                onClick={() => {
                  setIsEditPostClicked && setIsEditPostClicked(false);
                }}
                className="close-create-post-modal"
              />
            )}
          </div>
          {postEditForm?.mediaUrl && postEditForm?.type !== "image" && (
            <div className="media-container">
              <video muted loop>
                <source src={postEditForm?.mediaUrl} />
              </video>
              <IoMdClose
                onClick={() => {
                  setPostEditForm({ ...postEditForm, mediaUrl: "" });
                }}
                className="close-media"
              />
            </div>
          )}
          {postEditForm?.mediaUrl && postEditForm.type === "image" && (
            <div className="media-container">
              <img src={postEditForm?.mediaUrl} alt="" />
              <IoMdClose
                onClick={() => {
                  setPostEditForm({ ...postEditForm, mediaUrl: "" });
                }}
                className="close-media"
              />
            </div>
          )}
          <div className="input-btn-container">
            <div className="toolbar-container">
              <label htmlFor="media">
                {" "}
                <ImFilePicture className="file-icon" />
              </label>
              <input onChange={handleEditMediaInput} type="file" id="media" />

              <BsEmojiSmile
                className="smily-emoji "
                onClick={() => setShowEmojiModal(true)}
              />
            </div>
            <div className="post-btn-container">
              <input
                disabled={!postEditForm.content && !postEditForm.mediaUrl}
                type="submit"
                value="Update"
              />
            </div>
          </div>
        </div>
      </form>
      {showEmojiModal && (
        <div className="emoji-modal-container">
          <div className="modal-emoji-body">
            <div className="emoji-body-container">
              <IoMdClose
                onClick={() => {
                  setShowEmojiModal(false);
                }}
                className="close-emoji-model"
              />
              <div clasName="emojis">
                {emojis.map((emoji) => (
                  <span
                    className="smily-emoji"
                    onClick={(e) => {
                      setPostEditForm((prev) => ({
                        ...prev,
                        content: prev.content + e.target.innerText,
                      }));
                      setShowEmojiModal(false);
                    }}
                    key={emoji}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
