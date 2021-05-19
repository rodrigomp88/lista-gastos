import React from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  Titulo,
  ContenedorHeader,
  ContenedorBotones,
} from "../../elementos/Header";
import { Boton } from "../../elementos/Botton";
import { FormularioGasto } from "./FormularioGasto";
import { BarraTotalGastado } from "../BarraTotalGastado";
import { Contenedor } from "../../elementos/Contenedor";
import { BtnRegresar } from "../../elementos/BtnRegresar";

export const AdminGastos = () => {
  return (
    <>
      <Contenedor>
        <Helmet>
          <title>Agregar Gasto</title>
        </Helmet>
        <Header>
          <BtnRegresar ruta="/" />
          <ContenedorHeader>
            <Titulo>Agregar Gasto</Titulo>
            <ContenedorBotones>
              <Boton to="/gastos-categorias" className="btn btn-light">
                Categorias
              </Boton>
              <Boton to="/gastos-lista" className="btn btn-light">
                Gastos
              </Boton>
            </ContenedorBotones>
          </ContenedorHeader>
        </Header>
        <FormularioGasto />
        <BarraTotalGastado />
      </Contenedor>
    </>
  );
};
