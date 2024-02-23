'use strict'
var express = require('express');
var router= express.Router();
var habitacionesRouter = require('../controllers/habitaciones.controller');
//para la imagen
var multiparty = require('connect-multiparty');
var multipartyMiddleWare = multiparty({uploadDir:'./uploads'});


//pagina de inicio
router.get('/inicio', habitacionesRouter.getInicio);
//guardar habitacion
router.post('/guardar-habitacion', habitacionesRouter.saveHabitacion);
//ver habitacions todas
router.get('/habitaciones', habitacionesRouter.getHabitaciones);
//ver habitacion
router.get('/habitacion/:id', habitacionesRouter.getHabitacion);
//actualizar habitacion
router.put('/habitacion/:id', habitacionesRouter.updateHabitacion);
//borrar habitacion
router.delete('/habitacion/:id', habitacionesRouter.deleteHabitacion);
//agregar una imagen
router.post('/subir-imagen/:id', multipartyMiddleWare, habitacionesRouter.uploadImage);
//recuperar una imagen
router.get('/get-imagen/:imagen', habitacionesRouter.getImage);


module.exports = router;