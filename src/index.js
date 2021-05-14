import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import favicon from "./imagenes/logo.png";

import { App } from "./App";
import { Contenedor } from "./elementos/Contenedor";
import { EditarGasto } from "./componentes/EditarGasto";
import { GastosPorCategoria } from "./componentes/GastosPorCategoria";
import { InicioSesion } from "./componentes/InicioSesion";
import { RegistroUsuarios } from "./componentes/RegistroUsuarios";
import { ListaDeGastos } from "./componentes/ListaDeGastos";
import { Fondo } from "./elementos/Fondo";

import "./index.css";
import { AuthProvider } from "./contextos/AuthContext";
import { RutaPrivada } from "./componentes/RutaPrivada";
import { RutaPublica } from "./componentes/RutaPublica";

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} type="image/x-icon" />
      </Helmet>

      <AuthProvider>
        <BrowserRouter>
          <Contenedor>
            <Switch>
              <RutaPublica path="/iniciar-sesion">
                <InicioSesion />
              </RutaPublica>
              <RutaPublica path="/crear-cuenta">
                <RegistroUsuarios />
              </RutaPublica>

              <RutaPrivada path="/categorias">
                <GastosPorCategoria />
              </RutaPrivada>
              <RutaPrivada path="/lista">
                <ListaDeGastos />
              </RutaPrivada>
              <RutaPrivada path="/editar">
                <EditarGasto />
              </RutaPrivada>
              <RutaPrivada path="/">
                <App />
              </RutaPrivada>
            </Switch>
          </Contenedor>
        </BrowserRouter>
      </AuthProvider>
      <Fondo />
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
