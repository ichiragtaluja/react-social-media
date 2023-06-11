import React, { createContext, useContext, useState } from "react";

import { loginService, signupService } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const [authError, setAuthError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const [auth, setAuth] = useState(
    token && username
      ? { isAuth: true, token, username }
      : { isAuth: false, token: "", username: "" }
  );

  const handleSignup = async (e, formValues) => {
    try {
      e.preventDefault();
      const response = await signupService(formValues);
      // console.log(response);
      if (response.status === 201) {
        const token = response.data.encodedToken;
        const username = response.data.createdUser.username;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        setAuth({ isAuth: true, token, username });
        navigate(location?.state?.from?.pathname || "/");
      }
    } catch (error) {}
  };

  const handleLogin = async (e, username, password) => {
    try {
      e.preventDefault();
      const response = await loginService(username, password);
      if (response.status === 200) {
        console.log(response)
        const token = response.data.encodedToken;
        const username = response.data.foundUser.username;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        setAuth({ isAuth: true, token, username });
        navigate(location?.state?.from?.pathname || "/");
      }
    } catch (error) {
      console.error(error);
      setAuthError(error.response.data.errors[0]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    setAuth({ isAuth: false, token: "", username: "" });
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ auth, handleLogin, handleLogout, handleSignup, authError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
