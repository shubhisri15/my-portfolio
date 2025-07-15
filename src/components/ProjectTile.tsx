import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";

type ProjectTileProps = {
    title: string;
    figma: string;
    github: string;
    id: string;

}

export default function ProjectTile({ title, github, figma, id }: ProjectTileProps) {
    return (
        <section className='h-90 w-135 box-border flex items-center justify-center'>
            <section className='h-80 w-120 border-1 border-gray-300 bg-gray-50 relative'>
                <h2 className='w-full text-center pt-2 font-bold'>{title}</h2>
                <div className='flex gap-2 absolute bottom-2 left-2'>
                    <Link href='#' target="_blank"><FaGithub size='2rem' className='hover:fill-gray-600'/></Link>
                    <Link href='#' target="_blank"><IoLogoFigma size='2rem' className='hover:fill-gray-600'/></Link>
                </div>
                <Link href={`/projects/${id}`} target="_blank" className="px-4 py-2 rounded-md bg-gray-800 text-white absolute bottom-2 right-2">View Details</Link>
            </section>
        </section>
    )
}