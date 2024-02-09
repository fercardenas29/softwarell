const habitacion = require("../models/habitacion");
var Habitacion = require("../models/habitacion");

var controller = {
    inicio: function(req, res){
        return res.status(200).send({
            message: "<h2> Bienvenidos </h2>"
        });
    },

    saveHabitacion: async function(req, res){
        try{
            var habitacion = new Habitacion();
            var params = req.body; 
            habitacion.nombre = params.nombre;
            habitacion.precio = params.precio;
            habitacion.descripcion = params.descripcion;
            
            var habitacionStored = await habitacion.save();

            if(!habitacionStored){
                return res.status(400).send({message: "No se ha podido guardar la habitacion"});
            }
            return res.status(201).send({habitacion: habitacionStored});
        } catch(error){
            return res.status(500).send({message: "Error al guardar la habitacion"});
        }
    },
    getHabitacion:async function(req, res){
        try{
            const habitacion = await Habitacion.find({}).sort();
            if(habitacion.length === 0){
                return res.status(404).send({message: "No hay habitaciones para mostrar"});
            }
            return res.status(200).send({habitacion});
        } catch(error){
            return res.status(500).send({message: "Error al obtener las habitaciones"});
        }
    },

    getHabitacion:async function(req, res){
        try{
            var habitacionId = req.params.id;
            if(!habitacion){
                return res.status(404).send({message: "No hay habitaciones para mostrar"});
                var habitacion= await habitacion.findById(habitacionId);
                if (!habitacion){
                    return res.status(404).send({message: "No hay habitaciones para mostrar"});
                }
                return res.status(200).send({habitacion});
            }
        } catch(error){
            return res.status(500).send({message: "Error al obtener las habitaciones"});
        }
    },

    deleteHabitacion:async function(req, res){
        try{
            var habitacionId = req.params.id;
            var habitacionRemoved = await Habitacion.findByIdAndDelete(habitacionId);
            if(!habitacionRemoved){
                return res.status(404).send({message: "No hay habitaciones para eliminar"});
            }
            return res.status(200).send({habitacionRemoved});
        } catch(error){
            return res.status(500).send({message: "Error al eliminar la habitacion"});
        }
    }


}

module.exports = controller;