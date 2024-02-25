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
router.get('/hotel/inicio-cliente', controllers.clienteController.inicioCliente); 
router.post('/hotel/guardar-cliente', controllers.clienteController.saveCliente);
router.get('/hotel/lista-clientes', controllers.clienteController.getClientes);
router.get('/hotel/cliente/:id', controllers.clienteController.getCliente);
router.delete('/hotel/eliminar-cliente/:id', controllers.clienteController.deleteCliente);

// Reserva
router.get('/reservas/inicio', controllers.reservaController.inicio);
router.post('/reservas/guardar', controllers.reservaController.saveReserva);
router.get('/reservas', controllers.reservaController.getReserva);
router.get('/reservas/:id', controllers.reservaController.getReserva);
router.delete('/reservas/:id', controllers.reservaController.deleteReserva);

module.exports = router;
