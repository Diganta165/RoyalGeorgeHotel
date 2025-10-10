import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ContactUs from "./components/contactus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />           {/* Home page */}
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} /> {/* Contact page */}
      </Routes>
    </Router>
  );
}

export default App;
