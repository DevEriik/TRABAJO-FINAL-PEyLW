const contenedorTarjetas = document.getElementById("productos-container");
const unidadesElement = document.getElementById("unidad");
const preciosElement = document.getElementById("precio-final");
const carritoVacio = document.getElementById("carrito-vacio");
const totales = document.getElementById("totales");
const vaciarCarritoElement = document.getElementById("vaciar-carrito");
const btnComprar = document.getElementById("btn-comprar");

function crearTarjetasProductosInicio() {
  contenedorTarjetas.innerHTML = "";
  const productos = JSON.parse(localStorage.getItem("productos"));
  console.log(productos);
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      const nuevoProducto = document.createElement("div");
      nuevoProducto.classList = "tarjeta-producto";
      nuevoProducto.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio}</p>
                <div class="tarjeta-producto">
                <button id="button-incre"> － </button>
                <span class="cantidad">${producto.cantidad}</span>
                <button id="button-incre"> ＋ </button>
                </div>`;
    
      contenedorTarjetas.appendChild(nuevoProducto);

      nuevoProducto
        .getElementsByTagName("button")[1]
        .addEventListener("click", (e) => {
          const cuentaElement =
            e.target.parentElement.getElementsByTagName("span")[0];
          cuentaElement.innerText = agregarAlCarrito(producto);
          actualizarTotales();
        });

      nuevoProducto
        .getElementsByTagName("button")[0]
        .addEventListener("click", (e) => {
          restarAlCarrito(producto);
          crearTarjetasProductosInicio();
          actualizarTotales();
        });
    });
  }
}

crearTarjetasProductosInicio();
actualizarTotales();

function actualizarTotales() {
  const productos = JSON.parse(localStorage.getItem("productos"));
  let unidad = 0;
  let precio = 0;
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      unidad += producto.cantidad;
      precio += producto.precio * producto.cantidad;
    });
    unidadesElement.innerText = unidad;
    preciosElement.innerText = precio;
  }
  revisarMensajeVacio();
}

function revisarMensajeVacio() {
  const productos = JSON.parse(localStorage.getItem("productos"));
  console.log(productos, productos == true);
  carritoVacio.classList.toggle("escondido", productos && productos.length > 0);
  totales.classList.toggle("escondido", !(productos && productos.length > 0));
}

revisarMensajeVacio();

vaciarCarritoElement.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
  localStorage.removeItem("productos");
  actualizarTotales();
  crearTarjetasProductosInicio();
  actualizarNumeroCarrito();
}

document.addEventListener("DOMContentLoaded", () => {
  btnComprar.addEventListener("click", () => {
   
    window.location.href = "../formularioDeCompra.html";
  })
});
