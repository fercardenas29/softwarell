var mongoose = require('mongoose');
var port = '3600';
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
var app=require('./app');

// Conexión a MongoDB Atlas
mongoose.connect('mongodb+srv://ferchocdh29:grupo7god@cluster1.cnyyzr0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')
//mongoose.connect('mongodb://localhost:27017/hotel')
.then(()=>{
    console.log('Conexión exitosa con la base de datos');
    app.listen(port,()=>{
        console.log('Servidor corriendo correctamente en: localhost:3600');
    });
})
.catch(err => console.log(err));

