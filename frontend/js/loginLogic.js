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

// Función para mostrar el título de "Completar Compra" si es necesario
function checkForPurchaseCompletion() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const fromCart = urlParams.get('fromCart');

    const shoppingCartContainer = document.querySelector('.shopping-cart-container');
    if (fromCart) {
        shoppingCartContainer.style.display = 'block';
        shoppingCartContainer.querySelector('h1').textContent = 'Completar Compra';
    } else {
        shoppingCartContainer.style.display = 'none';
    }
}

// Agregar event listener cuando el contenido se haya cargado
document.addEventListener('DOMContentLoaded', function() {
    checkForPurchaseCompletion();
    showLogin();

    // Event listener para el botón de "Entrar"
    var loginButton = document.querySelector('#loginForm button[type="submit"]');
    loginButton.addEventListener('click', function(event) {
        event.preventDefault();
        var emailInput = document.querySelector('#loginForm input[type="email"]').value;
        var passwordInput = document.querySelector('#loginForm input[type="password"]').value;
        
        // Aquí deberías implementar la lógica de verificación de las credenciales reales
        if (emailInput === 'usuario@example.com' && passwordInput === 'contraseña') {
            // Suponiendo que también tienes un campo para el nombre del cliente en tu formulario real
            var nombreCliente = "Nombre_usuario Apellido_usuario"; // Este valor debería obtenerse de tu sistema o base de datos
            
            // Almacenar en localStorage
            localStorage.setItem('nombreCliente', nombreCliente);
            localStorage.setItem('correoCliente', emailInput);
            
            // Redirigir a historial.html
            window.location.href = 'historial.html';
        } else {
            alert('Las credenciales son incorrectas. Por favor, intente de nuevo.');
        }
    });
});
