// En hotel.routes.js
var express = require('express');
var router = express.Router();
var controllers = require('../controllers/hotel.controllers');
// Para subir imágenes
var multiparty = require('connect-multiparty');
var multipartyMiddleWare = multiparty({ uploadDir: './uploads' });

// Rutas para Habitacion
// Página de inicio
//router.get('/hotel/inicio-habitaciones', controllers.habitacionController.inicio);
// Guardar habitación
router.post('/hotel/guardar-habitacion', controllers.habitacionController.saveHabitacion);
// Ver todas las habitaciones
router.get('/hotel/habitaciones', controllers.habitacionController.getHabitaciones);
// Ver una habitación
router.get('/hotel/habitacion/:id', controllers.habitacionController.getHabitacion);
// Actualizar habitación
router.put('/hotel/habitacion/:id', controllers.habitacionController.updateHabitacion);
// Borrar habitación
router.delete('/hotel/habitacion/:id', controllers.habitacionController.deleteHabitacion);
// Agregar una imagen
router.post('/hotel/subir-imagen/:id', multipartyMiddleWare, controllers.habitacionController.uploadImage);
// Recuperar una imagen
router.get('/hotel/get-imagen/:imagen', controllers.habitacionController.getImage);

// Rutas para Cliente
router.get('/hotel/inicio', controllers.clienteController.inicio); 
router.post('/hotel/guardar', controllers.clienteController.saveCliente);
router.get('/hotel/lista', controllers.clienteController.getCliente);
router.get('/hotel/:id', controllers.clienteController.getCliente);
router.delete('/hotel/:id', controllers.clienteController.deleteCliente);

// Rutas para Reserva
router.get('/hotel/inicio-reservas', controllers.reservaController.inicio);
router.post('/hotel/guardar-reserva', controllers.reservaController.saveReserva);
router.get('/hotel/lista-reservas', controllers.reservaController.getReserva);
router.get('/hotel/reserva/:id', controllers.reservaController.getReserva);
router.delete('/hotel/reserva/:id', controllers.reservaController.deleteReserva);

// Rutas para Contacto
router.get('/hotel/inicio-contacto', controllers.contactoController.inicio);
router.post('/hotel/guardar-contacto', controllers.contactoController.saveContacto);
router.get('/hotel/lista-contacto', controllers.contactoController.getContacto);
router.get('/hotel/contacto/:id', controllers.contactoController.getContacto);
router.delete('/hotel/contacto/:id', controllers.contactoController.deleteContacto);

module.exports = router;
