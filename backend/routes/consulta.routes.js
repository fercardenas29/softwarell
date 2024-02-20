var express = require('express');
var router = express.Router();
var consultaController = require('../controllers/consulta.controllers')
var multiparty = require("connect-multiparty");
var multipartyMiddleWare = multiparty({uploadDir: './uploads'});

//pagina de inicio
router.get('/inicio', consultaController.inicio); 
//guaradar cliente
router.post('/guardar-consulta', consultaController.saveConsulta);
//ver informacion de todos los clientes
router.get('/consulta', consultaController.getConsulta);
//ver informacion de un cliente
router.get('/consulta/:id', consultaController.getConsulta);
//eliminar un cliente
router.delete('/consulta/:id', consultaController.deleteConsulta);

module.exports = router;


