import React from "react";
import './FAQs.css'

const FAQs = () => {
  let data = [
    {
      que: "How do I register for NEXUS'24?",
      ans: "To register for NEXUS'24, visit our official website and click on the Register button. Follow the prompts to fill in your details and complete the registration process.",
    },
    {
      que: "Is there a registration fee for participating in NEXUS'24?",
      ans: "Yes, there is a nominal registration fee to participate in NEXUS'24. The fee covers access to all events and activities over the two days. Detailed fee information is available on the registration page.",
    },
    {
      que: "Can I participate in multiple events with a single registration?",
      ans: "Absolutely! With a single registration, you can participate in multiple events at NEXUS'24. However, please ensure that the events do not overlap in timing.",
    },
    {
      que: "What is the deadline for registration?",
      ans: "The deadline for registration is August 13, 2024. We encourage early registration to secure your spot and avoid any last-minute hassles.",
    },
    {
      que: "Will I receive a confirmation after registering?",
      ans: "Yes, once you complete the registration process, you will receive a confirmation email with your registration details and further instructions.",
    },
    {
      que: "Are there any additional charges for specific events?",
      ans: "While the general registration fee covers most events, some specialized workshops or competitions may have additional charges. Details of any additional fees will be provided on the event page.",
    },
    {
      que: "What do I need to bring on the day of the techfest?",
      ans: "Please bring a copy of your registration confirmation email, a valid student ID, and any materials required for your specific events. Additional details will be provided in your confirmation email.",
    },
  ];

  return (
    <div id="faqs" className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="accordion" id="accordionExample">
        {data.map((item, key) => (
          <div className="accordion-item" key={key}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${key}`} 
                aria-expanded="false"
                aria-controls={`collapse${key}`}
              >
                {item.que}
              </button>
            </h2>
            <div
              id={`collapse${key}`} 
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {item.ans}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
