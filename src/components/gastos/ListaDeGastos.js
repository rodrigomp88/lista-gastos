import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../../elementos/Header";
import { BtnRegresar } from "../../elementos/BtnRegresar";
import { BarraTotalGastado } from "../BarraTotalGastado";
import { useObtenerGastos } from "../../hooks/gastos/useObtenerGastos";
import {
  Lista,
  ElementoLista,
  Categoria,
  Descripcion,
  Valor,
  Fecha,
  ContenedorBotones,
  BotonAccion,
  BotonCargarMas,
  ContenedorBotonCentral,
  ContenedorSubtitulo,
  Subtitulo,
} from "../../elementos/ElementosDeLista";
import { IconoCategoria } from "../../elementos/IconoCategoria";
import convertirAMoneda from "../../functions/convertirAMoneda";
import { Link } from "react-router-dom";
import { Boton } from "../../elementos/Botton";
import { format, fromUnixTime } from "date-fns";
import { es } from "date-fns/locale";
import { borrarGasto } from "../../firebase/gastos/borrarGasto";
import { Contenedor } from "../../elementos/Contenedor";

export const ListaDeGastos = () => {
  const [gastos, obtenerMasGastos, hayMasPorCargar] = useObtenerGastos();

  const formatearFecha = (fecha) => {
    return format(fromUnixTime(fecha), "dd 'de' MMMM 'de' yyyy", {
      locale: es,
    });
  };

  const fechaEsIgual = (gastos, index, gasto) => {
    if (index !== 0) {
      const fechaActual = formatearFecha(gasto.fecha);
      const fechaGastoAnterior = formatearFecha(gastos[index - 1].fecha);

      if (fechaActual === fechaGastoAnterior) {
        return true;
      } else {
        return false;
      }
    }
  };

  if (!gastos) return null;
  return (
    <>
      <Contenedor>
        <Helmet>
          <title>Lista de Gastos</title>
        </Helmet>

        <Header>
          <BtnRegresar ruta="/gastos" />
          <Titulo>Lista de Gastos</Titulo>
        </Header>

        <Lista>
          {gastos.map((gasto, index) => {
            return (
              <div key={gasto.id}>
                {!fechaEsIgual(gastos, index, gasto) && (
                  <Fecha>{formatearFecha(gasto.fecha)}</Fecha>
                )}

                <ElementoLista key={gasto.id}>
                  <Categoria>
                    <IconoCategoria id={gasto.categoria} />
                    {gasto.categoria}
                  </Categoria>
                  <Descripcion>{gasto.descripcion}</Descripcion>
                  <Valor>{convertirAMoneda(gasto.cantidad)}</Valor>
                  <ContenedorBotones data-bs-toggle="tooltip" title="Editar">
                    <BotonAccion as={Link} to={`/gastos-editar/${gasto.id}`}>
                      <i className="fi-rr-edit btn btn-warning"></i>
                    </BotonAccion>
                    <BotonAccion data-bs-toggle="tooltip" title="Eliminar">
                      <i
                        className="fi-rr-trash btn btn-danger"
                        onClick={() => borrarGasto(gasto.id)}
                      ></i>
                    </BotonAccion>
                  </ContenedorBotones>
                </ElementoLista>
              </div>
            );
          })}
          {hayMasPorCargar && (
            <ContenedorBotonCentral>
              <BotonCargarMas
                className="btn btn-light"
                onClick={() => obtenerMasGastos()}
              >
                Cargar Mas
              </BotonCargarMas>
            </ContenedorBotonCentral>
          )}

          {gastos.length === 0 && (
            <ContenedorSubtitulo>
              <Subtitulo>No hay gasto por mostrar</Subtitulo>
              <Boton as={Link} className="btn btn-light" to="/">
                Agregar Gasto
              </Boton>
            </ContenedorSubtitulo>
          )}
        </Lista>

        <BarraTotalGastado />
      </Contenedor>
    </>
  );
};
