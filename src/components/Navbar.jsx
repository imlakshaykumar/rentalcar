import Image from "next/image"
import logo from '../../public/images/logo.webp'
import Link from "next/link"

export default function Navbar() {
    return (
        <div className="nav-div flex items-center lg:max-w-[1500px] w-full mx-auto justify-between border-b-[#f8f8f8] py-7 absolute z-[9999] left-0 top-0 right-0">
            <div className="logo-div">
                <Image src={ logo } alt="logo" width={ 180 } height={ 180 } />
            </div>
            <div className="nav-links-div">
                <ul className="nav-links-list flex items-center gap-7 font-semibold">
                    <Link href='/'>
                        <li className="nav-links hover:text-[#ff4d30] cursor-pointer">Home</li>
                    </Link>
                    <Link href='/about'>
                        <li className="nav-links hover:text-[#ff4d30] cursor-pointer">About</li>
                    </Link>
                    <Link href='/carmodels'>
                        <li className="nav-links hover:text-[#ff4d30] cursor-pointer">Vehicle Models</li>
                    </Link>
                    <Link href='/testimonials'>
                        <li className="nav-links hover:text-[#ff4d30] cursor-pointer">Testimonials</li>
                    </Link>
                    <Link href='/team'>
                        <li className="nav-links hover:text-[#ff4d30] cursor-pointer">Our Team</li>
                    </Link>
                    <Link href='/contact'>
                        <li className="nav-links hover:text-[#ff4d30] cursor-pointer">Contact</li>
                    </Link>
                </ul>
            </div>
            <div className="nav-btns-div flex gap-5">
                <button className="font-semibold hover:text-[#ff4d30]">Sign In</button>
                <button className="px-6 py-3 bg-[#ff4d30] hover:bg-[#ff3e30] text-white font-semibold shadow-xl rounded-sm">Register</button>
            </div>
        </div>
    )
}
