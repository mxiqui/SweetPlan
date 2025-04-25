import React from 'react';
import '../../../assets/styles/RomanticoInternacional.css';
import imgAvion from '../../../images/icon/avion2.png';
import imgUser from '../../../images/icon/user2.png';

function RomanticoInternacional({ oferta }) {
  const handleClick = () => {
    window.location.href = `/oferta-romantica/${oferta._id}`;
  };

  return (
    <article
      className="containerEscapada"
      itemScope
      itemType="https://schema.org/Offer"
    >
      <img
        src={oferta._imagen}
        alt={`Imagen de ${oferta._destino}, salida desde ${oferta._origen}`}
        loading="lazy"
        itemProp="image"
      />
      <section className="overlayEscapada">
        <header className="containerEscapadaOrigen">
          <p itemProp="departureLocation" itemScope itemType="https://schema.org/Place">
            <span itemProp="name">{oferta._origen}</span>
          </p>
          <p>
            <img
              src={imgUser}
              alt="Número de personas"
              width="16"
              height="16"
              loading="lazy"
            />{' '}
            <span itemProp="eligibleCustomer">{oferta._personas} personas</span>
          </p>
        </header>

        <section className="containerDestinoEscapada">
          <p className="destinoEscapada" itemProp="name">
            {oferta._destino}
          </p>
          <p className="fechaEscapada">
            <time itemProp="validFrom">{oferta._fechas}</time>
          </p>
        </section>

        <section className="containerPrecioEscapada">
          <p className="precioEscapada">
            Precio desde{' '}
            <span itemProp="price" content={oferta._precioPersona.toFixed(2)}>
              {oferta._precioPersona.toFixed(2)} €
            </span>
            <meta itemProp="priceCurrency" content="EUR" />
          </p>
        </section>

        {/* Si activas la descripción en el futuro: 
        <p className='descripcionEscapada' itemProp="description">{oferta.descripcion}</p>
        */}

        <button
          onClick={handleClick}
          title={`Ver oferta romántica a ${oferta._destino}`}
          aria-label={`Ver detalles de la oferta a ${oferta._destino}`}
        >
          Visitar
        </button>
      </section>
    </article>
  );
}

export default RomanticoInternacional;
