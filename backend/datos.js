// Importar el módulo de conexión
// Importar el módulo de conexión y ObjectId de MongoDB
const { conectarMongoDB, desconectarMongoDB } = require('./BDD');
const { ObjectId } = require('mongodb');

// Función para insertar datos de ejemplo
async function insertarDatosEjemplo() {
  // Conectar a MongoDB
  const db = await conectarMongoDB();

  try {
    // Verificar si la colección de cabañas está vacía antes de insertar datos
    const numCabañas = await db.collection('cabañas').countDocuments();
    if (numCabañas === 0) {
      // Insertar datos de cabañas solo si la colección está vacía
      await db.collection('cabañas').insertMany([
        { nombre: 'Cabaña A', pisos: 2, chimenea: true, baños: 2, cuartoG: 1, cuartoP: 2 },
        { nombre: 'Cabaña B', pisos: 2, chimenea: true, baños: 3, cuartoG: 1, cuartoP: 3 },
        { nombre: 'Cabaña C', pisos: 3, chimenea: true, baños: 5, cuartoG: 4, cuartoP: 4 },
      ]);
    }

    // Verificar si la colección de habitaciones está vacía antes de insertar datos
    const numHabitaciones = await db.collection('habitaciones').countDocuments();
    if (numHabitaciones === 0) {
      // Insertar datos de habitaciones solo si la colección está vacía
      await db.collection('habitaciones').insertMany([
        { nombre: 'HabitacionN', camasMatrimoniales: 1, baños: 1, tvSmart: 2 },
        { nombre: 'HabitacionD', camasMatrimoniales: 2, baños: 2, tvSmart: 2 },
        { nombre: 'HabitacionC', camasMatrimoniales: 4, baños: 4, tvSmart: 4 },
      ]);
    }

    // Verificar si la colección de suites está vacía antes de insertar datos
    const numSuites = await db.collection('suites').countDocuments();
    if (numSuites === 0) {
      // Insertar datos de suites solo si la colección está vacía
      await db.collection('suites').insertMany([
        { nombre: 'SuiteN', camaExtragrande: 1, bañoGrande: 1, tvSmartGigante: 1, jacuzzi: 1 },
        { nombre: 'SuiteD', camaExtragrande: 2, bañoGrande: 2, tvSmartGigante: 2, jacuzzi: 2 },
      ]);
    }

    // Verificar si la colección de reservas está vacía antes de insertar datos
    const numReservas = await db.collection('reservas').countDocuments();
    if (numReservas === 0) {
    // Insertar datos de reservas solo si la colección está vacía
      await db.collection('reservas').insertMany([
        { id_cabaña: new ObjectId("65c05df6322c02626bcd9c34") },
        { id_suite: new ObjectId("65c05df6322c02626bcd9c3a") },
    // Agrega más reservas según sea necesario
  ]);
}


    console.log('Datos insertados correctamente (si es necesario).');
  } finally {
    // Desconectar de MongoDB al finalizar
    desconectarMongoDB();
  }
}


// Exportar la función para su uso en otros archivos
module.exports = { insertarDatosEjemplo };
