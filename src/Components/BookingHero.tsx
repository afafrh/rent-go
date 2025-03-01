import { useTranslation } from "react-i18next";
import "./BookingHero.css";
import LanguageSelector from "./LanguageSelector";

const BookingHero = () => {
  const { t } = useTranslation();

  return (
    <section className="booking-hero">
      <div className="booking-hero-overlay">
        <div className="booking-hero-content">
          <h1 className="booking-hero-title">{t("booking_hero_title")}</h1>
        </div>
        <div className="language-button">
          <LanguageSelector />
        </div>
      </div>
    </section>
  );
};

export default BookingHero;
