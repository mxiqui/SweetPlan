export class VueloV2 {
    constructor(id, airline, originAirport, destinationAirport, price, originTime, destinationTime, fecha, url, imageAirline) {
        this._id = id;
        this._airline = airline;
        this._price = price;
        this._originAirport = originAirport;
        this._destinationAirport = destinationAirport;
        this._originTime = originTime;
        this._destinationTime = destinationTime;
        this._fecha = fecha;
        this._url = url;
        this._imageAirline = imageAirline;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get airline() {
        return this._airline;
    }

    set airline(value) {
        this._airline = value;
    }

    get imageAirline() {
        return this._imageAirline;
    }

    set imageAirline(value) {
        this._imageAirline = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get originAirport() {
        return this._originAirport;
    }

    set originAirport(value) {
        this._originAirport = value;
    }

    get originTime() {
        return this._originTime;
    }

    set originTime(value) {
        this._originTime = value;
    }

    get destinationAirport() {
        return this._destinationAirport;
    }

    set destinationAirport(value) {
        this._destinationAirport = value;
    }

    get destinationTime() {
        return this._destinationTime;
    }

    set destinationTime(value) {
        this._destinationTime = value;
    }

    get fecha() {
        return this._fecha;
    }

    set fecha(value) {
        this._fecha = value;
    }

    get url() {
        return this._url;
    }

    set url(value) {
        this._url = value;
    }
}
