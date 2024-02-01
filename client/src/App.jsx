import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useRef, useState } from "react";

function App() {
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const height = navbarRef.current.offsetHeight;
    setNavbarHeight(height);
    console.log("Ram = ", height);
  }, []);

  return (
    <div className="" style={{ marginTop: `${navbarHeight}px` }}>
      <Navbar ref={navbarRef} />
      <Outlet />
    </div>
  );
}

export default App;
