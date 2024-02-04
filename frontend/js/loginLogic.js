// Get all tabs
var tabs = document.querySelectorAll('.tab');

document.addEventListener('DOMContentLoaded', function() {
    // Llamada a la función showLogin() después de que se ha cargado el contenido
    showLogin();
});

// Function to show the login form and hide the create account form
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('createAccountForm').style.display = 'none';
    setActiveTab(0); // Assuming the login tab is the first one
}

// Function to show the create account form and hide the login form
function showCreateAccount() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('createAccountForm').style.display = 'block';
    setActiveTab(1); // Assuming the create account tab is the second one
}

// Function to set the active tab
function setActiveTab(activeIndex) {
    tabs.forEach((tab, index) => {
        if (index === activeIndex) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}