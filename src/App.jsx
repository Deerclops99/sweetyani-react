import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop"; // ajusta ruta si cambia

import Inicio from "./pages/Inicio/Inicio";
import Productos from "./pages/Productos/Productos";
import MesaDulce from "./pages/MesaDulce/MesaDulce";
import Promos from "./pages/Promos/Promos";
import Tortas from "./pages/Tortas/Tortas";
import Apps from "./pages/Apps/Apps";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes/PreguntasFrecuentes";
import Nosotros from "./pages/Nosotros/Nosotros";
import Local from "./pages/Local/Local";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad/PoliticaPrivacidad";
import PedidosySena from "./pages/PedidosySena/PedidosySena";
import TrabajaconNosotros from "./pages/TrabajaconNosotros/TrabajaconNosotros";
import ChatWidget from "./components/ChatWidget";
import Recetas from "./pages/Recetas/Recetas";


import Footer from './components/Footer/Footer';

import "./App.css";

function Telarana({ className }) {
  return (
    <svg
      className={`telarana ${className}`}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* hilos radiales desde la esquina (0,0) */}
      <g>
        <line x1="0" y1="0" x2="100" y2="0" />
        <line x1="0" y1="0" x2="95" y2="30" />
        <line x1="0" y1="0" x2="75" y2="65" />
        <line x1="0" y1="0" x2="50" y2="90" />
        <line x1="0" y1="0" x2="20" y2="98" />
        <line x1="0" y1="0" x2="0" y2="100" />
      </g>
      {/* hilos curvos entre los radiales */}
      <path d="M22 0 Q18 18 0 22" />
      <path d="M42 0 Q36 30 0 42" />
      <path d="M62 0 Q55 45 0 62" />
      <path d="M82 0 Q72 62 0 82" />
      <path d="M100 0 Q90 80 0 100" />
    </svg>
  );
}



function App() {
  return (
    <>
      {/* Murciélago de Halloween */}
      <div className="murcielago" aria-hidden="true">
        <div className="murcielago-vaiven">
          <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
            {/* ala izquierda */}
            <g className="ala ala-izq">
              <path d="M44 24 C30 8 12 12 2 24 C10 22 14 28 20 34 C24 28 30 32 34 38 C38 32 42 34 44 34 Z" />
            </g>
            {/* ala derecha (espejo) */}
            <g transform="translate(100,0) scale(-1,1)">
              <g className="ala ala-der">
                <path d="M44 24 C30 8 12 12 2 24 C10 22 14 28 20 34 C24 28 30 32 34 38 C38 32 42 34 44 34 Z" />
              </g>
            </g>
            {/* cuerpo y orejas */}
            <ellipse cx="50" cy="28" rx="6" ry="10" />
            <polygon points="45,20 46,10 50,18" />
            <polygon points="55,20 54,10 50,18" />
            <circle cx="47.5" cy="24" r="1.2" fill="#ff3b3b" />
            <circle cx="52.5" cy="24" r="1.2" fill="#ff3b3b" />
          </svg>
        </div>
      </div>
      
      {/* Telarañas de Halloween */}
      <Telarana className="telarana-sup-der" />
      <Telarana className="telarana-inf-izq" />

      <BrowserRouter>
        <Header />
        <ScrollToTop />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/mesadulce" element={<MesaDulce />} />
            <Route path="/promos" element={<Promos />} />
            <Route path="/tortas" element={<Tortas />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/recetas" element={<Recetas />} />
            <Route path="/local" element={<Local />} />
            <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/pedidos" element={<PedidosySena />} />
            <Route path="/trabaja" element={<TrabajaconNosotros />} />
          </Routes>
        </main>

        <Footer />
        <ChatWidget />
      </BrowserRouter>
    </>
    
  );
}

export default App;
