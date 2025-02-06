import { server } from "../utils/Constantes";

export const  getAlojamientoById = async(id)=>{
    try {
    
        const response = await fetch(`${server}/alojamiento/${id}`);
        if (!response.ok) {
            throw new Error('Hubo un problema al realizar la solicitud.');
        }
        const data = await response.json();
        console.log(data)
        return data;
        
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}


export const  getAlojamientoByIdV2 = async(id)=>{
    try {
    
        const response = await fetch(`${server}/getAlojamiento/V2`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id})
        });
        
        const offers = await response.json();
        return offers
        
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}


export const getReviewsBooking = async(id)=>{
    try {
        const response = await fetch(`${server}/getReviewsBooking/${id}`);
        if (!response.ok) {
            throw new Error('Hubo un problema al realizar la solicitud.');
        }
        const data = await response.json();
        console.log(data)
        return data;
        
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}
