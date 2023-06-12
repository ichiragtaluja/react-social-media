import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import { PostsProvider } from "./contexts/PostsProvider";
import { UserProvider } from "./contexts/UserProvider";
import { LoggedInUserProvider } from "./contexts/LoggedInUserProvider";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <LoggedInUserProvider>
          <AuthProvider>
            <PostsProvider>
              <App />
            </PostsProvider>
          </AuthProvider>
        </LoggedInUserProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
