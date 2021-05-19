import React, { useState } from "react";
import { Alerta } from "./Alerta";

export const Prueba = () => {
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});

  const handleinput = () => {
    cambiarEstadoAlerta(true);
    cambiarAlerta({
        tipo: "advertencia",
        mensaje: "gil"
    });
  }

  return (
    <>
      <button onClick={handleinput}>alerta</button>
      <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        cambiarEstadoAlerta={cambiarEstadoAlerta}
      />
    </>
  );
};
