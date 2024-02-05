document.addEventListener('DOMContentLoaded', () => {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const continueShoppingButton = document.getElementById('continue-shopping');

    // Cargar los elementos del carrito desde localStorage o iniciar con un array vacío si no hay nada en localStorage
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Función para mostrar los artículos en el carrito
    function renderCartItems() {
        cartItemsElement.innerHTML = ''; // Limpiar el carrito actual
        let total = 0; // Inicializar el total

        cartItems.forEach(item => {
            total += item.price; // Sumar al total

            // Crear el elemento del carrito
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-price">$${item.price.toFixed(2)}</span>
                <button class="cart-item-delete">X</button>
            `;
            cartItemsElement.appendChild(itemElement);

            // Agregar evento de click para eliminar el artículo del carrito
            itemElement.querySelector('.cart-item-delete').addEventListener('click', () => {
                cartItems = cartItems.filter(cartItem => cartItem !== item);
                saveCartState(); // Guardar el nuevo estado del carrito
                renderCartItems(); // Re-renderizar los elementos del carrito
            });
        });

        // Actualizar el total
        cartTotalElement.textContent = `${total.toFixed(2)}`;
    }

    // Función para guardar el estado del carrito en localStorage
    function saveCartState() {
        localStorage.setItem('cart', JSON.stringify(cartItems));
        renderCartItems(); // Esto asegurará que el carrito se actualice cada vez que se guarde el estado
    }

    // Función para cargar el estado del carrito desde localStorage al cargar la página
    function loadCartState() {
        cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        renderCartItems(); // Mostrar los elementos del carrito al cargar la página
    }

    // Evento para el botón de seguir comprando
    continueShoppingButton.addEventListener('click', () => {
        window.location.href = 'habitaciones.html';
    });

    // Iniciar el estado del carrito al cargar la página
    loadCartState();
});
