import Header from "./components/Header/Header";

//Importar las fuentes
import './assets/styles/Fuentes.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicio from "./components/pages/Inicio";
import OfertaEspecialIndex from "./components/pages/OfertasEspeciales/OfertaEspecialIndex";
import Loader from "./utils/loader/Loader";
import EscapadaIndex from "./components/pages/EscapadasFinDeSemana/EscapadaIndex";
import MasVisitadoIndex from "./components/pages/MasVisitado/MasVisitadoIndex";
import Loader2 from "./utils/loader/Loader2";
import OfertaRomanticaIndex from "./components/pages/OfertasRomanticas/OfertaRomanticaIndex";
import TermsOfService from "./components/CondicionesUso/TermsOfService";
import TerminosDeUsoIndex from "./components/pages/TermsOfUse/TerminosDeUsoIndex";
import ViajePlanificadoIndex from "./components/pages/ViajePlanificado/ViajePlanificadoIndex";


  function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/specialOffer/:id" element={<OfertaEspecialIndex/>} />
            <Route path="/escapadaFin/:id" element={<EscapadaIndex/>} />
            <Route path="/mostVisited" element={<MasVisitadoIndex/>} />
            <Route path="/ofertaRomantica/:id" element={<OfertaRomanticaIndex/>} />
            <Route path="/termsOfUse" element={<TerminosDeUsoIndex/>} />
            <Route path="/viajePlanificado" element={<ViajePlanificadoIndex/>} />
          </Routes>
        </BrowserRouter>
    );
  }

  export default App;
