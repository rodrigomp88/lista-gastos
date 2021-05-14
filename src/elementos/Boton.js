import styled from "styled-components";
import { Link } from "react-router-dom";

const Boton = styled(Link)`
  background: ${(props) => (props.primario ? "#5B69E2" : "#000")};
  width: ${(props) => (props.conIcono ? "15.62rem" : "auto")}; /* 250px */
  margin-left: 1rem; /* 20px */
  border: none;
  border-radius: 0.625rem; /* 10px */
  color: #fff;
  height: 3rem; /* 60px */
  padding: 1rem 1.5rem; /* 20px 30px */
  font-size: 1rem; /* 20px */
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  outline: none;

  svg {
    height: ${(props) => (props.iconoGrande ? "100%" : "0.75rem;")}; /* 12px */
    fill: white;
  }
`;

export { Boton };
