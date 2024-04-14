import React from 'react';
import '../../assets/styles/CaruselImagenes.css'; // Archivo CSS para los estilos del carrusel

import imagen from '../../images/bali.jpg'
import imagen2 from '../../images/bali/bali1.jpg'
import imagen3 from '../../images/bali/bali2.jpg'

function CaruselImagenes({ id }) {

    //Obtener las imagenes

    return (
        <div className='containerCarusel'>
            <div className="imagen portada">
                <img src={imagen2} alt="" />
            </div>
            <div className="imagen pequena">
                <img src={imagen} alt="" />
            </div>
            <div className="imagen pequena">
                <img src={imagen3} alt="" />
            </div>
            <div className="imagen grande">
                <img src={imagen} alt="" />
            </div>
            <div className="imagen pequena">
                <img src={imagen3} alt="" />
            </div>
            <div className="imagen pequena">
                <img src={imagen} alt="" />
            </div>
            <div className="imagen grande">
                <img src={imagen2} alt="" />
            </div>
            <div className="imagen pequena">
                <img src={imagen} alt="" />
            </div>
            <div className="imagen pequena">
                <img src={imagen3} alt="" />
            </div>
        </div>
    )
}

export default CaruselImagenes;
