import Link from 'next/link';
import { useRouter} from 'next/navigation';
import Image from 'next/image';


function Navbar() {
    return (
        <nav className='bg-slate-50 '>
            <Image src="/images/nombreHotel.png" alt="Logo Hotel" width={200} height={77} className='mt-5 ml-3'/>
            <hr className="border-t border-gray-300 w-full" />
            <div className='text-black container mx-auto flex justify-center items-center py-3'>
                
                <ul className='flex gap-x-2 text-lg'>
                    <li>
                        <Link href="/" >
                            INICIO
                        </Link>
                    </li>
                    <li>
                        <Link href="/Rooms">
                            HABITACIONES
                        </Link>
                    </li>
                        <Link href = "/Contact">
                            CONTACTO
                        </Link>
                    <li>
                        <Link href="/aboutUs">
                            ACERCA DE NOSOTROS
                        </Link>
                    </li>
                </ul>
            </div>
            <hr className="border-t border-gray-300 w-full" />
        </nav>
    );
}

export default Navbar;