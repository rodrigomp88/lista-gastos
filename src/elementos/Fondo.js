import React from "react";
import styled from "styled-components";
import { ReactComponent as Puntos } from "./../imagenes/puntos.svg";

const Svg = styled.svg`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1;
  path {
    fill: #00cba9;
  }
`;

const PuntosArriba = styled(Puntos)`
  position: fixed;
  z-index: 1;
  width: 300px;
  top: 1rem; /* 40px */
  left: 1rem; /* 40px */
`;



export const Fondo = () => {

  return (
    <>
    <PuntosArriba />
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fillOpacity="5"
          d="M0,32L21.8,48C43.6,64,87,96,131,106.7C174.5,117,218,107,262,101.3C305.5,96,349,96,393,85.3C436.4,75,480,53,524,64C567.3,75,611,117,655,149.3C698.2,181,742,203,785,218.7C829.1,235,873,245,916,229.3C960,213,1004,171,1047,133.3C1090.9,96,1135,64,1178,80C1221.8,96,1265,160,1309,160C1352.7,160,1396,96,1418,64L1440,32L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </Svg>
    </>
  );
};
