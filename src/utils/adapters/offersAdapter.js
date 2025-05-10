import { Alojamiento } from "../../models/Alojamiento";
import { Escapada } from "../../models/Escapada";
import { OfertaEspecial } from "../../models/OfertaEspecial";
import { OfertaRomantica } from "../../models/OfertaRomantica";
import { Vuelos } from "../../models/Vuelos";
import { VueloV2 } from "../../models/v2/VueloV2";
import { OfertaV2 } from "../../models/v2/OfertaV2";
import { AlojamientoV2 } from "../../models/v2/AlojamientoV2";

export function extraerFecha(cadena) {
    var fechaCompleta = cadena.split('T')[0];
    return fechaCompleta;
}



export const adaptadorOfertasEspeciales=async (data)=>{
    var ofertas=[];

    data.forEach(oferta => {
        var vueloIda= new Vuelos(oferta.vueloIda.id, 
            oferta.vueloIda.aerolinea,
            oferta.vueloIda.aerolinea,
            oferta.vueloIda.precio,
            oferta.vueloIda.aeropuertoIda,
            oferta.vueloIda.aeropuertoVuelta,
            oferta.vueloIda.horaSalida,
            oferta.vueloIda.horaLlegada,
            `${extraerFecha(oferta.fechaIda)}`,
            oferta.vueloIda.url
        )

        var vueloVuelta= new Vuelos(oferta.vueloVuelta.id, 
            oferta.vueloVuelta.aerolinea,
            oferta.vueloVuelta.aerolinea,
            oferta.vueloVuelta.precio,
            oferta.vueloVuelta.aeropuertoIda,
            oferta.vueloVuelta.aeropuertoVuelta,
            oferta.vueloVuelta.horaSalida,
            oferta.vueloVuelta.horaLlegada,
            `${extraerFecha(oferta.fechaVuelta)}`,
            oferta.vueloVuelta.url
        )

        var alojamiento= new Alojamiento(
            oferta.Alojamiento.id,
            oferta.Alojamiento.nombre,
            oferta.Alojamiento.estrellas,
            oferta.Alojamiento.puntuacion,
            oferta.Alojamiento.direccion,
            oferta.Alojamiento.precio,
            oferta.Alojamiento.noches,
            oferta.Alojamiento.fecha,
            oferta.Alojamiento.url
        )

        var oferta= new OfertaEspecial(
            oferta.id,
            oferta.imagen,
            oferta.destino,
            `${extraerFecha(oferta.fechaInicio)} - ${extraerFecha(oferta.fechaFin)}`,
            oferta.galeria.split(";"),
            null,
            vueloIda,
            vueloVuelta,
            alojamiento
        )

        ofertas.push(oferta)

    });

    return ofertas;

}

export const adaptadorOfertaEspecial=async (oferta)=>{
    var vueloIda= new Vuelos(oferta.vueloIda.id, 
        oferta.vueloIda.aerolinea,
        oferta.vueloIda.aerolinea,
        oferta.vueloIda.precio,
        oferta.vueloIda.aeropuertoIda,
        oferta.vueloIda.aeropuertoVuelta,
        oferta.vueloIda.horaSalida,
        oferta.vueloIda.horaLlegada,
        `${extraerFecha(oferta.fechaInicio)}`,
        oferta.vueloIda.url
    )

    var vueloVuelta= new Vuelos(oferta.vueloVuelta.id, 
        oferta.vueloVuelta.aerolinea,
        oferta.vueloVuelta.aerolinea,
        oferta.vueloVuelta.precio,
        oferta.vueloVuelta.aeropuertoIda,
        oferta.vueloVuelta.aeropuertoVuelta,
        oferta.vueloVuelta.horaSalida,
        oferta.vueloVuelta.horaLlegada,
        `${extraerFecha(oferta.fechaFin)}`,
        oferta.vueloVuelta.url
    )

    var alojamiento= new Alojamiento(
        oferta.Alojamiento.id,
        oferta.Alojamiento.nombre,
        oferta.Alojamiento.estrellas,
        oferta.Alojamiento.puntuacion,
        oferta.Alojamiento.direccion,
        oferta.Alojamiento.precio,
        oferta.Alojamiento.noches,
        oferta.Alojamiento.fecha,
        oferta.Alojamiento.url,
        oferta.Alojamiento.galeria
    )

    var offer= new OfertaEspecial(
        oferta.id,
        oferta.imagen,
        oferta.destino,
        `${extraerFecha(oferta.fechaInicio)} - ${extraerFecha(oferta.fechaFin)}`,
        oferta.galeria.split(";"),
        null,
        vueloIda,
        vueloVuelta,
        alojamiento
    )

    return offer;
}


