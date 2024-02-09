var express = require('express');
var router = express.Router();
var habitacionController = require('../controllers/habitacion.controllers')
var multiparty = require("connect-multiparty");
var multipartyMiddleWare = multiparty({uploadDir: './uploads'});

//pagina de inicio
router.get('/inicio', habitacionController.inicio);
//guaradar habitacion
router.post('/guardar-habitacion', habitacionController.saveHabitacion);
//ver informacion de todas las habitaciones
router.get('/libros', habitacionController.getHabitacion);
//ver informacion de una habitacion
router.get('/libro/:id', habitacionController.getHabitacion);
//eliminar una habitacion
router.delete('/libro/:id', habitacionController.deleteHabitacion);


module.exports=router;