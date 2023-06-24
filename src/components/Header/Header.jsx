import "./Header.css";
import React from "react";
import { LuBird } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { AttentionSeeker } from "react-awesome-reveal";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <AttentionSeeker effect="swing">
        <LuBird
          onClick={() => navigate("/")}
          className="header-logo"
          size={25}
        />
      </AttentionSeeker>

      <p onClick={() => navigate("/")}>Quack</p>
    </div>
  );
};
