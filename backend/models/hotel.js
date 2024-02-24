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

var ReservaSchema = Schema({
    id_hosp: String,
    id_cliente: String,
    nombre_hosp: String,
    fechaInput: Date,
    fechaOutput: Date,    
}, { collection: 'reserva' }); // Aquí especificamos el nombre de la colección
module.exports = mongoose.model('Reserva', ReservaSchema);

const habitacionSchema = Schema({
    nombre:String,
    descripcion:String,
    precio:Number,
    cantidad:Number,
    disponible:Boolean,
    imagen:String
}, { collection: 'habitacion' }); // Aquí especificamos el nombre de la colección
module.exports = mongoose.model('Habitacion', habitacionSchema);