function filtrarProductos() {
    const input = document.getElementById('searchInput').value.toLowerCase().trim();
    const precioDesde = parseInt(document.getElementById('precioDesde').value) || 0;
    const precioHasta = parseInt(document.getElementById('precioHasta').value) || Infinity;

    const productos = document.querySelectorAll('#productosContainer .producto');

    productos.forEach(producto => {
        const texto = producto.textContent.toLowerCase();

        // Extraemos el precio como número (sin símbolos ni puntos)
        const precioTexto = producto.querySelector('strong').textContent.replace(/[^\d]/g, '');
        const precio = parseInt(precioTexto) || 0;

        // Validamos que el texto incluya el input y el precio esté en el rango
        const textoCoincide = texto.includes(input);
        const precioCoincide = precio >= precioDesde && precio <= precioHasta;

        // Mostrar u ocultar el producto
        producto.style.display = (textoCoincide && precioCoincide) ? '' : 'none';
    });
}

// Ejecutar filtro cuando el usuario escribe en el buscador
document.getElementById('searchInput').addEventListener('input', filtrarProductos);

// Ejecutar filtro cuando se envía el formulario de precio (prevenir recarga)
document.querySelector('form.row.g-3').addEventListener('submit', e => {
    e.preventDefault();
    filtrarProductos();
});

// Ejecutar filtro al cambiar valores de precio (input en tiempo real)
document.getElementById('precioDesde').addEventListener('input', filtrarProductos);
document.getElementById('precioHasta').addEventListener('input', filtrarProductos);



