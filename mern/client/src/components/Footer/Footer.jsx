import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      {/* <div className="footer-left">
        <div className="logo">RG</div>
        <p>Address: 123 Venue St, Sydney, NSW</p>
        <p>Phone: (02) 1234 5678</p>
        <p>Email: info@rg.com</p>
      </div>
      <div className="footer-right">
        <img
          src="https://images.unsplash.com/photo-map.jpg"
          alt="Map"
        />
      </div> */}

      {/* Column 1: Logo and description */}
      <div className="footer-col footer-brand">
        <div className="footer-logo">
          <span className="logo-icon">RG</span>
        </div>
        <p className="footer-desc">
          The Royal George Hotel is where the best night out begins. Our family owned pub is made up of 4 separate bars including the valley’s largest beer garden.
        </p>
      </div>

      {/* Column 2: Quick Links */}
      <div className="footer-col">
        <p className="footer-heading">Quick Links</p>
        <ul className="footer-list">
          <li><a href="#">Menu</a></li>
          <li><a href="#">Bars</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      {/* Column 3: Resources */}
      <div className="footer-col">
        <p className="footer-heading">Resources</p>
        <ul className="footer-list">
          <li><a href="#">Blog</a></li>
          <li><a href="#">Career</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms and Conditions</a></li>
        </ul>
      </div>

      {/* Column 4: Map embed */}
      <div className="footer-col footer-map">
        <div className="map-responsive">
          <iframe
            title="Royal George Hotel Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.584993282633!2d153.03565981537747!3d-27.45777372335966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a008628e1a5%3A0xfb3d72c5b68923bb!2sRoyal%20George%20Hotel!5e0!3m2!1sen!2sau!4v1625801739964!5m2!1sen!2sau"
            width="250"
            height="160"
            frameBorder="0"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
