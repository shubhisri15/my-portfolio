'use client'

import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import NavLink from "./NavLink";

type ProjectTileProps = {
    title: string;
    overview?: string;
    caseStudy: string;
    github: string;
}

export default function ProjectTile({ title, overview = '', github, caseStudy }: ProjectTileProps) {

    return (
            <section className='w-full border-1 border-gray-300 bg-gray-50 flex flex-col' >
                <div className='flex justify-between px-12 py-6'>
                    <div className='w-2/3'>
                        <h2 className='pt-2 font-bold text-3xl mb-4'>{title}</h2>
                        <p>{overview}</p>
                    </div>
                    <div className='w-120 h-40 bg-red-100 my-4'></div>
                </div>
                <div className="flex justify-between px-12 py-4">
                    <div className='flex gap-4'>
                        <Link href='#' target="_blank"><FaGithub size='2rem' className='hover:fill-gray-600'/></Link>
                        <Link href='#' target="_blank"><IoLogoFigma size='2rem' className='hover:fill-gray-600'/></Link>
                    </div>
                    <NavLink href={caseStudy} title='View Case Study'/>
                </div>
            </section>
    )
}