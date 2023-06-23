import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequiresAuth } from "../components/RequiresAuth";
import { Home } from "../pages/Home/Home";
import { Explore } from "../pages/Explore/Explore";
import { Bookmark } from "../pages/Bookmark/Bookmark";
import { Profile } from "../pages/Profile/Profile";
import { Login } from "../pages/Auth/Login/Login";
import { Signup } from "../pages/Auth/Signup/Signup";
import { PostDetail } from "../pages/PostDetail/PostDetail";
import { Error } from "../pages/Error/Error";

export const NavRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequiresAuth>
            <Home />
          </RequiresAuth>
        }
      />

      <Route
        path="/explore"
        element={
          <RequiresAuth>
            <Explore />
          </RequiresAuth>
        }
      />
      <Route
        path="/bookmark"
        element={
          <RequiresAuth>
            <Bookmark />
          </RequiresAuth>
        }
      />
      <Route
        path="/profile/:username"
        element={
          <RequiresAuth>
            <Profile />
          </RequiresAuth>
        }
      />
      <Route
        path="/post-detail/:postId"
        element={
          <RequiresAuth>
            <PostDetail />
          </RequiresAuth>
        }
      />
      <Route path="*" element={<Error />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
