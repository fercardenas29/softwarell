import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor ingrese el nombre del cliente"]
    },
    email: {
        type: String,
        required: [true, "Por favor ingrese el correo electrónico del cliente"],
        unique: true // Esto asegura que no haya dos clientes con el mismo correo electrónico
    },
    telefono: {
        type: String,
        required: [true, "Por favor ingrese el número de teléfono del cliente"]
    },
    direccion: {
        type: String,
        required: [true, "Por favor ingrese la dirección del cliente"]
    }
},
{
    timestamps: true,
    versionKey: false
});

export const ClienteModel = mongoose.models.Cliente || mongoose.model('Cliente', ClienteSchema);
