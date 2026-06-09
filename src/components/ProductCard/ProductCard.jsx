import "./ProductCard.css";

function ProductCard({ nombre, precio, imagen }) {
  return (
    <div className="product-card">
      <img src={`/productos/${imagen}`} alt={nombre} />
      <h3>{nombre}</h3>
      <p>${precio}</p>
    </div>
  );
}

export default ProductCard;