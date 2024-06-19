import Header from "./components/Header/Header";

//Importar las fuentes
import './assets/styles/Fuentes.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicio from "./components/pages/Inicio";
import OfertaEspecialIndex from "./components/pages/OfertasEspeciales/OfertaEspecialIndex";
import EscapadaIndex from "./components/pages/EscapadasFinDeSemana/EscapadaIndex";
import MasVisitadoIndex from "./components/pages/MasVisitado/MasVisitadoIndex";
import OfertaRomanticaIndex from "./components/pages/OfertasRomanticas/OfertaRomanticaIndex";
import TerminosDeUsoIndex from "./components/pages/TermsOfUse/TerminosDeUsoIndex";
import ViajePlanificadoIndex from "./components/pages/ViajePlanificado/ViajePlanificadoIndex";
import PruebasIndex from "./components/pages/Pruebas/PruebasIndex";
import OfferIndex from "./components/pages/Offers/OfferIndex";
import AlojamientoIndex from "./components/pages/Alojamiento/AlojamientoIndex";
import Prueba2 from "./components/pages/Pruebas/Prueba2";
import AlojamientoPlaneado from "./components/pages/Alojamiento/AlojamientoPlaneado";
import ContactoIndex from "./components/pages/Contacto/ContactoIndex";
import FormularioSubida from "./components/pages/AddOferta/FormularioSubida";
import OfferIndexBooking from "./components/pages/Offers/OfferIndexBooking";


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
            <Route path="/contacto" element={<ContactoIndex/>} />
            <Route path="/pruebas" element={<PruebasIndex/>} />
            <Route path="/prueba2" element={<Prueba2/>} />
            <Route path="/ofertaPlanificada" element={<OfferIndex/>} />
            <Route path="/ofertaPlanificadaBooking" element={<OfferIndexBooking/>} />
            <Route path="/alojamiento/:id" element={<AlojamientoIndex/>} />
            <Route path="/alojamientoPlaneado/:id/" element={<AlojamientoPlaneado/>} />
            <Route path="/addoffer/" element={<FormularioSubida/>} />
          </Routes>
        </BrowserRouter>
    );
  }

  export default App;
