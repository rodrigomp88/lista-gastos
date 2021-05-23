import React from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  Titulo,
  ContenedorHeader,
  ContenedorBotones,
} from "../../elementos/Header";
import { Boton } from "../../elementos/Botton";
import { FormularioIngreso } from "./FormularioIngreso";
import { BarraTotalGastado } from "../BarraTotalGastado";
import { Contenedor } from "../../elementos/Contenedor";
import { BtnRegresar } from "../../elementos/BtnRegresar";

export const AdminIngresos = () => {
  return (
    <>
      <Contenedor>
        <Helmet>
          <title>Agregar Ingreso</title>
        </Helmet>
        <Header>
          <BtnRegresar ruta="/" />
          <ContenedorHeader>
            <Titulo>Agregar Ingreso</Titulo>
            <ContenedorBotones>
              <Boton to="/ingresos-lista" className="btn btn-light">
                ver todos
              </Boton>
            </ContenedorBotones>
          </ContenedorHeader>
        </Header>
        <FormularioIngreso />
        <BarraTotalGastado />
      </Contenedor>
    </>
  );
};
