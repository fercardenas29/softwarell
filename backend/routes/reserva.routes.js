/*
var express = require('express');
var router = express.Router();
var reservaController = require('../controllers/reserva.controllers')
var multiparty = require("connect-multiparty");
var multipartyMiddleWare = multiparty({uploadDir: './uploads'});

//pagina de inicio
router.get('/inicio', reservaController.inicio);
//guaradar reserva
router.post('/guardar-reserva', reservaController.saveReserva);
//ver informacion de todas las reservas
router.get('/reservas', reservaController.getReserva);
//ver informacion de una reserva
router.get('/reserva/:id', reservaController.getReserva);
//eliminar una reserva 
router.delete('/reserva/:id', reservaController.deleteReserva);


module.exports=router;
*/