import React, { useState } from "react";
import { auth } from "../firebase/firebase-config";
import { useHistory } from "react-router";
import { Helmet } from "react-helmet";
import { Boton } from "../elementos/Boton";
import { Header, Titulo, ContenedorHeader } from "../elementos/Header";
import { Alerta } from "../elementos/Alerta";

import {
  Formulario,
  ContenedorBoton,
  Input,
} from "../elementos/ElementosDeFormulario";
import Login from "../imagenes/ingreso.png";

export const InicioSesion = () => {
  const history = useHistory();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [estadoAlerta, setEstadoAlerta] = useState(false);
  const [alerta, setAlerta] = useState({});

  const handlechange = (e) => {
    if (e.target.name === "email") {
      setCorreo(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstadoAlerta(false);
    setAlerta({});
    // console.log(correo, password, password2);

    const expReg = /[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    // console.log(expReg.test(correo));
    if (correo === "" || password === "") {
      setEstadoAlerta(true);
      setAlerta({
        tipo: "error",
        mensaje: "Todos los campos son obligatorios",
      });
      return;
    }

    if (!expReg.test(correo)) {
      setEstadoAlerta(true);
      setAlerta({
        tipo: "error",
        mensaje: "Por favor ingresa un correo electrónico válido",
      });
      return;
    }

    try {
      await auth.signInWithEmailAndPassword(correo, password);
      history.push("/");
    } catch (error) {
      setEstadoAlerta(true);
      let mensaje;
      switch (error.code) {
        case "auth/wrong-password":
          mensaje = "La contraseña no es correcta.";
          break;
        case "auth/user-not-found":
          mensaje =
            "No se encontro ninguna cuenta con este correo electrónico.";
          break;
        default:
          mensaje = "Hubo un error al intentar ingresar la cuenta.";
          break;
      }
      setAlerta({ tipo: "error", mensaje: mensaje });
    }
  };

  return (
    <>
      <Helmet>
        <title>Iniciar sesion</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Iniciar sesion</Titulo>
          <div>
            <Boton to="/crear-cuenta">Registrarse</Boton>
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
          onChange={handlechange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handlechange}
        />
        <ContenedorBoton>
          <Boton as="button" primario type="submit">
            Iniciar sesion
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
