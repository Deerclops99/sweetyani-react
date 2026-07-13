import { useState, useRef, useEffect } from "react";
import "./ChatWidget.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "ai", text: "¡Hola! ¿Buscás una torta para alguna ocasión especial? Preguntame lo que necesites 🍰" },
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, loading]);

  async function handleSubmit(e) {
    e.preventDefault();
    const question = input.trim();
    if (!question || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { sender: "user", text: question }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "ai", text: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { sender: "ai", text: "Hubo un error, intentá de nuevo." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-window">
          <div className="chat-header">Asistente IA de Sweet Yani</div>

          <div ref={scrollRef} className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`chat-row ${m.sender === "user" ? "chat-row-user" : ""}`}>
                <span className={`chat-bubble ${m.sender === "user" ? "chat-bubble-user" : "chat-bubble-ai"}`}>
                  {m.text}
                </span>
              </div>
            ))}
            {loading && <div className="chat-typing">Escribiendo...</div>}
          </div>

          <form onSubmit={handleSubmit} className="chat-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribí tu consulta..."
              disabled={loading}
              className="chat-input"
            />
            <button type="submit" disabled={loading} className="chat-send">
              ➤
            </button>
          </form>
        </div>
      )}

      <button onClick={() => setOpen((o) => !o)} className="chat-toggle" aria-label="Abrir chat">
        💬
      </button>
    </div>
  );
} 