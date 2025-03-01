import React from "react";
import logo from "../assets/logo.png";
import "./Footer.css";
import { useTranslation } from "react-i18next"; // Import translation hook

const Footer = () => {
  const { t } = useTranslation(); // Get translation function

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Your Logo" className="logo" />
        </div>
        <div className="footer-contact">
          <p>{t("contact_us")}</p>
          <p>{t("our_phone")}</p>
          <p>{t("our_email")}</p>
        </div>
        <div className="footer-socials">
          <a
            href="https://www.facebook.com/profile.php?id=61573503928482"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook" /> {/* Facebook icon */}
          </a>
          <a
            href="https://www.instagram.com/rent_and_gooo/?igsh=NndiNWN0Y3phYTNx#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram" /> {/* Instagram icon */}
          </a>
          <a
            href="mailto:rentandgo.lecco@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope" /> {/* Envelope icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
