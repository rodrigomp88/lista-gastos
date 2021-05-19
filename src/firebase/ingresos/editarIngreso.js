import { db } from "../firebaseConfig";

export const editarIngreso= ({
  descripcion,
  cantidad,
  fecha,
  id,
}) => {
  return db
    .collection("ingresos")
    .doc(id)
    .update({
      descripcion,
      cantidad: Number(cantidad),
      fecha,
    });
};
