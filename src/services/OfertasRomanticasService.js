import imagenPrueba from '../images/bali.jpg'
import imagenPrueba2 from '../images/dubai.jpg'
import imagenPrueba3 from '../images/madrid.jpg'
import imagenPrueba4 from '../images/paris.jpg'
import { Alojamiento } from '../models/Alojamiento'
import { Vuelos } from '../models/Vuelos'
import { OfertaRomantica } from '../models/OfertaRomantica'
import {adaptadorEscapadas, adaptadorOfertasV2, adaptadorRomantico} from '../utils/adapters/offersAdapter'
import {server} from '../utils/Constantes'

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


export class OfertaRomanticaService{

    ofertas;

    async findAll(){

        try {
            if(this.ofertas==null){
                const response = await fetch(`${server}/getAllOffers/romantico`, { method: 'GET' });
                const offers = await response.json();

                this.ofertas= await adaptadorRomantico(offers);
            }
            var offers = [];

            this.ofertas.forEach(oferta=>{
                    offers.push(oferta);
            })

            console.log(offers)
            return offers;
        } catch (error) {
            return null;
        }
        // var ofertas=[];

        // for(let i=0; i<datos.length; i++){
        //     let oferta = new OfertaRomantica(datos[i].id, datos[i].origen, datos[i].imagen, datos[i].destino, datos[i].fechas, galeria, vueloIda, vueloVuelta, alojamiento);
        //     ofertas.push(oferta);
        // }
        // return ofertas
    }




    async findByOrigen(origen){

        try {
            if (this.ofertas == null || this.ofertas.lenght==0) {
                const response = await fetch(`${server}/getOfertas/V2`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ tipo: "romanticas"})
                });
                const offers = await response.json();
                this.ofertas = await adaptadorOfertasV2(offers);
            }


            var ofertas2 = [];
            console.log(this.ofertas)
            this.ofertas.forEach(oferta=>{
                if(oferta.getOrigen()==origen && oferta.getTipo()=="romantica"){
                    ofertas2.push(oferta);
                }
            })
            console.log(ofertas2.length)

            return ofertas2;
        } catch (error) {
            console.error("Ocurrio un error: "+error)
        }

        //Version 1

        // try {
        //     if(this. ofertas==null){
        //         const response = await fetch(`${server}/getAllOffers/romantico`, { method: 'GET' });
        //         const offers = await response.json();
        //         this.ofertas= await adaptadorRomantico(offers);
        //     }
        //     var offers = [];

        //     this.ofertas.forEach(oferta=>{
        //         if(oferta.getOrigen()==origen){
        //             offers.push(oferta);
        //         }
        //     })

        //     console.log(offers)

        //     return offers;
        // } catch (error) {
            
        // }
        // var ofertas=[];

        // for(let i=0; i<datos.length; i++){
        //     if(datos[i].origen==origen){
        //         let oferta = new OfertaRomantica(datos[i].id, datos[i].origen, datos[i].imagen, datos[i].destino, datos[i].fechas, galeria, vueloIda, vueloVuelta, alojamiento);
        //         ofertas.push(oferta);
        //     }
        // }
        // return ofertas
    }




    findById(id){
        var oferta;
        for(let i=0; i<datos.length; i++){
            if(datos[i].id==id){
                let newOferta = new OfertaRomantica(datos[i].id, datos[i].origen, datos[i].imagen, datos[i].destino, datos[i].fechas, galeria, vueloIda, vueloVuelta, alojamiento);
                oferta=newOferta;
            }
        }
        return oferta;
    }

    findNacionales(){

    }

}