export const adaptadorEscapadas=async (data)=>{
    var escapadas=[]
    data.forEach(oferta=>{
        var vueloIda= new Vuelos(oferta.vueloIda.id, 
            oferta.vueloIda.aerolinea,
            oferta.vueloIda.aerolinea,
            oferta.vueloIda.precio,
            oferta.vueloIda.aeropuertoIda,
            oferta.vueloIda.aeropuertoVuelta,
            oferta.vueloIda.horaSalida,
            oferta.vueloIda.horaLlegada,
            `${extraerFecha(oferta.fechaInicio)}`,
            oferta.vueloIda.url
        )
    
        var vueloVuelta= new Vuelos(oferta.vueloVuelta.id, 
            oferta.vueloVuelta.aerolinea,
            oferta.vueloVuelta.aerolinea,
            oferta.vueloVuelta.precio,
            oferta.vueloVuelta.aeropuertoIda,
            oferta.vueloVuelta.aeropuertoVuelta,
            oferta.vueloVuelta.horaSalida,
            oferta.vueloVuelta.horaLlegada,
            `${extraerFecha(oferta.fechaFin)}`,
            oferta.vueloVuelta.url
        )
    
        var alojamiento= new Alojamiento(
            oferta.Alojamiento.id,
            oferta.Alojamiento.nombre,
            oferta.Alojamiento.estrellas,
            oferta.Alojamiento.puntuacion,
            oferta.Alojamiento.direccion,
            oferta.Alojamiento.precio,
            oferta.Alojamiento.noches,
            oferta.Alojamiento.fecha,
            oferta.Alojamiento.url
        )

        var escapada= new Escapada(
            oferta.id,
            oferta.origen,
            oferta.imagen,
            oferta.destino,
            `${extraerFecha(oferta.fechaInicio)} - ${extraerFecha(oferta.fechaFin)}`,
            oferta.galeria.split(";"),
            vueloIda,
            vueloVuelta,
            alojamiento
        )

        escapadas.push(escapada)
    })

    return escapadas;
}

export const adaptadorEscapada=async (oferta)=>{
        var vueloIda= new Vuelos(oferta.vueloIda.id, 
            oferta.vueloIda.aerolinea,
            oferta.vueloIda.aerolinea,
            oferta.vueloIda.precio,
            oferta.vueloIda.aeropuertoIda,
            oferta.vueloIda.aeropuertoVuelta,
            oferta.vueloIda.horaSalida,
            oferta.vueloIda.horaLlegada,
            `${extraerFecha(oferta.fechaInicio)}`,
            oferta.vueloIda.url
        )
    
        var vueloVuelta= new Vuelos(oferta.vueloVuelta.id, 
            oferta.vueloVuelta.aerolinea,
            oferta.vueloVuelta.aerolinea,
            oferta.vueloVuelta.precio,
            oferta.vueloVuelta.aeropuertoIda,
            oferta.vueloVuelta.aeropuertoVuelta,
            oferta.vueloVuelta.horaSalida,
            oferta.vueloVuelta.horaLlegada,
            `${extraerFecha(oferta.fechaFin)}`,
            oferta.vueloVuelta.url
        )
    
        var alojamiento= new Alojamiento(
            oferta.Alojamiento.id,
            oferta.Alojamiento.nombre,
            oferta.Alojamiento.estrellas,
            oferta.Alojamiento.puntuacion,
            oferta.Alojamiento.direccion,
            oferta.Alojamiento.precio,
            oferta.Alojamiento.noches,
            oferta.Alojamiento.fecha,
            oferta.Alojamiento.url
        )

        var escapada= new Escapada(
            oferta.id,
            oferta.origen,
            oferta.imagen,
            oferta.destino,
            `${extraerFecha(oferta.fechaInicio)} - ${extraerFecha(oferta.fechaFin)}`,
            oferta.galeria.split(";"),
            vueloIda,
            vueloVuelta,
            alojamiento
        )
    return escapada;
}


