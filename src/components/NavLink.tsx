import Link from "next/link";

type NavLinkProps = {
    title: string,
    href: string,
    onClose?: () => void
}

const NavLink = ({ title = '', href = '', onClose = () => {} }: NavLinkProps) => {
    return <Link onClick={onClose} href={href} className='hover:bg-slate-700 px-4 py-2 rounded-lg transition duration-150 ease-in uppercase font-medium'>{title}</Link>
}

export default NavLink;
