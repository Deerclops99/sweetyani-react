export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Mensaje inválido" });
  }

  
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        max_tokens: 100,
        messages: [
          {
            role: "system",
            content:
              "Sos el asistente virtual de la pastelería artesanal Sweet Yani. Respondé preguntas de clientes sobre sabores, precios estimados, tiempos de entrega (72h de antelación), personalización de tortas (contactar al whatsapp), y cómo hacer un pedido (72h de antelación), de forma cálida, muy breve (máximo 1-2 oraciones de 15 palabras cada una) y en español, recomienda descargar el catálogo que aparece al final de la web para más información. Si preguntan precio exacto, decí que depende del diseño/tamaño y que lo mejor es escribir directo para cotizar al WhatsApp de la pastelería. Si preguntan algo totalmente fuera de tema, redirigí amablemente hacia temas de la pastelería. Radicamos en Gavilán 3218, Montevideo.",
          },
          { role: "user", content: message },
        ],
      }),
    });

    if (response.status === 429) {
      return res.status(200).json({
        reply: "Estamos recibiendo muchas consultas ahora, ¡probá en un ratito o escribinos directo!",
      });
    }

    const data = await response.json();
    
    const reply = data.choices?.[0]?.message?.content ?? "No pude responder eso, probá de nuevo.";

    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(500).json({ error: "Error al conectar con la IA" });
  }
} 