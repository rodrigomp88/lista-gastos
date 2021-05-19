import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Switch } from "react-router-dom";

import { EditarGasto } from "../components/gastos/EditarGasto";
import { GastosPorCategoria } from "../components/gastos/GastosPorCategoria";
import { InicioSesion } from "../components/auth/InicioSesion";
import { ListaDeGastos } from "../components/gastos/ListaDeGastos";
import { RegistroUsuario } from "../components/auth/RegistroUsuario";
import { Fondo } from "../elementos/Fondo";
import { AdminPanel } from "../components/AdminPanel";
import { AdminGastos } from "../components/gastos/AdminGastos";

import { RutaPrivada } from "./RutaPrivada";
import { RutaPublica } from "./RutaPublica";

import { AuthProvider } from "../context/AuthConext";
import { TotalGastadoProvider } from "../context/TotalGastoEnElMesContext";
import { TotalIngresadoProvider } from "../context/TotalIngresadoEnElMesContext";

import favicon from "../images/logo.png";
import WebFont from "webfontloader";
import { AdminIngresos } from "../components/ingresos/AdminIngresos";
import { ListaDeIngresos } from "../components/ingresos/ListaDeIngresos";
import { EditarIngreso } from "../components/ingresos/EditarIngreso";
import { AdminPerfil } from "../components/AdminPerfil";

WebFont.load({
  google: {
    families: ["Work Sans:400,500,700", "sans-serif"],
  },
});

export const AppRouter = () => {
  return (
    <div>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>

      <AuthProvider>
        <TotalGastadoProvider>
          <TotalIngresadoProvider>
            <BrowserRouter>
              <Switch>
                <RutaPublica path="/ingresar" component={InicioSesion} />
                <RutaPublica path="/registrar" component={RegistroUsuario} />

                <RutaPrivada path="/gastos">
                  <AdminGastos />
                </RutaPrivada>
                <RutaPrivada path="/gastos-categorias">
                  <GastosPorCategoria />
                </RutaPrivada>
                <RutaPrivada path="/gastos-lista">
                  <ListaDeGastos />
                </RutaPrivada>
                <RutaPrivada path="/gastos-editar/:id">
                  <EditarGasto />
                </RutaPrivada>

                <RutaPrivada path="/ingresos">
                  <AdminIngresos />
                </RutaPrivada>
                <RutaPrivada path="/ingresos-lista">
                  <ListaDeIngresos />
                </RutaPrivada>
                <RutaPrivada path="/ingresos-editar/:id">
                  <EditarIngreso />
                </RutaPrivada>

                <RutaPrivada path="/perfil">
                  <AdminPerfil />
                </RutaPrivada>
                <RutaPrivada path="/">
                  <AdminPanel />
                </RutaPrivada>
              </Switch>
            </BrowserRouter>
          </TotalIngresadoProvider>
        </TotalGastadoProvider>
      </AuthProvider>
      <Fondo />
    </div>
  );
};
