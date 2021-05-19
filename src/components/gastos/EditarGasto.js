import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../../elementos/Header";
import { BtnRegresar } from "../../elementos/BtnRegresar";
import { BarraTotalGastado } from "../BarraTotalGastado";
import { FormularioGasto } from "./FormularioGasto";
import { useParams } from "react-router-dom";
import { useObtenerGasto } from "../../hooks/gastos/useObtenerGasto";
import { Contenedor } from "../../elementos/Contenedor";

export const EditarGasto = () => {
  const { id } = useParams();

  const [gasto] = useObtenerGasto(id);

  return (
    <>
      <Contenedor>
        <Helmet>
          <title>Editar Gasto</title>
        </Helmet>

        <Header>
          <BtnRegresar ruta="/gastos-lista" />
          <Titulo>Editar Gasto</Titulo>
        </Header>

        <FormularioGasto gasto={gasto} />

        <BarraTotalGastado />
      </Contenedor>
    </>
  );
};
