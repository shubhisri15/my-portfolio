import ProjectTile from "@/components/ProjectTile";

export default function ProjectPage() {
    return (
        <main className='flex justify-center'>
            <div className='flex flex-col gap-8 p-4 w-2/3 items-center'>
                <ProjectTile title='Ahoy Love' caseStudy='/projects/case-studies/ahoylove' github='https://github.com/shubhisri15/ahoylove' overview="AhoyLove is a multi-platform product designed to make life easier for people in long distance relationships with maritime officers." />
                <h1 className='font-light text-5xl text-gray-500'>More projects coming soon..</h1>
            </div>    
        </main>
    )
}