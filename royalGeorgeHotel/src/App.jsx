import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ContactUs from "./components/contactus";
import Bars from "./components/Bars";
import Menu from "./components/Menu";
import BookingForm from "./components/BookingForm";
import BookingSummary from "./components/BookingSummary"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />           {/* Home page */}
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} /> {/* Contact page */}
        <Route path="/bars" element={<Bars />} /> {/* Bars page */}
        <Route path="/menu" element={<Menu />} /> {/* Menu page */}
        <Route path="/bookingform" element={<BookingForm />} />
        <Route path="/bookingsummary" element={<BookingSummary />}/>
        
      </Routes>
    </Router>
  );
}

export default App;
