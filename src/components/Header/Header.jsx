import "./Header.css";
import React from "react";
import { SiDuckdb } from "react-icons/si";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <SiDuckdb
        onClick={() => navigate("/")}
        className="header-logo"
        size={25}
      />
      <p onClick={() => navigate("/")}>Quack</p>
    </div>
  );
};
