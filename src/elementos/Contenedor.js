import styled from 'styled-components';

export const Contenedor = styled.div`
  background: #fff;
  width: 90%;
  max-width: 70rem; /*1110px*/
  height: 90vh;
  max-height: 50rem; /* 80px */
  overflow-y: auto;
  box-shadow: 0px 2.25rem 3.5rem rgba(0, 0, 0, 0.5);
  border-radius: 0.625rem; /* 10px */
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 100;


  @media (max-width: 60rem) {
    /* 950px */
    height: 95vh;
    max-height: none;
  }
`;

export const ContenedorInicio = styled.div`
  background: #f9f9f9;
  width: 90%;
  max-width: 30rem; /*1110px*/
  height: 90vh;
  max-height: 50rem; /* 80px */
  overflow-y: auto;
  box-shadow: 0px 2.25rem 3.5rem rgba(0, 0, 0, 0.5);
  border-radius: 0.625rem; /* 10px */
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 100;


  @media (max-width: 60rem) {
    /* 950px */
    height: 95vh;
    max-height: none;
  }
`;
