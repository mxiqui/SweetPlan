import React from 'react'
import '../../assets/styles/RedesSociales.css'

import imagenInstagram from '../../images/icon/instagram.png'
import imagenFacebook from '../../images/icon/facebook.png'
import imagenTiktok from '../../images/icon/tiktok.png'

function RedesSociales() {
  return (
    <div className='containerRedesSociales'>
        <div className="containerRedSocial">
            <img src={imagenInstagram} alt="" />
        </div>
        <div className="containerRedSocial">
            <img src={imagenFacebook} alt="" />
        </div>
        <div className="containerRedSocial">
            <img src={imagenTiktok} alt="" />
        </div>
    </div>
  )
}

export default RedesSociales