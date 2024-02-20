var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = Schema({
    nombre: String,
    apellido: String,
    correo: String,
    cedula: Number,    
    telefono: Number,
}, { collection: 'cliente' }); // Aquí especificamos el nombre de la colección
module.exports = mongoose.model('Cliente', ClienteSchema);

