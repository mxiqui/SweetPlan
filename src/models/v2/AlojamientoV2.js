export class AlojamientoV2 {
    constructor(id, nombre, estrellas, puntuacion, direccion, precio, url, fecha, galeria, company, idCompany, regimen = null) {
        this._id = id;
        this._nombre = nombre;
        this._estrellas = estrellas;
        this._puntuacion = puntuacion;
        this._direccion = direccion;
        this._precio = precio;
        this._url = url;
        this._fecha = fecha;
        this._galeria = galeria;
        this._company = company;
        this._idCompany = idCompany;
        this._regimen = regimen; // Si regimen no se pasa, será null
    }

    get id() { return this._id; }
    set id(value) { this._id = value; }

    get nombre() { return this._nombre; }
    set nombre(value) { this._nombre = value; }

    get estrellas() { return this._estrellas; }
    set estrellas(value) { this._estrellas = value; }

    get puntuacion() { return this._puntuacion; }
    set puntuacion(value) { this._puntuacion = value; }

    get direccion() { return this._direccion; }
    set direccion(value) { this._direccion = value; }

    get precio() { return this._precio; }
    set precio(value) { this._precio = value; }

    get url() { return this._url; }
    set url(value) { this._url = value; }

    get fecha() { return this._fecha; }
    set fecha(value) { this._fecha = value; }

    get galeria() { return this._galeria; }
    set galeria(value) { this._galeria = value; }

    get company() { return this._company; }
    set company(value) { this._company = value; }

    get idCompany() { return this._idCompany; }
    set idCompany(value) { this._idCompany = value; }

    get regimen() { return this._regimen; }
    set regimen(value) { this._regimen = value; }
}
