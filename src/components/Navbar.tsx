'use client'

import { HiOutlineSun } from "react-icons/hi2";
import NavLink from "./NavLink";

const toggleMode = () => {
    // I change the site theme from light to dark and vice versa
}

export default function Navbar() {
    return (
        <nav className='z-1000 flex justify-between shadow-md w-full py-4 px-48 items-center fixed top-0 bg-slate-950 text-slate-300'>
            <div className='flex justify-between gap-12 items-center'>
                <NavLink href='/' title='Home'/>
                <NavLink href='/projects' title='Work' />
                <NavLink href='/about' title='About' />
                <NavLink href='/experiments' title='Experiments' />
            </div>
            <div className='flex justify-between gap-12 items-center'>
                <a href='/Shubhi_Resume.pdf' download target='_blank' className='bg-gray-300 hover:bg-slate-300 text-slate-800 font-bold px-6 py-3 rounded-sm cursor-pointer'>RESUME</a>
            </div>
        </nav>
    )
}