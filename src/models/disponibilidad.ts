// Importa la biblioteca de mongoose
import mongoose from "mongoose";

// Define el esquema de disponibilidad de habitaciones
const HabitacionDisponibleSchema = new mongoose.Schema({
    habitacionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Habitacion', // Referencia al modelo de habitación
        required: true
    },
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFin: {
        type: Date,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

// Crea el modelo de disponibilidad de habitaciones
export const HabitacionDisponibleModel = mongoose.models.HabitacionDisponible || mongoose.model('HabitacionDisponible', HabitacionDisponibleSchema);
