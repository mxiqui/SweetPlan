export function calcularNumeroDeNoches(fechaIdaStr, fechaVueltaStr) {
    const fechaIda = new Date(fechaIdaStr);
    const fechaVuelta = new Date(fechaVueltaStr);
    
    // Calculamos la diferencia en milisegundos
    const diferenciaMilisegundos = fechaVuelta - fechaIda;
    
    // Convertimos la diferencia de milisegundos a días
    const diferenciaDias = diferenciaMilisegundos / (1000 * 60 * 60 * 24);
    
    // El número de noches es la diferencia de días menos 1
    const numeroDeNoches = diferenciaDias - 1;
  
    return numeroDeNoches;
  }

export const extractDomain = (url) => {
    // Crear un objeto URL
    const parsedUrl = new URL(url);
  
    // Obtener el hostname (por ejemplo, "www.booking.com")
    const hostname = parsedUrl.hostname;
  
    // Dividir el hostname en partes y obtener el dominio principal
    const parts = hostname.split('.');
    // Esto asume que el dominio tiene al menos dos partes, por ejemplo "booking.com"
    const domain = parts.length > 2 ? parts.slice(-2, -1)[0] : parts[0];
  
    return domain;
  };