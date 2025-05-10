import React from 'react'
import '../../assets/styles/Descripcion.css'

function Descripcion({descripcion}) {
    return (
        <div className='containerDescripcion'>
            {/* <h3>Descripción</h3> */}
            <div>
                <h6 className='descripcionOferta' dangerouslySetInnerHTML={{ __html: descripcion }}></h6>
            </div>
        </div>
    )
}

export default Descripcion