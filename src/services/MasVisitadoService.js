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


  // Datos de prueba
  const datosPruebas = [
    {
      id:1,
      img: {imagenPrueba},
      nombre: "Bali",
      precio: "1990.95"
    },
    {
      id:2,
        img: {imagenPrueba6},
        nombre: "New York",
      precio: "1990.95"
    },
    {
      id:3,
        img: {imagenPrueba2},
        nombre: "Dubai",
      precio: "1990.95"
    },
    {
      id:4,
        img: {imagenPrueba5},
        nombre: "Granada",
      precio: "1990.95"
    }
];

const galeriaImagenes=[imagenPrueba, imagenPrueba2,imagenPrueba3, imagenPrueba4]




export class MasVisitadoService {

    findAll(){
        var ofertasMasVisitadas=[]

        datosPruebas.map((oferta)=>{
            ofertasMasVisitadas.push(oferta)
        })

        return ofertasMasVisitadas;
    }



    findById(id){

    }



    findByIdPrueba(){

    }

    getGalleryImage(){
      return galeriaImagenes;
    }
    
}
