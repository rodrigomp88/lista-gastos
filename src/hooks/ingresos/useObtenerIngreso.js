import { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { useHistory } from "react-router-dom";

export const useObtenerIngreso = (id) => {
  const [ingreso, setIngreso] = useState("");
  const history = useHistory();

  useEffect(() => {
    db.collection("ingresos")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIngreso(doc);
        } else {
          history.push("/ingresos-lista");
        }
      });
  }, [history, id]);

  return [ingreso];
};
