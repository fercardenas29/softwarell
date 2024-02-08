// logicHistorial.js

document.addEventListener('DOMContentLoaded', function() {
    // Obtener los datos almacenados en localStorage
    var nombreCliente = localStorage.getItem('nombreCliente');
    var correoCliente = localStorage.getItem('correoCliente');
    
    // Verificar si realmente hay datos para mostrar
    if (nombreCliente && correoCliente) {
        // Seleccionar los elementos del DOM donde se mostrarán el nombre y el correo
        var nombreClienteElement = document.querySelector('#nombreCliente');
        var correoClienteElement = document.querySelector('#correoCliente');

        // Actualizar el contenido de estos elementos con los datos recuperados
        nombreClienteElement.textContent = nombreCliente;
        correoClienteElement.textContent = correoCliente;
    } else {
        // Manejar el caso en que no hay datos, por ejemplo, redirigir a login.html
        window.location.href = 'login.html';
    }
});
