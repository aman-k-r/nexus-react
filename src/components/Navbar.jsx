import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <nav className="navbar navbar-expand-lg mx-auto fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#hero" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          NEXUS '24
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#insights">
              Insights
            </a>
            <a className="nav-link" href="#events">
              Events
            </a>
            <a className="nav-link" href="#sponsors">
              Sponsors
            </a>
            <a className="nav-link" href="#contactus">
              Contact Us
            </a>
            <a className="nav-link" href="#faqs">
              FAQs
            </a>
            <button
              type="button"
              className="btn btn-danger neon-button"
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
