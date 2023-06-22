import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page-container feed">
      <h1>Error 404</h1>
      <p>The page you are searching for does not exist</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};
