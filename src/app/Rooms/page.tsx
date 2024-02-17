'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { subDays } from 'date-fns';

const loadHospedaje = async () => {
    const res = await fetch('http://localhost:3000/api/hospedaje');
    const { data } = await res.json(); // Destructurando para obtener directamente el array `data`
    return data; // Devuelve el array
}

const Page = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [hospedajes, setHospedajes] = useState<any[]>([]);

    useEffect(() => {
        loadHospedaje().then(data => setHospedajes(data)); // Actualiza el estado con el array obtenido
    }, []);

    const handleSearch = () => {
        if (startDate && endDate) {
            // Filtra las habitaciones disponibles según las fechas seleccionadas
            const filteredHospedajes = hospedajes.filter(hospedaje =>
                new Date(hospedaje.fechaInicio) >= startDate && new Date(hospedaje.fechaFin) <= endDate
            );
            setHospedajes(filteredHospedajes);
        } else {
            // Si no se han seleccionado fechas, carga todas las habitaciones
            loadHospedaje().then(data => setHospedajes(data));
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-center text-2xl font-bold mb-4">Realiza tu reserva</h1>
                <div className="mb-4 flex items-center">
                    <div className="mr-2">
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Fecha de inicio</label>
                        <DatePicker 
                            id="startDate" 
                            selected={startDate} 
                            onChange={(date: Date) => setStartDate(date)}
                            minDate={subDays(new Date(), 0)} 
                        />
                    </div>
                    <div>
                        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">Fecha de fin</label>
                        <DatePicker 
                            id="endDate" 
                            selected={endDate} 
                            onChange={(date: Date) => setEndDate(date)} 
                            minDate={startDate || new Date()} 
                        />
                    </div>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleSearch}>Buscar</button>
            </div>
            <section className='container mx-auto'>
                <div className='grid grid-cols-3 gap-3 mt-10'>
                    {hospedajes.map((hospedaje: any) => (
                        <div key={hospedaje._id} className='p-3 hover:bg-slate-500 hover:cursor-pointer'>
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
        </div>
    );
};

export default Page;
