import "./PedidosySena.css";

function PedidosySena() {
  return (
    <section className="pedidos">
      <h1>📋 Pedidos y Seña</h1>

      <p>
        En Sweet Yani elaboramos cada creación con dedicación, cariño y atención
        a los detalles. Para garantizar disponibilidad y la calidad que nos
        caracteriza, realizá tu pedido con al menos{" "}
        <strong>72 horas de anticipación</strong>.
      </p>

      <div className="pedido-card">
        <h2>💰 Reserva y Confirmación</h2>
        <ul>
          <li>
            Se solicita una seña del <strong>50% del valor total</strong> del
            pedido.
          </li>
          <li>
            La fecha queda reservada únicamente luego de confirmado el pago de
            la seña.
          </li>
          <li>Las consultas y presupuestos no reservan fecha.</li>
          <li>
            Hasta que la seña sea abonada, la disponibilidad no puede
            garantizarse.
          </li>
        </ul>
      </div>

      <div className="pedido-card">
        <h2>💳 Formas de Pago</h2>
        <p>Aceptamos efectivo y transferencia bancaria.</p>
      </div>

      <div className="pedido-card">
        <h2>🎂 Productos Personalizados</h2>
        <ul>
          <li>Cada producto se elabora de forma artesanal.</li>
          <li>Las imágenes enviadas son tomadas como referencia.</li>
          <li>
            Pueden existir pequeñas variaciones en colores, decoraciones o
            detalles.
          </li>
        </ul>
      </div>

      <div className="pedido-card">
        <h2>🚚 Entregas y Retiros</h2>
        <p>
          Realizamos entregas a domicilio según disponibilidad y zona de
          cobertura. Los costos se coordinan al confirmar el pedido.
        </p>
        <div className="horarios">
          <div className="horario">
            <span>Lunes a viernes</span>
            <strong>de 17 a 21 horas</strong>
          </div>
          <div className="horario">
            <span>Sábados</span>
            <strong>de 8 a 12 horas</strong>
          </div>
        </div>
      </div>

      <div className="pedido-card">
        <h2>🔄 Cambios y Cancelaciones</h2>
        <ul>
          <li>
            Las modificaciones y cancelaciones deben solicitarse con la mayor
            anticipación posible.
          </li>
          <li>
            Se evalúan según el estado de elaboración del pedido; por eso la
            seña puede no ser reembolsable, total o parcialmente.
          </li>
        </ul>
      </div>

      <div className="pedido-card pedido-card--aviso">
        <h2>📦 Retiro fuera de la fecha acordada</h2>
        <p>
          Sweet Yani queda exonerado de cualquier reclamo relacionado con la
          calidad, frescura, presentación o estado del producto cuando este sea
          retirado después de la fecha acordada.
        </p>
      </div>

      <div className="pedido-card">
        <h2>✨ Calidad y Compromiso</h2>
        <p>
          Trabajamos con ingredientes seleccionados y elaboramos cada pedido con
          el máximo cuidado para ofrecer productos frescos y de excelente
          calidad.
        </p>
      </div>

      <p className="agradecimiento">
        💖 Gracias por elegir Sweet Yani para endulzar tus momentos más
        especiales.
      </p>
    </section>
  );
}

export default PedidosySena;
