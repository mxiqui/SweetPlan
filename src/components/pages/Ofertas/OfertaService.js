import { Escapada } from "../../../models/Escapada";
import { adaptadorOfertasV2 } from "../../../utils/adapters/offersAdapter";
import { server } from "../../../utils/Constantes";

export class OfertaService{

    ofertas;

    async findAll(origen){
        fetch('GET', `${server}/getAllOffer`)
            .then((offers)=>{
                console.log(offers)
            })
            .catch((error)=>{
                console.error(error)
            })

        var escapadas=[];

        
        return escapadas
    }


    
    async findByOrigen(origen, tipo) {

        try {
            if (this.ofertas == null) {
                const response = await fetch(`${server}/getOfertas/${tipo}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
        
                const offers = await response.json();
                this.ofertas = await adaptadorOfertasV2(offers);
            }


            var escapadas = [];

            this.ofertas.forEach(oferta=>{
                    if(origen=="all"){
                        escapadas.push(oferta)
                    }else{
                        if(oferta.getOrigen()==origen){
                            escapadas.push(oferta)
                        }
                    }                
            })
            return escapadas;
        } catch (error) {
            console.error("Ocurrio un error: "+error)
        }
    
        
    }

    async findAll2() {

        try {
            if (this.ofertas == null) {
                const response = await fetch(`${server}/getAllOffer`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    // body: JSON.stringify({ tipo: "escapadas"})
                });
        
                const offers = await response.json();
                this.ofertas = await adaptadorOfertasV2(offers);
            }


            var escapadas = [];

            this.ofertas.forEach(oferta=>{
                escapadas.push(oferta)
            })  
            return escapadas;
        } catch (error) {
            console.error("Ocurrio un error: "+error)
        }
    
        
    }


    async findByDestinoAndOrigen(destino, origen, personas) {
  try {
    if (this.ofertas == null) {
      const response = await fetch(`${server}/getAllOffer`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const offers = await response.json();
      this.ofertas = await adaptadorOfertasV2(offers);
    }

    // Filtrar por destino, origen y número de personas
    const filtradas = this.ofertas.filter(oferta => 
      oferta._destino === destino &&
      oferta._origen === origen &&
      oferta._personas === personas
    );

    return filtradas;
  } catch (error) {
    console.error("Ocurrió un error: " + error);
    return [];
  }
}







    async findById(id){
        try {
            const response = await fetch(`${server}/getOfertaById/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
    
            const oferta = await response.json();
            return oferta
        } catch (error) {
            console.log(error)
            return null;
        }
        
    }

}