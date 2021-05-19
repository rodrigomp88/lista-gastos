import { db } from "../firebaseConfig";
import Swal from "sweetalert2";

export const borrarGasto = (id) => {
  Swal.fire({
    icon: "warning",
    title: "Estas seguro?",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, borrarlo",
    cancelButtonText: "No, cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Borrado!",
        timer: 1500,
        showConfirmButton: false,
        icon: "success",
      });
      db.collection("gastos").doc(id).delete();
    }
  });
};
