import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import Booking from "./pages/Booking";
import "./i18n";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
}

export default App;
