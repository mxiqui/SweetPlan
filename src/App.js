import Header from "./components/Header/Header";

//Importar las fuentes
import './assets/styles/Fuentes.css'
import Main from "./components/Main/Main";
import MainInferior from "./components/MainInferior/MainInferior";
import Anuncio from "./components/Anuncios/Anuncio";
import Suscripcion from "./components/Suscripcion/Suscripcion";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Anuncio/>
      <MainInferior/>
      <Suscripcion/>
      <Footer/>
    </div>
  );
}

export default App;
