import axios from "axios";

export const getAllUserService = async () => {
  return await axios.get("/api/users");
};

export const getUserService = async (id) => {
  return await axios.get(`/api/users/${id}`);
};

export const editUserService = async (userData, token) => {
  return await axios.post(
    "/api/users/edit",
    { userData },
    { headers: { authorization: token } }
  );
};

export const followUserService = async (userId, token) => {
  return await axios.post(
    `/api/users/follow/${userId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export const unfollowUserService = async (userId, token) => {
  return await axios.post(
    `/api/users/unfollow/${userId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export const getAllBookmarksService = async (token) => {
  return await axios.get("/api/users/bookmark/", {
    headers: { authorization: token },
  });
};

export const addBookmarkService = async (postId, token) => {
  return await axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export const removeBookmarkService = async (postId, token) => {
  return await axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};
