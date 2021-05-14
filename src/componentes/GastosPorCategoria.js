import React from "react";
import { Helmet } from "react-helmet";
import { BtnRegresar } from "../elementos/BtnRegresar";
import { Header, Titulo, ContenedorHeader } from "../elementos/Header";

export const GastosPorCategoria = () => {
  return (
    <>
      <Helmet>
        <title>Gastos por categoria</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <BtnRegresar />
          <Titulo>Gastos por categoria</Titulo>
        </ContenedorHeader>
      </Header>
    </>
  );
};
