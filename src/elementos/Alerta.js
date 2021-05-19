import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "./../theme";

const slideDown = keyframes`
    0% {
        transform: translateY(-1.25rem); /* 20px */
        opacity: 0;
    }
 
    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
    
    90% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
 
    100% {
        transform: translateY(1.25rem);
        opacity: 0;
    }
`;

const ContenedorAlerta = styled.div`
  z-index: 1000;
  width: 100%;
  left: 0;
  top: 1rem; /* 20px */
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slideDown} 4s ease forwards;

  .alerta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${(props) => {
      if (props.tipo === "error") {
        return theme.rojo;
      }
      if (props.tipo === "exito") {
        return theme.verde;
      }
      if (props.tipo === "advertencia") {
        return "orange";
      } 
        return "#000"
      
    }};
    color: #fff;
    padding: 1.25rem 2.5rem; /* 20px 40px */
    border-radius: 0.31rem; /* 5px */
    box-shadow: 0px 0.2rem 1.5rem rgba(0, 0, 0, 0.5);
    p {
      text-align: center;
      font-size: 1.2rem;
    }
    i {
      font-size: 1.7rem;
      margin-right: 1rem;
    }
  }
`;

export const Alerta = ({
  tipo,
  mensaje,
  estadoAlerta,
  cambiarEstadoAlerta,
}) => {
  useEffect(() => {
    let tiempo;
    if (estadoAlerta === true) {
      tiempo = setTimeout(() => {
        cambiarEstadoAlerta(false);
      }, 3000);
    }

    return () => clearTimeout(tiempo);
  }, [estadoAlerta, cambiarEstadoAlerta]);

  return (
    <>
      {estadoAlerta && (
        <ContenedorAlerta tipo={tipo}>
          <div className="alerta">
            {/* {tipo === "exito" ? (
              <i className="fi-rr-thumbs-up"></i>
            ) : tipo === "error" ? (
              <i className="fi-rr-thumbs-down"></i>
            ) : tipo === "advertencia" ? (
              <i className="fi-rr-info"></i>
            ) : (
              <i className="fi-rr-info"></i>
            )} */}
            <p>{mensaje}</p>
          </div>
        </ContenedorAlerta>
      )}
    </>
  );
};
