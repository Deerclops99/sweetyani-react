import "./TrabajaconNosotros.css";

function TrabajaconNosotros() {
  return (
    <section className="trabaja">
      <h1>✨ Trabajá con Nosotros</h1>

      <p className="intro">
        En Sweet Yani creemos que los grandes equipos crean grandes experiencias.
        Si te apasiona la pastelería, la atención al cliente o quieres crecer junto
        a nosotros, nos encantaría conocerte.
      </p>

      <form
        action="https://formsubmit.co/8afc90fec6bcebbad5dd0e786623f8c5"
        method="POST"
        encType="multipart/form-data"
        className="trabaja-form"
      >
        <input
          type="hidden"
          name="_subject"
          value="Nueva postulación - Sweet Yani"
        />

        <input
          type="text"
          name="nombre"
          placeholder="Nombre y Apellidos"
          required
        />

        <input
          type="text"
          name="profesion"
          placeholder="Profesión o Área de Interés"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          required
        />

        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
        />

        <label className="file-label">
          📄 Adjuntar CV
          <input
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx"
            required
          />
        </label>

        <button type="submit">
          Enviar Postulación
        </button>
      </form>
    </section>
  );
}

export default TrabajaconNosotros;
