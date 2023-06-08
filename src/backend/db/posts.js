import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Nice weather",
    mediaUrl: "",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Paras",
          lastName: "Rishi",
          userName: "parasrishi",
          avatarURL: "",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Paras",
        lastName: "Rishi",
        userName: "parasrishi",
        avatarURL: "",
        text: "",
        votes: { upvotedBy: [], downvotedBy: [] },
        createdAt: "",
      },
    ],
    username: "chiragtaluja",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "",
    mediaUrl: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "parasrishi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
