var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HospedajeSchema = Schema({
    cantidad: Number,
    nombre: String,
    precio: Number,
    descripcion: String,
}, { collection: 'hospedaje' }); // Aquí especificamos el nombre de la colección
module.exports = mongoose.model('Hospedaje', HospedajeSchema);

