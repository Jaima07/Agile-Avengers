import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap CSS is imported

const Header = () => {
  return (
    <header className="bg-light py-2 shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img
            src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yOF8zZF9yZW5kZXJfY2hhcmFjdGVyX29mX2FfbGlvbl9iYWJ5X2NhcnRvb25fYV80Yzg3N2EyOS01MWM4LTRhYmQtYjljYS04YWU3YTc2NGU2NzYucG5n.png"
            alt="Logo"
            className="logo"
            style={{ height: "55px" }}
          />
        </Link>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/image-gallery" className="nav-link">
                Image Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/diet" className="nav-link">
                Diet
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mating-and-reproduction" className="nav-link">
                Mating and Reproduction
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/habitat" className="nav-link">
                Habitat
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/anatomy-and-biology" className="nav-link">
                Anatomy & Biology
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/behavior" className="nav-link">
                Behavior
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
