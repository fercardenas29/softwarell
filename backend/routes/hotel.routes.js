// En hotel.routes.js

var express = require('express');
var router = express.Router();
var controllers = require('../controllers/hotel.controllers');

// Rutas para Cliente
router.get('/hotel/inicio', controllers.clienteController.inicio); 
router.post('/hotel/guardar', controllers.clienteController.saveCliente);
router.get('/hotel/lista', controllers.clienteController.getCliente);
router.get('/hotel/:id', controllers.clienteController.getCliente);
router.delete('/hotel/:id', controllers.clienteController.deleteCliente);

// Rutas para Hospedaje
router.get('/hotel/inicio', controllers.hospedajeController.inicio);
router.get('/hotel/lista', controllers.hospedajeController.getHospedaje);
router.get('/hotel/:id', controllers.hospedajeController.getHospedaje);

// Rutas para Reserva
router.get('/hotel/inicio', controllers.reservaController.inicio);
router.post('/hotel/guardar', controllers.reservaController.saveReserva);
router.get('/hotel/lista', controllers.reservaController.getReserva);
router.get('/hotel/:id', controllers.reservaController.getReserva);
router.delete('/hotel/:id', controllers.reservaController.deleteReserva);

// Rutas para Contacto
router.get('/hotel/inicio', controllers.contactoController.inicio);
router.post('/hotel/guardar', controllers.contactoController.saveContacto);
router.get('/hotel/lista', controllers.contactoController.getContacto);
router.get('/hotel/:id', controllers.contactoController.getContacto);
router.delete('/hotel/:id', controllers.contactoController.deleteContacto);


module.exports = router;
