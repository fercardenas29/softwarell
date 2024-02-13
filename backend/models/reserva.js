var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReservaSchema = Schema({
    id_habitacion: Number,
    id_cliente: Number,
    fecha_i: Date,
    fecha_o: Date,
    
}, { collection: 'reserva' }); // Aquí especificamos el nombre de la colección
module.exports = mongoose.model('Reserva', ReservaSchema);

