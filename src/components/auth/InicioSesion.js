import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo, ContenedorHeader } from "../../elementos/Header";
import { Boton } from "../../elementos/Botton";
import {
  Formulario,
  Input,
  ContenedorBoton,
} from "../../elementos/ElementosDeFormulario";
import { ReactComponent as SvgLogin } from "../../images/login.svg";
import styled from "styled-components";
import { auth } from "../../firebase/firebaseConfig";
import { Link, useHistory } from "react-router-dom";
import { Alerta } from "../../elementos/Alerta";
import { ContenedorInicio } from "../../elementos/Contenedor";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 5rem;
  margin-bottom: 1rem;
`;

export const InicioSesion = () => {
  const history = useHistory();
  const [correo, establecerCorreo] = useState("");
  const [password, establecerPassword] = useState("");
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "email") {
      establecerCorreo(e.target.value);
    } else if (e.target.name === "password") {
      establecerPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    cambiarEstadoAlerta(false);
    cambiarAlerta({});

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    if (!expresionRegular.test(correo)) {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "Por favor ingrese un correo",
      });

      return;
    }
    if (correo === "" || password === "") {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "Por favor rellene todos los campos",
      });

      return;
    }

    try {
      await auth.signInWithEmailAndPassword(correo, password);
      history.push("/");
    } catch (error) {
      cambiarEstadoAlerta(true);
      let mensaje;
      switch (error.code) {
        case "auth/wrong-password":
          mensaje = "La contraseña no es correcta";
          break;
        case "auth/user-not-found":
          mensaje =
            "No se encontro ninguna cuenta con el correo electrónico proporcionado.";
          break;
        default:
          mensaje = "Hubo un error al intentar crear la cuenta.";
          break;
      }
      cambiarAlerta({ tipo: "error", mensaje: mensaje });
    }
  };

  const resetearPassword = async (e) => {
    e.preventDefault();

    if (correo === "") {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "Por favor ingrese un correo registrado primero",
      });

      return;
    }

    try {
      await auth.sendPasswordResetEmail(correo);
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "exito",
        mensaje: "Se le ha enviado un correo para restablecer su contraseña",
      });
    } catch (error) {
      cambiarEstadoAlerta(true);

      let mensaje;

      switch (error.code) {
        case "auth/invalid-email":
          mensaje = "El formato del correo es invalido";
          break;
        case "auth/user-not-found":
          mensaje =
            "No se encontro ninguna cuenta con el correo electrónico proporcionado.";
          break;
        default:
          mensaje = "Hubo un error al intentar crear la cuenta.";
          break;
      }
      cambiarAlerta({ tipo: "error", mensaje: mensaje });
    }
  };
  return (
    <>
      <Helmet>
        <title>Ingresar</title>
      </Helmet>

      <ContenedorInicio>
        <Header>
          <ContenedorHeader>
            <Titulo>Ingreso para usuarios registrados</Titulo>
          </ContenedorHeader>
        </Header>

        <Formulario onSubmit={handleSubmit}>
          <Svg />

          <Input
            type="email"
            name="email"
            placeholder="Correo Electronico"
            value={correo}
            onChange={handleChange}
          />

          <Input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={handleChange}
          />
          <div className="text-center mt-3">
            <Link onClick={resetearPassword} to="#" className="text-success">
              Olvido su contraseña
            </Link>
          </div>

          <ContenedorBoton>
            <Boton as="button" type="submit" className="btn btn-success">
              Iniciar Sesion
            </Boton>
          </ContenedorBoton>

          <div className="text-center mt-3">
            No tenes cuenta?{" "}
            <Link to="/registrar" className="text-success">
              Registrate
            </Link>
          </div>
        </Formulario>
      </ContenedorInicio>

      <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        cambiarEstadoAlerta={cambiarEstadoAlerta}
      />
    </>
  );
};
