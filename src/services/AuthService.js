import axios from "axios";

export const signupService = async (formValues) => {
  return await axios.post("/api/auth/signup", { ...formValues });
};

export const loginService = async (username, password) => {
  return await axios.post("/api/auth/login", { username, password });
};
