import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    college: "",
    batch: "",
    registrationNo: "",
    branch: "",
    individualEvents: [],
    groupEvents: [],
    groupName: "",
    game: "",
    squadName: "",
    tshirtSize: "",
    isParticipatingInIndividualEvents: false,
  });

  const [fee, setFee] = useState(0); // State to store the participation fee
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = [];

    // Personal Details Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.contact ||
      !formData.registrationNo
    ) {
      newErrors.push("All personal details must be filled.");
    }

    // Branch Validation
    if (!formData.branch) {
      newErrors.push("Branch is required.");
    }

    // Batch Validation
    if (!formData.batch) {
      newErrors.push("Batch is required.");
    }

    // Group Name Validation
    if (formData.groupEvents.length > 0 && !formData.groupName) {
      newErrors.push(
        "Group name is required if participating in group events."
      );
    }

    // Victory Arena Validation
    if (formData.game && !formData.squadName) {
      newErrors.push("Squad name is required for Victory Arena.");
    }

    // T-shirt Size Validation
    const isParticipatingInEvents =
      formData.groupEvents.length > 0 ||
      formData.isParticipatingInIndividualEvents;
    if (isParticipatingInEvents && !formData.tshirtSize) {
      newErrors.push(
        "T-shirt size selection is mandatory if participating in any events."
      );
    }

    return newErrors;
  };

  // Calculate participation fee based on selected events
  // a function to calculate participation fee
  // if participating in group events or individual events = 300
  // if participating in victory arena only events 50/-
  // if participating in victory arena event with tshirt 350/-
  // if participating in both events and victory arena 350
  const calculateFee = () => {
    let fee = 0;
    if(formData.individualEvents.length > 0 || formData.groupEvents.length > 0){
      fee = 300;
      if (formData.game) {
        fee += 50;
      }
    }
    if (formData.game && formData.tshirtSize != "") {
      fee = 350;
    }
    if(formData.game){
      fee = 50;
    }
    setFee(fee);
    console.log(fee)
  };

  // Handle individual events selection
  const handleIndividualEventsChange = (event) => {
    const { value, checked } = event.target;

    setFormData((prevData) => {
      const newIndividualEvents = checked
        ? [...prevData.individualEvents, value] // Add event if checked
        : prevData.individualEvents.filter((e) => e !== value); // Remove event if unchecked

      return {
        ...prevData,
        individualEvents: newIndividualEvents,
        isParticipatingInIndividualEvents: newIndividualEvents.length > 0,
      };
    });
  };

  // Handle group events selection
  const handleGroupEventsChange = (event) => {
    const { value, checked } = event.target;
    setFormData((prevData) => {
      const newGroupEvents = checked
        ? [...prevData.groupEvents, value] // Add event if checked
        : prevData.groupEvents.filter((e) => e !== value); // Remove event if unchecked
      return { ...prevData, groupEvents: newGroupEvents };
    });
  };
  const handleGameChange = (e) => {
    setFormData({ ...formData, game: e.target.value, squadName: "" });
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle checkbox for reviewing details and it is must to proceed
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateFee();
    // Perform validation when Submit button is pressed and also navigation
    const errors = validateForm();

    if (errors.length > 0) {
      // Display all errors as an alert
      alert(errors.join("\n"));
    } else {
      // navigate to the payment page // I have not made that yet
      console.log(formData);
      // console.log(fee);
      alert("Form submitted successfully!");
      // navigate("/payment");
      // window.location.reload();
      // window.scrollTo({ top: 0, behavior: "smooth" })

      
    }
    
  };
  return (
    <>
      <div className="container form-container">
        <h2>Nexus'24 Registration Form</h2>
        <div className="section1 d-flex justify-content-center">
          <form onSubmit={calculateFee}>
            <h4 className="sec-head">Personal Details</h4>
            {/* Name Field */}
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Name
              </label>

              <input
                type="text"
                value={formData.name}
                name="name"
                className="form-control"
                id="exampleInputName"
                required
                onChange={handleChange}
              />
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
                onChange={handleChange}
              />
            </div>

            {/* Contact Number Field */}
            <div className="mb-3">
              <label htmlFor="exampleInputPhone" className="form-label">
                Contact Number
              </label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                className="form-control"
                id="exampleInputPhone"
                required
                onChange={handleChange}
              />
            </div>

            {/* College Name Selection */}
            <div className="mb-3">
              <label className="form-label">College Name</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="college" // Add name attribute
                  id="collegeDefault"
                  value="Government Engineering College, Samastipur" // Add value attribute
                  checked={
                    formData.college ===
                    "Government Engineering College, Samastipur"
                  } // Set checked based on state
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="collegeDefault">
                  Government Engineering College, Samastipur
                </label>
              </div>
            </div>

            {/* Batch Selection */}
            <div className="mb-3">
              <label className="form-label">Batch</label>
              {["2020", "2021", "2022", "2023"].map((year) => (
                <div className="form-check" key={year}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="batch" // Added name attribute
                    id={`batch${year}`} // Dynamic ID
                    value={year}
                    checked={formData.batch === year}
                    onChange={handleChange} // Updated onChange to use handleChange
                  />
                  <label className="form-check-label" htmlFor={`batch${year}`}>
                    {year}
                  </label>
                </div>
              ))}
            </div>

            {/* Registration Number Field */}
            <div className="mb-3">
              <label htmlFor="exampleRegNo" className="form-label">
                Registration Number
              </label>
              <input
                type="text"
                name="registrationNo"
                value={formData.registrationNo}
                className="form-control"
                id="exampleRegNo"
                required
                onChange={handleChange}
              />
            </div>

            {/* Branch Name Field */}
            <div className="mb-3">
              <label className="form-label">Branch</label>
              {[
                "Mechanical Engineering",
                "Electrical Engineering",
                "Civil Engineering",
                "Computer Science - Artificial Intelligence and Machine Learning",
                "Computer Science - Cyber Security",
                "Electronics and Communication Engineering",
                "Other",
              ].map((branch) => (
                <div className="form-check" key={branch}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="branch" // Added name attribute
                    id={branch.replace(/\s+/g, "")} // Dynamic ID
                    value={branch}
                    checked={formData.branch === branch}
                    onChange={handleChange} // Updated onChange to use handleChange
                  />
                  <label
                    className="form-check-label"
                    htmlFor={branch.replace(/\s+/g, "")}
                  >
                    {branch}
                  </label>
                </div>
              ))}
            </div>

            <h4 className="sec-head">Event Selection</h4>
            <p>
              Please select the events you wish to participate in during Nexus
              24. Each event offers a unique opportunity to showcase your skills
              and creativity. Whether you're interested in coding, robotics, or
              workshops, there's something for everyone. Choose your events
              carefully, and get ready to make your mark at GEC Samastipur's
              annual Techfest!
            </p>

            {/* Individual Events Selection */}
            <label className="form-label">
              <b>Individual Events</b> interested in
            </label>
            <div className="form-check mb-3">
              <div>
                {/* CADion */}
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="cadionEvent"
                  value="CADion"
                  onChange={handleIndividualEventsChange}
                />
                <label className="form-check-label" htmlFor="cadionEvent">
                  CADion
                </label>
              </div>

              <div>
                {/* Debug - Dynamo */}
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="debugDynamoEvent"
                  value="Debug Dynamo"
                  onChange={handleIndividualEventsChange}
                />
                <label className="form-check-label" htmlFor="debugDynamoEvent">
                  Debug - Dynamo
                </label>
              </div>

              <div>
                {/* Quizaholic */}
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="quizaholicEvent"
                  value="Quizaholic"
                  onChange={handleIndividualEventsChange}
                />
                <label className="form-check-label" htmlFor="quizaholicEvent">
                  Quizaholic
                </label>
              </div>

              <div>
                {/* Interface Insider */}
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="interfaceInsiderEvent"
                  value="Interface Insider"
                  onChange={handleIndividualEventsChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="interfaceInsiderEvent"
                >
                  Interface Insider
                </label>
              </div>
            </div>

            {/* Group Events Selection */}
            <label className="form-label">
              <b>Group Events</b> interested in
            </label>
            <div className="form-check mb-3">
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="thrustArena"
                  value="Thrust Arena"
                  onChange={handleGroupEventsChange}
                />
                <label className="form-check-label" htmlFor="thrustArena">
                  Thrust Arena
                </label>
              </div>

              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="pathFollower"
                  value="Path Follower"
                  onChange={handleGroupEventsChange}
                />
                <label className="form-check-label" htmlFor="pathFollower">
                  Path Follower
                </label>
              </div>

              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="roboKickoff"
                  value="Robo Kickoff"
                  onChange={handleGroupEventsChange}
                />
                <label className="form-check-label" htmlFor="roboKickoff">
                  Robo Kickoff
                </label>
              </div>

              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="sandSurfer"
                  value="Sand Surfer"
                  onChange={handleGroupEventsChange}
                />
                <label className="form-check-label" htmlFor="sandSurfer">
                  Sand Surfer
                </label>
              </div>

              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="trussArch"
                  value="Truss Arch"
                  onChange={handleGroupEventsChange}
                />
                <label className="form-check-label" htmlFor="trussArch">
                  Truss Arch
                </label>
              </div>

              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="armstrong"
                  value="Armstrong"
                  onChange={handleGroupEventsChange}
                />
                <label className="form-check-label" htmlFor="armstrong">
                  Armstrong
                </label>
              </div>

              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="hurdleHustle"
                  value="Hurdle Hustle"
                  onChange={handleGroupEventsChange}
                />
                <label className="form-check-label" htmlFor="hurdleHustle">
                  Hurdle Hustle
                </label>
              </div>

              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="roboRally"
                  value="Robo Rally"
                  onChange={handleGroupEventsChange}
                />
                <label className="form-check-label" htmlFor="roboRally">
                  Robo Rally
                </label>
              </div>

              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="theGoldenQuest"
                  value="The Golden Quest"
                  onChange={handleGroupEventsChange}
                />
                <label className="form-check-label" htmlFor="theGoldenQuest">
                  The Golden Quest
                </label>
              </div>
            </div>
            {/* Group Name Field */}
            {formData.groupEvents.length > 0 && (
              <div className="mb-3">
                <label htmlFor="inputGroupname" className="form-label">
                  Group Name{" "}
                  <b>
                    (Same Group Name for Team Participation, otherwise will be
                    disqualified) :
                  </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputGroupname"
                  required
                  value={formData.groupName}
                  onChange={(e) =>
                    setFormData({ ...formData, groupName: e.target.value })
                  }
                />
              </div>
            )}

            {/* Victory Arena */}
            <h4 className="sec-head">Victory Arena [BGMI/FF]</h4>
            <p>
              Get ready to enter the competitive world of E-Sports at Nexus 24!
              Whether you're a seasoned gamer or just looking to have some fun,
              this event is for you. Choose from a variety of popular games and
              battle it out for glory. Please note that a registration fee of
              ₹50 is applicable for each participant. Bring your A-game and may
              the best win!
            </p>

            {/* Game Select */}
            <div>
              <label className="form-label">Victory Arena Game:</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="bgmi"
                  name="victoryArenaGame"
                  value="BGMI"
                  checked={formData.game === "BGMI"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      game: e.target.value,
                      squadName: "", // Reset squad name when the game is changed
                    })
                  }
                />
                <label htmlFor="bgmi">BGMI</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="freefire"
                  name="victoryArenaGame"
                  value="FF"
                  checked={formData.game === "FF"}
                  onChange={handleGameChange}
                />
                <label htmlFor="freefire">Free Fire</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="none"
                  name="victoryArenaGame"
                  value=""
                  checked={formData.game === ""}
                  onChange={handleGameChange}
                />
                <label htmlFor="none">None</label>
              </div>
            </div>

            {/* Squad Name Field */}
            {formData.game && (
              <div className="mb-3">
                <label htmlFor="inputSquadname" className="form-label">
                  Squad Name <b>(Same Squad Name for Team Participation)</b> :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputSquadname"
                  required
                  value={formData.squadName}
                  onChange={(e) =>
                    setFormData({ ...formData, squadName: e.target.value })
                  }
                />
              </div>
            )}
            <h4 className="sec-head">T-Shirt Selection</h4>

            {/* T-shirt Design Image */}
            <div className="mb-3 ">
              <img
                src="images/tshirt.png"
                alt="T-shirt Design"
                className="img-fluid "
              />
            </div>

            {/* T-shirt Size Options */}
            {(formData.game ||
              formData.groupEvents.length > 0 ||
              formData.individualEvents.length > 0) && (
              <div className="form-group">
                <label htmlFor="tshirtSize" className="form-label">
                  Select Size
                </label>
                <p style={{ fontStyle: "italic", color: "gray" }}>
                  * T-shirt size is required if participating in events. It is
                  optional for Victory Arena only participants.
                </p>
                <select
                  className="form-select mb-3"
                  id="tshirtSize"
                  required
                  value={formData.tshirtSize}
                  onChange={(e) =>
                    setFormData({ ...formData, tshirtSize: e.target.value })
                  }
                >
                  <option value="">Choose Size</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
            )}
            {/* Checkbox to review details */}
            <div className="form-check mt-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="reviewDetails"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="reviewDetails">
                I have reviewed all the details.
              </label>
            </div>

            {/* Proceed to Payment button */}
            <div className="mt-3 text-center">
              <button
                type="button"
                className="btn btn-success mb-3 sub-btn"
                disabled={!isChecked}
                onClick={handleSubmit }
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Form;
