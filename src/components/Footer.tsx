import Link from "next/link"

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className='bg-black w-full flex align-center justify-between text-white py-4 md:px-12 px-4'>
            <p className='md:text-sm text-xs'>Copyright © {currentYear} Shubhi Srivastava.</p>
            <Link href='https://github.com/shubhisri15/my-portfolio' className='md:text-sm text-xs' target="_blank">View portfolio source code</Link>
        </footer>
    )
}