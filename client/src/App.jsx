import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="">
      <div>Navbar</div>
      <Outlet />
    </div>
  );
}

export default App;
