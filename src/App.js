import "./App.css";

import { useAuth } from "./contexts/AuthProvider";
import { Navbar } from "./components/Navbar/Navbar";
import { Discover } from "./components/Discover/Discover";
import { NavRoutes } from "./Routes/NavRoutes";
import { Header } from "./components/Header/Header";

function App() {
  const { auth } = useAuth();
  return (
    <div className="App">
      {auth.isAuth && <Header />}
      <div className="app-container">
        {auth.isAuth && <Navbar />}

        <NavRoutes />

        {auth.isAuth && <Discover className="discover" />}
      </div>
    </div>
  );
}

export default App;
