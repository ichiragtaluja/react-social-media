import "./CreatePostForm.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IoMdClose, VscSmiley, ImFilePicture } from "../../utils/icons";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider";
import { useAuth } from "../../contexts/AuthProvider";
import { usePosts } from "../../contexts/PostsProvider";
import { EmojiModal } from "../EmojiModal/EmojiModal";

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
          e.preventDefault();
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
              <label htmlFor="mediaForCreate">
                {" "}
                <ImFilePicture className="file-icon" />
              </label>
              <input
                onChange={handleMediaInput}
                type="file"
                id="mediaForCreate"
              />

              <VscSmiley
                className="smily-emoji"
                onClick={() => setShowEmojiModal(true)}
              />
            </div>
            <div className="post-btn-container">
              <button
                disabled={!postForm.content && !postForm.mediaUrl}
                type="submit"
              >
                Quack
              </button>
            </div>
          </div>
        </div>
      </form>
      <EmojiModal
        showEmojiModal={showEmojiModal}
        setShowEmojiModal={setShowEmojiModal}
        setPostForm={setPostForm}
      />
    </>
  );
};
