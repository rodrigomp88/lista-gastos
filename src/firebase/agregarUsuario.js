import { db } from "./firebaseConfig";

export const agregarUsuario = ({
  nombre,
  apellido,
  correo,
}) => {
  return db.collection("usuarios").add({
    nombre,
    apellido,
    correo
  });
};
