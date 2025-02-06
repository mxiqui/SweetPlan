import React, { useState } from 'react';
import { server } from '../../../utils/Constantes';

const BuscarOfertasForm = () => {
    const [formData, setFormData] = useState({
        origen: '',
        personas: '',
        destino: '',
        fecha_ida: '',
        fecha_vuelta: '',
        tipo: '',
        company: '',
        regimen: '', // Nuevo campo de régimen
        imagen: '',
        galeria: '',
        descripcion: '',
        urlVuelos: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${server}/findPlanAutomatico`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        console.log(result);
    };

    const formStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '5px',
    };

    const labelStyle = {
        fontWeight: 'bold',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <div>
                <label style={labelStyle}>Origen:</label>
                <input type="text" name="origen" value={formData.origen} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
                <label style={labelStyle}>Personas:</label>
                <input type="number" name="personas" value={formData.personas} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
                <label style={labelStyle}>Destino:</label>
                <input type="text" name="destino" value={formData.destino} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
                <label style={labelStyle}>Fecha de Ida:</label>
                <input type="date" name="fecha_ida" value={formData.fecha_ida} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
                <label style={labelStyle}>Fecha de Vuelta:</label>
                <input type="date" name="fecha_vuelta" value={formData.fecha_vuelta} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
                <label style={labelStyle}>Tipo:</label>
                <select name="tipo" value={formData.tipo} onChange={handleChange} style={inputStyle}>
                    <option value="">Seleccione un tipo</option>
                    <option value="escapadas">Escapadas</option>
                    <option value="romanticas">Románticas</option>
                    <option value="ofertaEspecial">Oferta Especial</option>
                </select>
            </div>
            <div>
                <label style={labelStyle}>Compañía:</label>
                <select name="company" value={formData.company} onChange={handleChange} style={inputStyle}>
                    <option value="">Seleccione una compañía</option>
                    <option value="airbnb">Airbnb</option>
                    <option value="booking">Booking</option>
                </select>
            </div>
            <div>
                <label style={labelStyle}>Régimen:</label>
                <select name="regimen" value={formData.regimen} onChange={handleChange} style={inputStyle}>
                    <option value="">Seleccione un régimen</option>
                    <option value="pension_completa">Pensión Completa</option>
                    <option value="solo_alojamiento">Solo Alojamiento</option>
                    <option value="solo_desayuno">Solo Desayuno</option>
                </select>
            </div>
            <div>
                <label style={labelStyle}>Imagen:</label>
                <input type="text" name="imagen" value={formData.imagen} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
                <label style={labelStyle}>Galería:</label>
                <input type="text" name="galeria" value={formData.galeria} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
                <label style={labelStyle}>Descripción:</label>
                <input type="text" name="descripcion" value={formData.descripcion} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
                <label style={labelStyle}>URL de Vuelos:</label>
                <input type="text" name="urlVuelos" value={formData.urlVuelos} onChange={handleChange} style={inputStyle} />
            </div>
            <button type="submit" style={buttonStyle}>Buscar Ofertas</button>
        </form>
    );
};

export default BuscarOfertasForm;
