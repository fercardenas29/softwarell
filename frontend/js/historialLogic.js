// logicHistorial.js
document.addEventListener('DOMContentLoaded', function() {
    // Actualizar datos del cliente
    updateCustomerData();

    // Event listener para el botón de confirmación de compra dentro del modal
    document.getElementById('confirm-purchase').addEventListener('click', function() {
        confirmBooking();
    });

    // Event listener para cerrar el modal si se hace click en "No"
    document.getElementById('close-modal').addEventListener('click', function() {
        $('#confirmationModal').modal('hide');
    });
});

function updateCustomerData() {
    // Obtener los datos almacenados en localStorage
    var nombreCliente = localStorage.getItem('nombreCliente');
    var correoCliente = localStorage.getItem('correoCliente');
    
    // Verificar si realmente hay datos para mostrar
    if (nombreCliente && correoCliente) {
        document.getElementById('nombreCliente').textContent = nombreCliente;
        document.getElementById('correoCliente').textContent = correoCliente;
    } else {
        // Manejar el caso en que no hay datos, por ejemplo, redirigir a login.html
        window.location.href = 'login.html';
    }

    // Actualizar la fecha de ingreso con la fecha y hora actual
    var fechaIngresoElement = document.getElementById('fecha-ingreso');
    var fechaActual = new Date();
    fechaIngresoElement.textContent = 'Fecha de Ingreso: ' + fechaActual.toLocaleString('es-ES');
}

function confirmBooking() {
    // Obtener los artículos del carrito de localStorage
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let bookingDescription = cartItems.map(item => `${item.name}: $${item.price}`).join('\n');
    let totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    // Mostrar la reserva confirmada en el Resumen de Compras
    document.getElementById('booking-summary').textContent = bookingDescription + `\nTotal: $${totalPrice.toFixed(2)}`;

    // Vaciar el carrito de compras
    localStorage.setItem('cart', JSON.stringify([]));

    // Actualizar la interfaz si es necesario
    // Por ejemplo, si tienes una función que renderiza el carrito, deberías llamarla aquí
    // renderCartItems(); // Esta función debería estar definida en tu carritoLogic.js

    // Cerrar el modal utilizando jQuery
    $('#confirmationModal').modal('hide');
}