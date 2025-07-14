export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className='bg-black w-full text-center text-white py-4'>
            <p>©{currentYear} All Rights Reserved.</p>
        </footer>
    )
}