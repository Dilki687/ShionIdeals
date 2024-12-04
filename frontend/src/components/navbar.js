import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.jpeg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  // Define dark theme styles
  const navbarStyle = {
    backgroundColor: "#343a40",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
    fontFamily: "Arial, sans-serif",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const brandStyle = {
    color: "#f8c146",
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  const linkStyle = {
    color: "#ffffff",
    fontWeight: "500",
    transition: "color 0.3s",
    marginRight: "15px",
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: "#f8c146",
  };

  // Smooth scrolling function
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 70; // Adjust this to match your navbar height
      const elementPosition = section.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  // Handle the scroll event to update the active link based on the scroll position
  const handleScrollEvent = () => {
    const sections = ["home", "about", "services"];
    let currentSection = "home";
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section && window.scrollY >= section.offsetTop - 70) {
        currentSection = sectionId;
      }
    });
    setActiveLink(currentSection);
  };

  // Add scroll event listener to update the active link on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg" style={navbarStyle}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
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

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ color: "#ffffff" }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#home"
                style={activeLink === "home" ? activeLinkStyle : linkStyle}
                onClick={(e) => handleScroll(e, "home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                style={activeLink === "about" ? activeLinkStyle : linkStyle}
                onClick={(e) => handleScroll(e, "about")}
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#services"
                style={activeLink === "services" ? activeLinkStyle : linkStyle}
                onClick={(e) => handleScroll(e, "services")}
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
