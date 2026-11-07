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
  const brazos = [0, 60, 120, 180, 240, 300];
  return (
    <svg
      className={`telarana ${className}`}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 6 brazos del copo, cada uno con sus ramitas */}
      {brazos.map((angulo) => (
        <g key={angulo} transform={`rotate(${angulo} 50 50)`}>
          <line x1="50" y1="50" x2="50" y2="6" />
          <line x1="50" y1="32" x2="40" y2="22" />
          <line x1="50" y1="32" x2="60" y2="22" />
          <line x1="50" y1="19" x2="43" y2="12" />
          <line x1="50" y1="19" x2="57" y2="12" />
        </g>
      ))}
      <circle cx="50" cy="50" r="3" />
    </svg>
  );
}



function App() {
  return (
    <>
      {/* Santa en trineo */}
      <div className="murcielago" aria-hidden="true">
        <div className="murcielago-vaiven">
          <svg viewBox="0 -5 190 80" xmlns="http://www.w3.org/2000/svg">

            {/* ===== RENO ===== */}
            {/* patas */}
            <path d="M30 54 L21 66 M36 55 L33 68 M48 55 L55 67 M53 52 L63 62"
              stroke="#6b4423" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            {/* cola */}
            <circle cx="57" cy="45" r="3" fill="#ffffff" />
            {/* cuerpo */}
            <ellipse cx="42" cy="48" rx="17" ry="8.5" fill="#8b5a2b" />
            <ellipse cx="42" cy="52" rx="12" ry="4" fill="#d9b48a" />
            {/* cuello y cabeza */}
            <path d="M30 44 L21 33" stroke="#8b5a2b" strokeWidth="8" strokeLinecap="round" fill="none" />
            <circle cx="18" cy="30" r="6.5" fill="#8b5a2b" />
            <ellipse cx="12" cy="33" rx="5" ry="3.5" fill="#d9b48a" />
            <circle cx="8.5" cy="32" r="2.8" fill="#e53935" />
            <circle cx="17" cy="28" r="1.2" fill="#1a1a1a" />
            <ellipse cx="22" cy="26" rx="2" ry="3.5" fill="#6b4423" transform="rotate(30 22 26)" />
            {/* astas */}
            <path d="M16 24 L13 11 M14 16 L9 12 M13 11 L10 6 M19 24 L24 11 M22 16 L27 13 M24 11 L27 6"
              stroke="#5b3a1a" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            {/* arnés */}
            <path d="M44 40 Q47 48 44 56" stroke="#c0392b" strokeWidth="2.5" fill="none" />
            <path d="M26 41 Q36 38 44 41" stroke="#c0392b" strokeWidth="2" fill="none" />
            <circle cx="35" cy="39" r="1.8" fill="#d4a63a" />

            {/* tiro del reno al trineo */}
            <path d="M58 50 Q68 56 80 52" stroke="#d4a63a" strokeWidth="1.5" fill="none" />

            {/* ===== SACO DE REGALOS (detrás de Santa) ===== */}
            <rect x="150" y="8" width="11" height="11" rx="1" fill="#1e6b3a" />
            <path d="M155.5 8 V19 M150 13.5 H161" stroke="#d4a63a" strokeWidth="1.5" />
            <rect x="161" y="12" width="9" height="9" rx="1" fill="#2a6fdb" />
            <path d="M165.5 12 V21 M161 16.5 H170" stroke="#ffffff" strokeWidth="1.3" />
            <path d="M145 46 Q141 24 157 21 Q173 24 170 46 Z" fill="#8d5524" />
            <path d="M149 26 Q157 29 166 26" stroke="#5b3a1a" strokeWidth="1.5" fill="none" />
            <circle cx="157" cy="22" r="2.2" fill="#d4a63a" />

            {/* ===== SANTA ===== */}
            {/* brazo con riendas */}
            <path d="M116 36 Q106 40 99 34" stroke="#e53935" strokeWidth="7" strokeLinecap="round" fill="none" />
            <circle cx="97.5" cy="33" r="3.5" fill="#ffffff" />
            {/* riendas */}
            <path d="M96 32 Q76 28 56 43" stroke="#d4a63a" strokeWidth="1.2" fill="none" />
            {/* torso */}
            <ellipse cx="126" cy="38" rx="16" ry="15" fill="#e53935" />
            <rect x="110" y="38" width="32" height="4.5" fill="#1f1f1f" />
            <rect x="122" y="37" width="8" height="6.5" rx="1" fill="#d4a63a" />
            <rect x="123.5" y="39" width="5" height="3" fill="#1f1f1f" />
            {/* cabeza */}
            <circle cx="126" cy="17" r="8.5" fill="#f5cba7" />
            <circle cx="121.5" cy="17" r="3" fill="#f2a99b" opacity="0.5" />
            <circle cx="130.5" cy="17" r="3" fill="#f2a99b" opacity="0.5" />
            {/* barba */}
            <path d="M117 18 Q116 36 126 36 Q136 36 135 18 Q126 25 117 18 Z" fill="#ffffff" />
            {/* bigote */}
            <path d="M126 21 Q121 18 118 22 Q122 25 126 22 Q130 25 134 22 Q131 18 126 21 Z" fill="#ffffff" />
            <circle cx="126" cy="20" r="1.8" fill="#f2a99b" />
            {/* ojos y cejas */}
            <circle cx="122.5" cy="15" r="1.1" fill="#1a1a1a" />
            <circle cx="129.5" cy="15" r="1.1" fill="#1a1a1a" />
            <path d="M120.5 12.5 L124 12 M128 12 L131.5 12.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
            {/* gorro */}
            <path d="M117 13 Q118 -2 136 4 Q131 6 135 13 Z" fill="#e53935" />
            <rect x="116" y="10.5" width="20" height="5" rx="2.5" fill="#ffffff" />
            <circle cx="137" cy="5" r="3.8" fill="#ffffff" />

            {/* ===== TRINEO ===== */}
            <path d="M86 42 H174 L166 62 H96 Z" fill="#c0392b" />
            <path d="M96 62 H166 L164 58 H98 Z" fill="#a93226" />
            <path d="M168 42 Q184 42 183 27 L174 28 Q175 36 164 38 Z" fill="#a93226" />
            <path d="M86 42 H174" stroke="#d4a63a" strokeWidth="3" strokeLinecap="round" />
            <path d="M80 42 Q76 42 77 36" stroke="#d4a63a" strokeWidth="3" strokeLinecap="round" fill="none" />
            <circle cx="110" cy="52" r="2" fill="#d4a63a" />
            <circle cx="131" cy="52" r="2" fill="#d4a63a" />
            <circle cx="152" cy="52" r="2" fill="#d4a63a" />
            {/* soportes y patín */}
            <path d="M102 62 V70 M160 62 V70" stroke="#d4a63a" strokeWidth="2.5" fill="none" />
            <path d="M72 70 H174 Q184 70 184 62 M72 70 Q62 70 64 61"
              stroke="#d4a63a" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      </div> 
      
    

      {/* Copos de nieve */}
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
