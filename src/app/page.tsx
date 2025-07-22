import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from 'next/image';
import profilePic from '../../public/profile-img.png'
import ScrollingTicker from "@/components/ScrollingTicker";

export default function Home() {
  return (
      <main className='flex justify-between gap-12 items-center py-8'>
        <div className='flex flex-col gap-8 overflow-hidden basis-1/2'>
          <h1 className='text-7xl uppercase font-extrabold'>Shubhi <span className='text-gray-500'>Srivastava</span></h1>
          <div className='flex flex-col gap-2'>
            <p className='text-3xl'>Frontend Engineer | UX Designer</p>
            <p>I’m an engineer who blends clean code with thoughtful design, to build intuitive, performant interfaces that put users first.</p>
          </div>
          <div className='flex gap-4 my-4'>
            <Link href='https://www.linkedin.com/in/shubhisrivastava15/' target="_blank"><FaLinkedin size='2rem' className='hover:fill-gray-600'/></Link>
            <Link href='https://github.com/shubhisri15' target="_blank"><FaGithub size='2rem' className='hover:fill-gray-600'/></Link>
          </div>
          <ScrollingTicker />
        </div>   
        <div>
          <Image src={profilePic} alt='Shubhi profile picture' width={700} className="opacity-80 h-auto"/>
        </div>
      </main>
  );
}
