import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Link } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Profile } from "./pages/Profile/Profile";
import { Explore } from "./pages/Explore/Explore";
import { Bookmark } from "./pages/Bookmark/Bookmark";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import { RequiresAuth } from "./components/RequiresAuth";
import { useAuth } from "./contexts/AuthProvider";

function App() {
  const { auth } = useAuth();
  return (
    <div className="App">
      {auth.isAuth && (
        <nav>
          <ul>
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
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      )}

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
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
