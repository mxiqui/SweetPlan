export class Alojamiento{
    _id;
    _name;
    _stars;
    _puntuation;
    _valoration;
    _address;
    _price;
    _night;
    _date;
    _totalPrice;
    _url;
    _galeria;

    constructor(id,name, stars, puntuation, address, price, night, fecha, url, galeria=null){
        this._id=id;
        this._name=name;
        this._stars=stars;
        this._puntuation=puntuation;
        this._address=address;
        this._price=price;
        this._night=night;
        this._totalPrice=price*night;
        this._url= url
        this._date=fecha
        this._galeria=galeria;

        if(puntuation<5){
            this._valoration="Regular"
        }else if(puntuation>=5 && puntuation<7){
            this._valoration="Bueno"
        }else if(puntuation>=7 && puntuation<9){
            this._valoration="Muy bueno"
        }else if(puntuation>=9){
            this._valoration="Increible"
        }
    }


    getName(){
        return this._name
    }
    
    getId(){
        return this._id
    }

    getStars(){
        return this._stars
    }

    getPuntuation(){
        return this._puntuation
    }

    getValoration(){
        return this._valoration
    }

    getAddress(){
        return this._address
    }

    getPrice(){
        return this._price
    }

    getNight(){
        return this._night
    }

    getUrl(){
        return this._url
    }

    getTotalPrice(){
        return this._totalPrice
    }

    getDate(){
        return this._date;
    }
    

}