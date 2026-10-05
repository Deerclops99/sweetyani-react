import { Link } from "react-router-dom";
import "./Inicio.css";
import { useState, useEffect, useRef } from "react";

const imagenes = [
  "/images/torta1.avif",
  "/images/torta2.avif",
  "/images/torta3.avif",
  "/images/torta4.avif",
  "/images/torta5.avif",
];

const categorias = [
  {
    icono: "🧁",
    nombre: "Mesa Dulce",
    descripcion: "Mesas dulces para cumpleaños, casamientos y eventos",
    ruta: "/mesadulce",
  },
  {
    icono: "🎂",
    nombre: "Tortas",
    descripcion: "Deliciosas tortas personalizadas",
    ruta: "/tortas",
  },
  {
    icono: "🏷️",
    nombre: "Promos",
    descripcion: "Combos y ofertas especiales con descuentos",
    ruta: "/promos",
  },
  {
    icono: "📱",
    nombre: "Apps",
    descripcion: "Pequeñas apps que resuelven grandes dolores de cabeza",
    ruta: "/apps",
  },
];

function Inicio() {
  const [imagenActual, setImagenActual] = useState(0);
  const [imagenAnterior, setImagenAnterior] = useState(null);
  const timeoutRef = useRef(null);

  // Precargar todas las imágenes al montar
  useEffect(() => {
    imagenes.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenAnterior(imagenActual);
      setImagenActual((prev) => (prev + 1) % imagenes.length);

      // Limpiar la imagen anterior después de que termine el fade
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setImagenAnterior(null);
      }, 1000); // debe coincidir con la duración de la transición en CSS
    }, 5000);

    return () => {
      clearInterval(intervalo);
      clearTimeout(timeoutRef.current);
    };
  }, [imagenActual]);

  return (
    <div className="inicio">
      {/* Hero Section */}
      <section className="hero">
        {imagenAnterior !== null && (
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${imagenes[imagenAnterior]})`, opacity: 0 }}
          ></div>
        )}
        <div
          key={imagenActual}
          className="hero-slide active"
          style={{ backgroundImage: `url(${imagenes[imagenActual]})` }}
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
          {categorias.map((cat) => (
            <div className="categoria-card" key={cat.ruta}>
              <div className="categoria-icon" aria-hidden="true">
                {cat.icono}
              </div>
              <h3>{cat.nombre}</h3>
              <p>{cat.descripcion}</p>
              <Link
                to={cat.ruta}
                className="btn btn-secondary"
                aria-label={`Ver más de ${cat.nombre}`}
              >
                Ver Más
              </Link>
            </div>
          ))}
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
            <p>Tortas, mesas dulces, promos y mucho más</p>
          </div>
          <div className="caracteristica">
            <h4>Precios Competitivos</h4>
            <p>Los mejores precios del mercado</p>
          </div>
          <div className="caracteristica">
            <h4>Atención Personalizada</h4>
            <p>Te ayudamos a armar la celebración ideal</p>
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
