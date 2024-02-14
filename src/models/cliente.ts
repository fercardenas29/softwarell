import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema({

    nombre:{
        type: String,
        required: [true, "ingresar nombre"]
    },
    apellido:{
        type: String,
        required: [true, "ingresar nombre"]
    },
    correo:{
        type: String,
        required: [true, "ingresar nombre"]
    },
    cedula:{
        type: String,
        required: [true, "ingresar nombre"]
    },
    telefono:{
        type: String,
        required: [true, "ingresar nombre"]
    }

},
{
    timestamps: true,
    versionKey: false
}

)
export const ClienteModel = mongoose.models.Cliente || mongoose.model('Cliente', ClienteSchema);
