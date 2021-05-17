import React from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  Titulo,
  ContenedorHeader,
  ContenedorBotones,
} from "./elementos/Header";
import { Boton } from "./elementos/Botton";
import { BotonCerrarSesion } from "./elementos/BotonCerrarSesion";
import { FormularioGasto } from "./componentes/FormularioGasto";
import { BarraTotalGastado } from "./componentes/BarraTotalGastado";
import { Contenedor } from "./elementos/Contenedor";

export const App = () => {
  return (
    <>
      <Contenedor>
        <Helmet>
          <title>Agregar Gasto</title>
        </Helmet>
        <Header>
          <ContenedorHeader>
            <Titulo>Agregar Gasto</Titulo>
            <ContenedorBotones>
              <Boton to="/categorias" className="btn btn-light">Categorias</Boton>
              <Boton to="/lista" className="btn btn-light">Gastos</Boton>
              <BotonCerrarSesion />
            </ContenedorBotones>
          </ContenedorHeader>
        </Header>
        <FormularioGasto />
        <BarraTotalGastado />
      </Contenedor>
    </>
  );
};
