import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { TbTopologyFullHierarchy } from "react-icons/tb";
import {
  getAllPostService,
  likePostService,
  dislikePostService,
  createPostService,
  deletePostService,
  editPostService,
  getCommentsService,
  addCommentsService,
  deleteCommentService,
  editCommentService,
} from "../services/PostService";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [allPosts, setAllPosts] = useState([]);
  console.log("all Posts", allPosts);

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
      setAllPosts([...response.data.posts]);
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = async (postId) => {
    try {
      const response = getCommentsService(postId);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const addComment = async (postId, commentData, token) => {
    try {
      const response = await addCommentsService(postId, commentData, token);
      console.log("yes", response.data);
      setAllPosts(response.data.posts);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteComment = async (postId, commentId, token) => {
    try {
      const response = await deleteCommentService(postId, commentId, token);
      setAllPosts(response.data.posts);
    } catch (error) {
      console.error(error);
    }
  };
  const editComment = async (postId, commentId, commentData, token) => {
    try {
      const response = await editCommentService(
        postId,
        commentId,
        commentData,
        token
      );
      console.log(response);
      setAllPosts(response.data.posts);
    } catch (error) {
      console.error(error);
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
        addComment,
        editComment,
        deleteComment,
        getComments,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
