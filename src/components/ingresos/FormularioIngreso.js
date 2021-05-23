import React, { useState, useEffect } from "react";
import { Boton } from "../../elementos/Botton";
import {
  Formulario,
  Input,
  InputGrande,
  ContenedorBoton,
} from "../../elementos/ElementosDeFormulario";
import { DatePicker } from "../DatePicker";
import fromUnixTime from "date-fns/fromUnixTime";
import getUnixTime from "date-fns/getUnixTime";
import { agregarIngreso } from "../../firebase/ingresos/agregarIngreso";
import { useAuth } from "../../context/AuthConext";
import { Alerta } from "../../elementos/Alerta";
import { useHistory } from "react-router-dom";
import  {editarIngreso}  from "../../firebase/ingresos/editarIngreso";

export const FormularioIngreso = ({ ingreso }) => {
  const [inputDescripcion, cambiarInputDescripcion] = useState("");
  const [inputCantidad, cambiarInputCantidad] = useState("");
  const [fecha, cambiarFecha] = useState(new Date());
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});

  const history = useHistory();
  const { usuario } = useAuth();

  useEffect(() => {
    if (ingreso) {
      if (ingreso.data().uidUsuario === usuario.uid) {
        cambiarFecha(fromUnixTime(ingreso.data().fecha));
        cambiarInputDescripcion(ingreso.data().descripcion);
        cambiarInputCantidad(ingreso.data().cantidad);
      } else {
        history.push("/ingresos-lista");
      }
    }
  }, [ingreso, usuario, history]);

  const handleChange = (e) => {
    if (e.target.name === "descripcion") {
      cambiarInputDescripcion(e.target.value);
    } else if (e.target.name === "cantidad") {
      cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g, ""));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let cantidad = parseFloat(inputCantidad).toFixed(2);

    if (inputDescripcion !== "" && inputCantidad !== "") {
      if (cantidad) {
        if (ingreso) {
          editarIngreso({
            id: ingreso.id,
            descripcion: inputDescripcion,
            cantidad: cantidad,
            fecha: getUnixTime(fecha),
          })
            .then(() => {
              history.push("/ingresos-lista");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          agregarIngreso({
            descripcion: inputDescripcion,
            cantidad: cantidad,
            fecha: getUnixTime(fecha),
            uidUsuario: usuario.uid,
          })
            .then(() => {
              cambiarInputDescripcion("");
              cambiarInputCantidad("");
              cambiarFecha(new Date());

              cambiarEstadoAlerta(true);
              cambiarAlerta({
                tipo: "exito",
                mensaje: "El ingreso fue agregado correctamente",
              });
            })
            .catch((error) => {
              cambiarEstadoAlerta(true);
              cambiarAlerta({
                tipo: "error",
                mensaje: "Hubo un problema al intentar agregar el ingreso",
              });
            });
        }
      } else {
        cambiarEstadoAlerta(true);
        cambiarAlerta({
          tipo: "error",
          mensaje: "El valor que ingresaste no es valido",
        });
      }
    } else {
      cambiarEstadoAlerta(true);
      cambiarAlerta({ tipo: "advertencia", mensaje: "Complete los datos" });
    }
  };

  return (
    <Formulario onSubmit={handleSubmit}>
      <ContenedorBoton>
        <DatePicker fecha={fecha} cambiarFecha={cambiarFecha} />
      </ContenedorBoton>

      <div>
        <Input
          type="text"
          name="descripcion"
          id="descripcion"
          placeholder="Descripcion del ingreso"
          value={inputDescripcion}
          onChange={handleChange}
          autoComplete="off"
        />
        <InputGrande
          type="number"
          name="cantidad"
          id="cantidad"
          placeholder="$0,00"
          value={inputCantidad}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <ContenedorBoton>
        <Boton as="button" className="btn btn-success" conIcono type="submit">
          {ingreso ? " Editar Ingreso" : "Agregar Ingreso"}
          <i className="fi-rr-add"></i>
        </Boton>
      </ContenedorBoton>

      <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        cambiarEstadoAlerta={cambiarEstadoAlerta}
      />
    </Formulario>
  );
};
