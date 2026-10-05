import { Link } from "react-router-dom";
import "./Apps.css";

function Apps() {
  return (
    <div className="apps-mantenimiento">
      <h1>🚧 Página en mantenimiento 🚧</h1>

      <p>
        Estamos creando nuevas apps y promociones para ti.
        Vuelve pronto para descubrir nuestras novedades.
      </p>

      <Link to="/" className="btn-volver">
        Volver al Inicio
      </Link>
    </div>
  );
}

export default Apps;
