document.addEventListener("DOMContentLoaded", () => {
  const btnSubmit = document.getElementById("btn-comprar");

  btnSubmit.addEventListener("click", () => {
    const inputNombre = document.getElementById("name");
    const inputApellido = document.getElementById("apellido");
    const inputDireccion = document.getElementById("direccion");
    const inputNumero = document.getElementById("numero");
    const inputCodigoP = document.getElementById("codigoPostal");
    const selectProv = document.getElementById("provincia");
    const selectLoc = document.getElementById("localidad");
    const inputEmail = document.getElementById("email");
    const inputTel = document.getElementById("telefono");
    const checkboxTerm = document.getElementById("checkbox-terminos");

    let error = false; //TODO: Valida que todos los campos esten correctos y completos para poder seguir con la compra.
    
    if (
      inputNombre.value === "" ||
      inputApellido.value === "" ||
      inputDireccion.value === "" ||
      inputNumero.value === "" ||
      inputNumero.value === "0" ||
      inputCodigoP.value === "" ||
      inputCodigoP.value === "0" ||
      selectProv.value === "..." ||
      selectProv.value === "" ||
      selectLoc.value === "..." ||
      selectLoc.value === "" ||
      inputEmail.value === "" ||
      inputTel.value === "" ||
      inputTel.value === "0" ||
      checkboxTerm.checked === false
    ) {
      //TODO: Verifico el nombre solo si esta vacio
      if (inputNombre.value === "") {
        error = true;
        const marcarNombre = (nombre) => {
          inputNombre.style.borderColor = "red";
          inputNombre.addEventListener("click", () => {
            inputNombre.style.borderColor = "white";
          });
        };
        marcarNombre(inputNombre.value);
      }

      //TODO: Verifico el apellido solo si esta vacio
      if (inputApellido.value === "") {
        error = true;
        const marcarApellido = (apellido) => {
          inputApellido.style.borderColor = "red";
          inputApellido.addEventListener("click", () => {
            inputApellido.style.borderColor = "white";
          });
        };
        marcarApellido(inputApellido.value);
      }

      //TODO: Verifico la direccion
      if (inputDireccion.value === "") {
        const marcarDirec = (direc) => {
          inputDireccion.style.borderColor = "red";
          inputDireccion.addEventListener("click", () => {
            inputDireccion.style.borderColor = "white";
          });
        };
        marcarDirec(inputDireccion.value);
      }

      //TODO: Verifico el numero solo si esta vacio
      if (inputNumero.value === "" || inputNumero.value === "0") {
        const marcarNumero = (numero) => {
          inputNumero.style.borderColor = "red";
          inputNumero.addEventListener("click", () => {
            inputNumero.style.borderColor = "white";
          });
        };
        marcarNumero(inputNumero.value);
      }

      //TODO: Verifico el C.P. solo si esta vacio
      if (inputCodigoP.value === "" || inputCodigoP.value === "0") {
        error = true;
        const marcarCP = (cp) => {
          inputCodigoP.style.borderColor = "red";
          inputCodigoP.addEventListener("click", () => {
            inputCodigoP.style.borderColor = "white";
          });
        };
        marcarCP(inputCodigoP.value);
      }

      //TODO: Verifico la provincia
      if (selectProv.value === "..." || selectProv.value === "") {
        error = true;
        const marcarProv = (prov) => {
          selectProv.style.borderColor = "red";
          selectProv.addEventListener("click", () => {
            selectProv.style.borderColor = "white";
          });
        };
        marcarProv(selectProv.value);
      }

      //TODO: Verifico la localidad
      if (selectLoc.value === "..." || selectLoc.value === "") {
        error = true;
        const marcarLoc = (loc) => {
          selectLoc.style.borderColor = "red";
          selectLoc.addEventListener("click", () => {
            selectLoc.style.borderColor = "white";
          });
        };
        marcarLoc(selectLoc.value);
      }

      //TODO: Verifico el email
      if (inputEmail.value === "") {
        error = true;
        const marcarEmail = (email) => {
          inputEmail.style.borderColor = "red";
          inputEmail.addEventListener("click", () => {
            inputEmail.style.borderColor = "white";
          });
        };
        marcarEmail(inputEmail.value);
      }

      //TODO: Verifico el tel
      if (inputTel.value === "" || inputTel.value === "0") {
        error = true;
        const marcarTel = (tel) => {
          inputTel.style.borderColor = "red";
          inputTel.addEventListener("click", () => {
            inputTel.style.borderColor = "white";
          });
        };
        marcarTel(inputTel.value);
      }

      //TODO: Verifico el checkbox
      if (checkboxTerm.checked === false) {
        error = true;
        const marcarCheck = () => {
          const labelTerm = document.getElementById("label-termi");
          labelTerm.style.color = "red";
          checkboxTerm.addEventListener("click", () => {
            labelTerm.style.color = "black";
          });
        };
        marcarCheck();
      }
    }

    //*Verifico que en nombre y apellido los caracteres sean validos.

    const verificarNombre = (nombre) => {
      const regex = /^[a-zA-Z\s]*$/;
      if (!regex.test(nombre)) {
        const marcarNombre = (nombre) => {
          inputNombre.style.borderColor = "red";
          inputNombre.addEventListener("click", () => {
            inputNombre.style.borderColor = "white";
          });
        };
        marcarNombre(inputNombre.value);
      }
    };

    const verificarApellido = (apellido) => {
      const regex = /^[a-zA-Z\s]*$/;
      if (!regex.test(apellido)) {
        const marcarApellido = (apellido) => {
          inputApellido.style.borderColor = "red";
          inputApellido.addEventListener("click", () => {
            inputApellido.style.borderColor = "white";
          });
        };
        marcarApellido(inputApellido.value);
      }
    };

    //*Verifico que los caracteres de el email sean correctos
    const verificarEmail = (email) => {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(email)) {
        const marcarEmail = (email) => {
          inputEmail.style.borderColor = "red";
          inputEmail.addEventListener("click", () => {
            inputEmail.style.borderColor = "white";
          });
        };
        marcarEmail(inputEmail.value);
      }
    };

    verificarNombre(inputNombre.value);
    verificarApellido(inputApellido.value);
    verificarEmail(inputEmail.value);

    //*Si no hay ningun error en los campos se redirige a medioPago.html si no le avisa al usuario.
    if (!error) {
      window.location.href = "../medioPago.html";
    }else{
      const avisoCompra = document.getElementById("aviso-terminos");
      avisoCompra.innerHTML = "Para poder seguir con la compra debe completar todos los campos obligatorios (*).";
      avisoCompra.style.color = "red";
    }
    
  });

  //!Boton para cancelar la compra.
  const btnCancelar = document.getElementById("cancelar-compra");

  btnCancelar.addEventListener("click", function () {
    window.location.href = "../index.html";
  });

  //!Boton de continuar la compra
  
});
