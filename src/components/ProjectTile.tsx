'use client'

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { notoSerif } from "@/app/fonts/noto-serif";
import NavLink from "./NavLink";

type ProjectTileProps = {
    title: string;
    overview?: string;
    caseStudy: string;
    github: string;
}

export default function ProjectTile({ title, overview = '', github, caseStudy }: ProjectTileProps) {

    return (
  <section className='relative w-2/5 rounded-2xl overflow-hidden
      bg-gray-300/10 border border-white/20 backdrop-blur-xl shadow-xl transition-all duration-300 
      hover:scale-100 hover:-translate-y-1 hover:shadow-[0_0_32px_0_rgba(0,179,255,0.22)] fadeInUp delay-100 cursor-default'>
    
    {/* Glowy Orb Backgrounds */}
    <span className="pointer-events-none absolute -top-12 -left-12 w-48 h-48 bg-blue-500/10 blur-2xl rounded-full" />
    <span className="pointer-events-none absolute -bottom-10 -right-10 w-32 h-32 bg-teal-500/10 blur-2xl rounded-full" />
    
    <div className='flex justify-between px-12 py-6 gap-4 relative z-10'>
      <div className='w-2/3'>
        <h2 className={`pt-2 font-light text-4xl mb-4 ${notoSerif.className}`}>
          {title}
        </h2>
        <p className="text-slate-200">{overview}</p>
      </div>
      <div className='w-48 h-36 bg-gradient-to-tr from-blue-300/30 to-cyan-100/10 rounded-sm my-4 border-1 border-gray-500' />
    </div>
    <div className="flex justify-between items-center px-12 py-4 relative z-10">
      <Link href={github} target="_blank">
        <FaGithub size='2rem' className='hover:fill-slate-200 hover:drop-shadow-[0_0_4px_rgba(0,179,255,0.55)] transition-all'/>
      </Link>
      <div>
        <button className='py-2 px-4 text-white hover:bg-gray-600/30 cursor-pointer rounded-lg mr-2 transition'>
          Live Prototype
        </button>
        <NavLink href={caseStudy} title='View Case Study'/>
      </div>
    </div>
  </section>
)

}