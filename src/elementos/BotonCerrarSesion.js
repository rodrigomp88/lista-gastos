import React from "react";
import { Boton } from "./Boton";
import Cerrar from "../imagenes/cerrar-sesion.png";
import { auth } from "../firebase/firebase-config";
import { useHistory } from "react-router";

export const BotonCerrarSesion = () => {
  const history = useHistory();

  const cerrarSesion = async () => {
    try {
      await auth.signOut();
      history.push("/iniciar-sesion");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Boton as="button" onClick={cerrarSesion}>
        <img src={Cerrar} alt="" style={{ width: "20px" }} />
      </Boton>
    </>
  );
};
