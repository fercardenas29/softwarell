// loginLogic.js

// Función para mostrar el formulario de inicio de sesión y ocultar el de crear cuenta
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('createAccountForm').style.display = 'none';
    setActiveTab(0); // Asumiendo que el tab de inicio de sesión es el primero
}

// Función para mostrar el formulario de crear cuenta y ocultar el de inicio de sesión
function showCreateAccount() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('createAccountForm').style.display = 'block';
    setActiveTab(1); // Asumiendo que el tab de crear cuenta es el segundo
}

// Función para establecer el tab activo
function setActiveTab(activeIndex) {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, index) => {
        if (index === activeIndex) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

// Agregar event listener cuando el contenido se haya cargado
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar el formulario de inicio de sesión por defecto
    showLogin();

    // Event listener para el botón de "Entrar"
    var loginButton = document.querySelector('#loginForm button[type="submit"]');
    loginButton.addEventListener('click', function(event) {
        // Prevenir el comportamiento por defecto del formulario
        event.preventDefault();
        var emailInput = document.querySelector('#loginForm input[type="email"]').value;
        var passwordInput = document.querySelector('#loginForm input[type="password"]').value;

        // Verificar las credenciales
        if (emailInput === '1' && passwordInput === '1') {
            // Redirigir a historial.html si las credenciales son correctas
            window.location.href = 'historial.html';
        } else {
            // Mostrar un mensaje de error si las credenciales son incorrectas
            alert('Las credenciales son incorrectas. Por favor, intente de nuevo.');
        }
    });
});
