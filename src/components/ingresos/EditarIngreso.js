import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../../elementos/Header";
import { BtnRegresar } from "../../elementos/BtnRegresar";
import { BarraTotalGastado } from "../BarraTotalGastado";
import { FormularioIngreso } from "./FormularioIngreso";
import { useParams } from "react-router-dom";
import { useObtenerIngreso } from "../../hooks/ingresos/useObtenerIngreso";
import { Contenedor } from "../../elementos/Contenedor";

export const EditarIngreso = () => {
  const { id } = useParams();

  const [ingreso] = useObtenerIngreso(id);

  return (
    <>
      <Contenedor>
        <Helmet>
          <title>Editar Gasto</title>
        </Helmet>

        <Header>
          <BtnRegresar ruta="/ingresos-lista" />
          <Titulo>Editar Gasto</Titulo>
        </Header>

        <FormularioIngreso ingreso={ingreso} />

        <BarraTotalGastado />
      </Contenedor>
    </>
  );
};
