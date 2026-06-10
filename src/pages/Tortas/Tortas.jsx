import "./Tortas.css";

import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import ProductCard from "../../components/ProductCard/ProductCard";

function Tortas() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/data/productos.xlsx")
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        const workbook = XLSX.read(ab);
        const hoja = workbook.Sheets[workbook.SheetNames[0]];
        const datos = XLSX.utils.sheet_to_json(hoja);

        const tortas = datos.filter(
          (producto) => producto.Categoria === "Tortas"
        );

        setProductos(tortas);
      });
  }, []);

  return (
    <div className="productos-container">
      {productos.map((producto, index) => (
        <ProductCard
          key={index}
          nombre={producto.Nombre}
          precio={producto.Precio}
          imagen={producto.Imagen}
          descripcion={producto.Descripcion}
        />
      ))}
    </div>
  );
}

export default Tortas;