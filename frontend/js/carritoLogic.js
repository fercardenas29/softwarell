document.addEventListener('DOMContentLoaded', () => {
    // Agrega la lógica aquí para cargar los productos del carrito
    // y para agregar y eliminar productos del carrito.
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const continueShoppingButton = document.getElementById('continue-shopping');

    // Supongamos que tienes un array para las habitaciones seleccionadas
    let cartItems = [
        { name: "Habitación normal", price: 50.00 },
        { name: "Suite normal", price: 100.00 }
    ];

    // Función para actualizar el carrito
    function updateCart() {
        // Limpiar el contenedor de artículos del carrito
        cartItemsElement.innerHTML = '';

        // Variable para almacenar el total
        let total = 0;

        // Crear elementos para cada producto en el carrito
        cartItems.forEach(item => {
            total += item.price; // Actualizar el total

            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            
            itemElement.innerHTML = `
                <span class="cart-item-name">${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
                <button class="cart-item-delete">X</button>
            `;
            cartItemsElement.appendChild(itemElement);

            // Agregar evento de click al botón de eliminar
            itemElement.querySelector('.cart-item-delete').onclick = () => {
                cartItems = cartItems.filter(cartItem => cartItem.name !== item.name);
                updateCart(); // Actualizar el carrito después de eliminar un elemento
            };
        });

        // Actualizar el total
        cartTotalElement.textContent = total.toFixed(2);
    }

    // Llamada inicial para actualizar el carrito
    updateCart();

    // Lógica para el botón de seguir comprando
    continueShoppingButton.onclick = () => {
        // Aquí deberías redireccionar a la página de productos o realizar la acción deseada
        window.location.href = 'habitaciones.html';
    };

    // Si necesitas almacenar el estado del carrito entre páginas, podrías usar localStorage o una base de
        // ...continuación de la función updateCart

    // Función para guardar el estado del carrito
    function saveCartState() {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    // Función para cargar el estado del carrito
    function loadCartState() {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            cartItems = JSON.parse(savedCart);
            updateCart();
        }
    }

    // Llamada inicial para cargar el estado del carrito
    loadCartState();

    // Asegúrate de llamar a saveCartState() cada vez que se agrega o elimina un artículo
    // Por ejemplo:
    // cartItems.push({ name: "Nuevo Producto", price: 39.99 });
    // saveCartState();
    // updateCart();
});

