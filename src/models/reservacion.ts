import mongoose from "mongoose";

const ReservacionSchema = new mongoose.Schema({
    fechaInicio: { type: Date, required: true },
    fechaFin: { type: Date, required: true },
    hospedaje: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospedaje', required: true } // Referencia al hospedaje asociado
}, {
    timestamps: true,
    versionKey: false
});

const ReservacionModel = mongoose.models.Reservacion || mongoose.model('Reservacion', ReservacionSchema);

export default ReservacionModel;
