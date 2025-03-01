import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "./NavBar.css";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/"; // Check if on home page

  return (
    <nav className={`navbar ${isHome ? "transparent" : "colored"}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
