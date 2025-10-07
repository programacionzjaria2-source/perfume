function filtrarCombos() {
  const input = document.getElementById('searchInput').value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const tarjetas = document.querySelectorAll('.card');

  tarjetas.forEach(card => {
    const texto = card.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const columna = card.closest('[class*="col-"]');

    if (texto.includes(input) || input === '') {
      columna.style.display = '';
    } else {
      columna.style.display = 'none';
    }
  });
}
