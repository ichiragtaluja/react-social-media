import React, { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";

import { getAllUserService, getUserService } from "../services/UserService";
import { userReducer } from "../reducers/userReducer";
import { initial } from "../reducers/userReducer";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, initial);

  const getAllUsers = async () => {
    const response = await getAllUserService();
    dispatch({ type: "SET_ALL_USERS", payload: response.data.users });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
