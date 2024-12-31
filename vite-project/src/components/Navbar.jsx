import { PiSpotifyLogoThin } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="w-full bg-transparent flex items-center justify-between gap-5 p-4">
            
            <ul className="flex items-center justify-between gap-2">
                <li><PiSpotifyLogoThin size={50} /></li>
                <li ><button className="border-black text-black border-2 p-2 rounded-2xl font-semibold">About</button></li>
                <li className="">
                    <button className="flex gap-2 items-center border-2 text-black border-black p-2 rounded-2xl font-semibold">
                        <p>departments</p>
                        <p><FaChevronDown /></p>
                    </button>
                </li>
                <li><button className="border-black border-2 p-2 text-black rounded-2xl font-semibold">Case studies</button></li>
                <li><button className="border-black border-2 text-black p-2 rounded-2xl font-semibold disabled:">Contact Us</button></li>
            </ul>
            <ul className="">
                <li><button className="bg-green-600 p-2 mx-5 rounded-2xl font-semibold  text-white">Book Service</button></li>
            </ul>
        </div>
    )
}

export default Navbar