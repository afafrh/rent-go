import { useTranslation } from "react-i18next";
import "./CardSection.css";
import cityBike from "../assets/cityBike.png";
import childrenBike from "../assets/childrenBike.png";
import mountainBike from "../assets/mountainBike.png";
import electricBike from "../assets/electricBike.png";
import { useNavigate } from "react-router-dom";

const CardSection = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const navigate = useNavigate();
  const bikeData = [
    {
      title: t("bike_options.city_bike"), // Translated title
      img: cityBike,
      halfDayPrice: "20€",
      fullDayPrice: "35€",
    },
    {
      title: t("bike_options.child_bike"), // Translated title
      img: childrenBike,
      halfDayPrice: "20€",
      fullDayPrice: "35€",
    },
    {
      title: t("bike_options.electric_bike"), // Translated title
      img: electricBike,
      halfDayPrice: "40€",
      fullDayPrice: "60€",
    },
    {
      title: t("bike_options.mountain_bike"), // Translated title
      img: mountainBike,
      halfDayPrice: "25€",
      fullDayPrice: "40€",
    },
  ];

  return (
    <div>
      <section className="card-section">
        {bikeData.map((bike, index) => (
          <div key={index} className="card">
            <img src={bike.img} alt={bike.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{bike.title}</h3>
              <p className="card-price">
                {t("half_day")}: {bike.halfDayPrice}
              </p>{" "}
              <p className="card-price">
                {t("full_day")}: {bike.fullDayPrice}
              </p>{" "}
            </div>
          </div>
        ))}
      </section>
      <section className="booking-section">
        <div className="booking-content">
          <p>{t("helmets_included")}</p>
          <p>{t("child_seats_available")}</p>
        </div>
        <button className="button" onClick={() => navigate("/booking")}>
          {t("book_now")}
        </button>
      </section>
    </div>
  );
};

export default CardSection;
