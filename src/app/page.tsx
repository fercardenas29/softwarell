'use client'
import Link from 'next/link';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { subDays } from 'date-fns'; // Importa la función subDays desde date-fns

function Page() {
    const [startDate, setStartDate] = React.useState<Date | null>(null);
    const [endDate, setEndDate] = React.useState<Date | null>(null);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-center text-2xl font-bold mb-4 text-black outline-black">¡Realiza ya tu reserva!</h1>
                <div className="mb-4 flex items-center">
                    <div className="mr-2">
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Fecha de inicio</label>
                        <DatePicker 
                            id="startDate" 
                            selected={startDate} 
                            onChange={(date: Date) => setStartDate(date)}
                            // Restricción de fechas  al día actual
                            minDate={subDays(new Date(), 0)} 
                        />
                    </div>
                    <div>
                        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">Fecha de fin</label>
                        <DatePicker 
                            id="endDate" 
                            selected={endDate} 
                            onChange={(date: Date) => setEndDate(date)} 
                            // Restricción de fechas posteriores al día actual
                            minDate={new Date()} 
                        />
                    </div>
                </div>
                {/* Aquí puedes agregar tu botón de búsqueda */}
                <Link href="/Rooms">
                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Buscar</button>
                </Link>
            </div>
        </div>
    );
}

export default Page;
