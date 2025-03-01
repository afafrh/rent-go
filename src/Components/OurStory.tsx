import "./OurStory.css";
import storyImage from "../assets/ourStorybike.png";

const OurStory = () => {
  return (
    <section className="our-story">
      <div className="story-text">
        <h2 className="story-title">Our Story</h2>
        <p>
          Our journey began with a deep passion for cycling and a love for
          adventure. We believe that a bike is more than just a mode of
          transport—it’s a gateway to freedom, exploration, and unforgettable
          experiences. Whether it’s the thrill of conquering rugged mountain
          trails, the joy of breezing through city streets, or the simple
          pleasure of a leisurely ride, we wanted to create something that
          caters to every rider’s unique journey.
        </p>
        <p>
          That’s why our mission is to provide high-quality bikes that empower
          every explorer. From sleek, reliable commuters designed for urban
          mobility to durable, high-performance mountain bikes built for the
          toughest terrains, we ensure that every ride is smooth, comfortable,
          and built to last.
        </p>
        <p>
          No matter where your path leads, we’re here to help you embrace the
          ride. Join us and discover the world on two wheels—because your next
          great adventure starts today!
        </p>
      </div>
      <div className="story-image">
        <img src={storyImage} alt="Our story" />
      </div>
    </section>
  );
};

export default OurStory;
