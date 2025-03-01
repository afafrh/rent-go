import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <section className="location-section">
      <div className="location-info">
        <h2>Location & Pickup Points</h2>
        <p>
          We are located in <strong>Lecco</strong>, an ideal city to explore by
          bike.
        </p>
        <p>You can easily collect and return your bike.</p>
        <p>
          <strong>For more information, feel free to contact us at:</strong>
          <br />
          📞 <a href="tel:+393318279957">+39 331-827-9957</a>
        </p>
        <p>
          <strong>Our pickup point address:</strong>
          <br />
          📍 Via Battello, Lecco, Italy
        </p>
      </div>

      <div className="location-map">
        <iframe
          title="Lecco Bike Rental Location"
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
