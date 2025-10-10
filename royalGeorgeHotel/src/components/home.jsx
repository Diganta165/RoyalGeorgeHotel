import React from "react";
import Header from "./header";
import Footer from "./Footer";
import Barsgrid from "./Barsgrid";


export default function Home() {
  return (
    <div className="bg-black font-sans min-h-screen" style={{ width: '100vw', height: '100vh' }}>
      {/* Navbar */}
      
      <Header></Header>

      <Barsgrid></Barsgrid>
      <Footer></Footer>
    </div>
  );
}
