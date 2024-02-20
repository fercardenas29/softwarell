var express = require('express');
var router = express.Router();
var clienteController = require('../controllers/cliente.controllers')
var multiparty = require("connect-multiparty");
var multipartyMiddleWare = multiparty({uploadDir: './uploads'});

//pagina de inicio
router.get('/inicio', clienteController.inicio); 
//guaradar cliente
router.post('/guardar-cliente', clienteController.saveCliente);
//ver informacion de todos los clientes
router.get('/clientes', clienteController.getCliente);
//ver informacion de un cliente
router.get('/cliente/:id', clienteController.getCliente);
//eliminar un cliente
router.delete('/cliente/:id', clienteController.deleteCliente);


module.exports=router;