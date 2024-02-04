// productosLogic.js
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
});  