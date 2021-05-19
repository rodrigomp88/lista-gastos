import { useEffect, useState } from "react";
import { useObtenerGastosDelMes } from "./useObtenerGastosDelMes";

export const useObtenerGastosDelMesPorCategoria = () => {
  const [gastosPorCategoria, setGastosPorCategoria] = useState([]);
  const gastos = useObtenerGastosDelMes();

  useEffect(() => {
    const sumaDeGastos = gastos.reduce(
      (objetoResultante, objetoActual) => {
        const categoriaActual = objetoActual.categoria;
        const cantidadActual = objetoActual.cantidad;

        objetoResultante[categoriaActual] += cantidadActual;

        return objetoResultante;
      },
      {
        comida: 0,
        pagos: 0,
        transporte: 0,
        salud: 0,
        compras: 0,
        diversion: 0,
      }
    );

    setGastosPorCategoria(
      Object.keys(sumaDeGastos).map((elemento) => {
        return {
          categoria: elemento,
          cantidad: sumaDeGastos[elemento],
        };
      })
    );
  }, [setGastosPorCategoria, gastos]);

  return gastosPorCategoria;
};
