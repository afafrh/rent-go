import React from "react";
import "./Advantages.css";

const advantages = [
  {
    title: "Wide Selection of Bikes",
    description:
      "We offer a wide range of bikes to suit every need, from city bikes to mountain bikes, electric bikes, and more.",
  },
  {
    title: "Suggested Routes",
    description:
      "A map with recommended cycling routes for all skill levels will be provided.",
  },
  {
    title: "Well-Maintained Bikes",
    description:
      "All our bikes are carefully inspected and maintained to ensure your safety and comfort throughout your rental.",
  },
  {
    title: "24/7 Support",
    description:
      "If you encounter any issues, our team is available to provide quick assistance, wherever you are.",
  },
];

const Advantages: React.FC = () => {
  return (
    <section className="advantages">
      <h2 className="section-title">Why Rent with Us?</h2>
      <div className="advantages-grid">
        {advantages.map((adv, index) => (
          <div key={index} className="advantage-card">
            <h3>{adv.title}</h3>
            <p>{adv.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
