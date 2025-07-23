import Link from "next/link";

type NavLinkProps = {
    title: string,
    href: string
}

const NavLink = ({ title = '', href = '' }: NavLinkProps) => {
    return <Link href={href} className='hover:bg-slate-700 px-4 py-2 rounded-lg transition duration-150 ease-in uppercase font-medium'>{title}</Link>
}

export default NavLink;
