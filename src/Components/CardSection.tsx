import "./CardSection.css";
import cityBike from "../assets/cityBike.png";
import childrenBike from "../assets/childrenBike.png";
import mountainBike from "../assets/mountainBike.png";
import electricBike from "../assets/electricBike.png";
import { useNavigate } from "react-router-dom";

const CardSection = () => {
  const navigate = useNavigate();
  const bikeData = [
    {
      title: "City Bike",
      img: cityBike,
      halfDayPrice: "20€",
      fullDayPrice: "35€",
    },
    {
      title: "Children's Bike",
      img: childrenBike,
      halfDayPrice: "20€",
      fullDayPrice: "35€",
    },
    {
      title: "Electric Bike",
      img: electricBike,
      halfDayPrice: "40€",
      fullDayPrice: "60€",
    },
    {
      title: "Mountain Bike",
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
              <p className="card-price">Half Day: {bike.halfDayPrice}</p>
              <p className="card-price">Full Day: {bike.fullDayPrice}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="booking-section">
        <div className="booking-content">
          <p>- Helmets are included in the rental price</p>
          <p>- Child seats are available upon request only for city bikes</p>
        </div>
        <button className="button" onClick={() => navigate("/booking")}>
          Book Now
        </button>
      </section>
    </div>
  );
};

export default CardSection;
