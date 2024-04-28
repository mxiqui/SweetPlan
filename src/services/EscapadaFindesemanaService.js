import imagenPrueba from '../images/bali.jpg'
import imagenPrueba2 from '../images/dubai.jpg'
import imagenPrueba3 from '../images/madrid.jpg'
import imagenPrueba4 from '../images/paris.jpg'
import { Alojamiento } from '../models/Alojamiento'
import { Escapada } from '../models/Escapada'
import { Vuelos } from '../models/Vuelos'
import { server } from '../utils/Constantes'
import {adaptadorEscapadas, adaptadorOfertaEspecial, adaptadorOfertasEspeciales} from '../utils/adapters/offersAdapter'

const datos= [
    {
    id:1,
    origen:"Madrid",
    imagen:imagenPrueba,
    destino:'Bali',
    fechas: '01-10 Febrero',
    precio: '1010,95',
    descripcion:"¡Descubre tu próximo escape con nuestras ofertas especiales de viaje! Sumérgete en un mundo de posibilidades infinitas mientras te embarcas en una aventura única diseñada exclusivamente para ti. Desde exuberantes selvas tropicales hasta majestuosas montañas nevadas, nuestros paquetes de viaje te llevarán a destinos extraordinarios que despiertan los sentidos y alimentan el alma."
    },
    {
    id:2,
    origen:"Madrid",
    imagen:imagenPrueba2,
    destino:'Dubai',
    fechas: '01-10 Febrero',
    precio: '650,95',
    descripcion:"¡Descubre tu próximo escape con nuestras ofertas especiales de viaje! Sumérgete en un mundo de posibilidades infinitas mientras te embarcas en una aventura única diseñada exclusivamente para ti. Desde exuberantes selvas tropicales hasta majestuosas montañas nevadas, nuestros paquetes de viaje te llevarán a destinos extraordinarios que despiertan los sentidos y alimentan el alma."
    },
    {
    id:3,
    origen:"Madrid",
    imagen:imagenPrueba3,
    destino:'Madrid',
    fechas: 'febrero',
    precio: '10',
    descripcion:"¡Descubre tu próximo escape con nuestras ofertas especiales de viaje! Sumérgete en un mundo de posibilidades infinitas mientras te embarcas en una aventura única diseñada exclusivamente para ti. Desde exuberantes selvas tropicales hasta majestuosas montañas nevadas, nuestros paquetes de viaje te llevarán a destinos extraordinarios que despiertan los sentidos y alimentan el alma."
    },
    {
    id:4,
    origen:"Madrid",
    imagen:imagenPrueba4,
    destino:'Paris',
    fechas: 'febrero',
    precio: '10',
    descripcion:"¡Descubre tu próximo escape con nuestras ofertas especiales de viaje! Sumérgete en un mundo de posibilidades infinitas mientras te embarcas en una aventura única diseñada exclusivamente para ti. Desde exuberantes selvas tropicales hasta majestuosas montañas nevadas, nuestros paquetes de viaje te llevarán a destinos extraordinarios que despiertan los sentidos y alimentan el alma."
    },{
        id:5,
        origen:"Malaga",
        imagen:imagenPrueba4,
        destino:'Paris',
        fechas: 'febrero',
        precio: '10',
        descripcion:"¡Descubre tu próximo escape con nuestras ofertas especiales de viaje! Sumérgete en un mundo de posibilidades infinitas mientras te embarcas en una aventura única diseñada exclusivamente para ti. Desde exuberantes selvas tropicales hasta majestuosas montañas nevadas, nuestros paquetes de viaje te llevarán a destinos extraordinarios que despiertan los sentidos y alimentan el alma."
    },
    {
        id:6,
        origen:"Malaga",
        imagen:imagenPrueba4,
        destino:'Paris',
        fechas: 'febrero',
        precio: '10',
        descripcion:"¡Descubre tu próximo escape con nuestras ofertas especiales de viaje! Sumérgete en un mundo de posibilidades infinitas mientras te embarcas en una aventura única diseñada exclusivamente para ti. Desde exuberantes selvas tropicales hasta majestuosas montañas nevadas, nuestros paquetes de viaje te llevarán a destinos extraordinarios que despiertan los sentidos y alimentan el alma."
        },
    {
        id:7,
        origen:"Malaga",
        imagen:imagenPrueba4,
        destino:'Paris',
        fechas: 'febrero',
        precio: '10',
        descripcion:"¡Descubre tu próximo escape con nuestras ofertas especiales de viaje! Sumérgete en un mundo de posibilidades infinitas mientras te embarcas en una aventura única diseñada exclusivamente para ti. Desde exuberantes selvas tropicales hasta majestuosas montañas nevadas, nuestros paquetes de viaje te llevarán a destinos extraordinarios que despiertan los sentidos y alimentan el alma."
    }
]


