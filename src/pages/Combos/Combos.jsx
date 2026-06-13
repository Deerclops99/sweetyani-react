import { Link } from "react-router-dom";
import "./Combos.css";

function Combos() {
  return (
    <div className="combos-mantenimiento">
      <h1>🚧 Página en mantenimiento 🚧</h1>

      <p>
        Estamos preparando nuevos combos y promociones para ti.
        Vuelve pronto para descubrir nuestras novedades.
      </p>

      <Link to="/" className="btn-volver">
        Volver al Inicio
      </Link>
    </div>
  );
}

export default Combos;
