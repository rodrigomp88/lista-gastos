import React, { useState } from "react";

import { auth } from "../firebase/firebase-config";

import { Helmet } from "react-helmet";
import { Boton } from "../elementos/Boton";
import { Header, Titulo, ContenedorHeader } from "../elementos/Header";
import {
  Formulario,
  ContenedorBoton,
  Input,
} from "../elementos/ElementosDeFormulario";
import Login from "../imagenes/login.png";
import { useHistory } from "react-router";
import { Alerta } from "../elementos/Alerta";

export const RegistroUsuarios = () => {
  const history = useHistory();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [estadoAlerta, setEstadoAlerta] = useState(false);
  const [alerta, setAlerta] = useState({});

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setCorreo(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "password2":
        setPassword2(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstadoAlerta(false);
    setAlerta({});
    // console.log(correo, password, password2);

    const expReg = /[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    // console.log(expReg.test(correo));
    if (correo === "" || password === "" || password2 === "") {
      setEstadoAlerta(true);
      setAlerta({
        tipo: "error",
        mensaje: "Todos los campos son obligatorios"
      })
      return;
    }

    if (!expReg.test(correo)) {
      setEstadoAlerta(true);
      setAlerta({
        tipo: "error",
        mensaje: "Por favor ingresa un correo electrónico válido"
      })
      return;
    }

    if (password !== password2) {
      setEstadoAlerta(true);
      setAlerta({
        tipo: "error",
        mensaje: "Las contraseñas no son iguales"
      })
      return;
    }

    try {
      await auth.createUserWithEmailAndPassword(correo, password);
      console.log("El usuario se creo con exito");
      history.push("/");
    } catch (error) {
      setEstadoAlerta(true)
      let mensaje;
      switch (error.code) {
        case "auth/invalid-password":
          mensaje = "La contraseña tiene que ser de al menos 6 caracteres.";
          break;
        case "auth/email-already-in-use":
          mensaje = "Ya existe una cuenta con ese correo electrónico.";
          break;
        case "auth/invalid-email":
          mensaje = "El correo electrónico no es válido.";
          break;
        default:
          mensaje = "Hubo un error al intentar crear la cuenta.";
          break;
      }
      setAlerta({tipo: "error", mensaje: mensaje})
    }
  };

  return (
    <>
      <Helmet>
        <title>Crear cuenta</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Crear cuenta</Titulo>
          <div>
            <Boton to="/inciar-sesion">Iniciar sesion</Boton>
          </div>
        </ContenedorHeader>
      </Header>

      <Formulario onSubmit={handleSubmit}>
        <ContenedorHeader>
          <img src={Login} alt="" className="img-login" />
        </ContenedorHeader>
        <Input
          type="email"
          name="email"
          placeholder="correo electrónico"
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
          placeholder="repetir contraseña"
          value={password2}
          onChange={handleChange}
        />
        <ContenedorBoton>
          <Boton as="button" primario type="submit">
            Crear Cuenta
          </Boton>
        </ContenedorBoton>
      </Formulario>
      <Alerta 
      tipo={alerta.tipo}
      mensaje={alerta.mensaje}
      estadoAlerta={estadoAlerta}
      setEstadoAlerta={setEstadoAlerta}
      />
    </>
  );
};
