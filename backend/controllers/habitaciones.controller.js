'use strict'
//uso del models
var Habitacion=require('../models/habitacion');
var fs  = require('fs');
var path = require('path');

var controller={
    getInicio:function(req, res){
        return res.status(201).send(
            "<h1>Hola 2</h1>"
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
            return res.status(500).send({ message: "Error al guardar" });
        });
    },

    getHabitaciones: function(req, res) {
        Habitacion.find({}).sort().exec().then(habitaciones => {
            return res.status(200).send({ habitaciones: habitaciones });
        })
        .catch(err => {
            return res.status(500).send({ message: "Error al recuperar los datos" });
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

module.exports = controller;