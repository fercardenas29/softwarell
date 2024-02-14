import dbConnect from "@/lib/dbConnect";
import { ClienteModel } from "@/models/cliente"; // Importa el modelo de Cliente
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const POST = async (req:NextRequest, res:NextResponse) => {
    await dbConnect();
    try {
        const body = await req.json();
        const newCliente = await ClienteModel.create(body);
        return NextResponse.json({data:newCliente}, {status:200});
    } catch (error) {
        return NextResponse.json({data:null}, {status:500});
    }       
};

export const GET = async (req:NextRequest, res:NextResponse) => {
    await dbConnect();
    try {
        const result = await ClienteModel.find({});
        return NextResponse.json({data:result}, {status:200});
    } catch (error) {
        return NextResponse.json({data:null}, {status:500});
    }  
};

export const GET_BY_ID = async (req:NextRequest, res:NextResponse) => {
    await dbConnect();
    try {
        const { id } = req.params; // Obtén el ID del parámetro de la URL
        const cliente = await ClienteModel.findById(id);
        if (!cliente) {
            return NextResponse.json({message: `Cliente with ID: ${id} not found.`}, {status:404});
        }
        return NextResponse.json({data:cliente}, {status:200});
    } catch (error) {
        return NextResponse.json({data:null}, {status:500});
    }
};

export const DELETE = async(req:NextRequest, res:NextResponse) => {
    await dbConnect();
    try {
        const { id } = req.params;
        const deletedCliente = await ClienteModel.findByIdAndDelete(id);
        if (!deletedCliente) {
            return NextResponse.json({message: `Cliente with ID: ${id} not found.`}, {status:404});
        }
        return NextResponse.json({data:deletedCliente}, {status:200});
    } catch (error) {
        return NextResponse.json({data:null}, {status:500});
    }
};

export const PUT = async(req:NextRequest, res:NextResponse) => {
    await dbConnect();
    try {
        const { id } = req.params;
        const body = await req.json();
        const updatedCliente = await ClienteModel.findByIdAndUpdate(id, body, { new: true });
        if (!updatedCliente) {
            return NextResponse.json({message: `Cliente with ID: ${id} not found.`}, {status:404});
        }
        return NextResponse.json({data:updatedCliente}, {status:200});
    } catch (error) {
        return NextResponse.json({data:null}, {status:500});
    }
};
