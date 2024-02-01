import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useRef, useState } from "react";

function App() {
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // This function will be called after the initial render
    const updateNavbarHeight = () => {
      const height = navbarRef.current.offsetHeight;
      setNavbarHeight(height);
      console.log("Ram = ", height);
    };

    // Call the function once after the initial render
    updateNavbarHeight();

    // Attach resize event listener to recalculate height if the window is resized
    window.addEventListener("resize", updateNavbarHeight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <div className="" style={{ marginTop: `${navbarHeight}px` }}>
      <Navbar ref={navbarRef} />
      <Outlet />
    </div>
  );
}

export default App;
