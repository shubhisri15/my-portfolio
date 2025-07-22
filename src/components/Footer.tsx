export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className='bg-black w-full flex align-center justify-between text-white py-4 px-12'>
            <p className='text-sm'>©{currentYear} Shubhi Srivastava. All Rights Reserved.</p>
            <p className='text-sm'>View portfolio source code</p>
        </footer>
    )
}