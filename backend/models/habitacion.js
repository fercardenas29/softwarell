var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HabitacionSchema = Schema({
    nombre: String,
    precio: Number,
    descripcion: String,
}, { collection: 'habitaciones' }); // Aquí especificamos el nombre de la colección
module.exports = mongoose.model('Habitacion', HabitacionSchema);

//var 