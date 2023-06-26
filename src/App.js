import "./App.css";

import { useAuth } from "./contexts/AuthProvider";
import { Navbar } from "./components/Navbar/Navbar";
import { Discover } from "./components/Discover/Discover";
import { NavRoutes } from "./Routes/NavRoutes";
import { Header } from "./components/Header/Header";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Toaster } from "react-hot-toast";

function App() {
  const { auth } = useAuth();
  return (
    <div className="App">
      {/* {auth.isAuth && <Header />}
      <div className="app-container">
        {auth.isAuth && <Navbar />} */}
      <ScrollToTop />
      <NavRoutes />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: { duration: 1500 },
          error: { duration: 4000 },
        }}
        containerStyle={{
          top: "6rem",
        }}
      />

      {/* {auth.isAuth && <Discover className="discover" />}
      </div> */}
    </div>
  );
}

export default App;
