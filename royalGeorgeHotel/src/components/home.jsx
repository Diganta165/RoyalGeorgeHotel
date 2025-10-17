import React from "react";
import Header from "./header";
import Footer from "./Footer";
import Barsgrid from "./Barsgrid";
import BookingBubble from "./Bookingbubble";
import HomepageHero from "./HomepageHero"
import Menucontent from "./Menucontent";


export default function Home() {
  return (
    <div className="bg-black font-sans min-h-screen" style={{ width: '100vw', height: '100vh' }}>
      {/* Navbar */}
      
      <Header></Header>
      <BookingBubble></BookingBubble>
      <HomepageHero></HomepageHero>
      <Barsgrid></Barsgrid>
      <Menucontent></Menucontent>
      <Footer></Footer>
    </div>
  );
}
