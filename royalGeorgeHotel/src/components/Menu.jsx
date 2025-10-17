import React from 'react';
import Header from './header';
import Footer from './Footer';
import menubanner from "../assets/menubanner.jpeg"

import BookingBubble from './Bookingbubble';
import Menucontent from './Menucontent';

const Menu = () => {
    return (
        <div className="bg-black text-white font-sans relative" style={{ width: '100vw', height: '100vh' }}>
            <Header></Header>
            <BookingBubble></BookingBubble>
  <section className="relative">
                      <img
                        src={menubanner}
                        alt="Hotel Banner"
                        className="w-full h-72 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-4xl font-bold mb-2">Menu</h1>
                        <p className="text-sm max-w-2xl">
                          Drop into RG's for the best breakfast, lunch and dinner deals in Brisbane. Our new menu has officially launched and it is heavenly, if we do say so ourselves. My personal favourite? I hear none of you ask... The iconic Butterfingers brekkie boasting 3 poached eggs, bacon, grilled tomato, hash browns, caramelised onion, fresh spinach and buttered fingers of Turkish Bread. Click here to learn more about
Butterfingers the legendary, local Brisbane band we named this dish after!</p>
                      </div>
                    </section>

  <Menucontent></Menucontent>

            <Footer></Footer>
        </div>
    );
};

export default Menu;