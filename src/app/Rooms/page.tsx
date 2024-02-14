'use client'
import React, { useEffect, useState } from 'react';
const loadHospedaje = async () => {
    const res = await fetch('http://localhost:3000/api/hospedaje');
    const { data } = await res.json(); // Destructurando para obtener directamente el array `data`
    return data; // Devuelve el array
}


function page() {
    const [hospedajes, setHospedajes] = useState([]); // Inicializa hospedajes como un array vacío

    useEffect(() => {
        loadHospedaje().then(data => setHospedajes(data)); // Actualiza el estado con el array obtenido
    }, []);

    return (
        <section className='container mx-auto'>
            <div className='grid grid-cols-3 gap-3 mt-10'>
                {hospedajes.map((hospedaje: any) => ( // Ahora hospedajes es definitivamente un array
                    <div key={hospedaje._id}className='p-3 hover:bg-slate-500 hover:cursor-pointer'> {/* Asegúrate de usar _id para la key */}
                        <h3 className='font-bold  mb-2'>Nombre : {hospedaje.nombre}</h3>
                        <ul>
                            <li>
                                <h4 className='font-bold  mb-2'>Precio: {hospedaje.precio}</h4>
                            </li>
                            <li>
                                <h4 className='font-bold  mb-2'>Cantidad : {hospedaje.cantidad}</h4>
                            </li>
                            <li>
                                <p>Detalle: {hospedaje.detalle}</p>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default page;

