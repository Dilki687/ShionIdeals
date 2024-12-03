import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.jpeg";

const Navbar = () => {
  // Define dark theme styles
  const navbarStyle = {
    backgroundColor: "#343a40", // Dark gray
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
    fontFamily: "Arial, sans-serif",
  };

  const brandStyle = {
    color: "#f8c146", // Vibrant orange
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  const linkStyle = {
    color: "#ffffff", // White text for links
    fontWeight: "500",
    transition: "color 0.3s",
    marginRight: "15px",
  };

  const activeLinkStyle = {
    ...linkStyle, // Base style
    color: "#f8c146", // Highlight active link with orange
  };

  //   const userIconStyle = {
  //     border: "2px solid #f8c146",
  //     padding: "2px",
  //     borderRadius: "50%",
  //   };

  return (
    <nav className="navbar navbar-expand-lg" style={navbarStyle}>
      <div className="container">
        {/* Logo Section */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2"
            style={{ borderRadius: "50%" }}
          />

          <strong style={brandStyle}>Shion Ideals</strong>
        </a>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ color: "#ffffff" }}
          ></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#" style={activeLinkStyle}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" style={linkStyle}>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" style={linkStyle}>
                Services
              </a>
            </li>
          </ul>
        </div>

        {/* User Icon */}
        {/* <div className="user-icon ms-3">
          <img
            src="/path-to-user-icon.png" // Replace with your user icon path
            alt="User Icon"
            width="35"
            height="35"
            style={userIconStyle}
          />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
