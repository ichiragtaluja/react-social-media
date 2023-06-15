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
  createPostService,
  deletePostService,
  editPostService,
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

  const deletePost = async (postId, token) => {
    try {
      const response = await deletePostService(postId, token);
      if (response.status === 201) {
        setAllPosts([...response.data.posts]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [sortBy, setSortBy] = useState("Latest");

  const createPost = async (e, post, token) => {
    try {
      e.preventDefault();
      const response = await createPostService(post, token);
      setAllPosts([...response.data.posts]);
    } catch (error) {
      console.error(error);
    }
  };

  const editPost = async (e, postId, post, token) => {
    try {
      e.preventDefault();
      const response = await editPostService(postId, post, token);
      console.log(response);
      setAllPosts([...response.data.posts]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <PostsContext.Provider
      value={{
        setSortBy,
        sortBy,
        allPosts,
        likePost,
        dislikePost,
        createPost,
        deletePost,
        editPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
