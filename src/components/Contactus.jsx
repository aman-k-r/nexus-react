import React from "react";
import "./Contactus.css";
import "boxicons/css/boxicons.min.css";

const Contactus = () => {
  let data = [
    { name: "Roma Jaiswal", con: 6287563478 },
    { name: "Amit Kumar", con: 8789708631 },
    { name: "Simran Kumari", con: 9142971078 },
    { name: "Gagan Kumar", con: 6205433905 },
    { name: "Arjun Kumar", con: 6351000191 },
  ];

  const copyCon = (con) => {
    navigator.clipboard
      .writeText(con)
      .then(() => {
        alert("Copied Succesfully");
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };

  return (
    <div id="contactus" className="contacts">
      <h1>Contact Us</h1>
      <div className="row profile-card-container d-flex flex-wrap justify-content-around">
        {data.map((con_id, key) => (
          <div className="col-md-2 col-sm-6 mb-4" key={key}>
            {" "}
            {/* Adjust column size for smaller screens */}
            <div className="profile-card">
              <h2 className="profile-name">{con_id.name}</h2>
              <p className="profile-post">Coordinator</p>
              <div className="profile-contact">
                <a href={`tel:${con_id.con}`} className="text-decoration-none">
                  <i class="bx bx-phone-call"></i>{" "}
                </a>
                <i
                  onClick={() => copyCon(con_id.con)}
                  className="bx bxs-copy"
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contactus;
