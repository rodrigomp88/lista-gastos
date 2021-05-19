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
import { BtnRegresar } from "../elementos/BtnRegresar";
import { useAuth } from "../context/AuthConext";

export const AdminPerfil = () => {
  const { usuario } = useAuth();
  return (
    <>
      <Contenedor>
        <Helmet>
          <title>Administrar perfil</title>
        </Helmet>
        <Header>
          <BtnRegresar ruta="/" />
          <ContenedorHeader>
            <Titulo>{usuario.email} </Titulo>
            <ContenedorBotones>
              <BotonCerrarSesion />
            </ContenedorBotones>
          </ContenedorHeader>
        </Header>
        <BarraTotalGastado />
      </Contenedor>
    </>
  );
};
