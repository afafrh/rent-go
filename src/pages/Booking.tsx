import React from "react";
import BookingHero from "../Components/BookingHero";
import BookingForm from "../Components/BookingForm";
import LanguageSelector from "../Components/LanguageSelector";

const Booking: React.FC = () => {
  return (
    <div>
      
      <BookingHero />
      <BookingForm />
    </div>
  );
};

export default Booking;
