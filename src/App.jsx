import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import Inicio from "./pages/Inicio/Inicio";
import Productos from "./pages/Productos/Productos";
import Cotillon from "./pages/Cotillon/Cotillon";
import Regalos from "./pages/Regalos/Regalos";
import Tortas from "./pages/Tortas/Tortas";
import Combos from "./pages/Combos/Combos";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes/PreguntasFrecuentes";
import Nosotros from "./pages/Nosotros/Nosotros";

import Footer from './components/Footer/Footer';

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

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
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
