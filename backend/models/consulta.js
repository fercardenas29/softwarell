var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConsultaSchema = Schema({
    nombre: String,
    telefono: Number, 
    correo: String,
    mensaje: String,
}, { collection: 'consulta' }); // Aquí especificamos el nombre de la colección
module.exports = mongoose.model('Consulta', ConsultaSchema);

