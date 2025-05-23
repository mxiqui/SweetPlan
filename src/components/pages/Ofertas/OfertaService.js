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
        const response = await fetch(`${server}/getOfertasByDestinoAndOrigen?destino=${encodeURIComponent(destino)}&origen=${encodeURIComponent(origen)}&personas=${personas}`, {
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


async findOrigenesByDestino(destino, origen) {
    try {
        if (this.ofertas == null) {
            const response = await fetch(`${server}/getAllOffer`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    // body: JSON.stringify({ tipo: "escapadas"})
            });
        
            
            if (!response.ok) {
                throw new Error('Error al obtener los orígenes disponibles');
            }
            const offers = await response.json();
            this.ofertas = await adaptadorOfertasV2(offers);
        }
        
        const ofertasFiltradas = this.ofertas.filter(oferta => oferta._destino === destino && oferta._origen != origen);
        return ofertasFiltradas;

    } catch (error) {
        console.error("Error en findOrigenesByDestino:", error);
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


    async findByOrigenAndTags(origen, tag) {
        try {
            if (this.ofertas == null) {
                const response = await fetch(`${server}/findByOrigenAndTags?origen=${encodeURIComponent(origen)}&tag=${encodeURIComponent(tag)}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const offers = await response.json();
                this.ofertas = await adaptadorOfertasV2(offers);
            }
            return this.ofertas || [];
        } catch (error) {
            console.error("Ocurrió un error: " + error);
            return [];
        }
    }

    async findByOrigenAndTipo(origen, tipo) {
        try {
            if (this.ofertas == null) {
                //const response = await fetch(`${server}/findByOrigenAndTipo?origen=${encodeURIComponent(origen)}&tipo=${encodeURIComponent(tipo)}`); // sin headers
                const response = await fetch(`${server}/findByOrigenAndTipo/${origen}/${tipo}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const offers = await response.json();
                this.ofertas = await adaptadorOfertasV2(offers);
            }
            return this.ofertas || [];
        } catch (error) {
            console.error("Ocurrió un error: " + error);
            return [];
        }
    }


}