import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../theme";
import { IconoCategoria } from "../elementos/IconoCategoria";

const ContenedorSelect = styled.div`
  background: #000;
  color: #fff;
  cursor: pointer;
  border-radius: 0.625rem; /* 10px */
  position: relative;
  height: 3rem; /* 80px */
  width: 40%;
  padding: 0px 1.25rem; /* 20px */
  font-size: 1.5rem; /* 24px */
  text-align: center;
  display: flex;
  align-items: center;
  transition: 0.5s ease all;
  &:hover {
    box-shadow: 0px 0.2rem 1.5rem rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 60rem) {
    /* 950px */
     & {
      width: 100%;
    }
  }
`;

const OpcionSeleccionada = styled.div`
  width: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    width: 1.25rem; /* 20px */
    height: auto;
    margin-left: 1.25rem; /* 20px */
  }
`;

const Opciones = styled.div`
  background: #fff;
  color: #000;
  box-shadow: 0px 0.2rem 1.5rem rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 3.5rem; /* 90px */
  left: 0;
  width: 100%;
  border-radius: 0.625rem; /* 10px */
  max-height: 18.75rem; /* 300px */
  overflow-y: auto;
`;

const Opcion = styled.div`
  padding: 1.25rem; /* 20px */
  display: flex;
  svg {
    width: 28px;
    height: auto;
    margin-right: 1.25rem; /* 20px */
  }
  &:hover {
    background: ${theme.grisClaro2};
  }
`;

export const SelectorCategorias = ({ categoria, cambiarCategoria }) => {
  const [mostrarSelect, cambiarMostrarSelect] = useState(false);

  const categorias = [
    { id: "comida", texto: "Comida" },
    { id: "cuentas y pagos", texto: "Cuentas y pagos" },
    { id: "hogar", texto: "Hogar" },
    { id: "transporte", texto: "Transporte" },
    { id: "ropa", texto: "Ropa" },
    { id: "salud e higiene", texto: "Salud e Higiene" },
    { id: "compras", texto: "Compras" },
    { id: "diversion", texto: "Diversion" },
  ];

  const handleClick = (e) => {
    cambiarCategoria(e.currentTarget.dataset.valor);
  };

  return (
    <ContenedorSelect onClick={() => cambiarMostrarSelect(!mostrarSelect)}>
      <OpcionSeleccionada>
        {categoria} <i className="fi-rr-caret-down"></i>
      </OpcionSeleccionada>

      {mostrarSelect && (
        <Opciones>
          {categorias.map((categoria) => {
            return (
              <Opcion
                key={categoria.id}
                data-valor={categoria.id}
                onClick={handleClick}
              >
                <IconoCategoria id={categoria.id} />
                {categoria.texto}
              </Opcion>
            );
          })}
        </Opciones>
      )}
    </ContenedorSelect>
  );
};
