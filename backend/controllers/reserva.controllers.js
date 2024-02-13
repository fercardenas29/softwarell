const reserva = require("../models/reserva");
var Reserva = require("../models/reserva");

var controller = {
    inicio: function(req, res){
        return res.status(200).send({
            message: "<h2> Bienvenidos </h2>"
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
                return res.status(400).send({message: "No se ha podido guardar la habitacion"});
            }
            return res.status(201).send({reserva: reservaStored});
        } catch(error){
            return res.status(500).send({message: "Error al guardar la habitacion"});
        }
    },
    getReserva:async function(req, res){
        try{
            const reserva = await Reserva.find({}).sort();
            if(reserva.length === 0){
                return res.status(404).send({message: "No hay habitaciones para mostrar"});
            }
            return res.status(200).send({reserva});
        } catch(error){
            return res.status(500).send({message: "Error al obtener las habitaciones"});
        }
    },

    getReserva:async function(req, res){
        try{
            var reservaId = req.params.id;
            if(!reserva){
                return res.status(404).send({message: "No hay habitaciones para mostrar"});
                var reserva= await reserva.findById(reservaId);
                if (!reserva){
                    return res.status(404).send({message: "No hay habitaciones para mostrar"});
                }
                return res.status(200).send({reserva});
            }
        } catch(error){
            return res.status(500).send({message: "Error al obtener las habitaciones"});
        }
    },

    deleteReserva:async function(req, res){
        try{
            var reservaId = req.params.id;
            var reservaRemoved = await Reserva.findByIdAndDelete(reservaId);
            if(!reservaRemoved){
                return res.status(404).send({message: "No hay habitaciones para eliminar"});
            }
            return res.status(200).send({reservaRemoved});
        } catch(error){
            return res.status(500).send({message: "Error al eliminar la habitacion"});
        }
    }


}

module.exports = controller;