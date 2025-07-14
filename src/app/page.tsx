import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from 'next/image';
import profilePic from '../../public/profile-img.png'

export default function Home() {
  return (
    <main className='flex px-12 mt-12 gap-4 items-center min-h-screen'>
      <div className='flex flex-col gap-8'>
        <h1 className='text-8xl'>Shubhi Srivastava</h1>
        <div className='flex flex-col gap-2'>
          <p className='text-3xl'>Frontend Engineer | UX Designer</p>
          <p>I’m an engineer who blends clean code with thoughtful design, to build intuitive, performant interfaces that put users first.</p>
        </div>
        <div className='flex gap-4 my-4'>
          <Link href='https://www.linkedin.com/in/shubhisrivastava15/'><FaLinkedin size='2rem' className='hover:fill-gray-600'/></Link>
          <Link href='https://github.com/shubhisri15'><FaGithub size='2rem' className='hover:fill-gray-600'/></Link>
        </div>
      </div>   
      <div>
        <Image src={profilePic} alt='Shubhi profile picture' width={800} height={800} className="opacity-80"/>
      </div>
    </main>
  );
}
