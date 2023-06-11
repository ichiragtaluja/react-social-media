import axios from "axios";

export const getAllUserService = async () => {
  return await axios.get("/api/users");
};

export const getUserService = async (id) => {
  return await axios.get(`/api/users/${id}`);
};
