import { useState } from "react";
import { OfertaEspecial } from "../models/OfertaEspecial";
import { Vuelos } from "../models/Vuelos";
import {Alojamiento} from '../models/Alojamiento'

//Imagenes de pruebas
import imagenPrueba from '../images/bali.jpg'
import imagenPrueba2 from '../images/dubai.jpg'
import imagenPrueba3 from '../images/madrid.jpg'
import imagenPrueba4 from '../images/paris.jpg'
import imagenPrueba5 from '../images/maldivas.jpg'
import imagenPrueba6 from '../images/nuevaYork.jpg'
import imagenPrueba7 from '../images/sagrada.jpg'
import imagenPrueba8 from '../images/maldivas2.jpg'

const arrayImagenes=[]
const galeria=[]

let id=6;
let imagen=arrayImagenes;
let destino='bali';
let fechas= 'febrero';
let precio= '10'

const itinerarioOfertaEspecialPrueba=[{
    airline:"Ryanair",
    imageAeroline:'/static/media/ryanair.47a8669196f9c1f9da69.png',
    precio:"10.50€",
    originAirport:"MAD",
    originTime:"10:00",
    destinationAirport:"PAR",
    destinationTime:"12:15",
    url:"https://www.ryanair.com/es/es/trip/flights/select?adults=1&teens=0&children=0&infants=0&dateOut=2024-06-03&dateIn=2024-06-07&isConnectedFlight=false&discount=0&promoCode=&isReturn=true&originIata=MAD&destinationIata=BVA&tpAdults=1&tpTeens=0&tpChildren=0&tpInfants=0&tpStartDate=2024-06-03&tpEndDate=2024-06-07&tpDiscount=0&tpPromoCode=&tpOriginIata=MAD&tpDestinationIata=BVA"
},{
    airline:"Ryanair",
    imageAeroline:'/static/media/ryanair.47a8669196f9c1f9da69.png',
    price:"10.50€",
    originAirport:"PAR",
    originTime:"11:20",
    destinationAirport:"MAD",
    destinationTime:"13:00",
}];

let vueloIda= new Vuelos(1,'Ryanair', 'Ryanair', 10.5, 'MAD', 'PAR', '10:00', '12.15','10 Febrero','https://www.ryanair.com/es/es/trip/flights/select?adults=1&teens=0&children=0&infants=0&dateOut=2024-06-03&dateIn=2024-06-07&isConnectedFlight=false&discount=0&promoCode=&isReturn=true&originIata=MAD&destinationIata=BVA&tpAdults=1&tpTeens=0&tpChildren=0&tpInfants=0&tpStartDate=2024-06-03&tpEndDate=2024-06-07&tpDiscount=0&tpPromoCode=&tpOriginIata=MAD&tpDestinationIata=BVA')
let vueloVuelta= new Vuelos(2,'Ryanair', 'Ryanair', 10.5, 'PAR', 'MAD', '10:00', '12.15','13 Febrero','https://www.ryanair.com/es/es/trip/flights/select?adults=1&teens=0&children=0&infants=0&dateOut=2024-06-03&dateIn=2024-06-07&isConnectedFlight=false&discount=0&promoCode=&isReturn=true&originIata=MAD&destinationIata=BVA&tpAdults=1&tpTeens=0&tpChildren=0&tpInfants=0&tpStartDate=2024-06-03&tpEndDate=2024-06-07&tpDiscount=0&tpPromoCode=&tpOriginIata=MAD&tpDestinationIata=BVA')
let alojamiento = new Alojamiento("La posada", 3, 8.8, "Calle el prado, Madrid, 8", 80.0, 5, "10 Febrero - 13 Febrero", "https://google.com");



//Obtener de BBDD
const ofertasPrueba=[
    {
    id:1,
    imagen:imagenPrueba,
    destino:'Bali',
    fechas: '01-10 Febrero',
    galeria:[],
    itinerario:itinerarioOfertaEspecialPrueba,
    vueloIda:vueloIda,
    vueloVuelta:vueloVuelta,
    alojamiento:alojamiento,
    precio: '1010,95'
    },
    {
    id:2,
    imagen:imagenPrueba2,
    destino:'Dubai',
    fechas: '01-10 Febrero',
    galeria:[],
    itinerario:itinerarioOfertaEspecialPrueba,
    vueloIda:vueloIda,
    vueloVuelta:vueloVuelta,
    alojamiento:alojamiento,
    precio: '650,95'
    },
    {
    id:3,
    imagen:imagenPrueba3,
    destino:'Madrid',
    fechas: 'febrero',
    galeria:[],
    itinerario:itinerarioOfertaEspecialPrueba,
    vueloIda:vueloIda,
    vueloVuelta:vueloVuelta,
    alojamiento:alojamiento,
    precio: '10'
    },
    {
    id:4,
    imagen:imagenPrueba4,
    destino:'Paris',
    fechas: 'febrero',
    galeria:[],
    itinerario:itinerarioOfertaEspecialPrueba,
    vueloIda:vueloIda,
    vueloVuelta:vueloVuelta,
    alojamiento:alojamiento,
    precio: '10'
    },
    {
    id:5,
    imagen:imagenPrueba5,
    destino:'Maldivas',
    fechas: 'febrero',
    galeria:[],
    itinerario:itinerarioOfertaEspecialPrueba,
    vueloIda:vueloIda,
    vueloVuelta:vueloVuelta,
    alojamiento:alojamiento,
    precio: '10'
    },
    {
    id:6,
    imagen:imagenPrueba6,
    destino:'NY',
    fechas: 'febrero',
    galeria:[],
    itinerario:itinerarioOfertaEspecialPrueba,
    vueloIda:vueloIda,
    vueloVuelta:vueloVuelta,
    alojamiento:alojamiento,
    precio: '10'
    }
]







export class OfertaEspecialService {

    findAll(){
        //Obtener el array de ofertas especiales desde el back
        var ofertasEspeciales=[]

        for(let i=0; i<ofertasPrueba.length;i++){
            let ofertaEspecial= new OfertaEspecial(ofertasPrueba[i].id,ofertasPrueba[i].imagen, ofertasPrueba[i].destino, ofertasPrueba[i].fechas, ofertasPrueba[i].galeria, ofertasPrueba[i].itinerario, ofertasPrueba[i].vueloIda, ofertasPrueba[i].vueloVuelta, ofertasPrueba[i].alojamiento);
            ofertasEspeciales.push(ofertaEspecial)
        }

        return ofertasEspeciales;
    }



    findById(id){
        //Llamada a bbdd para obtener los datos de la oferta especial mas que llamar a la bbdd, llamara al back
        //Los datos que obtendremos los usaremos para crear una clase ofertaEspecial
        let ofertaEspecial= new OfertaEspecial();
        return ofertaEspecial;
    }



    findByIdPrueba(){
        let ofertaEspecial= new OfertaEspecial(id, imagen, destino, fechas, galeria, itinerarioOfertaEspecialPrueba, vueloIda, vueloVuelta, alojamiento);
        return ofertaEspecial;
    }
    
}
