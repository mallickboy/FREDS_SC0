import React from "react";
import image from "../Assets/freds1.jpg";
import "./nav.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar backgroun">
        <div className="navlist">
          <div className="logo">
            <img src={image} alt="Picture"></img>
            <h1>FREDS</h1>
          </div>
        </div>
        <div class="rightNav">
          <li>About</li>
          <li>Contact Us</li>
          <li>News</li>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;