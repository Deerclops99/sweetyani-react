import "./PedidosySena.css";

function PedidosySena() {
  return (
    <section className="pedidos">
      <h1>📋 Pedidos y Seña</h1>

      <p>
        Para garantizar disponibilidad y brindarte el mejor servicio,
        recomendamos realizar tu pedido con al menos <strong>72 horas de anticipación</strong>.
      </p>

      <div className="pedido-card">
        <h2>💰 Reserva y Confirmación</h2>
        <ul>
          <li>Se solicita una seña del 50% del valor total del pedido.</li>
          <li>La fecha queda reservada únicamente luego de confirmado el pago de la seña.</li>
          <li>Las consultas y presupuestos no reservan fecha.</li>
          <li>La disponibilidad puede variar hasta que la seña sea abonada.</li>
        </ul>
      </div>

      <div className="pedido-card">
        <h2>🎂 Productos Personalizados</h2>
        <ul>
          <li>Los diseños se elaboran de forma artesanal.</li>
          <li>Las imágenes enviadas son tomadas como referencia.</li>
          <li>Pueden existir pequeñas variaciones en colores o detalles.</li>
        </ul>
      </div>

      <div className="pedido-card">
        <h2>🔄 Cambios y Cancelaciones</h2>
        <ul>
          <li>Las modificaciones deben solicitarse con anticipación.</li>
          <li>Las cancelaciones serán evaluadas según el estado de elaboración del pedido.</li>
        </ul>
      </div>

      <p className="agradecimiento">
        💖 Gracias por elegir Sweet Yani para endulzar tus momentos más especiales.
      </p>
    </section>
  );
}

export default PedidosySena;