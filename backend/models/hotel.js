var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Esquema para Habitacion
const HabitacionSchema = Schema({
    nombre:String,
    descripcion:String,
    precio:Number,
    cantidad:Number,
    disponible:Boolean,
    imagen:String
}, { collection: 'habitacion' });

// Esquema para Reserva
var ReservaSchema = Schema({
    id_hosp: String,
    id_cliente: String,
    nombre_hosp: String,
    fechaInput: Date,
    fechaOutput: Date,    
}, { collection: 'reserva' });

// Esquema para Cliente
var ClienteSchema = Schema({
    nombre: String,
    apellido: String,
    correo: String,
    cedula: Number,    
    telefono: Number,
}, { collection: 'cliente' });

//Contacto
var ContactoSchema = Schema({
    nombre: String,
    telefono: Number,
    correo: String,
    mensaje: String,
}, { collection: 'contacto' });

// Modelos
var Habitacion = mongoose.model('Habitacion', HabitacionSchema);
var Reserva = mongoose.model('Reserva', ReservaSchema);
var Cliente = mongoose.model('Cliente', ClienteSchema);
var Contacto = mongoose.model('Contacto', ContactoSchema);

// Exportar los modelos
module.exports = {
    Habitacion: Habitacion,
    Reserva: Reserva,
    Cliente: Cliente,
    Contacto: Contacto
};
