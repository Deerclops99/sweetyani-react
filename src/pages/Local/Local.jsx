import "./Local.css";

function Local() {
  return (
    <section className="local">
      <h1>Visítanos</h1>




         <p className="local-texto">
           📍 Nos encontramos en <strong>Gavilán 3218 y Callao</strong>,
              cerca del <strong>Antel Arena</strong>.
         </p>
      <iframe
        title="Ubicación"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.971255869768!2d-56.1480877247713!3d-34.856949570915184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f809c8318f225%3A0xa2458be2120ec989!2sGavil%C3%A1n%203218%2C%2012000%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses!2suy!4v1781308252045!5m2!1ses!2suy"
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: "20px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

export default Local;