import React from "react";

import { ReactComponent as IconoComida } from "./../images/cat_comida.svg";
import { ReactComponent as IconoCompras } from "./../images/cat_compras.svg";
import { ReactComponent as IconoCuentasYPagos } from "./../images/cat_pagos.svg";
import { ReactComponent as IconoDiversion } from "./../images/cat_diversion.svg";
import { ReactComponent as IconoSaludEHigiene } from "./../images/cat_salud.svg";
import { ReactComponent as IconoTransporte } from "./../images/cat_transporte.svg";

export const IconoCategoria = ({ id }) => {
  switch (id) {
    case "comida":
      return <IconoComida />;
    case "compras":
      return <IconoCompras />;
    case "pagos":
      return <IconoCuentasYPagos />;
    case "diversion":
      return <IconoDiversion />;
    case "salud":
      return <IconoSaludEHigiene />;
    case "transporte":
      return <IconoTransporte />;
    default:
      break;
  }
};
