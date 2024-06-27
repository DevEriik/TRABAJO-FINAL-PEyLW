//!CARROUSEL

const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");

//*Cuando CLICK en punto
//*Saber la posicion de ese punto
//*Aplicar un transform translateX al grande
//*QUITAR la clase activo de TODOS los puntos
//*ANIADIR la clase activo al punto que hemos echo  CLICK

//*Recorrer todos los punto
punto.forEach((cadaPunto, i) => {
  //*Asignamos un CLICK a cada punto
  punto[i].addEventListener("click", () => {
    //*Guardar la posicion de ese punto
    let posicion = i;
    //*Posicion es 0 transformX es 0
    //*Posicion es 1 transformX es -50%
    //* operacion = posicion * -50

    //*Calculando el espacio que debe desplazarce el grande
    let operacion = posicion * -25;

    //*MOVEMOS el grande
    grande.style.transform = `translateX(${operacion}%)`;

    //*Recorremos TODOS los puntos
    punto.forEach((cadaPunto, i) => {
      //*Quitamos la clase ACTIVO a TODOS los puntos
      punto[i].classList.remove("activo");
    });

    //*Aniadir la clase activo en el punto que hemos echo CLICK
    punto[i].classList.add("activo");
  });
});

//!PRODUCTOS

const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio(productos) {
  productos.forEach((producto) => {
    const nuevoProducto = document.createElement("div");
    nuevoProducto.classList = "tarjeta-producto";

    nuevoProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <button class="button">Añadir al carrito</button>`;

    nuevoProducto.id = `producto-${producto.id}`;

    nuevoProducto.addEventListener("click", () => {
      window.location.href = `productos.html?id=${producto.id}`;
    });
    
    const botonAgregarCarrito = nuevoProducto.querySelector(".button");
    botonAgregarCarrito.addEventListener("click", (event) => {
      event.stopPropagation(); // Detiene la propagación del evento al contenedor
      event.preventDefault();
    });
    contenedorTarjetas.appendChild(nuevoProducto);

    nuevoProducto
      .getElementsByTagName("button")[0]
      .addEventListener("click", () => {
        agregarAlCarrito(producto);
      });
  });
}

crearTarjetasProductosInicio(productos);

/**Descripcion del producto */

const tarjetas = document.querySelectorAll(".tarjeta-producto");

tarjetas.forEach((tarjeta) => {
  tarjeta.addEventListener("click", () => {
    tarjeta.classList.toggle("expanded");
  });
});
