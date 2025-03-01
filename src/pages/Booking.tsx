import React from "react";
import BookingHero from "../Components/BookingHero";
import Navbar from "../Components/NavBar";
import BookingForm from "../Components/BookingForm";

const Booking: React.FC = () => {
  return (
    <div>
      <BookingHero />
      <BookingForm />
    </div>
  );
};

export default Booking;
