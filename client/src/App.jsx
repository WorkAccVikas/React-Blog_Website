import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const height = document.getElementsByTagName("header")[0].offsetHeight;
      console.log(`🚀 ~ useEffect ~ height:`, height);
      setNavbarHeight(height);
    };

    updateNavbarHeight();

    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  return (
    <div className="" style={{ marginTop: `${navbarHeight}px` }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
