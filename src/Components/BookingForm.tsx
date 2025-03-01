import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "./BookingForm.css";

const BookingForm = () => {
  const { t } = useTranslation();

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

    emailjs
      .send(
        "service_16pucj2",
        "template_8vasc6k",
        { ...formData },
        "ZbQ4XA8u2oOGkDeOC"
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );

    emailjs
      .send(
        "service_16pucj2",
        "template_zrh1jdo",
        { ...formData },
        "ZbQ4XA8u2oOGkDeOC"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(true);
        },
        (error) => console.log(error.text)
      );
  };

  return (
    <div className="booking-container">
      {!formSubmitted ? (
        <form className="booking-form" onSubmit={handleSubmit}>
          <h2>{t("booking_form")}</h2>

          <label htmlFor="duration">{t("duration")}*</label>
          <select
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          >
            <option value="">{t("select_duration")}</option>
            <option value="Half Day">{t("half_day")}</option>
            <option value="Full Day">{t("full_day")}</option>
          </select>

          <label htmlFor="date">{t("select_date")}*</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="time">{t("select_time")}*</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <label htmlFor="bike">{t("select_bike")}*</label>
          <select
            id="bike"
            name="bike"
            value={formData.bike}
            onChange={handleChange}
            required
          >
            <option value="">{t("select_bike")}</option>
            <option value="City Bike">{t("bike_options.city_bike")}</option>
            <option value="Children's Bike">
              {t("bike_options.child_bike")}
            </option>
            <option value="Mountain Bike">
              {t("bike_options.mountain_bike")}
            </option>
            <option value="Electric Bike">
              {t("bike_options.electric_bike")}
            </option>
          </select>

          <label htmlFor="riders">{t("riders")}*</label>
          <input
            type="number"
            id="riders"
            name="riders"
            value={formData.riders}
            onChange={handleChange}
            required
            min="1"
          />

          <label>{t("child_seat")}</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="childSeat"
                value="Yes"
                onChange={handleChange}
                checked={formData.childSeat === "Yes"}
              />{" "}
              {t("yes")}
            </label>
            <label>
              <input
                type="radio"
                name="childSeat"
                value="No"
                onChange={handleChange}
                checked={formData.childSeat === "No"}
              />{" "}
              {t("no")}
            </label>
          </div>

          {/* Contact Information */}
          <h3>{t("contact_information")}</h3>

          <label htmlFor="fullName">{t("full_name")}*</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">{t("email")}*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">{t("phone")}*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="note">{t("note")}</label>
          <textarea
            id="note"
            name="note"
            value={formData.note}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="submit-btn">
            {t("confirm_booking")}
          </button>
        </form>
      ) : (
        <div className="thank-you-message">
          <p>{t("thank_you")}</p>
          <button
            onClick={() => (window.location.href = "/")}
            className="return-home-btn"
          >
            {t("return_home")}
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
