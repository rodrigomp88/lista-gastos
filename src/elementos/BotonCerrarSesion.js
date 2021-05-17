import React from "react";
import { Boton } from "./Botton";
import { auth } from "./../firebase/firebaseConfig";
import { useHistory } from "react-router-dom";

export const BotonCerrarSesion = () => {
  const history = useHistory();

  const cerrarSesion = async () => {
    try {
      await auth.signOut();
      history.push("/ingresar");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Boton
      iconoGrande
      as="button"
      className="btn btn-danger"
      onClick={cerrarSesion}
    >
      <i className="fi-rr-sign-out"></i>
    </Boton>
  );
};