let vueloIda= new Vuelos(1, 'Ryanair', 'Ryanair', 10.5, 'MAD', 'PAR', '10:00', '12.15','10 Febrero','https://www.ryanair.com/es/es/trip/flights/select?adults=1&teens=0&children=0&infants=0&dateOut=2024-06-03&dateIn=2024-06-07&isConnectedFlight=false&discount=0&promoCode=&isReturn=true&originIata=MAD&destinationIata=BVA&tpAdults=1&tpTeens=0&tpChildren=0&tpInfants=0&tpStartDate=2024-06-03&tpEndDate=2024-06-07&tpDiscount=0&tpPromoCode=&tpOriginIata=MAD&tpDestinationIata=BVA')
let vueloVuelta= new Vuelos(2, 'Ryanair', 'Ryanair', 10.5, 'PAR', 'MAD', '10:00', '12.15','13 Febrero','https://www.ryanair.com/es/es/trip/flights/select?adults=1&teens=0&children=0&infants=0&dateOut=2024-06-03&dateIn=2024-06-07&isConnectedFlight=false&discount=0&promoCode=&isReturn=true&originIata=MAD&destinationIata=BVA&tpAdults=1&tpTeens=0&tpChildren=0&tpInfants=0&tpStartDate=2024-06-03&tpEndDate=2024-06-07&tpDiscount=0&tpPromoCode=&tpOriginIata=MAD&tpDestinationIata=BVA')
let alojamiento = new Alojamiento("La posada", 3, 8.8, "Calle el prado, Madrid, 8", 80.0, 4, "10 Febrero - 13 Febrero", "https://google.com");
const arrayImagenes=[]
const galeria=[]


export class EscapadaFindesemanaService{

    ofertas;

    findAll(){
        fetch('GET', `${server}/getAllOffer`)
            .then((offers)=>{
                console.log(offers)
            })
            .catch((error)=>{
                console.error(error)
            })

        var escapadas=[];

        for(let i=0; i<datos.length; i++){
            let oferta = new Escapada(datos[i].id, datos[i].origen, datos[i].imagen, datos[i].destino, datos[i].fechas, galeria, vueloIda, vueloVuelta, alojamiento);
            escapadas.push(oferta);
        }
        return escapadas
    }


    
    async findByOrigen(origen) {

        try {
            if(this. ofertas==null){
                const response = await fetch(`${server}/getAllOffers/escapada`, { method: 'GET' });
                const offers = await response.json();
                this.ofertas= await adaptadorEscapadas(offers);
            }
            var escapadas = [];

            this.ofertas.forEach(oferta=>{
                if(oferta.getOrigen()==origen){
                    escapadas.push(oferta);
                }
            })

            return escapadas;
        } catch (error) {
            
        }
    
        
    }




    async findById(id){

        try {
        
            const response = await fetch(`${server}/getOfferById/${id}`);
            if (!response.ok) {
                throw new Error('Hubo un problema al realizar la solicitud.');
            }
            const data = await response.json();
            const oferta = await adaptadorOfertaEspecial(data);
            return oferta;
            
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }

}