import Header from "./components/Header/Header";

//Importar las fuentes
import './assets/styles/Fuentes.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicio from "./components/pages/Inicio";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/specialOffer/:id" element={<Inicio/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
