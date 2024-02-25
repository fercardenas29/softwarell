'use strict'

const cliente = require("../models/hotel");
var Cliente = require("../models/hotel");
const habitacion = require("../models/hotel");
var { Habitacion } = require("../models/hotel");
const reserva = require("../models/hotel");
var Reserva = require("../models/hotel");

//Cliente.Controller
var clienteController = {
    inicio: function(req, res){
        return res.status(200).send({
            message: "<h2> hola soy cliente </h2>"
        });
    },

    saveCliente: async function(req, res){
        try{
            var cliente = new Cliente();
            var params = req.body; 
            cliente.nombre = params.nombre;
            cliente.precio = params.precio;
            cliente.descripcion = params.descripcion;
            
            var clienteStored = await cliente.save();

            if(!clienteStored){
                return res.status(400).send({message: "No se ha podido guardar el cliente"});
            }
            return res.status(201).send({cliente: clienteStored});
        } catch(error){
            return res.status(500).send({message: "Error al guardar el cliente"});
        }
    },
    getCliente:async function(req, res){
        try{
            const cliente = await Cliente.find({}).sort();
            if(cliente.length === 0){
                return res.status(404).send({message: "No hay clientes para mostrar"});
            }
            return res.status(200).send({cliente});
        } catch(error){
            return res.status(500).send({message: "Error al obtener clientes"});
        }
    },

    getCliente:async function(req, res){
        try{
            var clienteId = req.params.id;
            if(!cliente){
                return res.status(404).send({message: "No hay clientes para mostrar"});
                var cliente= await cliente.findById(clienteId);
                if (!cliente){
                    return res.status(404).send({message: "No hay clientes para mostrar"});
                }
                return res.status(200).send({cliente});
            }
        } catch(error){
            return res.status(500).send({message: "Error al obtener clientes"});
        }
    },

    deleteCliente:async function(req, res){
        try{
            var clienteId = req.params.id;
            var clienteRemoved = await Cliente.findByIdAndDelete(clienteId);
            if(!clienteRemoved){
                return res.status(404).send({message: "No hay clientes para eliminar"});
            }
            return res.status(200).send({clienteRemoved});
        } catch(error){
            return res.status(500).send({message: "Error al eliminar el cliente"});
        }
    }


}

//Habitacion.Controller
var fs  = require('fs');
var path = require('path');

var habitacionController={
    getInicio:function(req, res){
        return res.status(201).send(
            "<h1>Hola soy habitaciones</h1>"
        )
    },

    saveHabitacion: function(req, res) {
        var habitacion = new Habitacion();
        var params = req.body;
    
        habitacion.nombre = params.nombre;
        habitacion.descripcion = params.descripcion;
        habitacion.precio = params.precio;
        habitacion.cantidad = params.cantidad;
        habitacion.disponible = params.disponible;
        habitacion.imagen = null;
    
        habitacion.save().then(habitacionGuardada => {
            return res.status(200).send({ habitacion: habitacionGuardada });
        })
        .catch(err => {
            return res.status(500).send({ message: "Error al guardar la habitacion" });
        });
    },

    getHabitaciones: function(req, res) {
        Habitacion.find({}).sort().exec().then(habitaciones => {
            return res.status(200).send({ habitaciones: habitaciones });
        })
        .catch(err => {
            return res.status(500).send({ message: "Error al recuperar los datos de habitacion" });
        });
    },

    getHabitacion: function(req, res) {
        var habitacionId = req.params.id;
        if (habitacionId == null) return res.status(404).send({ message: "El ID de la habitacion no fue proporcionado" });
    
        Habitacion.findById(habitacionId).exec().then(habitacion => {
            if (!habitacion) {
                return res.status(404).send({ message: "La habitacion no existe" });
            }
            return res.status(200).send({ habitacion: habitacion });
        }).catch(err => {
            return res.status(500).send({ message: "Error al recuperar los datos de la habitacion" });
        });
    },
    
    // Método para eliminar una habitacion por su ID
    deleteHabitacion: function(req, res) {
        var habitacionId = req.params.id;

        if (!habitacionId) {
            return res.status(404).send({ message: "El ID de la habitacion no fue proporcionado" });
        }

        Habitacion.findByIdAndDelete(habitacionId)
        .exec()
        .then(deletedHabitacion => {
            if (!deletedHabitacion) {
                return res.status(404).send({ message: "La habitacion no existe" });
            }
            return res.status(200).send({ message: "Habitacion eliminada correctamente", habitacion: deletedHabitacion });
        })
        .catch(err => {
            return res.status(500).send({ message: "Error al eliminar la habitacion" });
        });
    },

    // Método para actualizar una habitacion por su ID
    updateHabitacion: function(req, res) {
        var habitacionId = req.params.id;
        var updateData = req.body;

        if (!habitacionId) {
            return res.status(404).send({ message: "El ID de la habitacion no fue proporcionado" });
        }

        Habitacion.findByIdAndUpdate(habitacionId, updateData, { new: true })
        .exec()
        .then(updatedHabitacion => {
            if (!updatedHabitacion) {
                return res.status(404).send({ message: "La habitacion no existe" });
            }
            return res.status(200).send({ message: "Habitacion actualizada correctamente", habitacion: updatedHabitacion });
        })
        .catch(err => {
            return res.status(500).send({ message: "Error al actualizar la habitacion" });
        });
    },

    uploadImage: function(req, res) {
        var habitacionId = req.params.id;
        var fileName = "Imagen no subida";
    
        if (req.files && req.files.imagen) {
            var filePath = req.files.imagen.path;
            var file_split = filePath.split('\\');
            var fileName = file_split[1];
            var extSplit = fileName.split('.');
            var fileExt = extSplit[1].toLowerCase();
    
            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
                Habitacion.findByIdAndUpdate(habitacionId, { imagen: fileName }, { new: true }).exec()
                .then(updatedHabitacion => {
                    if (!updatedHabitacion) {
                        return res.status(404).send({ message: "La habitacion no existe y no se subió la imagen" });
                    }
                    return res.status(200).send({ message: "Imagen actualizada correctamente", habitacion: updatedHabitacion });
                })
                .catch(err => {
                    return res.status(500).send({ message: "Error al actualizar la habitacion" });
                });
            } else {
                fs.unlink(filePath, (err) => {
                    return res.status(400).send({ message: "La extensión del archivo no es válida" });
                });
            }
        } else {
            return res.status(400).send({ message: fileName });
        }
    },

    getImage:function(req, res){
        var file = req.params.imagen;
        var path_file = "./uploads/"+file;
        fs.exists(path_file,(exists)=>{
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({ message: "No existe la imagen"});
            }
        })
    }
}


