import "./Header.css";
import React from "react";
import { LuBird } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <LuBird onClick={() => navigate("/")} className="header-logo" size={25} />

      <p onClick={() => navigate("/")}>Quack</p>
    </div>
  );
};
