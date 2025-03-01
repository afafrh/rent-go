import React from "react";
import "./Location.css";
import { useTranslation } from "react-i18next"; // Import translation hook

const Location = () => {
  const { t } = useTranslation(); // Get translation function

  return (
    <section className="location-section">
      <div className="location-info">
        <h2>{t("location_title")}</h2> {/* Location Title */}
        <p
          dangerouslySetInnerHTML={{ __html: t("location_description") }}
        />{" "}
        {/* Description with HTML */}
        <p>{t("location_pickup_info")}</p> {/* Pickup Information */}
        <p>
          <strong>{t("location_contact_info")}</strong>
          <br />
          {t("location_phone")}
        </p>
        <p>
          <strong>{t("location_address")}</strong>
          <br />
          📍 Via Battello, Lecco, Italy
        </p>
      </div>

      <div className="location-map">
        <iframe
          title={t("location_map_title")}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10964.932321982634!2d9.3895123!3d45.8553645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47841b0f34d663f5%3A0x1dcb2b69a80b7e02!2sVia%20Battello%2C%20Lecco%2C%20Italy!5e0!3m2!1sen!2sus!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
