import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Chirag",
    lastName: "Taluja",
    username: "chiragtaluja",
    password: "chiragtaluja",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: "",
    bio: "",
    bookmarks: "",
    website: "",
    following: [
      {
        _id: uuid(),
        firstName: "Paras",
        lastName: "Rishi",
        userName: "parasrishi",
        avatarURL: "",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Paras",
        lastName: "Rishi",
        userName: "parasrishi",
        avatarURL: "",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Paras",
    lastName: "Rishi",
    username: "parasrishi",
    password: "parasrishi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: "",
    bio: "",
    bookmarks: "",
    website: "",
    following: [
      {
        _id: uuid(),
        firstName: "Chirag",
        lastName: "Taluja",
        userName: "chiragtaluja",
        avatarURL: "",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Chirag",
        lastName: "Taluja",
        userName: "chiragtaluja",
        avatarURL: "",
      },
    ],
  },
];
