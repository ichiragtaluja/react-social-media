import React, { createContext, useContext } from "react";
import { loggedInUserReducer, initial } from "../reducers/loggedInUserReducer";
import {
  editUserService,
  followUserService,
  unfollowUserService,
  getUserService,
} from "../services/UserService";
import { useAuth } from "./AuthProvider";
import { useReducer } from "react";
import { useEffect } from "react";
import { useUser } from "./UserProvider";

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
        // setAuth({ ...auth, user: { ...response.data.user } });
        loggedInUserDispatch({ type: "SET_USER", payload: response.data.user });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editUser = async (userData) => {
    try {
      const response = await editUserService(userData, token);
      if (response.status === 201) {
        loggedInUserDispatch({ type: "SET_USER", payload: response.data.user });
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
    } catch (error) {}
  };

  useEffect(() => {
    if (token) {
      getUser(username);
    }
  }, []);

  return (
    <LoggedInUserContext.Provider
      value={{
        loggedInUserState,
        loggedInUserDispatch,
        editUser,
        followUser,
        unfollowUser,
      }}
    >
      {children}
    </LoggedInUserContext.Provider>
  );
};

export const useLoggedInUser = () => useContext(LoggedInUserContext);
