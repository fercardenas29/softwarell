import dbConnect3 from "@/lib/db3Connect";
import { NextApiRequest, NextApiResponse } from "next";
import { ReservaModel } from "@/models/reservacion";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const POST = async (req:NextRequest, res:NextResponse) => {
    await dbConnect3();
    try {
        const body = await req.json(); // No es necesario usar await aquí, req.body ya está disponible
        const newCliente = await ReservaModel.create(body); // Crea un nuevo documento en la colección
        return NextResponse.json({data:newCliente}, {status:200})
        // Usa res.status().json() para enviar la respuesta
    } catch (error) {
        return NextResponse.json({data: null}, {status:500})
    }       

};


export const GET = async (req:NextRequest, res:NextResponse) => {
    await dbConnect3();
    try {
        const result = await ReservaModel.find({})
        return NextResponse.json({data:result}, {status:201})
        // Usa res.status().json() para enviar la respuesta
    } catch (error) {
        return NextResponse.json({data: null}, {status:500})
    }  
};
