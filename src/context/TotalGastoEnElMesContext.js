import React, { useState, useEffect, useContext } from "react";
import { useObtenerGastosDelMes } from "../hooks/gastos/useObtenerGastosDelMes";

const TotalGastadoContext = React.createContext();

const useTotalGastoDelMes = () => useContext(TotalGastadoContext);

const TotalGastadoProvider = ({ children }) => {
  const [totalGastado, setTotal] = useState(0);
  const gastos = useObtenerGastosDelMes();

  useEffect(() => {
    let acumulado = 0;

    gastos.forEach((gasto) => {
      acumulado += gasto.cantidad;
    });
    setTotal(acumulado);
  }, [gastos]);

  return (
    <TotalGastadoContext.Provider value={{ totalGastado: totalGastado }}>
      {children}
    </TotalGastadoContext.Provider>
  );
};

export { TotalGastadoProvider, useTotalGastoDelMes };
