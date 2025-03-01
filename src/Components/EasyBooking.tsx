import React from "react";
import { useTranslation } from "react-i18next"; // Import the hook
import "./EasyBooking.css";

const steps = [
  {
    number: 1,
    titleKey: "choose_your_bike",
    descriptionKey: "choose_your_bike_description",
  },
  {
    number: 2,
    titleKey: "book_online",
    descriptionKey: "book_online_description",
  },
  {
    number: 3,
    titleKey: "confirm_your_booking",
    descriptionKey: "confirm_your_booking_description",
  },
];

const EasyBooking: React.FC = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <section className="easy-booking">
      <div className="background-image"></div>
      <h2 className="booking-title">{t("easy_booking")}</h2>{" "}
      {steps.map((step, index) => (
        <div
          key={step.number}
          className={`booking-step ${index % 2 === 0 ? "left" : "right"}`}
        >
          {index % 2 === 0 ? ( // Left step → Number on right
            <>
              <div className="step-content">
                <h3>{t(step.titleKey)}</h3>
                <p>{t(step.descriptionKey)}</p>
              </div>
              <div className="step-number">{step.number}</div>
            </>
          ) : (
            // Right step → Number on left
            <>
              <div className="step-content">
                <h3>{t(step.titleKey)}</h3>
                <p>{t(step.descriptionKey)}</p>
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
