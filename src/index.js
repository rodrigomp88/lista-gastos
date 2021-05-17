import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import WebFont from "webfontloader";
import { BrowserRouter, Switch } from "react-router-dom";
import { EditarGasto } from "./componentes/EditarGasto";
import { GastosPorCategoria } from "./componentes/GastosPorCategoria";
import { InicioSesion } from "./componentes/InicioSesion";
import { ListaDeGastos } from "./componentes/ListaDeGastos";
import { RegistroUsuario } from "./componentes/RegistroUsuario";
import { Helmet } from "react-helmet";
import favicon from "./imagenes/logo.png";
import { Fondo } from "./elementos/Fondo";
import { AuthProvider } from "./context/AuthConext";
import { RutaPrivada } from "./componentes/RutaPrivada";
import { TotalGastadoProvider } from "./context/TotalGastoEnElMesContext";
import { RutaPublica } from "./componentes/RutaPublica";

WebFont.load({
  google: {
    families: ["Work Sans:400,500,700", "sans-serif"],
  },
});

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>

      <AuthProvider>
        <TotalGastadoProvider>
          <BrowserRouter>
              <Switch>
                {/* Rutas publicas */}
                <RutaPublica path="/ingresar" component={InicioSesion} />
                <RutaPublica path="/registrar" component={RegistroUsuario} />
                {/* Rutas privadas*/}
                <RutaPrivada path="/categorias">
                  <GastosPorCategoria />
                </RutaPrivada>
                <RutaPrivada path="/lista">
                  <ListaDeGastos />
                </RutaPrivada>
                <RutaPrivada path="/editar/:id">
                  <EditarGasto />
                </RutaPrivada>
                <RutaPrivada path="/">
                  <App />
                </RutaPrivada>
              </Switch>
          </BrowserRouter>
        </TotalGastadoProvider>
      </AuthProvider>
      <Fondo />
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
