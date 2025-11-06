import React from 'react';
import gaming from "../../util/images/gaming.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Royal George Hotel</h1>
        <p>One of the last great local pubs</p>
      </div>
      <img
        src= {gaming}
        alt="Venue"
        className="hero-img"
      />
    </section>
  );
}

export default Hero;
