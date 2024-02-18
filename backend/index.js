var mongoose = require('mongoose');
var port = '3600';
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
var app=require('./app');

mongoose.connect('mongodb://localhost:27017/HotelCopoDeNieve') //definimos a que base de datos se va a conectar
.then(()=>{
    console.log('Conexion exitosa con la base de datos');   
    app.listen(port,()=>{
        console.log('Servidor corriendo correctamente en: localhost:3600');
    });
})
.catch(err => console.log(err));

