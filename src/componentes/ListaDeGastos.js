import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../elementos/Header";
import { BtnRegresar } from "../elementos/BtnRegresar";

export const ListaDeGastos = () => {

  return (
    <>
      <Helmet>
        <title>Lista de gastos</title>
      </Helmet>
      <Header>
        <BtnRegresar />
        <Titulo>Lista de gastos</Titulo>
      </Header>
    </>
  );
};
