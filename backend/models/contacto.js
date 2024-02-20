var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactoSchema = Schema({
    nombre: String,
    telefono: Number, 
    correo: String,
    mensaje: String,
}, { collection: 'contacto' }); // Aquí especificamos el nombre de la colección
module.exports = mongoose.model('Contacto', ContactoSchema);

