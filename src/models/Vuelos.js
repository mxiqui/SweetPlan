export class Vuelos{
    _id
    _airline;
    _imageAirline;
    _price;
    _originAirport;
    _originTime;
    _destinationAirport;
    _destinationTime;
    _fecha;
    _url;

    constructor(id, airline, imageAirline, price, originAirport, destinationAirport, originTime, destinationTime,fecha,url=null){
        this._id=id;
        this._airline=airline;
        this._price=price;
        this._originAirport=originAirport;
        this._destinationAirport=destinationAirport;
        this._originTime=originTime;
        this._destinationTime=destinationTime;
        this._fecha=fecha;
        this._url=url;
        switch (imageAirline) {
            case 'Ryanair':
                this._imageAirline='/static/media/ryanair.47a8669196f9c1f9da69.png'
            break;

            case 'iberia':
                
            break;

            case 'aireurope':
                
            break;

            case 'vueling':
                
            break;

            case 'ryanair':
                
            break;

            case 'ryanair':
                
            break;

            case 'ryanair':
                
            break;

            case 'ryanair':
                
            break;

            case 'ryanair':
                
            break;
        
            default:
                break;
        }
    }


    //GETTERS
    getAirline(){
        return this._airline
    }

    getImageAirline(){
        return this._imageAirline
    }

    getPrice(){
        return this._price
    }

    getOriginAirport(){
        return this._originAirport
    }

    getOriginTime(){
        return this._originTime
    }

    getDestinationAirport(){
        return this._destinationAirport
    }

    getDestinationTime(){
        return this._destinationTime
    }

    getFecha(){
        return this._fecha;
    }

    getUrl(){
        return this._url
    }

}