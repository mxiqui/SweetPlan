export class OfertaEspecial{

    _id;
    _imagen;
    _destino;
    _fechas;
    _precio;
    _galeria;
    _itinerarios;
    _vueloIda;
    _vueloVuelta;
    _alojamiento;

    constructor(id, imagen, destino, fechas, galeria, itinerarios, vueloIda, vueloVuelta, alojamiento) {
        this._id = id;
        this._imagen = imagen;
        this._destino = destino;
        this._fechas = fechas;
        this._galeria = galeria;
        this._itinerarios = itinerarios;
        this._vueloIda=vueloIda
        this._vueloVuelta=vueloVuelta
        this._alojamiento=alojamiento;
        this._precio = vueloIda.getPrice()+vueloVuelta.getPrice()+alojamiento.getTotalPrice();
    }


    // Getters
    getId() {
        return this._id;
    }

    getImagen() {
        return this._imagen;
    }

    getDestino() {
        return this._destino;
    }

    getFechas() {
        return this._fechas;
    }

    getPrecio() {
        return this._precio;
    }

    getGaleria() {
        return this._galeria;
    }

    getItinerarios() {
        return this._itinerarios;
    }

    getVueloIda() {
        return this._vueloIda;
    }

    getVueloVuelta() {
        return this._vueloVuelta;
    }

    getAlojamiento() {
        return this._alojamiento;
    }

    // Setters
    setId(id) {
        this._id = id;
    }

    setImagen(imagen) {
        this._imagen = imagen;
    }

    setDestino(destino) {
        this._destino = destino;
    }

    setFechas(fechas) {
        this._fechas = fechas;
    }

    setPrecio(precio) {
        this._precio = precio;
    }

    setGaleria(galeria) {
        this._galeria = galeria;
    }

    setItinerarios(itinerarios) {
        this._itinerarios = itinerarios;
    }
}