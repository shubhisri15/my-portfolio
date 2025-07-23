import ProjectTile from "@/components/ProjectTile";
import { notoSerif } from "../fonts/noto-serif";

export default function ProjectPage() {
    return (
        <main className='flex flex-col items-center min-h-screen'>

            <h1 className={`text-6xl py-12 font-light ${notoSerif.className}`}>Case Studies</h1>
            <div className='flex gap-12 p-4 flex-wrap justify-center'>
                <ProjectTile 
                    title='Ahoy Love' 
                    caseStudy='/projects/case-studies/ahoylove' 
                    github='https://github.com/shubhisri15/ahoylove' 
                    overview="AhoyLove is a multi-platform product designed to make life easier for people in long distance relationships with maritime officers." 
                />
                <ProjectTile 
                    title='Ovua' 
                    caseStudy='/projects/case-studies/ovua' 
                    github='' 
                    overview="A Holistic PCOS Tracker for the busy modern working woman. [Case study TBA]" 
                />
                <ProjectTile 
                    title='Statuspage JSM Integration' 
                    caseStudy='/projects/case-studies/statuspage-jsm' 
                    github='' 
                    overview="Building a first-party integration between JSM and Statuspage for Incident Management. [Case study TBA]" 
                />
                <ProjectTile 
                    title='75 Hard Tracker' 
                    caseStudy='/projects/case-studies/75-hard' 
                    github='' 
                    overview="A mobile app tracker for the popular 75 hard personal development challenge with detailed analytics. [Case study TBA]" 
                />
            </div>
            <h1 className='font-light text-3xl text-gray-500 mt-8'>More projects coming soon..</h1>   
        </main>
    )
}