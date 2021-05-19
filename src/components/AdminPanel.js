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
import { useAuth } from "../context/AuthConext";
// import { Link } from "react-router-dom";

export const AdminPanel = () => {
  const { usuario } = useAuth();
  return (
    <>
      <Contenedor>
        <Helmet>
          <title>Bienvenido: {usuario.email}</title>
        </Helmet>
        <Header>
          <ContenedorHeader>
            <img src={logo} alt="" style={{ width: "100px" }} />
            <Titulo>ingresos y egresos</Titulo>
            <ContenedorBotones>
              {/* <Boton
                as={Link}
                className="btn btn-warning"
                data-bs-toggle="tooltip"
                title="Pefil"
                to="/perfil"
              >
                <i className="fi-rr-mode-portrait"></i>
              </Boton> */}
              <strong>{usuario.email}</strong>
              <BotonCerrarSesion />
            </ContenedorBotones>
          </ContenedorHeader>
        </Header>
        <ContenedorBotonCentral>
          <Boton to="/ingresos" className="btn btn-light">
            Ingreso
          </Boton>
          <Boton to="/gastos" className="btn btn-light">
            Egreso
          </Boton>
        </ContenedorBotonCentral>
        <BarraTotalGastado />
      </Contenedor>
    </>
  );
};
