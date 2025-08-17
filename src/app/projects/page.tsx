import ProjectTile from "@/components/ProjectTile";
import { notoSerif } from "../fonts/noto-serif";

export default function ProjectPage() {
    return (
        <main className='flex flex-col items-center min-h-screen w-full overflow-hidden'>

            <h1 className={`text-6xl py-12 font-light ${notoSerif.className}`}>Case Studies</h1>
            <div className='flex flex-col md:flex-row gap-12 p-4 px-12 md:flex-wrap md:justify-center items-center'>
                <ProjectTile 
                    title='Ahoy Love' 
                    caseStudy='/projects/case-studies/ahoylove' 
                    github='https://github.com/shubhisri15/ahoylove' 
                    overview="AhoyLove is a multi-platform product designed to make life easier for people in long distance relationships with maritime officers." 
                />
                <ProjectTile 
                    title="Shubhi's Buzzfeed"
                    externalLink={true}
                    caseStudy='https://shubhis-buzzfeed.netlify.app/' 
                    github='https://github.com/shubhisri15/shubhi-buzzfeed' 
                    overview="A collection of mini buzzfeed style games built using React. Go play!" 
                />
                {/* {<ProjectTile 
                    title='Ovua' 
                    caseStudy='/projects/case-studies/ovua' 
                    github='' 
                    overview="A Holistic PCOS Tracker for the busy modern working woman. [Case study TBA]" 
                />} */}
                <ProjectTile 
                    title='Statuspage JSM Integration' 
                    caseStudy='https://support.atlassian.com/statuspage/docs/set-up-a-jira-service-management-integration/' 
                    github='' 
                    overview="Building a first-party integration between JSM and Statuspage for Incident Management. [Case study TBA]" 
                />
                {/* {<ProjectTile 
                    title='75 Hard Tracker' 
                    caseStudy='/projects/case-studies/75-hard' 
                    github='' 
                    overview="A mobile app tracker for the popular 75 hard personal development challenge with detailed analytics. [Case study TBA]" 
                />} */}
            </div> 
        </main>
    )
}