import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo, ContenedorHeader } from "../../elementos/Header";
import { Boton } from "../../elementos/Botton";
import {
  Formulario,
  Input,
  ContenedorBoton,
} from "../../elementos/ElementosDeFormulario";
import { ReactComponent as SvgLogin } from "../../images/registro.svg";
import styled from "styled-components";
import { auth } from "../../firebase/firebaseConfig";
import { Link, useHistory } from "react-router-dom";
import { Alerta } from "../../elementos/Alerta";
import { ContenedorInicio } from "../../elementos/Contenedor";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 5rem;
  margin-bottom: 1.25rem;
`;

export const RegistroUsuario = () => {
  const history = useHistory();
  const [correo, establecerCorreo] = useState("");
  // const [nombre, establecerNombre] = useState("");
  // const [apellido, establecerApellido] = useState("");
  const [password, establecerPassword] = useState("");
  const [password2, establecerPassword2] = useState("");
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        establecerCorreo(e.target.value);
        break;
      // case "nombre":
      //   establecerNombre(e.target.value);
      //   break;
      // case "apellido":
      //   establecerApellido(e.target.value);
      //   break;
      case "password":
        establecerPassword(e.target.value);
        break;
      case "password2":
        establecerPassword2(e.target.value);
        break;
      default:
        break;
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
    if (
      // nombre === "" ||
      // apellido === "" ||
      correo === "" ||
      password === "" ||
      password2 === ""
    ) {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "Por favor rellena todos los datos",
      });

      return;
    }
    if (password !== password2) {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "Contraseñas diferentes",
      });

      return;
    }

    try {
      await auth.createUserWithEmailAndPassword(correo, password);
      history.push("/");
    } catch (error) {
      cambiarEstadoAlerta(true);
      let mensaje;
      console.log(error);
      switch (error.code) {
        case "auth/invalid-password":
          mensaje = "La contraseña tiene que ser de al menos 6 caracteres.";
          break;
        case "auth/email-already-in-use":
          mensaje =
            "Ya existe una cuenta con el correo electrónico proporcionado.";
          break;
        case "auth/invalid-email":
          mensaje = "El correo electrónico no es válido.";
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
        <title>Crear Cuenta</title>
      </Helmet>

      <ContenedorInicio>
        <Header>
          <ContenedorHeader>
            <Titulo>Registrese con su correo electrónico</Titulo>
          </ContenedorHeader>
        </Header>

        <Formulario onSubmit={handleSubmit}>
          <Svg />
          {/* <Input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={apellido}
            onChange={handleChange}
          /> */}
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
          <Input
            type="password"
            name="password2"
            placeholder="Repetir la contraseña"
            value={password2}
            onChange={handleChange}
          />
          <ContenedorBoton>
            <Boton as="button" type="submit" className="btn btn-success">
              Crear Cuenta
            </Boton>
          </ContenedorBoton>
          <div className="container text-center mt-3">
            Ya tenes cuenta?{" "}
            <Link to="/ingresar" className="text-success">
              Inicia sesión
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
