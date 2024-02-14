import express from 'express';
import { HospedajeModel } from '@/models/hospedaje';
import ReservacionModel from '@/models/reservacion'; // Importa el modelo de reservaciones

const router = express.Router();

// Endpoint para obtener todos los hospedajes disponibles
router.get('/hospedajes-disponibles', async (req, res) => {
    try {
        const hospedajesDisponibles = await HospedajeModel.find({ cantidad: { $gt: 0 } });
        res.json(hospedajesDisponibles);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// Endpoint para crear una nueva reservación con un hospedaje específico
router.post('/reservaciones', async (req, res) => {
    const { fechaInicio, fechaFin, hospedajeId } = req.body;
    try {
        const hospedaje = await HospedajeModel.findById(hospedajeId);
        if (!hospedaje || hospedaje.cantidad <= 0) {
            return res.status(400).json({ message: 'El hospedaje seleccionado no está disponible' });
        }

        const reservacion = new ReservacionModel({
            fechaInicio,
            fechaFin,
            hospedaje: hospedajeId
        });

        await reservacion.save();
        hospedaje.cantidad--;
        await hospedaje.save();

        res.status(201).json(reservacion);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
