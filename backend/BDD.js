// Importar la biblioteca de MongoDB
const { MongoClient } = require('mongodb');

// Definir la URL de conexión y el nombre de la base de datos
const url = 'mongodb://localhost:27017';
const dbName = 'HotelCopoDeNieve';

// Variable para almacenar el cliente MongoDB
let client;

// Función para conectar a MongoDB
async function conectarMongoDB() {
  // Crear un nuevo cliente de MongoDB
  client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Conectar al servidor de MongoDB
    await client.connect();
    console.log('Conexión a MongoDB exitosa');
    // Devolver la instancia de la base de datos
    return client.db(dbName);
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    throw error;
  }
}

// Función para desconectar de MongoDB
function desconectarMongoDB() {
  if (client) {
    client.close();
    console.log('Conexión a MongoDB cerrada');
  }
}

// Manejar la señal de interrupción para cerrar la conexión antes de salir
process.on('SIGINT', () => {
  desconectarMongoDB();
  process.exit();
});

// Exportar las funciones para su uso en otros archivos
module.exports = { conectarMongoDB, desconectarMongoDB };
