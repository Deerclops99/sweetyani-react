import "./ChatWidget.css";

export default function ChatWidget() {
  const telefono = "59891861783";
  const mensaje = encodeURIComponent(
    "Hola, quiero hacer una consulta sobre tus tortas"
  );

  function abrirWhatsApp() {
    window.open(
      `https://wa.me/${telefono}?text=${mensaje}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="chat-widget">
      <button
        onClick={abrirWhatsApp}
        className="chat-toggle"
        aria-label="Contactar por WhatsApp"
        title="Contactar por WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.04 3C8.86 3 3.04 8.82 3.04 16c0 2.29.6 4.44 1.74 6.32L3 29l6.86-1.75A12.94 12.94 0 0 0 16.04 29C23.22 29 29.04 23.18 29.04 16S23.22 3 16.04 3Zm0 23.65c-2.04 0-4.04-.55-5.78-1.6l-.41-.24-4.07 1.04 1.08-3.97-.27-.43A10.88 10.88 0 0 1 5.1 16c0-6.03 4.91-10.94 10.94-10.94S26.98 9.97 26.98 16s-4.91 10.65-10.94 10.65Zm5.99-8.15c-.33-.17-1.95-.96-2.25-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.17-1.4-.52-2.67-1.65-.99-.88-1.66-1.97-1.85-2.3-.19-.33-.02-.51.14-.68.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.58-.08-.17-.74-1.79-1.01-2.45-.27-.65-.54-.56-.74-.57h-.63c-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.74s1.18 3.18 1.34 3.4c.16.22 2.32 3.54 5.63 4.97.79.34 1.4.54 1.88.69.79.25 1.51.21 2.08.13.64-.1 1.95-.8 2.22-1.57.27-.77.27-1.43.19-1.57-.08-.14-.3-.22-.63-.38Z" />
        </svg>
      </button>
    </div>
  );
}
