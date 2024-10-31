import React from "react";
import "./Events.css"; // Ensure this file contains media queries for additional responsiveness
import Eventcard from "./Eventcard";
import data from "./data";

const Events = () => {
  return (
    <div id="events" className="container event-container">
      <h1>Events</h1>
      <div className="row">
        {data.map((event, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
            <Eventcard
              name={event.name}
              profile={event.profile}
              description={event.description}
              doc={event.doc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
