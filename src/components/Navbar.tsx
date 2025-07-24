'use client'

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import NavLink from "./NavLink";

const MobileMenu = ({ onClose }: { onClose: () => void}) => {
    return (
        <div className='flex flex-col justify-between gap-4 items-center absolute top-full left-0 w-screen bg-slate-950 p-4 fadeInDown'>
            <NavLink onClose={onClose} href='/' title='Home'/>
            <NavLink onClose={onClose} href='/projects' title='Work' />
            <NavLink onClose={onClose} href='/about' title='About' />
            <NavLink onClose={onClose} href='/experiments' title='Experiments' />
        </div>
    )
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <>
            <nav className='z-1000 flex justify-between shadow-md w-full py-4 md:px-48 px-4 items-center fixed top-0 bg-slate-950 text-slate-300'>
                <button
                    className="md:hidden flex flex-1 justify-start"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Open menu"
                >
                    <IoMenu size={30}/>
                </button>
                <div className='hidden md:flex justify-between md:gap-12 gap-4 items-center'>
                    <NavLink href='/' title='Home'/>
                    <NavLink href='/projects' title='Work' />
                    <NavLink href='/about' title='About' />
                    <NavLink href='/experiments' title='Experiments' />
                </div>
                <a href='/Shubhi_Resume.pdf' download target='_blank' className='bg-gray-300 hover:bg-slate-300 text-slate-800 font-bold px-4 py-2 rounded-sm cursor-pointer'>RESUME</a>
                {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)}/>}
            </nav>
        </>
        
    )
}