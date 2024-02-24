'use strict';
var express = require('express');
var router = express.Router();
var controllers = require('../controllers/hotel.controllers');

// Para la imagen
var multiparty = require('connect-multiparty');
var multipartyMiddleWare = multiparty({ uploadDir: './uploads' });

// Habitaciones
router.get('/habitaciones/inicio', controllers.habitacionController.getInicio);
router.post('/habitaciones/guardar', controllers.habitacionController.saveHabitacion);
router.get('/habitaciones', controllers.habitacionController.getHabitaciones);
router.get('/habitaciones/:id', controllers.habitacionController.getHabitacion);
router.put('/habitaciones/:id', controllers.habitacionController.updateHabitacion);
router.delete('/habitaciones/:id', controllers.habitacionController.deleteHabitacion);
router.post('/habitaciones/:id/subir-imagen', multipartyMiddleWare, controllers.habitacionController.uploadImage);
router.get('/habitaciones/imagen/:imagen', controllers.habitacionController.getImage);

// Cliente
router.get('/clientes/inicio', controllers.clienteController.inicio);
router.post('/clientes/guardar', controllers.clienteController.saveCliente);
router.get('/clientes', controllers.clienteController.getCliente);
router.get('/clientes/:id', controllers.clienteController.getCliente);
router.delete('/clientes/:id', controllers.clienteController.deleteCliente);

// Reserva
router.get('/reservas/inicio', controllers.reservaController.inicio);
router.post('/reservas/guardar', controllers.reservaController.saveReserva);
router.get('/reservas', controllers.reservaController.getReserva);
router.get('/reservas/:id', controllers.reservaController.getReserva);
router.delete('/reservas/:id', controllers.reservaController.deleteReserva);

module.exports = router;
