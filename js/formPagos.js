document.addEventListener("DOMContentLoaded", () => {
  const btnPagar = document.getElementById("btn-pagar");
  const nombreYApellido = document.getElementById("nombre");
  const numeroTarjeta = document.getElementById("numero");
  const mes = document.getElementById("mes");
  const ano = document.getElementById("ano");
  const cvv = document.getElementById("cvv");
  const Email = document.getElementById("email");

  btnPagar.addEventListener("click", () => {
    let error = false;
    if (
      nombreYApellido.value === "" ||
      numeroTarjeta.value === "" ||
      mes.value === "mes" ||
      ano.value === "año" ||
      cvv.value === "" ||
      Email.value === ""
    ) {
      //*Verifico que el nombre y apellido no esten vacios
      if (nombreYApellido.value === "") {
        error = true;
        const marcarNombreyApellido = (nombreyap) => {
          nombreYApellido.style.border = "2px solid red";

          nombreYApellido.addEventListener("click", () => {
            nombreYApellido.style.border = "none";
          });
        };

        marcarNombreyApellido(nombreYApellido.value);
      }

      //*Verifico que el numero de tarjeta no este vacio.
      if (numeroTarjeta.value === "") {
        error = true;
        const marcarNumero = (numero) => {
          numeroTarjeta.style.border = "2px solid red";
          numeroTarjeta.addEventListener("click", () => {
            numeroTarjeta.style.border = "none";
          });
        };
        marcarNumero(numeroTarjeta.value);
      }

      //*Verifico que el mes y el año no sean incorrectos.
      if (mes.value === "") {
        error = true;
        const marcarMes = (meses) => {
          mes.style.border = "2px solid red";
          mes.addEventListener("click", () => {
            mes.style.border = "none";
          });
        };
        marcarMes(mes.value);
      }

      if (ano.value === "") {
        error = true;
        const marcarAnio = (anio) => {
          ano.style.border = "2px solid red";
          ano.addEventListener("click", () => {
            ano.style.border = "none";
          });
        };
        marcarAnio(ano.value);
      }

      //*Verifico que el codigo de la tarjeta no sea incorrecto

      if (cvv.value === "") {
        error = true;
        const marcarCvv = (cvvs) => {
          cvv.style.border = "2px solid red";
          cvv.addEventListener("click", () => {
            cvv.style.border = "none";
          });
        };
        marcarCvv(cvv.value);
      }

      //*Verifico que el mail no este vacio.

      if (Email.value === "") {
        error = true;
        const marcarEmail = (emails) => {
          Email.style.border = "2px solid red";
          Email.addEventListener("click", () => {
            Email.style.border = "none";
          });
        };
        marcarEmail(Email.value);
      }
    }

    const validarNombreyApellido = (nombreyape) => {
      const regex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      if (!regex.test(nombreyape)) {
        const marcarNombreyApellido = (nombreyap) => {
            error = true;
          nombreYApellido.style.border = "2px solid red";
          nombreYApellido.addEventListener("click", () => {
            nombreYApellido.style.border = "none";
          });
        };
        marcarNombreyApellido(nombreYApellido.value);
      }
    };
    validarNombreyApellido(nombreYApellido.value);

    const validarNumeroTarjeta = (numeroTarj) => {
      const regex = /^[0-9]+$/;
      if (!regex.test(numeroTarj)) {
        const marcarNumero = (numero) => {
          error = true;
          numeroTarjeta.style.border = "2px solid red";
          numeroTarjeta.addEventListener("click", () => {
            numeroTarjeta.style.border = "none";
          });
        };
        marcarNumero(numeroTarjeta.value);
      }
    };

    validarNumeroTarjeta(numeroTarjeta.value);

    const validarCvv = (cvvs) => {
      const regex = /^[0-9]+$/;
      if (!regex.test(cvvs)) {
        error = true;
        const marcarCvv = (cvvs) => {
          cvv.style.border = "2px solid red";
          cvv.addEventListener("click", () => {
            cvv.style.border = "none";
          });
        };
        marcarCvv(cvv.value);
      }
    };
    validarCvv(cvv.value);

    const validadarEmail = (emails) => {
      const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      if (!regex.test(emails)) {
        const marcarEmail = (emails) => {
          error = true;
          Email.style.border = "2px solid red";
          Email.addEventListener("click", () => {
            Email.style.border = "none";
          });
        };
        marcarEmail(Email.value);
      }
    };
    validadarEmail(Email.value);

    if (error) {
      const aviso = document.getElementById("aviso");
      aviso.innerHTML =
        "Por favor revisa de haber rellenado todos los campos correctamente.";
      aviso.style.color = "red";
    } else {
      window.location.href = "../graciasCompra.html";
    }
    console.log(error);
  });
});
