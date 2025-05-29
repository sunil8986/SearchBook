import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router'; 
import { Container, Row, Col } from 'react-bootstrap';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleNavbar = () => setToggleMenu(!toggleMenu);
  const closeMenu = () => setToggleMenu(false);

  return (
    <nav className="custom-navbar">
      <Container>
        <Row>
          <Col>
            <div className="navbar-wrapper d-flex justify-content-between align-items-center">

              {/* === Left Side: Logo === */}
              <NavLink to="/" className="navbar-brand d-flex align-items-center" onClick={closeMenu}>
                <img src="/images/logo.png" width={60} alt="logo" />
                <span className="text-uppercase fw-7 fs-24 ls-1 ms-2">Book Store</span>
              </NavLink>

              {/* === Right Side: Menu + Toggle === */}
              <div className="menu-wrapper">
                <button type="button" className="navbar-toggler-btn" onClick={handleNavbar}>
                  {toggleMenu ? (
                    <RxCross2 size={35} style={{ color: "#fff" }} />
                  ) : (
                    <GiHamburgerMenu size={35} style={{ color: "#010101" }} />
                  )}
                </button>

                <div className={`navbar-collapse ${toggleMenu ? "show-navbar-collapse" : ""}`}>
                  <ul className="navbar-nav d-flex flex-column flex-md-row">
                    <li className="nav-item">
                      <NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink>
                    </li>
                    {/* Add more links as needed */}
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Navbar;
