import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ContactUs from "./components/contactus";
import Bars from "./components/Bars";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />           {/* Home page */}
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} /> {/* Contact page */}
        <Route path="/bars" element={<Bars />} /> {/* Bars page */}
        <Route path="/menu" element={<Menu />} /> {/* Menu page */}
        
      </Routes>
    </Router>
  );
}

export default App;
