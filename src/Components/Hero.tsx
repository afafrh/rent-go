import "./Hero.css";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="hero-title">The Perfect Bike for Every Ride!</h1>
          <p className="hero-description">
            From city streets to mountain trails, we’ve got the perfect bike for
            you. Rent hassle-free today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
