import { db } from "../firebaseConfig";

export const agregarGasto = ({
  categoria,
  descripcion,
  cantidad,
  fecha,
  uidUsuario,
}) => {
  return db.collection("gastos").add({
    categoria,
    descripcion,
    cantidad: Number(cantidad),
    fecha,
    uidUsuario,
  });
};
