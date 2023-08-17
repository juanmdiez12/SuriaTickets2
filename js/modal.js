const showQuantityValidationAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Porfavor ingrese una cantidad validad",

    customClass: "swal-wide-error",
    color: "#000",
    background: "#fff",
    confirmButtonText: "Ok",
    position: "top",
    timer: 6000,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
  });
};

const showRemoveConfirmation = (productId) => {
  Swal.fire({
    icon: "warning",
    title: "Esta seguro de quitar la entrada del carrito?",
    customClass: {
      title: "swal2-title",
    },
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },

    color: "#000",
    background: "#fff",
    position: "top-end",
    customClass: "swal-wide",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Quitar",
  }).then((result) => {
    if (result.isConfirmed) {
      removeFromCart(productId);
      Swal.fire({
        title: "Hecho!",
        text: "Su entrada fue quitada del carrito.",
        icon: "success",
        color: "#000",
        background: "#fff",
        position: "top-end",
        customClass: "swal-wide",
      });
    }
  });
};

const showPurchaseSuccess = () => {
  Toastify({
    text: "Su compra fue completada exitosamente",
    newWindow: true,
    close: true,
    gravity: "top",
    duration: 6000,
    position: "center",
    backgroundColor: "linear-gradient(to right, #242121, #ff0000)",
    stopOnFocus: true,
  }).showToast();
};
