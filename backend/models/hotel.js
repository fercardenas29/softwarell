var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Esquema para Hospedaje
var HospedajeSchema = Schema({
    nombre: String,
    precio: Number,
    cantidad: Number,
    detalle: String,
    disponible: Boolean,
}, { collection: 'hospedaje' });

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

var ContactoSchema = Schema({
    nombre: String,
    telefono: Number,
    correo: String,
    mensaje: String,
}, { collection: 'contacto' });

// Modelos
var Hospedaje = mongoose.model('Hospedaje', HospedajeSchema);
var Reserva = mongoose.model('Reserva', ReservaSchema);
var Cliente = mongoose.model('Cliente', ClienteSchema);
var Contacto = mongoose.model('Contacto', ContactoSchema);

// Exportar los modelos
module.exports = {
    Hospedaje: Hospedaje,
    Reserva: Reserva,
    Cliente: Cliente,
    Contacto: Contacto
};
