import "./Hero.css";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="hero-title">{t("hero_title")}</h1>
          <p className="hero-description">{t("hero_description")}</p>{" "}
        </div>
        <div className="language-button">
          <LanguageSelector />
        </div>
      </div>
    </section>
  );
};

export default Hero;
