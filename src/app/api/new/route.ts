import { NextResponse } from "next/server"
export async function GET(){
    //extract params
    //quer database
    //communicate with other services
    return NextResponse.json({
        message: "works!"
    })
}

export function POST(){
    return NextResponse.json({
        message: "creando datos"
    })
}
export function PUT(){
    return NextResponse.json({
        message: "actualizando datos"
    })
}
export function DELETE(){
    return NextResponse.json({
        message: "eliminando datos"
    })
}