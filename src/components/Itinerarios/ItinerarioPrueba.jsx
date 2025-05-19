import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Componente para mostrar la imagen de cada lugar
const ImagenLugar = ({ src, alt }) => (
  <div style={{ textAlign: 'center', margin: '20px 0' }}>
    <img src={src} alt={alt} style={{ width: '80%', borderRadius: '8px' }} />
  </div>
);

const ItinerarioLondres = () => {
  return (
    <>
    <Header/>
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Itinerario Detallado de Londres - 5 Días y 4 Noches</h1>
      
      <h2>Día 1: Llegada y Exploración del Centro de Londres</h2>
      <p>
        Al llegar a Londres, comenzamos nuestra aventura visitando uno de los barrios más vibrantes y tradicionales de la ciudad: 
        <strong>Covent Garden</strong>. Este icónico mercado cubierto tiene una historia fascinante que se remonta al siglo XVII. Hoy en día, Covent Garden es conocido por sus tiendas exclusivas, restaurantes, y artistas callejeros que dan vida al lugar. Aquí, se pueden encontrar productos artesanales y souvenirs únicos. 
      </p>
      <ImagenLugar 
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Covent_Garden_Market_-_geograph.org.uk_-_1524316.jpg" 
        alt="Covent Garden"
      />
      <p>
        Disfrutamos de un paseo por sus coloridas calles, admirando tanto las tiendas como la arquitectura clásica. Para un descanso, podemos disfrutar de un café en una de las encantadoras cafeterías del mercado.
      </p>

      <h3>Por la tarde:</h3>
      <p>
        Visitamos <strong>El Museo Británico</strong>, uno de los museos más famosos del mundo. Fundado en 1753, alberga más de 8 millones de obras de arte, destacándose la Piedra de Rosetta, que fue clave para descifrar los jeroglíficos egipcios. Es una parada obligada para los amantes de la historia y la cultura.
      </p>
      <ImagenLugar 
        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/British_Museum_-_Great_Court.jpg" 
        alt="Museo Británico"
      />
      <p>
        Después, un paseo por las tranquilas calles del <strong>Parque de St. James</strong> nos llevará a la zona del Palacio de Buckingham, donde podremos admirar la residencia oficial de la Reina. Si llegamos a tiempo, incluso podemos disfrutar del famoso <strong>Cambio de Guardia</strong>.
      </p>

      <h2>Día 2: Arte, Cultura y Historia</h2>
      <p>
        Comenzamos el día con una visita al <strong>Palacio de Westminster</strong>, donde se encuentra el <strong>Big Ben</strong>, uno de los monumentos más emblemáticos del mundo. Este edificio histórico alberga la sede del Parlamento Británico y tiene siglos de historia política.
      </p>
      <ImagenLugar 
        src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Palace_of_Westminster_2013.jpg" 
        alt="Palacio de Westminster y Big Ben"
      />
      <p>
        Después, nos dirigimos hacia <strong>London Eye</strong>, la famosa rueda de observación que ofrece una vista impresionante de la ciudad. Desde la cima, podemos disfrutar de una panorámica de Londres, incluyendo el río Támesis y la catedral de St. Paul.
      </p>
      <ImagenLugar 
        src="https://upload.wikimedia.org/wikipedia/commons/c/c6/London_Eye_at_Sunset.jpg" 
        alt="London Eye"
      />
      <p>
        Por la tarde, visitamos la <strong>Tate Modern</strong>, uno de los museos de arte moderno más importantes del mundo. Su impresionante colección de arte contemporáneo, que incluye trabajos de Picasso, Warhol, y Hockney, nos ofrece una experiencia única.
      </p>
      <ImagenLugar 
        src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Tate_Modern_2009.jpg" 
        alt="Tate Modern"
      />

      <h2>Día 3: Un día en el Soho y Chinatown</h2>
      <p>
        El tercer día lo comenzamos explorando el <strong>Soho</strong>, un barrio vibrante y lleno de vida. Conocido por su escena cultural, el Soho es famoso por sus teatros, bares y restaurantes internacionales. Podemos comenzar con un desayuno en uno de sus acogedores cafés.
      </p>
      <ImagenLugar 
        src="https://upload.wikimedia.org/wikipedia/commons/1/17/Soho_West_London.jpg" 
        alt="Soho"
      />
      <p>
        A poca distancia, encontramos <strong>Chinatown</strong>, donde la cultura china se mezcla con la tradición londinense. Las calles de Chinatown están llenas de tiendas y restaurantes que ofrecen auténtica comida china. No hay mejor lugar para probar dim sum o un plato de pato laqueado.
      </p>
      <ImagenLugar 
        src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Chinatown_London.jpg" 
        alt="Chinatown"
      />
      
      <h3>Por la tarde:</h3>
      <p>
        Visitamos el <strong>Mercado de Borough</strong>, uno de los mercados de comida más antiguos de Londres, donde se venden productos frescos y deliciosos platos locales. ¡No olvides probar un clásico sándwich de pescado y papas fritas!
      </p>
      <ImagenLugar 
        src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Borough_Market_2014.jpg" 
        alt="Borough Market"
      />

      <h2>Día 4: Historia Medieval y Barrios Tradicionales</h2>
      <p>
        En nuestro cuarto día, nos dirigimos hacia <strong>La Torre de Londres</strong>, una fortaleza medieval que alberga la famosa <strong>Corona Real</strong> y tiene más de 1,000 años de historia. En el interior, podemos aprender sobre las prisiones y ejecuciones que ocurrieron aquí a lo largo de los siglos.
      </p>
      <ImagenLugar 
        src="https://upload.wikimedia.org/wikipedia/commons/5/59/Tower_of_London_and_Tower_Bridge.jpg" 
        alt="Torre de Londres"
      />
      <p>
        Después de explorar la Torre, nos dirigimos hacia el <strong>Puente de la Torre</strong> (Tower Bridge), uno de los puentes más conocidos de Londres. Es posible cruzar el puente y ver la ciudad desde una vista panorámica increíble.
      </p>
      <ImagenLugar 
        src="https://upload.wikimedia.org/wikipedia/commons/d/df/Tower_Bridge_%28London%29_-_Nov_2009.jpg" 
        alt="Tower Bridge"
      />

      <h2>Día 5: Compras y Relax</h2>
      <p>
        En el último día, nos dirigimos a <strong>Oxford Street</strong>, una de las calles comerciales más famosas del mundo. Aquí, podemos disfrutar de una gran variedad de tiendas y boutiques, desde grandes marcas hasta tiendas exclusivas.
      </p>
      <ImagenLugar 
        src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Oxford_Street%2C_London.jpg" 
        alt="Oxford Street"
      />
      <p>
        Finalmente, terminamos nuestro recorrido con una caminata por el <strong>Hyde Park</strong>, uno de los parques más grandes de Londres, donde podemos relajarnos antes de partir. Con sus amplias áreas verdes y lagos, Hyde Park es el lugar perfecto para disfrutar de la naturaleza en medio de la ciudad.
      </p>
      <ImagenLugar 
        src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Hyde_Park_-_London_-_UK.jpg" 
        alt="Hyde Park"
      />
    </div>
    <Footer/>
    </>
    
  );
};

export default ItinerarioLondres;
