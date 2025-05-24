import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router'; // make sure you're using 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="custom-navbar">
        <Row>
          <Col>
            <div className="navbar-wrapper">
              {/* Left Side: Logo */}
              <NavLink to="/" className="navbar-brand">
                <img src="/images/logo.png" width={60} alt="logo" />
                <span className="text-uppercase fw-7 fs-24 ls-1 ms-2">bookhub</span>
              </NavLink>

              {/* Right Side: Menu or Toggler */}
              <div className="menu-wrapper">
                <button type="button" className="navbar-toggler-btn" onClick={handleNavbar}>
                  <GiHamburgerMenu
                    size={35}
                    style={{ color: toggleMenu ? "#fff" : "#010101" }}
                  />
                </button>

                {/* Desktop menu */}
                <div className={`navbar-collapse ${toggleMenu ? "show-navbar-collapse" : ""}`}>
                  <ul className="navbar-nav d-flex">
                    <li className='nav-item'>
                      <NavLink to="/" className='nav-link'>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink to="/about" className='nav-link'>About</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
    </nav>
  );
};

export default Navbar;
