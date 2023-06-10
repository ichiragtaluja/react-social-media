import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllPostService } from "../services/PostService";

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

  const [sortBy, setSortBy] = useState("Latest");

  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <PostsContext.Provider value={{ setSortBy, sortBy, allPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
