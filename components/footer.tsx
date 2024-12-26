import Image from "next/image";
import { FaHeart } from "react-icons/fa6";
import { FaMapMarkerAlt,FaPhoneAlt,FaMailBulk   } from "react-icons/fa";
import Alphamini from "@/public/images/Brand/logo.svg"
import { Input } from "@/components/ui/input"

const Footer = () => {
    return (
        <footer className="border-t border-blue-500 border-dashed">
            <div className="flex items-center justify-between px-16 py-8">
                <div className="w-72 flex flex-col items-center justify-start gap-3">
                    <Image src={Alphamini} alt={"Alpha Solutions"} className="w-32" />
                    <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, sed maxime vitae, </p>
                    <ul className="list-none flex flex-col items-start justify-center gap-2 w-full">
                        <li className="flex items-start justify-center gap-3"><FaMapMarkerAlt className="text-blue-600 mt-1 text-lg" />Coimbatore</li>
                        <li className="flex items-start justify-center gap-3"><FaPhoneAlt className="text-blue-600 mt-1 text-lg"  /> +91 XXXXXXXXXX</li>
                        <li className="flex items-start justify-center gap-3"><FaMailBulk className="text-blue-600 mt-1 text-lg"  />pavinkalyaan263@gmail.com</li>
                    </ul>
                </div>
                <div className="flex items-center justify-center">
                    <div></div>
                    <div className='w-72 flex flex-col items-start justify-between h-32'>
                        <h1>Subscribe</h1>
                        <Input placeholder='user@gmail.com' />
                        <button className='mt-4 pr-4 border-b-2 border-black-100 hover:scale-105 hover:pb-1 hover:translate-x-2 transition-all duration-200 ease-in-out'>Subscribe </button>
                    </div>
                </div>
            </div>
            <div className="h-14 bg-white flex items-center justify-center text-md font-medium">
                &copy; {new Date().getFullYear()} All rights reserved | Developed with lots of <FaHeart className="mx-5 text-red-500 animate-ping" /> from <span className="mx-2 text-blue-500">Alpha Solutions</span>
            </div>
        </footer>
    )
}

export default Footer
