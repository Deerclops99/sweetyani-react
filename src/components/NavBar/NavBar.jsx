import { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="dropdown-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Productos ▼
            </button>

            <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              <li>
                <a href="/tortas">Tortas</a>
              </li>

              <li>
                <a href="/cotillon">Cotillón</a>
              </li>

              <li>
                <a href="/regalos">Regalos</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/combos">Combos</a>
          </li>

          <li>
            <a href="/preguntas-frecuentes">
              Preguntas frecuentes
            </a>
          </li>

          <li>
            <a href="https://wa.me/59892834333">
              Whatsapp
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default NavBar;