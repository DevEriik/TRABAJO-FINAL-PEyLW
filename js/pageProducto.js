document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));

  const productoSeleccionado = productos.find(
    (producto) => producto.id === productId
  );
  console.log(productoSeleccionado);

  const contenedorDetalles = document.getElementById("detalle-producto");
  contenedorDetalles.innerHTML = `
    <div id="detalle-producto">
        
            <div class="detalle-imagen">
                <img id="imagen-producto" src="${productoSeleccionado.imagen}" alt="${productoSeleccionado.nombre}">
            </div>
            <div class="detalle-info">
                <h2 id="nombre-producto">${productoSeleccionado.nombre}</h2>
                <p class="descripcion"> ${productoSeleccionado.descripcion}</p>
                <div class="detalle-footer">
                    <p class="precio">Precio: $${productoSeleccionado.precio}</p>
                    <button class="button">Agregar al carrito</button>
                </div>
                
            </div>
    </div>
  `;

  //?Para agregar el producto al carrito.
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    agregarAlCarrito(productoSeleccionado);
  });

});
