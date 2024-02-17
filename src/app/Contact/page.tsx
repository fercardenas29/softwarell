import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div>
            <header className="site-header">
                <a href="inicio.html">
                    <img src="css/img/nombreHotel.png" alt="Logo" id="logo" />
                </a>
                <div className="header-icons">
                    <a href="carrito.html" className="header-icon"><i className="fas fa-shopping-cart"></i></a>
                    <a href="login.html" className="header-icon"><i className="fas fa-user"></i></a>
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
                            <a className="nav-item nav-link active" href="contacto.html">CONTACTO</a>
                            <a className="nav-item nav-link" href="acerca.html">ACERCA DE NOSOTROS</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <div className="contact-info">
                                <h3>Contacto</h3>
                                <p><a href="tel:+59321234567" target="_blank"><i className="fa fa-phone"></i>+5932 1234567</a></p>
                                <p><a href="https://api.whatsapp.com/send?phone=593967153312&text=Hola,%20quiero%20mota%20amigo%20...%20xd" target="_blank"><i className="fa fa-phone"></i>+593 96 715 3312</a></p>
                                <p><a href="mailto:reservaciones@hotelcopodenieve.com"><i className="fas fa-envelope"></i>reservaciones@hotelquito.com</a></p>
                                <p><a href="https://maps.app.goo.gl/Cx6kARwJGkga7PUp9" ><i className="fas fa-map-marker-alt"></i> Av. Ladrón de Guevara E11-253, Quito 170143 Ecuador</a></p>
                            </div>
                        </div>
                        <div>
                            <div className="contact-form">
                                <form>
                                    <h3>Enviar una consulta</h3>
                                    <input type="text" placeholder="Nombre" required className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500" />
                                    <input type="tel" placeholder="Número de teléfono" className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500" />
                                    <input type="email" placeholder="Correo electrónico" required className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500" />
                                    <textarea placeholder="Mensaje" required className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"></textarea>
                                    <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pie de página*/}
            <footer className="site-footer bg-gray-800 text-white py-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <h3>Hotel Copo de Nieve</h3>
                            <ul className="footer-contact">
                                <li><a href="https://maps.app.goo.gl/Cx6kARwJGkga7PUp9" target="_blank">
                                    <i className="fa fa-map-marker"></i>Av. Ladrón de Guevara E11-253, Quito 170143 Ecuador</a>
                                </li>
                                <li><a href="tel:+59321234567" target="_blank"><i className="fa fa-phone"></i>+5932 1234567</a></li>
                                <li><a href="mailto:reservaciones@hotelcopodenieve.com"><i className="fa fa-envelope"></i>reservaciones@hotelcopodenieve.com</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Más</h3>
                            <ul className="footer-links">
                                <li><a href="inicio.html">Inicio</a></li>
                                <li><a href="habitaciones.html">Habitaciones</a></li>
                                <li><a href="contacto.html">Contacto</a></li>
                                <li><a href="acerca.html">Acerca de nosotros</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Medios sociales</h3>
                            <ul className="footer-social">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <p>©2024 Todos los derechos reservados | Desarrollado por GRUPO7</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default ContactPage;
