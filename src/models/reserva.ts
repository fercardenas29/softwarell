import mongoose from "mongoose";

const ReservSchema = new mongoose.Schema({

    nombre:{
        type: String,
        required: [true, "ingresar nombre"]
    },
    precio:{
        type: Number,
        required: [true, "ingresar nombre"]
    },
    cantidad:{
        type: Number,
        required: [true, "ingresar cantidad"]
    },
    detalle:{
        type: String,
        required: [true, "ingresar cantidad"]
    }

},
{
    timestamps: true,
    versionKey: false
}

)
export const ReservaModel = mongoose.models.Reserva || mongoose.model('Reserva', ReservSchema);
