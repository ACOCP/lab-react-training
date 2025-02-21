import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/idcard">ID Card</Link></li>
        <li><Link to="/greetings">Greetings</Link></li>
        <li><Link to="/random">Random</Link></li>
        <li><Link to="/boxcolor">Box Color</Link></li>
        <li><Link to="/creditcard">Credit Card</Link></li>
        <li><Link to="/rating">Rating</Link></li>
        <li><Link to="/drivercard">Driver Card</Link></li>
        <li><Link to="/likebutton">Like Button</Link></li>
        <li><Link to="/clickablepicture">Clickable Picture</Link></li>
        <li><Link to="/dice">Dice</Link></li>
        <li><Link to="/carousel">Carousel</Link></li>
        <li><Link to="/numberstable">Numbers Table</Link></li>
        <li><Link to="/facebook">FaceBook</Link></li>
        <li><Link to="/signuppage">Signup Page</Link></li>
        <li><Link to="/rgbcolorpicker">RGB Color Picker</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
