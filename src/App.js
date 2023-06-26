import "./App.css";
import { useAuth } from "./contexts/AuthProvider";
import { NavRoutes } from "./Routes/NavRoutes";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { usePosts } from "./contexts/PostsProvider";
import { Loader } from "./components/Loader/Loader";

function App() {
  const { auth } = useAuth();
  const { postLoading } = usePosts();
  return (
    <div className="App">
      {/* {auth.isAuth && <Header />}
      <div className="app-container">
        {auth.isAuth && <Navbar />} */}
      <ScrollToTop />
      <NavRoutes />
      {postLoading && <Loader />}
      <Toaster
        position="top-center"
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
