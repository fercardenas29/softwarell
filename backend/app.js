var express = require('express');
var bodyParser= require('body-parser');
var app = express();
var hospedajeRoutes = require('./routes/hospedaje.routes');
var clienteRoutes = require('./routes/cliente.routes');
var reservaRoutes = require('./routes/reserva.routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, X-Request-With, Content-Type,Accept, Access-Control-Allow, Request-Method')
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use('/',hospedajeRoutes);
app.use('/',clienteRoutes);
app.use('/',reservaRoutes);
module.exports = app;