import React from 'react';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
  <div className="footer-content">

    <div className="footer-section">
      <ul>
        <li><a href="productos">Productos</a></li>
        <li><a href="nosotros">Nosotros</a></li>
        <li><a href="local">Local</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <ul>
        <li><a href="terminos">Términos y condiciones</a></li>
        <li><a href="pedidos">Pedidos y seña</a></li>
        <li><a href="trabaja">Trabajá con nosotros</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <ul>
        <li><a href="https://www.instagram.com/sweetyani.uy/">Instagram</a></li>
        <li><a href="https://wa.me/59892834333">Whatsapp</a></li>
        <li><a href="/menu2026.pdf" download>Descargar Catálogo</a></li>
      </ul>
    </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Sweet Yani</p>
                <p>By Vicsign99</p>
            </div>
        </footer>
    );
}
