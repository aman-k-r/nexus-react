import React from "react";
import "./Eventcard.css";

const Eventcard = ({ name, profile, description, doc }) => {
  return (
    <div className="card-container  ">
      <div className="heading">
        <h3 className="mx-auto">{name}</h3>
      </div>

      <img src={profile} alt={name} />

      <div className="para">
        <p className="text-wrap">{description}</p>
      </div>

      <a
        href={doc}
        className="btn btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
      Open Rulebook
      </a>
    </div>
  );
};

export default Eventcard;
