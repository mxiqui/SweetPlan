import React, { useContext, useState, useEffect, useRef } from "react";

import iconoCerrar from "../../images/cerrar.png";
import "../../assets/styles/Menu.css";

import { MenuContext } from "../Header/Header";
import { opcionesMenu } from "../../resources/Menu";
import OpcionMenu from "./OpcionMenu";

function Menu() {
  const { dispatch } = useContext(MenuContext);
  const [opciones] = useState(opcionesMenu);

  const menuRef = useRef(null);

  const cerrarMenu = () => {
    dispatch({ type: "CERRAR_MENU" });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        cerrarMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="menu">
      <div ref={menuRef} className="containerMenu">
        <div className="cabeceraMenu">
          <h3>Menu</h3>
          <img onClick={cerrarMenu} src={iconoCerrar} alt="" />
        </div>
        <div className="opcionesMenu">
          {opciones.map((opcion, index) => (
            <OpcionMenu
              cerrarMenu={cerrarMenu}
              key={index}
              texto={opcion.texto}
              enlace={opcion.enlace}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Menu;
