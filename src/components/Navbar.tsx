import Link from "next/link";

type NavLinkProps = {
    title: string,
    href: string
}

const NavLink = ({ title = '', href = '' }: NavLinkProps) => {
    return <Link href={href}>{title}</Link>
}

export default function Navbar() {
    return (
        <nav className='z-1000 flex justify-between shadow-md w-full py-4 px-12 items-center fixed top-0'>
            <div className='flex justify-between gap-12'>
                <NavLink href='/' title='Home' />
                <NavLink href='#' title='Projects' />
                <NavLink href='#' title='About Me' />
            </div>
            <button className='bg-gray-800 hover:bg-gray-600 text-white font-bold px-6 py-3 rounded-lg cursor-pointer'>Download CV</button>
        </nav>
    )
}