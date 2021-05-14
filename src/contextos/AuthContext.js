import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase-config";

//Creamos el contexto
const AuthContext = React.createContext();

//Hook para acceder al contexto
const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState();

  const [cargando, setCargando] = useState(true);

  //Efecto para ejecutar la comprobacion una vez
  useEffect(() => {
    //Comprobamos si hay un usuario
    const cancelarSuscripcion = auth.onAuthStateChanged((usuario) => {
      setUsuario(usuario);
      setCargando(false);
    });

    return cancelarSuscripcion;
  }, []);

  return (
    <AuthContext.Provider value={{ usuario: usuario }}>
      {!cargando && children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, useAuth };
