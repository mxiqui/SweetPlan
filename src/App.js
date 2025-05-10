import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import './assets/styles/Fuentes.css';

// Lazy load de páginas
const Inicio = lazy(() => import('./components/pages/Inicio'));
const OfertaEspecialIndex = lazy(() => import('./components/pages/OfertasEspeciales/OfertaEspecialIndex'));
const EscapadaIndex = lazy(() => import('./components/pages/EscapadasFinDeSemana/EscapadaIndex'));
const OfertaRomanticaIndex = lazy(() => import('./components/pages/OfertasRomanticas/OfertaRomanticaIndex'));
const TerminosDeUsoIndex = lazy(() => import('./components/pages/TermsOfUse/TerminosDeUsoIndex'));
const ViajePlanificadoIndex = lazy(() => import('./components/pages/ViajePlanificado/ViajePlanificadoIndex'));
const ContactoIndex = lazy(() => import('./components/pages/Contacto/ContactoIndex'));
const OfferIndex = lazy(() => import('./components/pages/Offers/OfferIndex'));
const OfferIndexBooking = lazy(() => import('./components/pages/Offers/OfferIndexBooking'));
const AlojamientoPlaneado = lazy(() => import('./components/pages/Alojamiento/AlojamientoPlaneado'));
const AlojamientoIndex = lazy(() => import('./components/pages/Alojamiento/AlojamientoIndex'));
const BuscarOfertasForm = lazy(() => import('./components/pages/AddOferta/BusqedaOfertas'));
const CookiesPage = lazy(() => import('./components/pages/Cookies/CookiesPage'));
const SomosIndex = lazy(() => import('./components/pages/Quien/SomosIndex'));
const NewsLetter = lazy(() => import('./components/pages/NewsLetter/NewsLetterIndex'));
const PlanificadorViaje = lazy(() => import('./components/pages/AddOferta/PlanificadorViaje'));
const PlanificadorViajeAlternativo = lazy(() => import('./components/pages/AddOferta/PlanificadorViajeAlternativo'));
const OfertaIndex = lazy(() => import('./components/pages/Ofertas/IndexOfertas'));
const OfertasList = lazy(() => import('./components/pages/Ofertas/OfertasList'));
const NotFound = lazy(() => import('./components/pages/Errors/404'));

function App() {
  return (
    <BrowserRouter>
      <CookieConsent
        location="bottom"
        buttonText="Acepto"
        cookieName="sweetplanConsent"
        style={{ background: "#061c43" }}
        buttonStyle={{ color: "#ffffff", fontSize: "13px", background: "#4e9ef3" }}
        expires={150}
      >
        Este sitio web utiliza cookies para mejorar la experiencia del usuario.{" "}
        <a href="/privacy-policy" style={{ color: "#4e9ef3" }}>Política de Privacidad</a>
      </CookieConsent>

      <Suspense fallback={<div className="loading">Cargando página...</div>}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/specialOffer/:id" element={<OfertaEspecialIndex />} />
          <Route path="/escapadaFin/:id" element={<OfertaIndex />} />
          <Route path="/ofertaRomantica/:id" element={<OfertaRomanticaIndex />} />
          <Route path="/termsOfUse" element={<TerminosDeUsoIndex />} />
          <Route path="/viajePlanificado" element={<ViajePlanificadoIndex />} />
          <Route path="/contacto" element={<ContactoIndex />} />
          <Route path="/ofertaPlanificada" element={<OfferIndex />} />
          <Route path="/ofertaPlanificadaBooking" element={<OfferIndexBooking />} />
          <Route path="/alojamientoPlaneado/:id/" element={<AlojamientoPlaneado />} />
          <Route path="/alojamiento/:id" element={<AlojamientoIndex />} />
          <Route path="/addofferAuto/" element={<BuscarOfertasForm />} />
          <Route path="/privacy-policy/" element={<CookiesPage />} />
          <Route path="/quienSomos/" element={<SomosIndex />} />
          <Route path="/suscribete/" element={<NewsLetter />} />
          <Route path="/createOffer/" element={<PlanificadorViaje />} />
          <Route path="/createOfferAlternativa/" element={<PlanificadorViajeAlternativo />} />
          <Route path="/listaOfertas/" element={<OfertasList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
