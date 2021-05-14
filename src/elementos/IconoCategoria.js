import React from "react";

import Comida from "../imagenes/comida.png";
import Compra from "../imagenes/compra.png";
import CuentasYPagos from "../imagenes/cuentas-y-pagos.png";
import Diversion from "../imagenes/diversion.png";
import Hogar from "../imagenes/hogar.png";
import Ropa from "../imagenes/ropa.png";
import SaludEHigiene from "../imagenes/salud-e-higiene.png";
import Combustible from "../imagenes/combustible.png";

export const IconoCategoria = ({ id }) => {
  switch (id) {
    case "comida":
      return <img src={Comida} alt="" style={{width: "35px"}} />;
    case "compras":
      return <img src={Compra} alt="" style={{width: "35px"}} />;
    case "cuentas y pagos":
      return <img src={CuentasYPagos} alt="" style={{width: "35px"}} />;
    case "diversion":
      return <img src={Diversion} alt="" style={{width: "35px"}} />;
    case "hogar":
      return <img src={Hogar} alt="" style={{width: "35px"}} />;
    case "ropa":
      return <img src={Ropa} alt="" style={{width: "35px"}} />;
    case "salud e higiene":
      return <img src={SaludEHigiene} alt="" style={{width: "35px"}} />;
    case "combustible":
      return <img src={Combustible} alt="" style={{width: "35px"}} />;
    default:
      break;
  }
};
