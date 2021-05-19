import { db } from "../firebaseConfig";

export const agregarIngreso = ({
  descripcion,
  cantidad,
  fecha,
  uidUsuario,
}) => {
  return db.collection("ingresos").add({
    descripcion,
    cantidad: Number(cantidad),
    fecha,
    uidUsuario,
  });
};
