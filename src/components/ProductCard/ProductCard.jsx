import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ nombre, precio, imagen, descripcion }) {
  const [girada, setGirada] = useState(false);

  return (
    <div
      className={`product-card-flip ${girada ? "girada" : ""}`}
      onClick={() => setGirada(!girada)}
    >
      <div className="card-inner">

        {/* Frente */}
        <div className="card-front">
          <img src={`/productos/${imagen}`} alt={nombre} />
          <h3>{nombre}</h3>
          <p>${precio}</p>

          <span className="ver-detalles">
            Ver detalles →
          </span>
        </div>

        {/* Atrás */}
        <div className="card-back">
          <h3>{nombre}</h3>
          <p>{descripcion}</p>

          <span className="ver-detalles">
            ← Volver
          </span>
        </div>

      </div>
    </div>
  );
}

export default ProductCard; 