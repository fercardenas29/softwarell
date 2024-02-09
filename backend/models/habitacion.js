var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var HabitacionSchema = Schema({
    nombre: String,
    precio: Number,
    descripcion: String,
});
module.exports = mongoose.model('Habitacion', HabitacionSchema);
//atributos habitaciones