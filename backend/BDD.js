
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

async function conectarMongoDB() {
  // URL de conexión a tu base de datos MongoDB
  const url = 'mongodb://localhost:27017';

  // Nombre de la base de datos
  const dbName = 'reservas_hoteles';

  // Crear un nuevo cliente de MongoDB
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Conectar al servidor de MongoDB
    await client.connect();

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

    const resultado = await hotelesCollection.insertOne(nuevoHotel);
    console.log('Hotel insertado correctamente:', resultado.ops);

    // Ejemplo: Consultar todos los hoteles
    const hoteles = await hotelesCollection.find({}).toArray();
    console.log('Lista de hoteles:', hoteles);
  } finally {
    // Cierra la conexión al finalizar las operaciones
    await client.close();
  }
}

// Llamar a la función para conectar a MongoDB
conectarMongoDB().catch(console.error);
