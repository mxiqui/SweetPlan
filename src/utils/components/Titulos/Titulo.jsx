import React from 'react'
import '../../../assets/styles/Titulo.css'

function Titulo({titulo}) {
    return (
        <div className='containerComponenteTitulo'>
            <h3>{titulo}</h3>
        </div>
    )
}

export default Titulo