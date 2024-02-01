import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const height = document.getElementsByTagName("header")[0].offsetHeight;
    console.log(`🚀 ~ useEffect ~ height:`, height);
    setNavbarHeight(height);
  }, []);

  return (
    <div className="" style={{ marginTop: `${navbarHeight}px` }}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
