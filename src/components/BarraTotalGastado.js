import React from "react";
import styled from "styled-components";
import convertirAMoneda from "../functions/convertirAMoneda";
import { useTotalGastoDelMes } from "../context/TotalGastoEnElMesContext";
import { useTotalIngresoDelMes } from "../context/TotalIngresadoEnElMesContext";

const BarraTotal = styled.div`
  background: #000;
  font-size: 1.25rem; /* 20px */
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0.62rem 2.25rem; /* 10px 40px */
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 31.25rem) {
    /* 500px */
    flex-direction: column;
    font-size: 14px;
  }
`;

export const BarraTotalGastado = () => {
  const { totalGastado } = useTotalGastoDelMes();
  const { totalIngresado } = useTotalIngresoDelMes();

  return (
    <BarraTotal>
      <p>
        Ingresos: <strong className="text-success"> {convertirAMoneda(totalIngresado)} </strong>
      </p>
      <p>
        Gastos: <strong className="text-danger"> {convertirAMoneda(totalGastado)} </strong>
      </p>
    </BarraTotal>
  );
};
