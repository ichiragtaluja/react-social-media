import "./CreatePostForm.css";
import { IoMdClose } from "react-icons/io";
import { AiOutlineFileGif } from "react-icons/ai";
import { ImFilePicture } from "react-icons/im";
import { useState } from "react";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider";
import React from "react";
import { useAuth } from "../../contexts/AuthProvider";
import { usePosts } from "../../contexts/PostsProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CreatePostForm = ({ setIsCreateNewPostClicked, className }) => {
  const { createPost } = usePosts();
  const { auth } = useAuth();
  const { loggedInUserState } = useLoggedInUser();
  const navigate = useNavigate();

  const firstName = loggedInUserState?.firstName;
  const lastName = loggedInUserState?.lastName;
  const [showEmojiModal, setShowEmojiModal] = useState(false);

  const [postForm, setPostForm] = useState({
    firstName,
    lastName,
    content: "",
    mediaUrl: "",
  });
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
    setPostForm((prev) => ({ ...prev, firstName, lastName }));
  }, [loggedInUserState]);
  return (
    <>
      <form
        onSubmit={(e) => {
          createPost(e, postForm, auth.token);
          setPostForm({
            firstName: loggedInUserState?.firstName,
            lastName: loggedInUserState?.lastName,
            content: "",
            mediaUrl: "",
          });
          setIsCreateNewPostClicked && setIsCreateNewPostClicked(false);
        }}
        className={`new-post-container ${className}`}
      >
        <div
          onClick={() => navigate(`/profile/${loggedInUserState?.username}`)}
          className="img-container"
        >
          <img src={loggedInUserState.avatarURL} />
        </div>
        <div className="input-container">
          <div className="text-content-container">
            <input
              onChange={(e) =>
                setPostForm((prev) => ({ ...prev, content: e.target.value }))
              }
              value={postForm.content}
              placeholder="What is happening?!"
            />
            {setIsCreateNewPostClicked && (
              <IoMdClose
                onClick={() => {
                  setIsCreateNewPostClicked && setIsCreateNewPostClicked(false);
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
              <img src={postForm?.mediaUrl} />
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

              <AiOutlineFileGif onClick={() => setShowEmojiModal(true)} />
            </div>
            <div className="post-btn-container">
              <input
                disabled={!postForm.content && !postForm.mediaUrl}
                type="submit"
                value="Post"
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
              <div className="emojis">
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
