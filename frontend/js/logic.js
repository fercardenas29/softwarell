document.addEventListener('DOMContentLoaded', function() {
    var botonBuscar = document.getElementById('botonBuscar');
    var fechaIngreso = document.getElementById('fechaIngreso');
    var fechaSalida = document.getElementById('fechaSalida');
  
    // Establecer la fecha mínima como la fecha actual
    var hoy = new Date();
    var fechaMinima = hoy.toISOString().split('T')[0]; // Formato aaaa-mm-dd
    fechaIngreso.setAttribute('min', fechaMinima);
    fechaSalida.setAttribute('min', fechaMinima);
  
    // Función para verificar si las fechas cumplen con los requisitos
    function validarFechas() {
      var ingreso = new Date(fechaIngreso.value);
      var salida = new Date(fechaSalida.value);
  
      // Si ambas fechas están seleccionadas y la fecha de salida no es anterior a la fecha de ingreso
      if (fechaIngreso.value && fechaSalida.value && salida >= ingreso) {
        botonBuscar.disabled = false; // Habilitar el botón de buscar
      } else {
        botonBuscar.disabled = true; // Mantener el botón deshabilitado
      }
    }
  
    // Eventos para verificar las fechas cada vez que cambien
    fechaIngreso.addEventListener('change', validarFechas);
    fechaSalida.addEventListener('change', validarFechas);
  });
  