import React, { useState, useEffect, useContext } from "react";
import { useObtenerIngresosDelMes } from "../hooks/ingresos/useObtenerIngresosDelMes";

const TotalIngresadoContext = React.createContext();

const useTotalIngresoDelMes = () => useContext(TotalIngresadoContext);

const TotalIngresadoProvider = ({ children }) => {
  const [totalIngresado, setTotal] = useState(0);
  const ingresos = useObtenerIngresosDelMes();

  useEffect(() => {
    let acumulado = 0;

    ingresos.forEach((ingreso) => {
      acumulado += ingreso.cantidad;
    });
    setTotal(acumulado);
  }, [ingresos]);

  return (
    <TotalIngresadoContext.Provider value={{ totalIngresado: totalIngresado }}>
      {children}
    </TotalIngresadoContext.Provider>
  );
};

export { TotalIngresadoProvider, useTotalIngresoDelMes };
