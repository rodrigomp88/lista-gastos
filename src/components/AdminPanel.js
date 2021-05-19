import React from "react";
import { Helmet } from "react-helmet";
import {
  ContenedorBotones,
  ContenedorHeader,
  Header,
  Titulo,
} from "../elementos/Header";
import { BotonCerrarSesion } from "../elementos/BotonCerrarSesion";
import { Contenedor } from "../elementos/Contenedor";
import { BarraTotalGastado } from "./BarraTotalGastado";
import { Boton } from "../elementos/Botton";
import { ContenedorBotonCentral } from "../elementos/ElementosDeLista";
import logo from "../images/logo.png";

export const AdminPanel = () => {
  return (
    <>
      <Contenedor>
        <Helmet>
          <title>Administrar</title>
        </Helmet>
        <Header>
          <ContenedorHeader>
            <img src={logo} alt="" style={{ width: "100px" }} />
            <Titulo>Administra tus gastos e ingresos</Titulo>
            <ContenedorBotones>
              <BotonCerrarSesion />
            </ContenedorBotones>
          </ContenedorHeader>
        </Header>

        <ContenedorBotonCentral>
          <Boton to="/ingresos" className="btn btn-light">
            Administrar ingreso
          </Boton>
          <Boton to="/gastos" className="btn btn-light">
            Administrar gasto
          </Boton>
        </ContenedorBotonCentral>
        <BarraTotalGastado />
      </Contenedor>
    </>
  );
};
