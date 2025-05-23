// App.js
import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './assets/styles/Fuentes.css';
import CustomCookieConsent from './Cookies/CustomCookieConsent';
import { initGA, logPageView } from './utils/analytics';
import PlanificadorViajeSoloVuelos from './components/pages/AddOferta/PlanificadorViajeSOloVuelos';

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

// ✅ Este es el componente que puede usar useLocation()
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    initGA(); // Solo una vez al montar
  }, []);

  useEffect(() => {
    logPageView(location.pathname + location.search); // En cada cambio de ruta
  }, [location]);

  return (
    <>
      <CustomCookieConsent />
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
          <Route path="/createOfferPersonal/" element={<PlanificadorViajeSoloVuelos />} />
          <Route path="/listaOfertas/" element={<OfertasList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

// ✅ Este es el verdadero componente <App> que envuelve con <BrowserRouter>
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
