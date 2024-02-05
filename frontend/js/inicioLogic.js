// indexLogic.js
document.addEventListener('DOMContentLoaded', function() {
  var botonBuscar = document.getElementById('botonBuscar');
  var fechaIngreso = document.getElementById('fechaIngreso');
  var fechaSalida = document.getElementById('fechaSalida');
  
  // Establecer la fecha mínima como la fecha actual de la reserva
  var hoy = new Date();
  var fechaMinima = hoy.toISOString().split('T')[0];
  fechaIngreso.setAttribute('min', fechaMinima);
  fechaSalida.setAttribute('min', fechaMinima);
  
  function actualizarYValidarFechas() {
    fechaSalida.setAttribute('min', fechaIngreso.value);
    botonBuscar.disabled = !(fechaIngreso.value && fechaSalida.value && new Date(fechaIngreso.value) <= new Date(fechaSalida.value));
  }
  
  fechaIngreso.addEventListener('change', actualizarYValidarFechas);
  fechaSalida.addEventListener('change', actualizarYValidarFechas);
});  