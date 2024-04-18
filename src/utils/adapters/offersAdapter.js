import { Alojamiento } from "../../models/Alojamiento";
import { OfertaEspecial } from "../../models/OfertaEspecial";
import { Vuelos } from "../../models/Vuelos";

export function extraerFecha(cadena) {
    var fechaCompleta = cadena.substring(0, 10);
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
            [],
            null,
            vueloIda,
            vueloVuelta,
            alojamiento
        )

        ofertas.push(oferta)

    });

    console.log(ofertas.length)
    return ofertas;

}