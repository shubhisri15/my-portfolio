import ProjectTile from "@/components/ProjectTile";

export default function ProjectPage() {
    return (
        <div>
            <div className='grid grid-cols-3 gap-8 justify-items-center p-4 box-border items-center'>
                <ProjectTile title='Ahoy Love' figma='' id='1' github=''/>
                <ProjectTile title='Trailcraft' figma='' id='2' github=''/>
                <ProjectTile title='75 hard tracker' figma='' id='3' github=''/>
                <ProjectTile title='Powerlifting site' figma='' id='4' github=''/>
                <ProjectTile title='Component Library' figma='' id='5' github=''/>
                <ProjectTile title='ShuBuzzFeed' figma='' id='6' github=''/>
            </div>    
        </div>
    )
}