import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import '../../assets/styles/OffersSlider.css'
import Slider from 'react-slick';

// Componente de oferta individual
const OfferCard = ({ offer }) => (
    <div style={{ margin: 10}} onClick={()=>{
      window.location.href=`/specialOffer/${offer.id}`
    }}>
        <img src={offer.imageUrl} alt={offer.title} style={{ width: '175px', height: '150px', borderRadius: '15px' }} />
        <h3 style={{color: '#000', marginBottom:'-15px', paddingLeft:'5px', marginTop:'0px'}}>{offer.title}</h3>
        <p style={{paddingLeft:'5px'}}>{offer.description.toFixed(2)} €</p>
    </div>
);

// Componente del slider de ofertas
const OffersSlider = ({ offers }) => {
  // Configuración para el slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,  // Aumenta la sensibilidad del deslizamiento
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  console.log(offers)
  return (
    <div className="containerSliderSlick" style={{ margin: '0 auto', padding: '40px', maxWidth: '100%' }}>
      <Slider {...settings}>
        {offers.map((offer, index) => (
          <OfferCard key={index} offer={offer} />
        ))}
      </Slider>
    </div>
  );
};

export default OffersSlider;
