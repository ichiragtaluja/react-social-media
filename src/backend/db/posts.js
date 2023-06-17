import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "A Purrfect Connection.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/video/upload/v1686251469/socialMedia/userPosts/user1/post2_ox1gmv.mp4",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Neha",
          lastName: "Dung",
          username: "Neha",
          avatarURL:
            "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Neha",
        lastName: "Dung",
        username: "Neha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Aww, this is the sweetest picture ever! The bond between humans and cats is truly magical.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Josh",
              lastName: "Tate",
              username: "Josh",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("January 02 2023 09:09:09"),
      },
    ],
    username: "Katherine",
    firstName: "Katherine",
    lastName: "Brundage",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
    createdAt: new Date("January 01 2023 09:09:09"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Paws-itively Adorable: This cute little furball has mastered the art of melting hearts with its irresistible cuteness.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/video/upload/v1686251468/socialMedia/userPosts/user1/post1_dscbrq.mp4",
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Neha",
        lastName: "Dung",
        username: "Neha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "I can't handle the cuteness! Those big eyes and tiny paws are just too precious.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Josh",
              lastName: "Tate",
              username: "Josh",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("April 02 2022 09:09:09"),
      },
      {
        _id: uuid(),
        firstName: "Josh",
        lastName: "Tate",
        username: "Josh",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
        text: "I think my heart just melted! This kitty is so unbelievably cute, I can't even handle it.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Neha",
              lastName: "Dung",
              username: "Neha",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("April 03 2022 09:09:09"),
      },
    ],
    username: "Katherine",
    firstName: "Katherine",
    lastName: "Brundage",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
    createdAt: new Date("March 30 2022 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Meow-mazing Moments: Cherishing every purrfect second with my adorable feline companion.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/video/upload/v1686251468/socialMedia/userPosts/user1/post3_ymty0v.mp4",
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Neha",
        lastName: "Dung",
        username: "Neha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "This cat is a walking bundle of cuteness! I'm instantly smitten by its charm.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Josh",
              lastName: "Tate",
              username: "Josh",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("February 05 2023 09:09:09"),
      },
      {
        _id: uuid(),
        firstName: "Josh",
        lastName: "Tate",
        username: "Josh",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
        text: "I think my heart just melted! This kitty is so unbelievably cute, I can't even handle it.",
        votes: {
          upvotedBy: [
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
          downvotedBy: [],
        },
        createdAt: new Date("February 04 2023 09:09:09"),
      },
    ],
    username: "Katherine",
    firstName: "Katherine",
    lastName: "Brundage",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
    createdAt: new Date("February 3 2023 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Unleashing My Inner Artist: Transforming faces one brushstroke at a time, embracing the magic of makeup.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/video/upload/v1686251510/socialMedia/userPosts/user2/post2_zpdgfa.mp4",
    likes: {
      likeCount: 2,
      likedBy: [
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
          firstName: "Malik",
          lastName: "Williams",
          username: "Malik",
          avatarURL:
            "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Neha",
        lastName: "Dung",
        username: "Neha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Your makeup skills are absolutely mesmerizing! You've created a stunning masterpiece.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Malik",
              lastName: "Williams",
              username: "Malik",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("February 18 2023 09:09:09"),
      },
      {
        _id: uuid(),
        firstName: "Malik",
        lastName: "Williams",
        username: "Malik",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Your makeup game is on point! Flawless and fierce, you're slaying the beauty game.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Neha",
              lastName: "Dung",
              username: "Neha",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("February 17 2023 09:09:09"),
      },
    ],
    username: "Beverly",
    firstName: "Beverly",
    lastName: "Myles",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
    createdAt: new Date("February 16 2023 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Beauty Brushstrokes: Enhancing confidence with a touch of artistry.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/video/upload/v1686251507/socialMedia/userPosts/user2/post1_n8xku3.mp4",
    likes: {
      likeCount: 3,
      likedBy: [
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
          firstName: "Malik",
          lastName: "Williams",
          username: "Malik",
          avatarURL:
            "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
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
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Neha",
        lastName: "Dung",
        username: "Neha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Wow, your makeup skills are goals! Absolutely stunning transformation.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Malik",
              lastName: "Williams",
              username: "Malik",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("December 13 2022 09:09:09"),
      },
      {
        _id: uuid(),
        firstName: "Malik",
        lastName: "Williams",
        username: "Malik",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Flawless face, fierce vibes! Makeup game strong, you look amazing.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Neha",
              lastName: "Dung",
              username: "Neha",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("December 12 2022 09:09:09"),
      },
    ],
    username: "Beverly",
    firstName: "Beverly",
    lastName: "Myles",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
    createdAt: new Date("December 11 2022 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Embracing Beauty's Symphony: Radiating confidence, grace, and the power of self-love.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/video/upload/v1686251506/socialMedia/userPosts/user2/post3_hr2lib.mp4",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Malik",
          lastName: "Williams",
          username: "Malik",
          avatarURL:
            "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Neha",
        lastName: "Dung",
        username: "Neha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "You are a true beauty artist!.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Malik",
              lastName: "Williams",
              username: "Malik",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("May 18 2023 09:09:09"),
      },
      {
        _id: uuid(),
        firstName: "Malik",
        lastName: "Williams",
        username: "Malik",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Albsolutely gorgeous!",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Neha",
              lastName: "Dung",
              username: "Neha",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("May 17 2023 09:09:09"),
      },
    ],
    username: "Beverly",
    firstName: "Beverly",
    lastName: "Myles",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
    createdAt: new Date("May 16 2023 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Dribble, Shoot, Score: The rhythm of the game, the thrill of basketball.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/video/upload/v1686251547/socialMedia/userPosts/user3/post1_d9louv.mp4",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Uday",
          lastName: "Chopra",
          username: "Uday",
          avatarURL:
            "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user6_ahdwkm.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Uday",
        lastName: "Chopra",
        username: "Uday",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user6_ahdwkm.jpg",
        text: "Swish! Your basketball skills are pure fire, amazing shot!",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Malik",
              lastName: "Williams",
              username: "Malik",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("August 18 2023 09:09:09"),
      },
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Brooks",
        username: "Laura",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
        text: "Great Shot",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Malik",
              lastName: "Williams",
              username: "Malik",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("August 17 2022 09:09:09"),
      },
    ],
    username: "Malik",
    firstName: "Malik",
    lastName: "Williams",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
    createdAt: new Date("August 16 2022 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Ballin' with Style: Hoop dreams in motion.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/video/upload/v1686251545/socialMedia/userPosts/user3/post2_tnavyw.mp4",
    likes: {
      likeCount: 1,
      likedBy: [
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
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Brooks",
        username: "Laura",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
        text: "Smooth moves on the court! Your basketball skills are on point.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Malik",
              lastName: "Williams",
              username: "Malik",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("September 17 2022 09:09:09"),
      },
    ],
    username: "Malik",
    firstName: "Malik",
    lastName: "Williams",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
    createdAt: new Date("September 16 2022 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Rhythm in Motion: Expressing through the art of dance.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/video/upload/v1686251584/socialMedia/userPosts/user4/post1_si4o5p.mp4",
    likes: {
      likeCount: 3,
      likedBy: [
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
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Brooks",
        username: "Laura",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
        text: "You've got moves! Your dancing is absolutely captivating. Keep grooving!",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Neha",
              lastName: "Dung",
              username: "Neha",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("March 17 2022 09:09:09"),
      },
    ],
    username: "Neha",
    firstName: "Neha",
    lastName: "Dung",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
    createdAt: new Date("March 16 2023 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Finding Joy in Every Step: Dance like nobody's watching.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/video/upload/v1686251581/socialMedia/userPosts/user4/post2_unkaye.mp4",
    likes: {
      likeCount: 4,
      likedBy: [
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
          firstName: "Uday",
          lastName: "Chopra",
          username: "Uday",
          avatarURL:
            "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user6_ahdwkm.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Brooks",
        username: "Laura",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
        text: "You've got moves! Your dancing is absolutely captivating. Keep grooving!",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Neha",
              lastName: "Dung",
              username: "Neha",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("September 04 2022 09:09:09"),
      },

      {
        _id: uuid(),
        firstName: "Parmeet",
        lastName: "Singh",
        username: "Parmeet",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user8_mndclq.jpg",
        text: "You've got the dance floor on fire! Pure talent.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Neha",
              lastName: "Dung",
              username: "Neha",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("September 03 2022 09:09:09"),
      },
    ],
    username: "Neha",
    firstName: "Neha",
    lastName: "Dung",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
    createdAt: new Date("September 02 2022 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Embracing peace and strength through yoga.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/video/upload/v1686251613/socialMedia/userPosts/user5/post1_nxqgke.mp4",
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Beverly",
        lastName: "Myles",
        username: "Beverly",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Your yoga practice is inspiring and radiates inner tranquility. Namaste.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Aahmya",
              lastName: "Arora",
              username: "Aahmya",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user5_jxwms5.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("May 11 2023 09:09:09"),
      },
    ],
    username: "Aahmya",
    firstName: "Aahmya",
    lastName: "Arora",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user5_jxwms5.jpg",
    createdAt: new Date("May 10 2023 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Flowing in Harmony: Balancing mind, body, and spirit through yoga.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/video/upload/v1686251613/socialMedia/userPosts/user5/post2_qwuhrf.mp4",
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Beverly",
        lastName: "Myles",
        username: "Beverly",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Your yoga practice is inspiring and radiates inner tranquility. Namaste.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Aahmya",
              lastName: "Arora",
              username: "Aahmya",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user5_jxwms5.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("June 11 2023 09:09:09"),
      },

      {
        _id: uuid(),
        firstName: "Uday",
        lastName: "Chopra",
        username: "Uday",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user6_ahdwkm.jpg",
        text: "Yoga vibes on point! Keep rocking those poses.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Aahmya",
              lastName: "Arora",
              username: "Aahmya",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user5_jxwms5.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("June 11 2023 09:09:09"),
      },
    ],
    username: "Aahmya",
    firstName: "Aahmya",
    lastName: "Arora",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user5_jxwms5.jpg",
    createdAt: new Date("June 10 2023 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Building an unstoppable physique through dedication and sweat.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/video/upload/v1686251669/socialMedia/userPosts/user6/post1_lrnfqv.mp4",
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Hui",
        lastName: "Liao",
        username: "hui",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251366/socialMedia/profilePictures/user9_txopcr.jpg",
        text: "Nice guns!",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Uday",
              lastName: "Chopra",
              username: "Uday",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user6_ahdwkm.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("July 11 2022 09:09:09"),
      },
    ],
    username: "Uday",
    firstName: "Uday",
    lastName: "Chopra",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user6_ahdwkm.jpg",
    createdAt: new Date("July 10 2022 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Nature's Artistry: Breathtaking landscapes that whisper serenity to the soul.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/video/upload/v1686251729/socialMedia/userPosts/user7/post3_nechc2.mp4",
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Josh",
        lastName: "Tate",
        username: "Josh",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
        text: "Nature's masterpiece, capturing the essence of pure tranquility and beauty.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Laura",
              lastName: "Brooks",
              username: "Laura",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("October 11 2022 09:09:09"),
      },

      {
        _id: uuid(),
        firstName: "Malik",
        lastName: "Williams",
        username: "Malik",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Paradise.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Laura",
              lastName: "Brooks",
              username: "Laura",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("October 11 2022 09:09:09"),
      },
    ],
    username: "Laura",
    firstName: "Laura",
    lastName: "Brooks",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
    createdAt: new Date("October 10 2022 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Serenity.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/video/upload/v1686251728/socialMedia/userPosts/user7/post2_corwwy.mp4",
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Josh",
        lastName: "Tate",
        username: "Josh",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
        text: "Nature's bliss captured perfectly.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Laura",
              lastName: "Brooks",
              username: "Laura",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("November 11 2022 09:09:09"),
      },

      {
        _id: uuid(),
        firstName: "Malik",
        lastName: "Williams",
        username: "Malik",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Pure beauty in every frame.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Laura",
              lastName: "Brooks",
              username: "Laura",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("November 11 2022 09:09:09"),
      },
    ],
    username: "Laura",
    firstName: "Laura",
    lastName: "Brooks",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
    createdAt: new Date("November 10 2022 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Nurturing the Soul: Connecting with the wonders of Mother Nature.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/video/upload/v1686251726/socialMedia/userPosts/user7/post1_d4qlgo.mp4",
    likes: {
      likeCount: 3,
      likedBy: [
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
          firstName: "Aahmya",
          lastName: "Arora",
          username: "Aahmya",
          avatarURL:
            "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user5_jxwms5.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Josh",
        lastName: "Tate",
        username: "Josh",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
        text: " This photo takes my breath away.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Laura",
              lastName: "Brooks",
              username: "Laura",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("August 17 2022 09:09:09"),
      },

      {
        _id: uuid(),
        firstName: "Malik",
        lastName: "Williams",
        username: "Malik",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "What a stunning sight!",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Laura",
              lastName: "Brooks",
              username: "Laura",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("August 14 2022 09:09:09"),
      },
    ],
    username: "Laura",
    firstName: "Laura",
    lastName: "Brooks",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
    createdAt: new Date("August 15 2022 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: " Indulging in the culinary delights of life.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/video/upload/v1686251765/socialMedia/userPosts/user8/post1_pp4lhs.mp4",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Laura",
          lastName: "Brooks",
          username: "Laura",
          avatarURL:
            "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Brooks",
        username: "Laura",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
        text: "Looks delicious",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Laura",
              lastName: "Brooks",
              username: "Laura",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("August 17 2022 09:09:09"),
      },
    ],
    username: "Parmeet",
    firstName: "Parmeet",
    lastName: "Singh",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251368/socialMedia/profilePictures/user8_mndclq.jpg",
    createdAt: new Date("August 15 2022 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Discovering the wonders that await.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/video/upload/v1686251824/socialMedia/userPosts/user9/post1_xzgbmm.mp4",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Katherine",
          lastName: "Brundage",
          username: "Katherine",
          avatarURL:
            "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Katherine",
        lastName: "Brundage",
        username: "Katherine",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
        text: "Wow, this photo truly captures the essence of the moment. Love it!",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Laura",
              lastName: "Brooks",
              username: "Laura",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("June 10 2023 09:09:09"),
      },
    ],
    username: "Hui",
    firstName: "Hui",
    lastName: "Liao",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251366/socialMedia/profilePictures/user9_txopcr.jpg",
    createdAt: new Date("June 09 2023 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Who wants some apples?",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/video/upload/v1686251866/socialMedia/userPosts/user10/post1_ekdfus.mp4",
    likes: {
      likeCount: 4,
      likedBy: [
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
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Katherine",
        lastName: "Brundage",
        username: "Katherine",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
        text: "Wow, one for me please.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Josh",
              lastName: "Tate",
              username: "Josh",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("July 10 2022 09:09:09"),
      },
    ],
    username: "Josh",
    firstName: "Josh",
    lastName: "Tate",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
    createdAt: new Date("July 09 2022 09:09:09"),
    updatedAt: formatDate(),
  },
];
