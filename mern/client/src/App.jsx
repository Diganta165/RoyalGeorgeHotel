import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="w-full">
      {/* <Navbar /> */}
      <Home />
      {/* <Outlet /> */}
      
    </div>
  );
};
export default App;
