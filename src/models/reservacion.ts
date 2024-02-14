import mongoose from "mongoose";

const ReservSchema = new mongoose.Schema({

    id_hosp:{
        type: String,
        required: [true, "ingresar nombre"]
    },
    nombre_hosp:{
        type: String,
        required: [true, "ingresar nombre"]
    }

},
{
    timestamps: true,
    versionKey: false
}

)
export const ReservaModel = mongoose.models.Reserva || mongoose.model('Reserva', ReservSchema);
