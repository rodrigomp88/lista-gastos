import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../../elementos/Header";
import { BtnRegresar } from "../../elementos/BtnRegresar";
import { BarraTotalGastado } from "../BarraTotalGastado";
import { useObtenerIngresos } from "../../hooks/ingresos/useObtenerIngresos";
import {
  Lista,
  ElementoLista,
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
import convertirAMoneda from "../../functions/convertirAMoneda";
import { Link } from "react-router-dom";
import { Boton } from "../../elementos/Botton";
import { format, fromUnixTime } from "date-fns";
import { es } from "date-fns/locale";
import { borrarIngreso } from "../../firebase/ingresos/borrarIngreso";
import { Contenedor } from "../../elementos/Contenedor";

export const ListaDeIngresos = () => {
  const [ingresos, obtenerMasIngresos, hayMasPorCargar] = useObtenerIngresos();

  const formatearFecha = (fecha) => {
    return format(fromUnixTime(fecha), "dd 'de' MMMM 'de' yyyy", {
      locale: es,
    });
  };

  const fechaEsIgual = (ingresos, index, ingreso) => {
    if (index !== 0) {
      const fechaActual = formatearFecha(ingreso.fecha);
      const fechaGastoAnterior = formatearFecha(ingresos[index - 1].fecha);

      if (fechaActual === fechaGastoAnterior) {
        return true;
      } else {
        return false;
      }
    }
  };

  if (!ingresos) return null;
  return (
    <>
      <Contenedor>
        <Helmet>
          <title>Lista de ingresos</title>
        </Helmet>

        <Header>
          <BtnRegresar ruta="/ingresos" />
          <Titulo>Lista de ingresos</Titulo>
        </Header>

        <Lista>
          {ingresos.map((ingreso, index) => {
            return (
              <div key={ingreso.id}>
                {!fechaEsIgual(ingresos, index, ingreso) && (
                  <Fecha>{formatearFecha(ingreso.fecha)}</Fecha>
                )}

                <ElementoLista key={ingreso.id}>
                  <Descripcion>{ingreso.descripcion}</Descripcion>
                  <Valor>{convertirAMoneda(ingreso.cantidad)}</Valor>
                  <ContenedorBotones data-bs-toggle="tooltip" title="Editar">
                    <BotonAccion
                      as={Link}
                      to={`/ingresos-editar/${ingreso.id}`}
                    >
                      <i className="fi-rr-edit btn btn-warning"></i>
                    </BotonAccion>
                    <BotonAccion data-bs-toggle="tooltip" title="Eliminar">
                      <i
                        className="fi-rr-trash btn btn-danger"
                        onClick={() => borrarIngreso(ingreso.id)}
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
                onClick={() => obtenerMasIngresos()}
              >
                Cargar Mas
              </BotonCargarMas>
            </ContenedorBotonCentral>
          )}

          {ingresos.length === 0 && (
            <ContenedorSubtitulo>
              <Subtitulo>No hay ingresos por mostrar</Subtitulo>
              <Boton as={Link} className="btn btn-light" to="/ingresos">
                Agregar ingresos
              </Boton>
            </ContenedorSubtitulo>
          )}
        </Lista>

        <BarraTotalGastado />
      </Contenedor>
    </>
  );
};
