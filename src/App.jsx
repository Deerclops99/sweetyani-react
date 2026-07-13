import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop"; // ajusta ruta si cambia

import Inicio from "./pages/Inicio/Inicio";
import Productos from "./pages/Productos/Productos";
import Cotillon from "./pages/Cotillon/Cotillon";
import Regalos from "./pages/Regalos/Regalos";
import Tortas from "./pages/Tortas/Tortas";
import Combos from "./pages/Combos/Combos";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes/PreguntasFrecuentes";
import Nosotros from "./pages/Nosotros/Nosotros";
import Local from "./pages/Local/Local";
import TerminosyCondiciones from "./pages/TerminosyCondiciones/TerminosyCondiciones";
import PedidosySena from "./pages/PedidosySena/PedidosySena";
import TrabajaconNosotros from "./pages/TrabajaconNosotros/TrabajaconNosotros";
import ChatWidget from "./components/ChatWidget";

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
          <Route path="/cotillon" element={<Cotillon />} />
          <Route path="/regalos" element={<Regalos />} />
          <Route path="/tortas" element={<Tortas />} />
          <Route path="/combos" element={<Combos />} />
          <Route
            path="/preguntas-frecuentes"
            element={<PreguntasFrecuentes />}

          />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/local" element={<Local />} />
          <Route path="/terminos" element={<TerminosyCondiciones />} />
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
