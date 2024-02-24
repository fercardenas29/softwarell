var mongoose = require('mongoose');
var port = '3700';
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
var app=require('./app');

mongoose.connect('mongodb://localhost:27017/hotel')
//mongoose.connect('mongodb+srv://ferchocdh29:grupo7god@cluster1.cnyyzr0.mongodb.net/')
.then(()=>{
    console.log('Conexión exitosa con la base de datos');
    app.listen(port,()=>{
        console.log('Servidor corriendo correctamente en: localhost:3700');
    });
})
.catch(err => console.log(err));

