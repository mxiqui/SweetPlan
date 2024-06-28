export class OfertaV2 {
    constructor(id, origen, destino, fechaInicio, fechaFin, imagen, galeria, precio, tipo, descripcion, personas, precioPersona, noches, regimen, fechas, vueloIda, vueloVuelta, alojamiento) {
        this._id = id;
        this._origen = origen;
        this._destino = destino;
        this._fechaInicio = fechaInicio;
        this._fechafin = fechaFin;
        this._imagen = imagen;
        this._galeria = galeria;
        this._precio = precio;
        this._tipo = tipo;
        this._descripcion = descripcion;
        this._personas = personas;
        this._precioPersona = precioPersona;
        this._noches = noches;
        this._regimen = regimen;
        this._fechas= fechas
        this._vueloIda = vueloIda;
        this._vueloVuelta = vueloVuelta;
        this._alojamiento = alojamiento;
    }

    getId() {
        return this._id;
    }

    setId(value) {
        this._id = value;
    }

    getOrigen() {
        return this._origen;
    }

    setOrigen(value) {
        this._origen = value;
    }

    getDestino() {
        return this._destino;
    }

    setDestino(value) {
        this._destino = value;
    }

    getFechaInicio() {
        return this._fechaInicio;
    }

    setFechaInicio(value) {
        this._fechaInicio = value;
    }

    getFechaFin() {
        return this._fechafin;
    }

    setFechaFin(value) {
        this._fechafin = value;
    }

    getImagen() {
        return this._imagen;
    }

    setImagen(value) {
        this._imagen = value;
    }

    getGaleria() {
        return this._galeria;
    }

    setGaleria(value) {
        this._galeria = value;
    }

    getPrecio() {
        return this._precio;
    }

    setPrecio(value) {
        this._precio = value;
    }

    getTipo() {
        return this._tipo;
    }

    setTipo(value) {
        this._tipo = value;
    }

    getDescripcion() {
        return this._descripcion;
    }

    setDescripcion(value) {
        this._descripcion = value;
    }

    getPersonas() {
        return this._personas;
    }

    setPersonas(value) {
        this._personas = value;
    }

    getPrecioPersona() {
        return this._precioPersona;
    }

    setPrecioPersona(value) {
        this._precioPersona = value;
    }

    getNoches() {
        return this._noches;
    }

    setNoches(value) {
        this._noches = value;
    }

    getRegimen() {
        return this._regimen;
    }

    setRegimen(value) {
        this._regimen = value;
    }

    getFechas() {
        return this._fechas;
    }

    setFechas(value) {
        this._fechas = value;
    }

    getVueloIda() {
        return this._vueloIda;
    }

    setVueloIda(value) {
        this._vueloIda = value;
    }

    getVueloVuelta() {
        return this._vueloVuelta;
    }

    setVueloVuelta(value) {
        this._vueloVuelta = value;
    }

    getAlojamiento() {
        return this._alojamiento;
    }

    setAlojamiento(value) {
        this._alojamiento = value;
    }
}
