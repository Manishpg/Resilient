import React, { useState} from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar fixed-top">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          <img alt="" src="https://assets.zyrosite.com/A1ayJ1rpDvCXbKg9/header-AE0V424qk0haPWog.png" width="60px"/>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/program"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Program
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/donate"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Donate
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon"  onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;