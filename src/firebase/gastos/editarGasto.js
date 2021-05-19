import { db } from "../firebaseConfig";

export const editarGasto = ({
  categoria,
  descripcion,
  cantidad,
  fecha,
  id,
}) => {
  return db
    .collection("gastos")
    .doc(id)
    .update({
      categoria,
      descripcion,
      cantidad: Number(cantidad),
      fecha,
    });
};
