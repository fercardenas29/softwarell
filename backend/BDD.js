
/*
en JSON
{
    "Name" : "John Wick",
    "Age": "Street",
    "Adrres": "0374895126",
    "Phone": "0374895126"
}
*/

const { MongoClient } = require('mongodb');

// URL de conexión a tu base de datos MongoDB
const url = 'mongodb://localhost:27017';

// Nombre de la base de datos
const dbName = 'reservas_hoteles';

// Crear un nuevo cliente de MongoDB
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Conectar al servidor de MongoDB
client.connect((err) => {
  if (err) {
    console.error('Error al conectar a MongoDB:', err);
    return;
  }

  console.log('Conexión exitosa a MongoDB');

  // Seleccionar la base de datos
  const db = client.db(dbName);

  // Definir una colección (tabla) para los hoteles
  const hotelesCollection = db.collection('hoteles');

  // Ejemplo: Insertar un hotel en la colección
  const nuevoHotel = {
    nombre: 'Hotel Ejemplo',
    direccion: 'Calle Principal 123',
    habitaciones_disponibles: 10,
    precio_por_noche: 100,
  };

  hotelesCollection.insertOne(nuevoHotel, (err, result) => {
    if (err) {
      console.error('Error al insertar el hotel:', err);
      return;
    }

    console.log('Hotel insertado correctamente:', result.ops);
  });

  // Ejemplo: Consultar todos los hoteles
  hotelesCollection.find({}).toArray((err, hoteles) => {
    if (err) {
      console.error('Error al obtener hoteles:', err);
      return;
    }

    console.log('Lista de hoteles:', hoteles);
  });

  // Cierra la conexión al finalizar las operaciones
  client.close();
});
