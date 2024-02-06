// Importar la función para insertar datos de ejemplo
const { insertarDatosEjemplo } = require('./datos');

// Función principal para iniciar la aplicación
async function iniciarAplicacion() {
  // Insertar datos de ejemplo al iniciar la aplicación
  await insertarDatosEjemplo();

  // Resto de la lógica de tu aplicación
}

// Iniciar la aplicación y manejar errores
iniciarAplicacion().catch(console.error);
