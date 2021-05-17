import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Btn = styled.button`
  display: block;
  width: 3.12rem; /* 50px */
  height: 3.12rem; /* 50px */
  line-height: 3.12rem; /* 50px */
  text-align: center;
  margin-right: 1.25rem; /* 20px */
  border: none;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.31rem; /* 5px */
  cursor: pointer;
  transition: 0.3s ease all;

  &:hover {
    box-shadow: 0px 0.2rem 1.5rem rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 60rem) {
    /* 950px */
    width: 2.5rem; /* 40px */
    height: 2.5rem; /* 40px */
    line-height: 2.5rem; /* 40px */
  }
`;

const Icono = styled.i`
  width: 50%;
  height: auto;
  fill: #fff;
`;

export const BtnRegresar = ({ ruta = "/" }) => {
  const history = useHistory();
  return (
    <Btn onClick={() => history.push(ruta)}>
      <Icono className="fi-rr-undo"></Icono>
    </Btn>
  );
};
