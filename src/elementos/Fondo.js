import React from "react";
import puntos from "../imagenes/puntos.png";

export const Fondo = () => {
  return (
    <>
      <div className="PuntosArriba">
        <img src={puntos} alt="" />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="wave"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#00cba9"
          fillOpacity="1"
          d="M0,32L60,80C120,128,240,224,360,240C480,256,600,192,720,170.7C840,149,960,171,1080,181.3C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="PuntosAbajo">
        <img src={puntos} alt="" />
      </div>
    </>
  );
};
