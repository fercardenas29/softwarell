var express = require('express');
var router = express.Router();
var hospedajeController = require('../controllers/hospedaje.controllers')
var multiparty = require("connect-multiparty");
var multipartyMiddleWare = multiparty({uploadDir: './uploads'});

//pagina de inicio
router.get('/inicio', hospedajeController.inicio);
//ver informacion de todas las habitaciones
router.get('/habitaciones', hospedajeController.getHospedaje);
//ver informacion de una habitacion
router.get('/habitacion/:id', hospedajeController.getHospedaje);


module.exports=router;