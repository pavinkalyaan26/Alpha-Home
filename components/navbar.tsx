import Image from 'next/image'
import Link from 'next/link'
import Alpha from "@/public/images/Brand/crack.png"

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-20 bg-white py-4'>
            <div className='w-52 h-auto' >
                <Link href={''}>
                    <Image src={Alpha} alt={'Alpha Solutions'} className='filter drop-shadow-xl'  />
                </Link>
            </div>
            <nav className='w-1/3'>
                <ul className='list-none w-full flex items-center justify-between text-blue-400 font-medium text-lg'>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/'}>About Us</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Services</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Careers</Link>
                    </li>
                    <li className=''>
                        <Link href={'/'} className='px-5 py-3 bg-blue-400 rounded-2xl text-white'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
