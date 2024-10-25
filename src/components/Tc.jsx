import React, { useState } from "react";
import "./Tc.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Tc() {
  const [isRulebookChecked, setIsRulebookChecked] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const navigate = useNavigate();

  const handleRulebookChange = () => {
    setIsRulebookChecked(!isRulebookChecked);
  };

  const handleTermsChange = () => {
    setIsTermsChecked(!isTermsChecked);
  };

  const handleProceed = () => {
    if (isRulebookChecked && isTermsChecked) {
      navigate("/form"); 
    } else {
      alert(
        "Please select both the checkboxes to proceed."
      );
    }
  };

  const terms = [
    {
      header: "One-Time Registration:",
      des: "Each participant is allowed to register only once for the events. Any duplicate entries will be disqualified. Ensure that all details provided during the registration process are accurate and complete.",
    },
    {
      header: "Non-Refundable Payment:",
      des: "Once payment is made, it is final and non-refundable. By submitting the registration form and completing payment, you agree that there will be no refund for any reason, including non-participation in the events.",
    },
    {
      header: "Final T-shirt Size Selection:",
      des: "Once the registration form is submitted, the selected T-shirt size is final. No changes to the T-shirt size will be allowed after the form submission.",
    },
    {
      header: "Event Participation Rules:",
      des: "Participants must adhere to the rules and regulations set for each event. Failure to comply with the rules may result in disqualification from the event or the entire fest. All decisions made by the event coordinators are final.",
    },
    {
      header: "Team Registrations:",
      des: "For group events, ensure that the same group name is used by all team members during registration. Any discrepancies may result in disqualification of the team. Participants can be a part of multiple teams, but each registration must be completed correctly.",
    },
    {
      header: "Victory Arena (BGMI/FF):",
      des: "The registration fee for participating in the Victory Arena (BGMI/FF) will be charged separately per participant. This fee is non-refundable, regardless of disqualification or withdrawal from the event.",
    },
    {
      header: "Code of Conduct:",
      des: "Participants are expected to conduct themselves respectfully and ethically throughout the duration of the fest. Any form of misconduct, harassment, or violation of the fest’s policies may lead to immediate disqualification and removal from the premises.",
    },
    {
      header: "Event Changes or Cancellations:",
      des: "The organizing team reserves the right to make changes to the event schedule, venue, or format if necessary. In the unlikely event of cancellation, participants will be notified promptly, but refunds will not be provided.",
    },
  ];

  return (
    <div className="tc-container d-flex justify-content-center align-items-center min-vh-100">
      <div className="sub-container p-4 text-center">
        <img src="/images/transparent.png" alt="Nexus" className="img-fluid mb-3" />
        <div className="welcome text-center">
          <h2>Welcome to NEXUS'24</h2>
          <h4>The Annual Techfest of GEC Samastipur</h4>
          <p>
            Join us for a thrilling experience of innovation, creativity, and
            technical excellence. Participate in a wide array of events,
            competitions, and workshops designed to challenge and inspire.
            Register now to be a part of this exciting journey and showcase your
            talents on a grand stage.
            <br />
            <span> Don't miss out!</span>
          </p>
        </div>

        <div className="tc-box">
          <h2>Terms & Conditions</h2>
          <p>
            Please read the following terms and conditions carefully before
            proceeding with registration. These terms govern your participation
            in Nexus'24 - The Annual Techfest of GEC Samastipur. By agreeing to
            these terms, you commit to adhering to the event guidelines and
            rules. Any violation may result in disqualification.
          </p>
          {terms.map((term, index) => (
            <div key={index} className="tc-item">
              <h4>{term.header}</h4>
              <p>{term.des}</p>
            </div>
          ))}
        </div>

        <div className="form-check mt-5">
          <input
            type="checkbox"
            className="form-check-input"
            id="rulebook"
            checked={isRulebookChecked}
            onChange={handleRulebookChange}
          />
          <label className="form-check-label" htmlFor="rulebook">
            I have gone through the rulebooks of the events.
          </label>
          <br />
          <input
            type="checkbox"
            className="form-check-input"
            id="terms"
            checked={isTermsChecked}
            onChange={handleTermsChange}
          />
          <label className="form-check-label" htmlFor="terms">
            I have read and agree to the Terms & Conditions.
          </label>
        </div>

        <button
          className="btn btn-primary mt-3 regbtn"
          onClick={handleProceed}
        >
          Proceed to Registration
        </button>
      </div>
    </div>
  );
}

export default Tc;
