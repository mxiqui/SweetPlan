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
