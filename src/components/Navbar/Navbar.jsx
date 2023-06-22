import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useAuth } from "../../contexts/AuthProvider";
import { FaFeather } from "react-icons/fa";
import { CreatePostForm } from "../CreatePostForm/CreatePostForm";
import { RiHomeWifiLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { HiOutlineBookmark } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";

export const Navbar = () => {
  const [isCreateNewPostClicked, setIsCreateNewPostClicked] = useState(false);

  const { auth, handleLogout } = useAuth();
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "rgb(29, 155, 240)" : "white",
  });
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink className="navlink" style={getActiveStyle} to="/">
            {<RiHomeWifiLine className="navlink-icon" />}
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" style={getActiveStyle} to="/explore">
            <BiSearch className="navlink-icon" />
            <p>Explore</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" style={getActiveStyle} to="/bookmark">
            <HiOutlineBookmark className="navlink-icon" />
            <p>Bookmark</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            style={getActiveStyle}
            to={`/profile/${auth.username}`}
          >
            <CgProfile className="navlink-icon" />
            <p>Profile</p>
          </NavLink>
        </li>
        <li>
          {/* <NavLink className="navlink" style={getActiveStyle} to="/logout">
            <IoMdLogOut className="navlink-icon" />
            <p>Logout</p>
          </NavLink> */}

          <NavLink onClick={handleLogout} className="navlink" style={getActiveStyle} to="/login">
            <IoMdLogOut className="navlink-icon" />
            <p>Logout</p>
          </NavLink>
        </li>
      </ul>
      <button
        className="create-new-post-btn"
        onClick={() => setIsCreateNewPostClicked(!isCreateNewPostClicked)}
      >
        <FaFeather className="feather-icon" />
        <span>New Post</span>
      </button>
      {isCreateNewPostClicked && (
        <div className="create-post-modal">
          <CreatePostForm
            className="modal-content"
            setIsCreateNewPostClicked={setIsCreateNewPostClicked}
          />
        </div>
      )}
    </nav>
  );
};
