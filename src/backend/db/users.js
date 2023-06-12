import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  // ------1st user---------
  {
    _id: uuid(),
    firstName: "Katherine",
    lastName: "Brundage",
    username: "Katherine",
    password: "Katherine",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
    bio: "Proud cat lover. Meow aficionado. 🐱😻",
    bookmarks: [],
    website: "https://dadsneakers.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Neha",
        lastName: "Dung",
        username: "Neha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
      },
      {
        _id: uuid(),
        firstName: "Josh",
        lastName: "Tate",
        username: "Josh",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
      },
    ],

    followers: [
      {
        _id: uuid(),
        firstName: "Neha",
        lastName: "Dung",
        username: "Neha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
      },
      {
        _id: uuid(),
        firstName: "Josh",
        lastName: "Tate",
        username: "Josh",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
      },
    ],
  },

  //--------2nd user------
  {
    _id: uuid(),
    firstName: "Beverly",
    lastName: "Myles",
    username: "Beverly",
    password: "Beverly",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
    bio: "Makeup enthusiast with a passion for enhancing natural beauty. Let's paint the world with color and confidence! 💄🎨 #MakeupLover",
    bookmarks: [],
    website: "https://dadsneakers.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Malik",
        lastName: "Williams",
        username: "Malik",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
      },
      {
        _id: uuid(),
        firstName: "Neha",
        lastName: "Dung",
        username: "Neha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Malik",
        lastName: "Williams",
        username: "Malik",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
      },
      {
        _id: uuid(),
        firstName: "Neha",
        lastName: "Dung",
        username: "Neha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
      },
    ],
  },

  //-----------3rd user--------------
  {
    _id: uuid(),
    firstName: "Malik",
    lastName: "Williams",
    username: "Malik",
    password: "Malik",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
    bio: "Sports fanatic, fueled by adrenaline and a relentless competitive spirit. 🏆⚽🏀",
    bookmarks: [],
    website: "https://dadsneakers.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Uday",
        lastName: "Chopra",
        username: "Uday",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user6_ahdwkm.jpg",
      },
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Brooks",
        username: "Laura",
        password: "Laura",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
      },
      {
        _id: uuid(),
        firstName: "Neha",
        lastName: "Dung",
        username: "Neha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Uday",
        lastName: "Chopra",
        username: "Uday",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user6_ahdwkm.jpg",
      },
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Brooks",
        username: "Laura",
        password: "Laura",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
      },
    ],
  },

  //-----------4th user--------------
  {
    _id: uuid(),
    firstName: "Neha",
    lastName: "Dung",
    username: "Neha",
    password: "Neha",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
    bio: "Dancing soul with rhythm in my veins. Embracing melodies through movement. 🎶💃 #DanceLover",
    bookmarks: [],
    website: "https://dadsneakers.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Brooks",
        username: "Laura",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
      },
      {
        _id: uuid(),
        firstName: "Parmeet",
        lastName: "Singh",
        username: "Parmeet",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user8_mndclq.jpg",
      },
      {
        _id: uuid(),
        firstName: "Josh",
        lastName: "Tate",
        username: "Josh",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
      },
      {
        _id: uuid(),
        firstName: "Beverly",
        lastName: "Myles",
        username: "Beverly",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Brooks",
        username: "Laura",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
      },
      {
        _id: uuid(),
        firstName: "Parmeet",
        lastName: "Singh",
        username: "Parmeet",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user8_mndclq.jpg",
      },
      {
        _id: uuid(),
        firstName: "Aahmya",
        lastName: "Arora",
        username: "Aahmya",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user5_jxwms5.jpg",
      },
    ],
  },
  //-----------5th user--------------
  {
    _id: uuid(),
    firstName: "Aahmya",
    lastName: "Arora",
    username: "Aahmya",
    password: "Aahmya",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user5_jxwms5.jpg",
    bio: "Yoga enthusiast seeking balance and serenity through mindful movement and inner harmony. 🧘‍♀️✨",
    bookmarks: [],
    website: "https://dadsneakers.netlify.app/",
    following: [],
    followers: [
      {
        _id: uuid(),
        firstName: "Uday",
        lastName: "Chopra",
        username: "Uday",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user6_ahdwkm.jpg",
      },
      {
        _id: uuid(),
        firstName: "Beverly",
        lastName: "Myles",
        username: "Beverly",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
      },
    ],
  },
  //-----------6th user--------------
  {
    _id: uuid(),
    firstName: "Uday",
    lastName: "Chopra",
    username: "Uday",
    password: "Uday",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user6_ahdwkm.jpg",
    bio: "Gym addict, fueled by iron and determination. Chasing gains and pushing limits. 💪🏋️‍♀️ #FitnessJunkie",
    bookmarks: [],
    website: "https://dadsneakers.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Hui",
        lastName: "Liao",
        username: "Hui",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251366/socialMedia/profilePictures/user9_txopcr.jpg",
      },
      {
        _id: uuid(),
        firstName: "Katherine",
        lastName: "Brundage",
        username: "Katherine",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Hui",
        lastName: "Liao",
        username: "Hui",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251366/socialMedia/profilePictures/user9_txopcr.jpg",
      },
      {
        _id: uuid(),
        firstName: "Katherine",
        lastName: "Brundage",
        username: "Katherine",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
      },
    ],
  },
  //-----------7th user--------------
  {
    _id: uuid(),
    firstName: "Laura",
    lastName: "Brooks",
    username: "Laura",
    password: "Laura",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
    bio: "Nature lover, finding solace in the wilderness. Exploring, preserving, and cherishing Earth's beauty. 🌿🌍 #NatureEnthusiast",
    bookmarks: [],
    website: "https://dadsneakers.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Josh",
        lastName: "Tate",
        username: "Josh",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
      },
      {
        _id: uuid(),
        firstName: "Malik",
        lastName: "Williams",
        username: "Malik",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
      },
      {
        _id: uuid(),
        firstName: "Katherine",
        lastName: "Brundage",
        username: "Katherine",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Josh",
        lastName: "Tate",
        username: "Josh",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
      },
      {
        _id: uuid(),
        firstName: "Malik",
        lastName: "Williams",
        username: "Malik",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
      },
    ],
  },
  //-----------8th user--------------
  {
    _id: uuid(),
    firstName: "Parmeet",
    lastName: "Singh",
    username: "Parmeet",
    password: "Parmeet",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user8_mndclq.jpg",
    bio: "Foodie at heart, savoring flavors from around the world. Culinary adventures and gastronomic delights. 🍽️🌍 #FoodLover",
    bookmarks: [],
    website: "https://dadsneakers.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Brooks",
        username: "Laura",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Brooks",
        username: "Laura",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
      },
    ],
  },
  //-----------9th user--------------
  {
    _id: uuid(),
    firstName: "Hui",
    lastName: "Liao",
    username: "Hui",
    password: "Hui",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251366/socialMedia/profilePictures/user9_txopcr.jpg",
    bio: "Soulful seeker, spreading light and love.",
    bookmarks: [],
    website: "https://dadsneakers.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Katherine",
        lastName: "Brundage",
        username: "Katherine",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Katherine",
        lastName: "Brundage",
        username: "Katherine",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
      },
      {
        _id: uuid(),
        firstName: "Malik",
        lastName: "Williams",
        username: "Malik",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
      },
    ],
  },
  //-----------10th user--------------
  {
    _id: uuid(),
    firstName: "Josh",
    lastName: "Tate",
    username: "Josh",
    password: "Josh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
    bio: "Adventurer. Risk-taker. Embracing life's wild journey.",
    bookmarks: [],
    website: "https://dadsneakers.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Malik",
        lastName: "Williams",
        username: "Malik",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Malik",
        lastName: "Williams",
        username: "Malik",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
      },

      {
        _id: uuid(),
        firstName: "Uday",
        lastName: "Chopra",
        username: "Uday",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user6_ahdwkm.jpg",
      },
      {
        _id: uuid(),
        firstName: "Katherine",
        lastName: "Brundage",
        username: "Katherine",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
      },
    ],
  },
];
