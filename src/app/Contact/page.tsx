import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div>
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
        </div>
    );
}

export default ContactPage;
