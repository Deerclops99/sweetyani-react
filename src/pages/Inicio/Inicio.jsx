import { Link } from "react-router-dom";
import "./Inicio.css";

import { useState, useEffect } from "react";

const imagenes = [
  "/images/torta1.avif",
  "/images/torta2.avif",
  "/images/torta3.avif",
  "/images/torta4.avif",
  "/images/torta5.avif",
];

function Inicio() {
  const [imagenActual, setImagenActual] = useState(0);

useEffect(() => {
  const intervalo = setInterval(() => {
    setImagenActual((prev) => (prev + 1) % imagenes.length);
  }, 5000);

  return () => clearInterval(intervalo);
}, []);
  return (
    <div className="inicio">
      {/* Hero Section */}
      <section className="hero">
        <div
  className="hero-slide active"
  style={{
    backgroundImage: `url(${imagenes[imagenActual]})`,
  }}
></div>
        <div className="hero-content">
          <h1>Tu próxima celebración empieza acá</h1>
          <p>Cada festejo cuenta una historia. Hacelo inolvidable.</p>
          <Link to="/productos" className="btn btn-primary">
            Ver Catálogo
          </Link>
        </div>
      </section>

      {/* Categorías */}
      <section className="categorias">
        <h2>Nuestras Categorías</h2>
        <div className="categorias-grid">
          <div className="categoria-card">
            <div className="categoria-icon">🎉</div>
            <h3>Cotillón</h3>
            <p>Accesorios y decoraciones para tus fiestas</p>
            <Link to="/cotillon" className="btn btn-secondary">
              Ver Más
            </Link>
          </div>

          <div className="categoria-card">
            <div className="categoria-icon">🎁</div>
            <h3>Regalos</h3>
            <p>Ideas perfectas para sorprender</p>
            <Link to="/regalos" className="btn btn-secondary">
              Ver Más
            </Link>
          </div>

          <div className="categoria-card">
            <div className="categoria-icon">🎂</div>
            <h3>Tortas</h3>
            <p>Deliciosas tortas personalizadas</p>
            <Link to="/tortas" className="btn btn-secondary">
              Ver Más
            </Link>
          </div>

          <div className="categoria-card">
            <div className="categoria-icon">🎊</div>
            <h3>Combos</h3>
            <p>Paquetes especiales con descuentos</p>
            <Link to="/combos" className="btn btn-secondary">
              Ver Más
            </Link>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="caracteristicas">
        <h2>¿Por qué elegir Sweet Yani?</h2>
        <div className="caracteristicas-grid">
          <div className="caracteristica">
            <h4>Calidad Premium</h4>
            <p>Productos de alta calidad garantizados</p>
          </div>
          <div className="caracteristica">
            <h4>Amplia Variedad</h4>
            <p>Tortas, regalos, cotillón y mucho más</p>
          </div>
          <div className="caracteristica">
            <h4>Precios Competitivos</h4>
            <p>Los mejores precios del mercado</p>
          </div>
          <div className="caracteristica">
            <h4>Atención Personalizada</h4>
            <p>Te ayudamos a encontrar el regalo ideal</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>¿Tienes dudas?</h2>
        <p>Consulta nuestras preguntas frecuentes</p>
        <Link to="/preguntas-frecuentes" className="btn btn-primary">
          Ver Preguntas Frecuentes
        </Link>
      </section>
    </div>
  );
}

export default Inicio;