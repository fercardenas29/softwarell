var express = require('express');
var router = express.Router();
var contactoController = require('../controllers/contacto.controllers')
var multiparty = require("connect-multiparty");
var multipartyMiddleWare = multiparty({uploadDir: './uploads'});

//pagina de inicio
router.get('/inicio', contactoController.inicio); 
//guaradar cliente
router.post('/guardar-contacto', contactoController.saveContacto);
//ver informacion de todos los clientes
router.get('/contacto', contactoController.getContacto);
//ver informacion de un cliente
router.get('/contacto/:id', contactoController.getContacto);
//eliminar un cliente
router.delete('/contacto/:id', contactoController.deleteContacto);

module.exports = router;


