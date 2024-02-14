import dbConnect from "@/lib/dbConnect";
import { HospedajeModel } from "@/models/hospedaje";
import { request } from "http";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


export const GET = async (request:any, {params}:any) =>{
    await  dbConnect()
    const id = params.id
    try {
        const result = await HospedajeModel.findById(id)
        return NextResponse.json({data:result},{status:200})
    } catch (error) {
        return NextResponse.json({data:null}, {status:500});
    }
}
export const DELETE = async(request:any,{params}:any)=>{
    await dbConnect()
    const id = params.id
    try {
        const result = await HospedajeModel.findByIdAndDelete(id)
        if(!result){
            return NextResponse.json({message: `Document with ID: ${id} not found.`}, {status:404})
        }
        return NextResponse.json({data:result}, {status:200});
    } catch (error) {
        return NextResponse.json({data:null},{status:500})
    }
}
export const PUT = async(request:any,{params}:any)=>{
    await dbConnect()
    const id = params.id
    const body = await request.json()
    try {
        const result = await HospedajeModel.findByIdAndUpdate(id, {$set:{...body}},{new:true})
        if(!result){
            return NextResponse.json({message: `Document with ID: ${id} not found.`}, {status:404})
        }
        return NextResponse.json({data:result}, {status:200});
    } catch (error) {
        return NextResponse.json({data:null},{status:500})
    }
}