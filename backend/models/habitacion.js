'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const habitacionSchema = Schema({
    nombre:String,
    descripcion:String,
    precio:Number,
    cantidad:Number,
    disponible:Boolean,
    imagen:String
});

//Nombre para la base de datos
module.exports = mongoose.model('Habitacion', habitacionSchema);