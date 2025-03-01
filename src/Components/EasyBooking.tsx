import React from "react";
import "./EasyBooking.css";

const steps = [
  {
    number: 1,
    title: "Choose Your Bike",
    description:
      "Browse our collection and select the perfect bike for your journey.",
  },
  {
    number: 2,
    title: "Book Online",
    description: "Select Enter your rental date, time and number of riders",
  },
  {
    number: 3,
    title: "Confirm Your Booking",
    description: "Our team checks availability and send you a confirmation ",
  },
];

const EasyBooking: React.FC = () => {
  return (
    <section className="easy-booking">
      <div className="background-image"></div>
      <h2 className="booking-title">Easy Booking</h2>
      {steps.map((step, index) => (
        <div
          key={step.number}
          className={`booking-step ${index % 2 === 0 ? "left" : "right"}`}
        >
          {index % 2 === 0 ? ( // Left step → Number on right
            <>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <div className="step-number">{step.number}</div>
            </>
          ) : (
            // Right step → Number on left
            <>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <div className="step-number">{step.number}</div>
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default EasyBooking;
