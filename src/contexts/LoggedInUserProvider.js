import React, { createContext, useContext } from "react";
import { loggedInUserReducer, initial } from "../reducers/loggedInUserReducer";
import {
  editUserService,
  followUserService,
  unfollowUserService,
  getUserService,
  getAllBookmarksService,
  addBookmarkService,
  removeBookmarkService,
} from "../services/UserService";
import { useReducer } from "react";
import { useEffect } from "react";
import { useUser } from "./UserProvider";
import { ImCoinDollar } from "react-icons/im";

const LoggedInUserContext = createContext();

export const LoggedInUserProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const { userState, dispatch } = useUser();

  const [loggedInUserState, loggedInUserDispatch] = useReducer(
    loggedInUserReducer,
    initial
  );

  const getUser = async (user) => {
    try {
      const response = await getUserService(user);
      if (response.status === 200) {
        loggedInUserDispatch({
          type: "SET_USER",
          payload: { ...response.data.user },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editUser = async (userData, token) => {
    try {
      const response = await editUserService(userData, token);
      if (response.status === 201) {
        console.log("res", response);
        const updatedUser = response.data.user;
        loggedInUserDispatch({ type: "SET_USER", payload: updatedUser });
        const updatedUsers = userState.allUsers.map((user) =>
          user.username === updatedUser.username ? updatedUser : user
        );
        dispatch({ type: "SET_ALL_USERS", payload: [...updatedUsers] });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const followUser = async (userId, token) => {
    try {
      const response = await followUserService(userId, token);
      if (response.status === 200) {
        const { user, followUser } = response.data;

        const updatedAllUser = userState?.allUsers.map((individualUser) =>
          individualUser.username === user.username
            ? { ...user }
            : individualUser.username === followUser.username
            ? { ...followUser }
            : individualUser
        );

        dispatch({ type: "SET_ALL_USERS", payload: [...updatedAllUser] });
        loggedInUserDispatch({ type: "SET_USER", payload: user });
      }
    } catch (error) {}
  };

  const unfollowUser = async (userId, token) => {
    try {
      const response = await unfollowUserService(userId, token);
      if (response.status === 200) {
        const { user, followUser } = response.data;

        const updatedAllUser = userState?.allUsers.map((individualUser) =>
          individualUser.username === user.username
            ? { ...user }
            : individualUser.username === followUser.username
            ? { ...followUser }
            : individualUser
        );

        dispatch({ type: "SET_ALL_USERS", payload: [...updatedAllUser] });
        loggedInUserDispatch({ type: "SET_USER", payload: user });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getAllBookmarks = async (token) => {
    const response = await getAllBookmarksService(token);
    // console.log("bookmark", response);
  };

  const addBookmark = async (postId, token) => {
    try {
      const response = await addBookmarkService(postId, token);
      if (response.status === 200) {
        loggedInUserDispatch({ type: "SET_USER", payload: response.data });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeBookmark = async (postId, token) => {
    try {
      const response = await removeBookmarkService(postId, token);
      loggedInUserDispatch({ type: "SET_USER", payload: response.data });
    } catch (error) {}
  };

  useEffect(() => {
    if (token) {
      getUser(username);
    }
  }, [token, username]);

  return (
    <LoggedInUserContext.Provider
      value={{
        loggedInUserState,
        loggedInUserDispatch,
        editUser,
        followUser,
        unfollowUser,
        addBookmark,
        removeBookmark,
      }}
    >
      {children}
    </LoggedInUserContext.Provider>
  );
};

export const useLoggedInUser = () => useContext(LoggedInUserContext);
