import dbConnect from "@/lib/dbConnect";
import { HabitacionDisponibleModel } from "@/models/disponibilidad"; // Importa el modelo de HabitacionDisponible
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
    await dbConnect();
    try {
        const body = req.body;
        const nuevaDisponibilidad = await HabitacionDisponibleModel.create(body); // Crea una nueva entrada de disponibilidad
        return NextResponse.json({ data: nuevaDisponibilidad }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};

export const GET = async (req: NextRequest, res: NextResponse) => {
    await dbConnect();
    try {
        const disponibilidad = await HabitacionDisponibleModel.find({}); // Obtiene todas las entradas de disponibilidad
        return NextResponse.json({ data: disponibilidad }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};

// Agrega aquí otras operaciones como PUT, DELETE, etc., según tus necesidades
