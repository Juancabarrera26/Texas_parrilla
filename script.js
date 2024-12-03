function calcularCosto(productoId, precioPorUnidad) {
    // Obtener la cantidad ingresada por el usuario
    const cantidad = parseFloat(document.getElementById(`${productoId}Cantidad`).value);

    // Validar que la cantidad sea un número válido
    if (isNaN(cantidad) || cantidad < 0) {
        document.getElementById(`${productoId}Costo`).textContent = "Cantidad inválida";
        return;
    }

    // Calcular el costo total
    const costoTotal = cantidad * precioPorUnidad;

    // Mostrar el resultado en el campo correspondiente
    document.getElementById(`${productoId}Costo`).textContent = costoTotal.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
    });
}
// Elementos principales
const body = document.body;
const contrastButton = document.getElementById('toggle-contrast');
const increaseFontButton = document.getElementById('increase-font');
const decreaseFontButton = document.getElementById('decrease-font');

// Alternar modo de contraste
contrastButton.addEventListener('click', () => {
    body.classList.toggle('high-contrast');
});

// Ajustar tamaño de fuente
let fontSize = 16;

increaseFontButton.addEventListener('click', () => {
    fontSize += 2;
    document.documentElement.style.fontSize = `${fontSize}px`;
});

decreaseFontButton.addEventListener('click', () => {
    if (fontSize > 10) {
        fontSize -= 2;
        document.documentElement.style.fontSize = `${fontSize}px`;
    }
});

