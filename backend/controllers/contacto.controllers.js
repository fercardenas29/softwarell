// Conexion con el mongo 

const contacto = require("../models/contacto");
var Contacto = require("../models/contacto");

var controller = {
    inicio: function(req, res){
        return res.status(200).send({
            message: "<h2> Bienvenidos </h2>"
        });
    },

    saveContacto: async function(req, res){
        try{
            var contacto = new Contacto();
            var params = req.body; 
            contacto.nombre = params.nombre;
            contacto.precio = params.precio;
            contacto.descripcion = params.descripcion;
            
            var contactoStored = await contacto.save();

            if(!contactoStored){
                return res.status(400).send({message: "No se ha podido guardar el contacto"});
            }
            return res.status(201).send({contacto: contactoStored});
        } catch(error){
            return res.status(500).send({message: "Error al guardar el contacto"});
        }
    },
    getContacto:async function(req, res){
        try{
            const contacto = await Contacto.find({}).sort();
            if(contacto.length === 0){
                return res.status(404).send({message: "No hay contacto para mostrar"});
            }
            return res.status(200).send({contacto});
        } catch(error){
            return res.status(500).send({message: "Error al obtener contacto"});
        }
    },

    getContacto:async function(req, res){
        try{
            var contactoId = req.params.id;
            if(!contacto){
                return res.status(404).send({message: "No hay contacto para mostrar"});
                var contacto= await contacto.findById(contactoId);
                if (!contacto){
                    return res.status(404).send({message: "No hay contacto para mostrar"});
                }
                return res.status(200).send({contacto});
            }
        } catch(error){
            return res.status(500).send({message: "Error al obtener contacto"});
        }
    },

    deleteContacto:async function(req, res){
        try{
            var contactoId = req.params.id;
            var contactoRemoved = await Contacto.findByIdAndDelete(contactoId);
            if(!contactoRemoved){
                return res.status(404).send({message: "No hay contacto para eliminar"});
            }
            return res.status(200).send({contactoRemoved});
        } catch(error){
            return res.status(500).send({message: "Error al eliminar el contacto"});
        }
    }


}

module.exports = controller;