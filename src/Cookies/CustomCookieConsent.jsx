import React, { useState, useEffect } from 'react';
import '../assets/styles/CustomCookieConsent.css';

const COOKIE_NAME = 'sweetplanConsent';

const CustomCookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_NAME);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(COOKIE_NAME, JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
    }));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem(COOKIE_NAME, JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
    }));
    setIsVisible(false);
  };

  const handleSavePreferences = (e) => {
    e.preventDefault();
    const analytics = e.target.analytics.checked;
    const marketing = e.target.marketing.checked;
    localStorage.setItem(COOKIE_NAME, JSON.stringify({
      necessary: true,
      analytics,
      marketing,
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      {!showSettings ? (
        <div className="cookie-content">
          <p>Este sitio web utiliza cookies para mejorar tu experiencia. Puedes aceptar, rechazar o personalizar tu selección.</p>
          <div className="cookie-buttons">
            <button onClick={handleAcceptAll}>Aceptar todas</button>
            <button onClick={() => setShowSettings(true)}>Personalizar</button>
            <button onClick={handleRejectAll}>Rechazar</button>
          </div>
        </div>
      ) : (
        <form className="cookie-settings" onSubmit={handleSavePreferences}>
  <h4>Preferencias de Cookies</h4>

  <div className="cookie-option">
    <span>Necesarias (siempre activas)</span>
    <label className="switch">
      <input type="checkbox" checked disabled />
      <span className="slider"></span>
    </label>
  </div>

  <div className="cookie-option">
    <span>Cookies de análisis</span>
    <label className="switch">
      <input type="checkbox" name="analytics" defaultChecked />
      <span className="slider"></span>
    </label>
  </div>

  <div className="cookie-option">
    <span>Cookies de marketing</span>
    <label className="switch">
      <input type="checkbox" name="marketing" />
      <span className="slider"></span>
    </label>
  </div>

  <div className="cookie-buttons">
    <button type="submit">Guardar preferencias</button>
    <button type="button" onClick={() => setShowSettings(false)}>Volver</button>
  </div>
</form>

      )}
    </div>
  );
};

export default CustomCookieConsent;
