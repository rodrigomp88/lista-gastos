import React from "react";
import { Redirect, Route } from "react-router";
import { useAuth } from "../contextos/AuthContext";

export const RutaPublica = ({ children, ...restoDePropiedades }) => {
  const { usuario } = useAuth();

  if(!usuario) {
      return <Route {...restoDePropiedades}>{children}</Route>
  } else {
      return <Redirect to="/" />
  }

};