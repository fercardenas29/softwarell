'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const hotelRoutes = require('./routes/hotel.routes'); // Cambio de nombre del archivo de rutas
const path = require('path');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware para configurar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, X-Request-With, Content-Type, Accept, Access-Control-Allow, Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/', hotelRoutes); // Usar las rutas unificadas de hotel

module.exports = app;