export const adaptadorRomantico=async (data)=>{
    var romanticos=[]
    data.forEach(oferta=>{
        var vueloIda= new Vuelos(oferta.vueloIda.id, 
            oferta.vueloIda.aerolinea,
            oferta.vueloIda.aerolinea,
            oferta.vueloIda.precio,
            oferta.vueloIda.aeropuertoIda,
            oferta.vueloIda.aeropuertoVuelta,
            oferta.vueloIda.horaSalida,
            oferta.vueloIda.horaLlegada,
            `${extraerFecha(oferta.fechaInicio)}`,
            oferta.vueloIda.url
        )
    
        var vueloVuelta= new Vuelos(oferta.vueloVuelta.id, 
            oferta.vueloVuelta.aerolinea,
            oferta.vueloVuelta.aerolinea,
            oferta.vueloVuelta.precio,
            oferta.vueloVuelta.aeropuertoIda,
            oferta.vueloVuelta.aeropuertoVuelta,
            oferta.vueloVuelta.horaSalida,
            oferta.vueloVuelta.horaLlegada,
            `${extraerFecha(oferta.fechaFin)}`,
            oferta.vueloVuelta.url
        )
    
        var alojamiento= new Alojamiento(
            oferta.Alojamiento.id,
            oferta.Alojamiento.nombre,
            oferta.Alojamiento.estrellas,
            oferta.Alojamiento.puntuacion,
            oferta.Alojamiento.direccion,
            oferta.Alojamiento.precio,
            oferta.Alojamiento.noches,
            oferta.Alojamiento.fecha,
            oferta.Alojamiento.url
        )

        var romantico= new OfertaRomantica(
            oferta.id,
            oferta.origen,
            oferta.imagen,
            oferta.destino,
            `${extraerFecha(oferta.fechaInicio)} - ${extraerFecha(oferta.fechaFin)}`,
            oferta.galeria.split(";"),
            vueloIda,
            vueloVuelta,
            alojamiento
        )

        romanticos.push(romantico)
    })

    return romanticos;
}



//Version 2

export const adaptadorOfertasV2 = async (data)=>{
   try {
    var of=[]
    data.forEach(oferta=>{
        var vueloIda= new VueloV2(oferta.vueloIda.id, 
            oferta.vueloIda.aerolinea,
            oferta.vueloIda.aeropuertoIda,
            oferta.vueloIda.aeropuertoVuelta,
            oferta.vueloIda.precio,
            oferta.vueloIda.horaSalida,
            oferta.vueloIda.horaLlegada,
            `${extraerFecha(oferta.fechaIda)}`,
            oferta.vueloIda.url,
            oferta.vueloIda.imagenAerolinea
        )
    
        var vueloVuelta= new VueloV2(oferta.vueloIda.id, 
            oferta.vueloVuelta.aerolinea,
            oferta.vueloVuelta.aeropuertoIda,
            oferta.vueloVuelta.aeropuertoVuelta,
            oferta.vueloVuelta.precio,
            oferta.vueloVuelta.horaSalida,
            oferta.vueloVuelta.horaLlegada,
            `${extraerFecha(oferta.fechaVuelta)}`,
            oferta.vueloVuelta.url,
            oferta.vueloVuelta.imagenAerolinea
        )
    
        var alojamiento= new AlojamientoV2(
            oferta.alojamiento.personalId,
            oferta.alojamiento.name,
            oferta.alojamiento.rating,
            oferta.alojamiento.rating,
            oferta.alojamiento.address,
            oferta.alojamiento.totalPrice,
            oferta.alojamiento.url,
            `${extraerFecha(oferta.fechaIda)} - ${extraerFecha(oferta.fechaVuelta)}`,
            oferta.alojamiento.galeria,
            oferta.alojamiento.company,
            oferta.alojamiento.idCompany
        )

        var offert= new OfertaV2(
            oferta.id,
            oferta.origen,
            oferta.destino,
            oferta.fechaIda,
            oferta.fechaVuelta,
            oferta.imagen,
            oferta.alojamiento.galeria.split(";"),
            oferta.precio,
            oferta.tipoOferta,
            oferta.descripcion,
            oferta.personas,
            oferta.precioTotal,
            oferta.noche,
            oferta.regimen,
            `${extraerFecha(oferta.fechaIda)} - ${extraerFecha(oferta.fechaVuelta)}`,
            vueloIda,
            vueloVuelta,
            alojamiento
        )

        of.push(offert)
    })
   } catch (error) {
    console.error(error)
   }
    return of;
}