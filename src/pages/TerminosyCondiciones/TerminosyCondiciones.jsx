import "./TerminosyCondiciones.css";

function TerminosyCondiciones() {
  return (
    <section className="terminos">
      <h1>🍰 Términos y Condiciones</h1>

      <p>
        En Sweet Yani elaboramos cada creación con dedicación, cariño y atención
        a los detalles. Para brindarte la mejor experiencia, te invitamos a leer
        las siguientes condiciones:
      </p>

      <div className="termino-card">
        <h2>💕 Pedidos</h2>
        <p>
          Recomendamos realizar los pedidos con al menos <strong>72 horas de
          anticipación</strong> para garantizar disponibilidad y la calidad que
          nos caracteriza.
        </p>
      </div>

      <div className="termino-card">
        <h2>📝 Confirmación de la Reserva</h2>
        <p>
          Tu fecha quedará reservada una vez recibida la <strong>seña
          correspondiente al 50% del valor total</strong>. Hasta ese momento,
          la disponibilidad no puede garantizarse.
        </p>
      </div>

      <div className="termino-card">
        <h2>💳 Formas de Pago</h2>
        <p>
          Aceptamos efectivo, transferencia bancaria y Mercado Pago.
        </p>
      </div>

      <div className="termino-card">
        <h2>🎂 Productos Personalizados</h2>
        <p>
          Cada producto es elaborado artesanalmente, por lo que pueden existir
          pequeñas variaciones en colores, decoraciones o detalles respecto a
          las imágenes de referencia.
        </p>
      </div>

      <div className="termino-card">
        <h2>🚚 Entregas</h2>
        <p>
          Realizamos entregas a domicilio según disponibilidad y zona de
          cobertura. Los costos y horarios serán coordinados al confirmar el
          pedido.
        </p>
      </div>

      <div className="termino-card">
        <h2>🔄 Cambios y Cancelaciones</h2>
        <p>
          Las modificaciones o cancelaciones deberán solicitarse con la mayor
          anticipación posible. Dependiendo del estado de elaboración del
          pedido, la seña podrá no ser reembolsable total o parcialmente.
        </p>
      </div>

      <div className="termino-card">
        <h2>✨ Calidad y Compromiso</h2>
        <p>
          Trabajamos con ingredientes seleccionados y elaboramos cada pedido con
          el máximo cuidado para ofrecer productos frescos y de excelente
          calidad.
        </p>
      </div>

      <p className="agradecimiento">
        💖 Gracias por elegir Sweet Yani para endulzar tus momentos más especiales.
      </p>
    </section>
  );
}

export default TerminosyCondiciones;

