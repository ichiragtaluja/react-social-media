import "./Navbar.css";
import { Link } from "react-router-dom";

import React from "react";
import { useAuth } from "../../contexts/AuthProvider";

export const Navbar = () => {
  const { auth } = useAuth();
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Logo</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/bookmark">Bookmark</Link>
        </li>
        <li>
          <Link to={`/profile/${auth.username}`}>Profile</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};
