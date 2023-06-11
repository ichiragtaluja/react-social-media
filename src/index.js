import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import { PostsProvider } from "./contexts/PostsProvider";
import { UserProvider } from "./contexts/UserProvider";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UserProvider>
          <PostsProvider>
            <App />
          </PostsProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
