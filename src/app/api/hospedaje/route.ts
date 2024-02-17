import dbConnect from "@/lib/dbConnect";
import { NextApiRequest, NextApiResponse } from "next";
import { HospedajeModel } from "@/models/hospedaje";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const POST = async (req:NextRequest, res:NextResponse) => {
    await dbConnect();
    try {
        const body = await req.json(); // No es necesario usar await aquí, req.body ya está disponible
        const newHospedaje = await HospedajeModel.create(body); // Crea un nuevo documento en la colección
        return NextResponse.json({data:newHospedaje}, {status:200})
        // Usa res.status().json() para enviar la respuesta
    } catch (error) {
        return NextResponse.json({data:null}, {status:500})
    }       

};


export const GET = async (req:NextRequest, res:NextResponse) => {
    await dbConnect();
    try {
        const result = await HospedajeModel.find({})
        return NextResponse.json({data:result}, {status:201})
        // Usa res.status().json() para enviar la respuesta
    } catch (error) {
        
    }  
};
