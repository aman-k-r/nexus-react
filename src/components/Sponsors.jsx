import React from "react";
import "./Sponsors.css";
const Sponsors = () => {
 let spImg = [
    "/SPONSORS/Chai-Sutta-Bar2 (1).png",
    "/SPONSORS/KOM logo.jpg",
    "/SPONSORS/mahindra.png",
    "/SPONSORS/nirav sports.jpg",
    "/SPONSORS/sai.jpg",
    "/SPONSORS/tvs.webp",
  ];

  return (
    <>
      <div id="sponsors" className="sponsors">
        <h1 className="spon">Sponsors</h1>
        <div className="spon-container d-flex flex-wrap justify-content-center align-items-center mx-auto">
          {spImg.map((img, index) => (
            <div key={index} className="spon-card">
              <img src={img} alt="Sponsor" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sponsors;
