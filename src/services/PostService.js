import axios from "axios";

export const getAllPostService = async () => {
  return await axios.get("/api/posts");
};

export const likePostService = async (postId, token) => {
  return await axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export const dislikePostService = async (postId, token) => {
  return await axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export const createPostService = async (post, token) => {
  return await axios.post(
    "/api/posts",
    {
      postData: post,
    },
    {
      headers: { authorization: token },
    }
  );
};

export const deletePostService = async (postId, token) => {
  return await axios.delete(`/api/posts/${postId}`, {
    headers: { authorization: token },
  });
};

export const editPostService = async (postId, post, token) => {
  
  return await axios.post(
    `/api/posts/edit/${postId}`,
    {
      postData: post,
    },
    {
      headers: { authorization: token },
    }
  );
};
