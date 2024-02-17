import dbConnect from "@/lib/dbConnect";
import { ClienteModel } from "@/models/cliente";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
    await dbConnect();
    try {
        const { id } = req.query as { id: string }; // Access the ID of the client using req.query as { id: string }
        const cliente = await ClienteModel.findById(id);
        if (!cliente) {
            return NextResponse.json({ message: `Cliente with ID: ${id} not found.` }, { status: 404 });
        }
        return NextResponse.json({ data: cliente }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 });
    }
};

export const PUT = async (req: NextRequest, res: NextResponse) => {
    await dbConnect();
    try {
        const { id } = req.query; // Accede al ID del cliente utilizando req.query.id
        const body = await req.json();
        const updatedCliente = await ClienteModel.findByIdAndUpdate(id as string, body, { new: true });
        if (!updatedCliente) {
            return NextResponse.json({ message: `Cliente with ID: ${id} not found.` }, { status: 404 });
        }
        return NextResponse.json({ data: updatedCliente }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 });
    }
};

export const DELETE = async (req: NextRequest, res: NextResponse) => {
    await dbConnect();
    try {
        const { id } = req.query; // Accede al ID del cliente utilizando req.query.id
        const deletedCliente = await ClienteModel.findByIdAndDelete(id as string);
        if (!deletedCliente) {
            return NextResponse.json({ message: `Cliente with ID: ${id} not found.` }, { status: 404 });
        }
        return NextResponse.json({ data: deletedCliente }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 });
    }
};
