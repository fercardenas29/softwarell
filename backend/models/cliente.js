var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = Schema({
    nombre: String,
    apellido: String,
    cedula: Number,
    correo: String,
    telefono: Number,
    contraseña: String,
}, { collection: 'cliente' }); // Aquí especificamos el nombre de la colección
module.exports = mongoose.model('Cliente', ClienteSchema);

//var 