import Head from 'next/head';

export default function About() {
    return (
        <div>
            <Head>
                <title>Hotel Copo de Nieve | Acerca de Nosotros</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            </Head>

            <header className="site-header">
                <div className="container mx-auto flex justify-between items-center py-4">
                    <a href="inicio.html">
                        <img src="/css/img/nombreHotel.png" alt="Logo" id="logo" />
                    </a>
                    <div className="header-icons">
                        <a href="carrito.html" className="header-icon"><i className="fas fa-shopping-cart"></i></a>
                        <a href="login.html" className="header-icon"><i className="fas fa-user"></i></a>
                    </div>
                </div>
            </header>

            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="inicio.html">INICIO</a>
                            <a className="nav-item nav-link" href="habitaciones.html">HABITACIONES</a>
                            <a className="nav-item nav-link" href="contacto.html">CONTACTO</a>
                            <a className="nav-item nav-link active" href="acerca.html">ACERCA DE NOSOTROS</a>
                        </div>
                    </div>
                </div>
            </nav>

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

            <footer className="site-footer bg-gray-800 text-white py-10">
                <div className="container mx-auto">
                    <div className="row">
                        <div className="col-md-4 mb-4 md:mb-0">
                            <h3>Hotel Copo de Nieve</h3>
                            <ul className="footer-contact">
                                <li><a href="https://maps.app.goo.gl/Cx6kARwJGkga7PUp9" target="_blank"><i className="fa fa-map-marker"></i>Av. Ladrón de Guevara E11-253, Quito 170143 Ecuador</a></li>
                                <li><a href="tel:+59321234567" target="_blank"><i className="fa fa-phone"></i>+5932 1234567</a></li>
                                <li><a href="mailto:reservaciones@hotelcopodenieve.com"><i className="fa fa-envelope"></i>reservaciones@hotelcopodenieve.com</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 mb-4 md:mb-0">
                            <h3>Más</h3>
                            <ul className="footer-links">
                                <li><a href="inicio.html">Inicio</a></li>
                                <li><a href="habitaciones.html">Habitaciones</a></li>
                                <li><a href="contacto.html">Contacto</a></li>
                                <li><a href="acerca.html">Acerca de nosotros</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h3>Medios sociales</h3>
                            <ul className="footer-social">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <p>©2024 Todos los derechos reservados | Desarrollado por GRUPO7</p>
                    </div>
                </div>
            </footer>

            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        </div>
    );
}
