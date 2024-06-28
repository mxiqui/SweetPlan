import React from 'react';

function FiltrosSeleccionados({ filtros, eliminarFiltro }) {
    const renderFiltros = () => {
        const filtroItems = [];
        for (const [key, value] of Object.entries(filtros)) {
            if (Array.isArray(value)) {
                value.forEach(val => {
                    filtroItems.push({ key, value: val });
                });
            } else if (value) {
                filtroItems.push({ key, value });
            }
        }
        return filtroItems;
    };

    return (
        <div className='containerFiltrosSeleccionados'>
            {renderFiltros().map((filtro, index) => (
                <div key={index} className='filtroSeleccionado'>
                    {`${filtro.key}: ${filtro.value}`}
                    <span onClick={() => eliminarFiltro(filtro.key, filtro.value)} className='eliminarFiltro'>×</span>
                </div>
            ))}
        </div>
    );
}

export default FiltrosSeleccionados;
