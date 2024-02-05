document.addEventListener('DOMContentLoaded', function() {
    // Función para obtener parámetros de la URL
    function obtenerParametroURL(nombre) {
      nombre = nombre.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + nombre + '(=([^&#]*)|&|#|$)'),
          resultados = regex.exec(window.location.search);
      if (!resultados || !resultados[2]) return '';
      return decodeURIComponent(resultados[2].replace(/\+/g, ' '));
    }
  
    // Obtener fechas de ingreso y salida de la pagina inicio.html
    var fechaIngreso = obtenerParametroURL('fechaIngreso');
    var fechaSalida = obtenerParametroURL('fechaSalida');
  
    // Establecer las fechas en los campos de entrada si están presentes
    if (fechaIngreso) {
      document.getElementById('fecha-ingreso').value = fechaIngreso;
    }
    if (fechaSalida) {
      document.getElementById('fecha-salida').value = fechaSalida;
    }

    // Agregar la lógica de los botones para agregar al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function() {
          const name = this.getAttribute('data-name');
          const price = parseFloat(this.getAttribute('data-price'));

          // Agregar el producto al arreglo del carrito y guardarlo en localStorage
          const newCartItem = { name, price };
          let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
          cartItems.push(newCartItem);
          localStorage.setItem('cart', JSON.stringify(cartItems));

          // Aquí podrías incluir alguna lógica para actualizar visualmente
          // que el producto ha sido añadido, como un mensaje de confirmación
      });
    });

  // ... (cualquier otra lógica que necesites)
});  