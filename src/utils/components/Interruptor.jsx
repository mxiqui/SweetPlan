import React, { useContext, useState } from 'react';
import '../../assets/styles/Interruptor.css';
import { TipoOfertaRomanticaContext } from '../../components/Main/Romantico/OfertasRomanticas';

const Interruptor = () => {
  const [estado, setEstado] = useState(true); // Cambiado a true para iniciar en Internacional
  const { dispatch } = useContext(TipoOfertaRomanticaContext);

  const cambiarEstado = () => {
    setEstado(!estado);
    console.log(estado);
    if (!estado) {
      dispatch({ type: "INTERNACIONAL" });
    } else {
      dispatch({ type: "NACIONAL" });
    }
  };

  return (
    <div className="interruptor">
      <span className={`opcion ${estado ? 'activo' : ''}`}>Internacional</span>
      <div className="toggle" onClick={cambiarEstado}>
        <div className={`circulo ${estado ? '' : 'derecha'}`}></div> {/* Cambiado para mover el círculo a la izquierda cuando está en Internacional */}
      </div>
      <span className={`opcion ${!estado ? 'activo' : ''}`}>Nacional</span>
    </div>
  );
};

export default Interruptor;
