import { Link } from "react-router-dom";
import "./Cotillon.css";

function Cotillon() {
  return (
    <div className="cotillon-mantenimiento">
      <h1>🚧 Página en mantenimiento 🚧</h1>

      <p>
        Estamos preparando nuevos productos y promociones para ti.
        Vuelve pronto para descubrir nuestras novedades.
      </p>

      <Link to="/" className="btn-volver">
        Volver al Inicio
      </Link>
    </div>
  );
}

export default Cotillon;
