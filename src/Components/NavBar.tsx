import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import "./NavBar.css";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { t } = useTranslation();

  return (
    <nav className={`navbar ${isHome ? "transparent" : "colored"}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      {isHome && <span>{t("navbar_home")}</span>}
    </nav>
  );
};

export default Navbar;
