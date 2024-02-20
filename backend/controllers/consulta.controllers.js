// Conexion con el mongo 

const consulta = require("../models/consulta");
var Consulta = require("../models/consulta");

var controller = {
    inicio: function(req, res){
        return res.status(200).send({
            message: "<h2> Bienvenidos </h2>"
        });
    },

    saveConsulta: async function(req, res){
        try{
            var consulta = new Consulta();
            var params = req.body; 
            consulta.nombre = params.nombre;
            consulta.precio = params.precio;
            consulta.descripcion = params.descripcion;
            
            var consultaStored = await consulta.save();

            if(!consultaStored){
                return res.status(400).send({message: "No se ha podido guardar el consulta"});
            }
            return res.status(201).send({consulta: consultaStored});
        } catch(error){
            return res.status(500).send({message: "Error al guardar el consulta"});
        }
    },
    getConsulta:async function(req, res){
        try{
            const consulta = await Consulta.find({}).sort();
            if(consulta.length === 0){
                return res.status(404).send({message: "No hay consulta para mostrar"});
            }
            return res.status(200).send({consulta});
        } catch(error){
            return res.status(500).send({message: "Error al obtener consulta"});
        }
    },

    getConsulta:async function(req, res){
        try{
            var consultaId = req.params.id;
            if(!consulta){
                return res.status(404).send({message: "No hay consulta para mostrar"});
                var consulta= await consulta.findById(consultaId);
                if (!consulta){
                    return res.status(404).send({message: "No hay consulta para mostrar"});
                }
                return res.status(200).send({consulta});
            }
        } catch(error){
            return res.status(500).send({message: "Error al obtener consulta"});
        }
    },

    deleteConsulta:async function(req, res){
        try{
            var consultaId = req.params.id;
            var consultaRemoved = await Consulta.findByIdAndDelete(consultaId);
            if(!consultaRemoved){
                return res.status(404).send({message: "No hay consulta para eliminar"});
            }
            return res.status(200).send({consultaRemoved});
        } catch(error){
            return res.status(500).send({message: "Error al eliminar el consulta"});
        }
    }


}

module.exports = controller;