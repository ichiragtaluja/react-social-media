import axios from "axios";

export const getAllPostService = async () => {
  return await axios.get("/api/posts");
};
