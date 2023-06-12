import React, { createContext, useContext } from "react";
import { loggedInUserReducer, initial } from "../reducers/loggedInUserReducer";
import { getUserService } from "../services/UserService";
import { useAuth } from "./AuthProvider";
import { useReducer } from "react";
import { useEffect } from "react";

const LoggedInUserContext = createContext();

export const LoggedInUserProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const [loggedInUserState, dispatch] = useReducer(
    loggedInUserReducer,
    initial
  );

  const getUser = async (user) => {
    try {
      const response = await getUserService(user);
      if (response.status === 200) {
        // setAuth({ ...auth, user: { ...response.data.user } });
        dispatch({ type: "SET_USER", payload: response.data.user });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (token) {
      getUser(username);
    }
  }, []);

  return (
    <LoggedInUserContext.Provider value={{ loggedInUserState, dispatch }}>
      {children}
    </LoggedInUserContext.Provider>
  );
};

export const useLoggedInUser = () => useContext(LoggedInUserContext);
