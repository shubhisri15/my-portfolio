import Link from "next/link";

type NavLinkProps = {
    title: string,
    href: string
}

const NavLink = ({ title = '', href = '' }: NavLinkProps) => {
    return <Link href={href} className='hover:bg-gray-100 px-4 py-2 rounded-lg transition duration-150 ease-in'>{title}</Link>
}

export default NavLink;
