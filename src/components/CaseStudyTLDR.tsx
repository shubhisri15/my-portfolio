import { notoSerif } from "@/app/fonts/noto-serif"

type CaseStudyTLDRProps = {
    problem: string,
    solution: string,
    impact: string,
    prototype: string,
    nextSectionId: string
}

export default function CaseStudyTLDR({ problem, solution, impact, prototype, nextSectionId }: CaseStudyTLDRProps ) {
   return (
        <section className='bg-gray-700/50 rounded-lg p-8 mb-8 text-gray-200'>
            <div className='flex justify-between mb-6 items-center'>
                <h1 className={`${notoSerif.className} text-2xl`}>TL;DR (If you only have 30 seconds)</h1>
                <a href={`#${nextSectionId}`} className='underline text-sm'>Skip to next section</a>
            </div>
            <div className='flex flex-col gap-6'>
                <div>
                    <h3 className='text-lg'>The Problem:</h3>
                    <p className='text-gray-400'>{problem}</p>
                </div>
                <div>
                    <h3 className='text-lg'>The Solution:</h3>
                    <p className='text-gray-400'>{solution}</p>
                </div>
                <div>
                    <h3 className='text-lg'>The Impact:</h3>
                    <p className='text-gray-400'>{impact}</p>
                </div>
                <div>
                    <h3 className='text-lg'>Live Prototype:</h3>
                    <p className='text-gray-400'>{prototype}</p>
                </div>
            </div>
        </section>
    )
}