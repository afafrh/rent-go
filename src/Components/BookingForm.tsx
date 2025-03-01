import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import "./BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    duration: "",
    date: "",
    time: "",
    bike: "",
    riders: "",
    childSeat: "",
    fullName: "",
    email: "",
    phone: "",
    note: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send email to the business owner
    emailjs
      .send(
        "service_9rqzk2b",
        "template_2gg2j4n",
        {
          duration: formData.duration,
          date: formData.date,
          time: formData.time,
          bike: formData.bike,
          riders: formData.riders,
          childSeat: formData.childSeat,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          note: formData.note,
        },
        "1qPYXYDHFGCKyXosD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Send email to the user using the new template ID
    emailjs
      .send(
        "service_9rqzk2b", // Same service ID
        "template_44eusuc", // Updated template ID for user confirmation email
        {
          duration: formData.duration,
          date: formData.date,
          time: formData.time,
          bike: formData.bike,
          riders: formData.riders,
          childSeat: formData.childSeat,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          note: formData.note,
        },
        "1qPYXYDHFGCKyXosD" // Your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(true); // Display thank you message after successful submission
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="booking-container">
      {!formSubmitted ? (
        <form className="booking-form" onSubmit={handleSubmit}>
          <h2>Booking Form</h2>

          {/* Duration */}
          <label htmlFor="duration">Duration*</label>
          <select
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          >
            <option value="">Select Duration</option>
            <option value="Half Day">Half Day</option>
            <option value="Full Day">Full Day</option>
          </select>

          {/* Date */}
          <label htmlFor="date">Select Date*</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          {/* Time */}
          <label htmlFor="time">Select Time*</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          {/* Bike */}
          <label htmlFor="bike">Select Your Bike*</label>
          <select
            id="bike"
            name="bike"
            value={formData.bike}
            onChange={handleChange}
            required
          >
            <option value="">Select Bike</option>
            <option value="City Bike">City Bike</option>
            <option value="Children's Bike">Children's Bike</option>
            <option value="Mountain Bike">Mountain Bike</option>
            <option value="Electric Bike">Electric Bike</option>
          </select>

          {/* Number of Riders */}
          <label htmlFor="riders">Number of Riders*</label>
          <input
            type="number"
            id="riders"
            name="riders"
            value={formData.riders}
            onChange={handleChange}
            required
            min="1"
          />

          {/* Children’s Seat */}
          <label>Children’s Seat (Optional)</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="childSeat"
                value="Yes"
                onChange={handleChange}
                checked={formData.childSeat === "Yes"}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="childSeat"
                value="No"
                onChange={handleChange}
                checked={formData.childSeat === "No"}
              />
              No
            </label>
          </div>

          {/* Contact Information */}
          <label htmlFor="fullName">Full Name*</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone Number*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="note">Note (Optional)</label>
          <textarea
            id="note"
            name="note"
            value={formData.note}
            onChange={handleChange}
          ></textarea>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Confirm Booking
          </button>
        </form>
      ) : (
        <div className="thank-you-message">
          <p>
            Thank you for your reservation 🎉 We will reach out to you shortly
            to confirm your booking.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="return-home-btn"
          >
            Return to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
