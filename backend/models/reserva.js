var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReservaSchema = Schema({
    id_hosp: String,
    id_cliente: String,
    nombre_hosp: String,
    fechaInput: Date,
    fechaOutput: Date,    
}, { collection: 'reserva' }); // Aquí especificamos el nombre de la colección
module.exports = mongoose.model('Reserva', ReservaSchema);

