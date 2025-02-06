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
import FormularioOfertav2 from "./components/pages/AddOferta/FormularioOfertav2";
import NotFound from "./components/pages/Errors/404";
import CookieConsent from "react-cookie-consent";
import CookiesPolicy from "./components/pages/Cookies/Cookies";
import CookiesPage from "./components/pages/Cookies/CookiesPage";
import SomosIndex from "./components/pages/Quien/SomosIndex";
import BuscarOfertasForm from "./components/pages/AddOferta/BusqedaOfertas";



  function App() {
    return (
        <BrowserRouter>
        <CookieConsent
              location="bottom"
              buttonText="Acepto"
              cookieName="myAwesomeCookieName2"
              style={{ background: "#061c43" }}
              buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
              expires={150}
            >
              Este sitio web utiliza cookies para mejorar la experiencia del usuario.{" "}
              <a href="/privacy-policy" style={{ color: "#4e9ef3" }}>Política de Privacidad</a>
            </CookieConsent>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/specialOffer/:id" element={<OfertaEspecialIndex/>} />
            <Route path="/escapadaFin/:id" element={<EscapadaIndex/>} />
            {/* <Route path="/mostVisited" element={<MasVisitadoIndex/>} /> */}
            <Route path="/ofertaRomantica/:id" element={<OfertaRomanticaIndex/>} />
            <Route path="/termsOfUse" element={<TerminosDeUsoIndex/>} />
            <Route path="/viajePlanificado" element={<ViajePlanificadoIndex/>} />
            <Route path="/contacto" element={<ContactoIndex/>} />
            {/* <Route path="/pruebas" element={<PruebasIndex/>} />
            <Route path="/prueba2" element={<Prueba2/>} />
            <Route path="/addoffer/" element={<FormularioSubida/>} /> 
            <Route path="/addofferv2/" element={<FormularioOfertav2/>} />*/}
            <Route path="/ofertaPlanificada" element={<OfferIndex/>} />
            <Route path="/ofertaPlanificadaBooking" element={<OfferIndexBooking/>} />
            <Route path="/alojamientoPlaneado/:id/" element={<AlojamientoPlaneado/>} />
            <Route path="/alojamiento/:id" element={<AlojamientoIndex/>} />
            <Route path="/addofferAuto/" element={<BuscarOfertasForm/>} />
            <Route path="/privacy-policy/" element={<CookiesPage/>} />
            <Route path="/quienSomos/" element={<SomosIndex/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    );
  }

  export default App;
