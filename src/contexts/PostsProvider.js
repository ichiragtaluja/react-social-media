import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  getAllPostService,
  likePostService,
  dislikePostService,
} from "../services/PostService";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [allPosts, setAllPosts] = useState([]);
  const getAllPosts = async () => {
    try {
      const response = await getAllPostService();

      if (response.status === 200) {
        setAllPosts(response.data.posts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const likePost = async (postId, token) => {
    try {
      const response = await likePostService(postId, token);
      setAllPosts([...response.data.posts]);
    } catch (error) {
      console.error(error);
    }
  };

  const dislikePost = async (postId, token) => {
    try {
      const response = await dislikePostService(postId, token);
      setAllPosts([...response.data.posts]);
    } catch (error) {}
  };

  const [sortBy, setSortBy] = useState("Latest");

  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <PostsContext.Provider
      value={{ setSortBy, sortBy, allPosts, likePost, dislikePost }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
