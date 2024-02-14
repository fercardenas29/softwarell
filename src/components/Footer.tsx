import Link from 'next/link';

function Footer() {
    return (
        <footer className="bg-cyan-900 py-8">
            <div className="container mx-auto flex justify-center gap-8">
                {/* Primera sección */}
                <div className="w-1/3">
                    <h2 className="text-slate-500 text-lg font-semibold mb-2">Hotel</h2>
                    <ul className="text-white">
                        <li><Link href="/habitaciones">Av. Ladrón de Guevara E11-253, Quito 170143 Ecuador</Link></li>
                        <li><Link href="/reservas">+593 921234567</Link></li>
                        <li><Link href="/servicios">reservaciones@hotelcopodenieve.com</Link></li>
                    </ul>
                </div>
                
                {/* Segunda sección */}
                <div className="w-1/3">
                    <h2 className="text-slate-500 text-lg font-semibold mb-2">Más</h2>
                    <ul className="text-white">
                        <li><Link href="/nosotros">Sobre nosotros</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contacto">Contacto</Link></li>
                    </ul>
                </div>
                
                {/* Tercera sección */}
                <div className="w-1/3">
                    <h2 className="text-slate-500 text-lg font-semibold mb-2">Redes Sociales</h2>
                    <ul className="text-white">
                        <li><Link href="https://facebook.com">Facebook</Link></li>
                        <li><Link href="https://twitter.com">Twitter</Link></li>
                        <li><Link href="https://instagram.com">Instagram</Link></li>
                    </ul>
                </div>
            </div>
            <hr className="border-t-2 border-gray-950 w-3/4 mx-auto my-3" />
            <h4 className='text-center text-white'>©2024 All rights reserved | Powered by GRUPO7</h4>
        </footer>
    );
}

export default Footer;
