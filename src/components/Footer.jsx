import React from "react";
import './Footer.css'
import Footerbottom from "./Footerbottom";
import "boxicons"; // Import Boxicons if needed

const Footer = () => {
  return (
    <>
      <div className="footer d-flex flex-column flex-md-row justify-content-around p-4 ">
        <div className="div1 mb-4 mb-md-0">
          <h3>ASIMO</h3>
          <p className="footer-paragraph">
            ASIMO is our college's premier technical club, organizing tech
            fests, bootcamps, and various events on campus. We foster innovation
            and technical excellence, offering hands-on learning and networking
            opportunities. Join us to enhance your skills and be part of a
            vibrant tech community.
          </p>
        </div>

        <div className="div2 mb-4 mb-md-0 ">
          <h3>Quick Links</h3>
          <ul className="list-unstyled ">
            <li>
              <a href="#top">Home</a>
            </li>
            <li>
              <a href="#insights">Insights</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#sponsors">Sponsors</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
          </ul>
        </div>

        <div className="div3 mb-4 mb-md-0">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-meta"></i>
            </a>
            <a
              href="https://www.instagram.com/asimo_gecsamastipur/"
              target="_blank" rel="noopener noreferrer"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/asimo-gecsamastipur/"
              target="_blank" rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </div>
        </div>
      </div>
      <Footerbottom></Footerbottom>

    </>
  );
};

export default Footer;
