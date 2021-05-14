import React, { useState } from "react";
import { Boton } from "../elementos/Boton";
import {
  ContenedorFiltros,
  Formulario,
  InputGrande,
  ContenedorBoton,
  Input,
} from "../elementos/ElementosDeFormulario";
import Mas from "../imagenes/mas.png";
import { SelectCategorias } from "./SelectCategorias";

export const FormularioGasto = () => {
  const [inputDescripcion, setInputDescripcion] = useState();
  const [inputCantidad, setInputCantidad] = useState();
  const [categoria, setCategoria] = useState("hogar")

  const handleChange = (e) => {
    if (e.target.name === "descripcion") {
      setInputDescripcion(e.target.value);
    } else if (e.target.name === "cantidad") {
      setInputCantidad(e.target.value.replace(/[^0-9.]/g, ""));
    }
  };

  return (
    <>
      <Formulario>
        <ContenedorFiltros>
          <SelectCategorias
            categoria={categoria}
            setCategoria={setCategoria}
           />
          <p>DatePicker</p>
        </ContenedorFiltros>
        <div>
          <Input
            type="text"
            name="descripcion"
            placeholder="Descripción"
            value={inputDescripcion}
            onChange={handleChange}
          />
          <InputGrande
            type="text"
            name="cantidad"
            placeholder="$0.00"
            value={inputCantidad}
            onChange={handleChange}
          />
        </div>
        <ContenedorBoton>
          <Boton as="button" primario conIcono type="submit">
            Agregar gastos
            <img src={Mas} alt="" style={{ width: "20px" }} />
          </Boton>
        </ContenedorBoton>
      </Formulario>
    </>
  );
};
