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

function App() {
  return (
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
          <Route
            path="/preguntas-frecuentes"
            element={<PreguntasFrecuentes />}

          />
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
    
  );
}

export default App;
