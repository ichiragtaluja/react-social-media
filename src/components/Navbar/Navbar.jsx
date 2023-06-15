import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useAuth } from "../../contexts/AuthProvider";
import { IoIosAddCircle } from "react-icons/io";
import { CreatePostForm } from "../CreatePostForm/CreatePostForm";

export const Navbar = () => {
  const [isCreateNewPostClicked, setIsCreateNewPostClicked] = useState(false);


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
      <button
        onClick={() => setIsCreateNewPostClicked(!isCreateNewPostClicked)}
      >
        <IoIosAddCircle />
        <span>Create New Post</span>
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
