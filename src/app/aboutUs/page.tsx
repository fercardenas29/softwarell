import Head from 'next/head';

export default function About() {
    return (
        <div>
            <section className="about-section py-10">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Sobre nosotros</h2>
                    <p>
                        El hotel ofrece diversas opciones de alojamiento, incluyendo encantadoras cabañas y una casa principal con habitaciones. La distribución específica se determina según las necesidades de los huéspedes, tomando como referencia ejemplos exitosos como el Hotel Dos Chorreras en Cuenca.
                        <br />
                        <br />
                        <b>Cabañas:</b><br />
                        <ul className="list-disc pl-8 mb-4">
                            <li> Cabaña para 5 personas: Ofrece comodidades para una estancia acogedora.</li>
                            <li> Cabaña para 7 personas: Espacio amplio y confortable para grupos más grandes.</li>
                            <li> Cabaña para 12 personas: Ideal para reuniones familiares o grupos numerosos.</li>
                        </ul>

                        <b>Habitaciones en la Casa Principal:</b><br />
                        <ul className="list-disc pl-8 mb-4">
                            <li> Dobles: Habitaciones acogedoras para dos personas.</li>
                            <li> Cuádruples: Espacios amplios para familias o grupos pequeños.</li>
                            <li> Suites con camas extragrandes dobles: Alojamientos lujosos para un descanso excepcional.</li>
                            <li> Suites con cama extragrande: Comodidades exclusivas para una estancia memorable.</li>
                        </ul>

                        <b>Servicios Generales:</b><br />
                        <ul className="list-disc pl-8 mb-4">
                            <li> Recepción 24 horas</li>
                            <li> Habitaciones accesibles</li>
                            <li> Acceso a internet gratuito</li>
                            <li> Baño privado</li>
                            <li> Seguridad contra incendios</li>
                            <li> Café o té en la habitación</li>
                            <li> Salas de reuniones</li>
                            <li> Lobby</li>
                            <li> Piscina climatizada</li>
                            <li> Servicio de limpieza diario</li>
                            <li> Servicio de habitaciones</li>
                            <li> Caja fuerte</li>
                            <li> Cafetería</li>
                            <li> Internet inalámbrico</li>
                            <li> Los niños son bienvenidos</li>
                            <li> Limpieza en seco</li>
                            <li> Servicio de despertador</li>
                            <li> Acceso para sillas de ruedas</li>
                        </ul>

                        <blockquote className="italic pl-8">
                            ¡Te invitamos a disfrutar de una estancia inolvidable en el Hotel "Copo de Nieve" durante la temporada navideña!
                        </blockquote>
                    </p>
                </div>
            </section>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        </div>
    );
}
