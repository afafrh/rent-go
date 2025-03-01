import React from "react";
import { useTranslation } from "react-i18next";
import "./Advantages.css";

const Advantages: React.FC = () => {
  const { t } = useTranslation();

  const advantages = [
    {
      title: t("advantages.wide_selection.title"),
      description: t("advantages.wide_selection.description"),
    },
    {
      title: t("advantages.suggested_routes.title"),
      description: t("advantages.suggested_routes.description"),
    },
    {
      title: t("advantages.well_maintained.title"),
      description: t("advantages.well_maintained.description"),
    },
    {
      title: t("advantages.support.title"),
      description: t("advantages.support.description"),
    },
  ];

  return (
    <section className="advantages">
      <h2 className="section-title">{t("why_rent")}</h2>
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
