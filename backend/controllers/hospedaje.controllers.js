const hospedaje = require("../models/hospedaje");
var Hospedaje = require("../models/hospedaje");

var controller = {
    inicio: function(req, res){
        return res.status(200).send({
            message: "<h2> Bienvenidos </h2>"
        });
    },

    getHospedaje:async function(req, res){
        try{
            const hospedaje = await Hospedaje.find({}).sort();
            if(hospedaje.length === 0){
                return res.status(404).send({message: "No hay habitaciones para mostrar"});
            }
            return res.status(200).send({hospedaje});
        } catch(error){
            return res.status(500).send({message: "Error al obtener las habitaciones"});
        }
    },

    getHospedaje:async function(req, res){
        try{
            var hospedajeId = req.params.id;
            if(!hospedaje){
                return res.status(404).send({message: "No hay habitaciones para mostrar"});
                var hospedaje= await hospedaje.findById(hospedajeId);
                if (!hospedaje){
                    return res.status(404).send({message: "No hay habitaciones para mostrar"});
                }
                return res.status(200).send({hospedaje});
            }
        } catch(error){
            return res.status(500).send({message: "Error al obtener las habitaciones"});
        }
    }

}

module.exports = controller;