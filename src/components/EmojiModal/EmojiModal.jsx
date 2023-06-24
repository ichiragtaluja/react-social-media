import React from "react";
import { IoMdClose } from "../../utils/icons";

export const EmojiModal = ({
  showEmojiModal,
  setShowEmojiModal,
  setPostForm,
}) => {
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
  return (
    showEmojiModal && (

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
    )
  );
};
