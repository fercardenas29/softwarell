const cliente = require("../models/hotel");
var Cliente = require("../models/hotel");
const hospedaje = require("../models/hotel");
var Hospedaje = require("../models/hotel");
const reserva = require("../models/hotel");
var Reserva = require("../models/hotel");

//Cliente.Controller
var clienteController = {
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

//Hospedaje.Controller
var hospedajeController = {
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

//Reserva.Controller
var reservaController = {
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

//Contacto.Controller
var contactoController = {
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
            return res.status(500).send({message: "Error al obtener las habitaciones"});
        }
    },

    deleteContacto:async function(req, res){
        try{
            var contactoId = req.params.id;
            var contactoRemoved = await Contacto.findByIdAndDelete(contactoId);
            if(!contactoRemoved){
                return res.status(404).send({message: "No hay habitaciones para eliminar"});
            }
            return res.status(200).send({contactoRemoved});
        } catch(error){
            return res.status(500).send({message: "Error al eliminar la habitacion"});
        }
    }


}

module.exports = {
    clienteController,
    hospedajeController,
    reservaController,
    contactoController
}