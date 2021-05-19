import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { useAuth } from "../../context/AuthConext";

export const useObtenerIngresos = () => {
  const { usuario } = useAuth();
  const [ingresos, setIngresos] = useState([]);
  const [ultimoIngreso, setUltimoIngreso] = useState(null);
  const [hayMasPorCargar, setHayMasPorCargar] = useState(false);

  const obtenerMasIngresos = () => {
    db.collection("ingresos")
      .where("uidUsuario", "==", usuario.uid)
      .orderBy("fecha", "desc")
      .limit(10)
      .startAfter(ultimoIngreso)
      .onSnapshot((snapshot) => {
        if (snapshot.docs.length > 0) {
          setUltimoIngreso(snapshot.docs[snapshot.docs.length - 1]);

          setIngresos(
            ingresos.concat(
              snapshot.docs.map((ingreso) => {
                return { ...ingreso.data(), id: ingreso.id };
              })
            )
          );
        } else {
          setHayMasPorCargar(false);
        }
      });
  };

  useEffect(() => {
    const unsuscribe = db
      .collection("ingresos")
      .where("uidUsuario", "==", usuario.uid)
      .orderBy("fecha", "desc")
      .limit(10)
      .onSnapshot((snapshot) => {
        
        if (snapshot.docs.length > 0) {
          setUltimoIngreso(snapshot.docs[snapshot.docs.length - 1]);
          setHayMasPorCargar(true);
        } else {
          setHayMasPorCargar(false);
        }
        setIngresos(
          snapshot.docs.map((ingreso) => {
            return { ...ingreso.data(), id: ingreso.id };
          })
        );
      });

    return unsuscribe;
  }, [usuario]);

  return [ingresos, obtenerMasIngresos, hayMasPorCargar];
};
