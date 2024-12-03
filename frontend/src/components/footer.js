import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#343a40", // Dark gray background
    color: "#ffffff", // White text
    padding: "20px 0",
  };

  const linkStyle = {
    color: "#f8c146", // Orange links
    textDecoration: "none",
    margin: "0 10px",
  };

  const linkHoverStyle = {
    textDecoration: "underline", // Add underline on hover
  };

  return (
    <footer style={footerStyle}>
      <div className="container text-center">
        <p className="mb-2">© 2024 ShionIdeals. All rights reserved.</p>
        <p>
          Follow us:{" "}
          <a
            href="https://facebook.com"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          |
          <a
            href="https://twitter.com"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          |
          <a
            href="https://instagram.com"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
