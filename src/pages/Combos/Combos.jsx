import { useState } from "react";
import "./Combos.css";

function Combos() {
  const [posicion, setPosicion] = useState({
    top: "50%",
    left: "50%",
  });

  const moverBoton = () => {
    const top = Math.random() * 80;
    const left = Math.random() * 80;

    setPosicion({
      top: `${top}%`,
      left: `${left}%`,
    });
  };

  return (
    <div className="combos-page">
      <h1>🎁 ¡Combo Gratis!</h1>

      <button
        className="boton-loco"
        style={posicion}
        onMouseEnter={moverBoton}
        onClick={moverBoton}
      >
        Combo gratis al dar clic acá
      </button>
    </div>
  );
}

export default Combos;