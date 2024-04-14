export class Escapada{

    _id;
    _origen
    _imagen;
    _destino;
    _fechas;
    _precio;
    _galeria;
    _vueloIda;
    _vueloVuelta;
    _alojamiento;

    constructor(id, origen, imagen, destino, fechas, galeria, vueloIda, vueloVuelta, alojamiento) {
        this._id = id;
        this._origen=origen;
        this._imagen = imagen;
        this._destino = destino;
        this._fechas = fechas;
        this._galeria = galeria;
        this._vueloIda=vueloIda
        this._vueloVuelta=vueloVuelta
        this._alojamiento=alojamiento;
        this._precio = (vueloIda.getPrice()+vueloVuelta.getPrice())*2+alojamiento.getTotalPrice();
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


    getVueloIda() {
        return this._vueloIda;
    }

    getVueloVuelta() {
        return this._vueloVuelta;
    }

    getAlojamiento() {
        return this._alojamiento;
    }

    getOrigen() {
        return this._origen;
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

}