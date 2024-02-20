// Conexion con el mongo 

const cliente = require("../models/cliente");
var Cliente = require("../models/cliente");

var controller = {
    inicio: function(req, res){
        return res.status(200).send({
            message: "<h2> Bienvenidos </h2>"
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

module.exports = controller;