import "./EditPostForm.css";
import React from "react";

import { IoMdClose } from "react-icons/io";
import { AiOutlineFileGif } from "react-icons/ai";
import { ImFilePicture } from "react-icons/im";
import { useState, useEffect } from "react";
import {BsEmojiSmile} from "react-icons/bs"

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

  const [postForm, setPostForm] = useState({
    content: post?.content,
    mediaUrl: post?.mediaUrl,
    type: "video",
  });

  console.log("form", postForm);
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

  const handleMediaInput = (e) => {
    const file = e.target.files[0];
    if (file?.type.startsWith("image/") || file.type.startsWith("video/")) {
      if (file.size < 10 * 1024 * 1024) {
        setPostForm((prev) => ({
          ...prev,
          mediaUrl: URL.createObjectURL(file),
          type: file?.type.startsWith("image/") ? "image" : "video",
        }));
      } else {
        alert("file must be less than 10mb");
      }
    } else {
      alert("file must be a Video (MP4/MOV) or an Image (JPEG/PNG)");
    }
  };

  useEffect(() => {
    setPostForm((prev) => ({
      ...prev,
      content: post?.content,
      mediaUrl: post?.mediaUrl,
      type: post.type || "video",
    }));
  }, [loggedInUserState]);

  return (
    <>
      <form
        onSubmit={(e) => {
          editPost(e, post._id, postForm, auth.token);
          setPostForm({
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
            src={loggedInUserState.avatarURL}
            alt={loggedInUserState.firstName}
          />
        </div>
        <div className="input-container">
          <div className="text-content-container">
            <textarea
              onChange={(e) =>
                setPostForm((prev) => ({ ...prev, content: e.target.value }))
              }
              value={postForm.content}
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
          {postForm?.mediaUrl && postForm.type !== "image" && (
            <div className="media-container">
              <video muted loop>
                <source src={postForm?.mediaUrl} />
              </video>
              <IoMdClose
                onClick={() => {
                  setPostForm({ ...postForm, mediaUrl: "" });
                }}
                className="close-media"
              />
            </div>
          )}
          {postForm?.mediaUrl && postForm.type === "image" && (
            <div className="media-container">
              <img src={postForm?.mediaUrl} alt="" />
              <IoMdClose
                onClick={() => {
                  setPostForm({ ...postForm, mediaUrl: "" });
                }}
                className="close-media"
              />
            </div>
          )}
          <div className="input-btn-container">
            <div className="toolbar-container">
              <label htmlFor="media">
                {" "}
                <ImFilePicture />
              </label>
              <input onChange={handleMediaInput} type="file" id="media" />

              <BsEmojiSmile onClick={() => setShowEmojiModal(true)} />
            </div>
            <div className="post-btn-container">
              <input
                disabled={!postForm.content && !postForm.mediaUrl}
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
                    onClick={(e) => {
                      setPostForm((prev) => ({
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
