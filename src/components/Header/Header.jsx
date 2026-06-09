import "./Header.css";
import logo from "../../assets/logos/logo.png";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <Link to="/" className="logo-link">
          <img
            src={logo}
            alt="Sweet Yani"
            className="logo"
          />

          <h1 className="brand-name">
            Sweet Yani
          </h1>
        </Link>

        <NavBar />

      </div>
    </header>
  );
}

export default Header;