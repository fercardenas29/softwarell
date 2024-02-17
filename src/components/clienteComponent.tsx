
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { subDays } from 'date-fns';

const Page = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleSearch = () => {
        if (startDate && endDate) {
            window.location.href = `/Rooms?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`;
        } else {
            window.location.href = `/Rooms`;
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
        </div>
    );
};

export default Page;
