import React from 'react';
import './Booking.css'; // Assuming you have a CSS file for styling
// import Record from '../Record';
import { NavLink, Outlet } from "react-router-dom";


import { useState } from 'react';
import Popup from '../Popup/Popup'; // Import the Popup component

const Booking = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    //if (!show) return null; // Do not render anything if show is false
    return (
        <>
        

            <div>
      <button onClick={openPopup}>
        <NavLink to="/create">
                
            <div className="booking">
                <h2>Booking</h2>
            </div>
            </NavLink>
      </button>

      <Popup show={isPopupOpen} onClose={closePopup}>
        <Outlet />
      </Popup>
    </div>
            
        </>
    );
};

export default Booking;