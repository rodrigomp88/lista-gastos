import React from "react";
import { useAuth } from "../context/AuthConext";
import { Route, Redirect } from "react-router-dom";

export const RutaPrivada = ({ children, ...restoDePropiedades }) => {
  const { usuario } = useAuth();

  if (usuario) {
    return <Route {...restoDePropiedades}>{children}</Route>;
  } else {
    return <Redirect to="/ingresar" />;
  }
};