//Reserva.Controller
var reservaController = {
    inicio: function(req, res){
        return res.status(200).send({
            message: "<h2> Bienvenidos a Reserva </h2>"
        });
    },

    saveReserva: async function(req, res){
        try{
            var reserva = new Reserva();
            var params = req.body; 
            reserva.nombre = params.nombre;
            reserva.precio = params.precio;
            reserva.descripcion = params.descripcion;
            
            var reservaStored = await reserva.save();

            if(!reservaStored){
                return res.status(400).send({message: "No se ha podido guardar la reserva"});
            }
            return res.status(201).send({reserva: reservaStored});
        } catch(error){
            return res.status(500).send({message: "Error al guardar la reserva"});
        }
    },
    getReserva:async function(req, res){
        try{
            const reserva = await Reserva.find({}).sort();
            if(reserva.length === 0){
                return res.status(404).send({message: "No hay reservas para mostrar"});
            }
            return res.status(200).send({reserva});
        } catch(error){
            return res.status(500).send({message: "Error al obtener las reservas"});
        }
    },

    getReserva:async function(req, res){
        try{
            var reservaId = req.params.id;
            if(!reserva){
                return res.status(404).send({message: "No hay reservas para mostrar"});
                var reserva= await reserva.findById(reservaId);
                if (!reserva){
                    return res.status(404).send({message: "No hay reservas para mostrar"});
                }
                return res.status(200).send({reserva});
            }
        } catch(error){
            return res.status(500).send({message: "Error al obtener las reservas"});
        }
    },

    deleteReserva:async function(req, res){
        try{
            var reservaId = req.params.id;
            var reservaRemoved = await Reserva.findByIdAndDelete(reservaId);
            if(!reservaRemoved){
                return res.status(404).send({message: "No hay reservas para eliminar"});
            }
            return res.status(200).send({reservaRemoved});
        } catch(error){
            return res.status(500).send({message: "Error al eliminar la reservas"});
        }
    }


}

//Contacto.Controller
var contactoController = {
    inicio: function(req, res){
        return res.status(200).send({
            message: "<h2> Bienvenidos a Contacto</h2>"
        });
    },

    saveContacto: async function(req, res){
        try{
            var contacto = new Contacto();
            var params = req.body; 
            contacto.nombre = params.nombre;
            contacto.telf = params.telf;
            contacto.email = params.email
            contacto.descripcion = params.descripcion;
            
            var contactoStored = await contacto.save();

            if(!contactoStored){
                return res.status(400).send({message: "No se ha podido guardar el mensaje"});
            }
            return res.status(201).send({contacto: contactoStored});
        } catch(error){
            return res.status(500).send({message: "Error al guardar el mensaje"});
        }
    },
    getContacto:async function(req, res){
        try{
            const contacto = await Contacto.find({}).sort();
            if(contacto.length === 0){
                return res.status(404).send({message: "No hay mensaje para mostrar"});
            }
            return res.status(200).send({contacto});
        } catch(error){
            return res.status(500).send({message: "Error al obtener el mensaje"});
        }
    },

    getContacto:async function(req, res){
        try{
            var contactoId = req.params.id;
            if(!contacto){
                return res.status(404).send({message: "No hay habitaciones para mostrar"});
                var contacto= await contacto.findById(contactoId);
                if (!contacto){
                    return res.status(404).send({message: "No hay habitaciones para mostrar"});
                }
                return res.status(200).send({contacto});
            }
        } catch(error){
            return res.status(500).send({message: "Error al obtener el Contacto"});
        }
    },

    deleteContacto:async function(req, res){
        try{
            var contactoId = req.params.id;
            var contactoRemoved = await Contacto.findByIdAndDelete(contactoId);
            if(!contactoRemoved){
                return res.status(404).send({message: "No hay Contacto para eliminar"});
            }
            return res.status(200).send({contactoRemoved});
        } catch(error){
            return res.status(500).send({message: "Error al eliminar la Contacto"});
        }
    }


}

module.exports = {
    clienteController,
    habitacionController,
    reservaController,
    contactoController
}