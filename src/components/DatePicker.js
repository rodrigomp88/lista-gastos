import React from "react";
import styled from "styled-components";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";
import { es } from "date-fns/locale";

function parseDate(str, format) {
  const parsed = dateFnsParse(str, format, new Date(), { locale: es });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format) {
  return dateFnsFormat(date, format, { locale: es });
}
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const dias_semana_cortos = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];

const ContenedorInput = styled.div`
  input {
    font-family: "Work Sans", sans-serif;
    box-sizing: border-box;
    background: #000;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */
    height: 3rem; /* 80px */
    width: 100%;
    padding: 0 1.25rem; /* 20px */
    font-size: 1.5rem; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease all;
    &:hover {
      box-shadow: 0px 0.2rem 1.5rem rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 60rem) {
    /* 950px */
    & > * {
      width: 100%;
    }
  }
`;

export const DatePicker = ({ fecha, cambiarFecha }) => {
  return (
    <ContenedorInput>
      <DayPickerInput
        //Con el inputProps lo que consegui es prohibir la escritura por parte del usuario 
        //para que no genere el error de "NaN" en la base de datos y haga truncar la aplicación.
        inputProps={{ readOnly: true }}
        value={fecha}
        onDayChange={(day) => cambiarFecha(day)}
        format="dd 'de' MMMM 'de' yyyy"
        formatDate={formatDate}
        parseDate={parseDate}
        dayPickerProps={{
          months: meses,
          weekdaysShort: dias_semana_cortos,
        }}
      />
    </ContenedorInput>
  );
};
