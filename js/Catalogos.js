function filtrarCombos() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const tarjetas = document.querySelectorAll('.container .row .card');

    tarjetas.forEach(card => {
        const texto = card.textContent.toLowerCase();
        if (texto.includes(input)) {
            card.closest('.col-12').style.display = '';  // Mostrar la tarjeta
        } else {
            card.closest('.col-12').style.display = 'none'; // Ocultar la tarjeta
        }
    });
}
