import { notoSerif } from "@/app/fonts/noto-serif"
import { ReactNode } from "react"

export default function CaseStudyStory({ children, nextSectionId, currentSectionId = '' }: { children: ReactNode, nextSectionId: string, currentSectionId?: string } ) {
    return (
        <section id={currentSectionId} className='bg-gray-700/50 rounded-lg p-8 mb-8 text-gray-200 scroll-mt-24'>
            <div className='flex justify-between mb-4 items-center'>
                <h1 className={`${notoSerif.className} text-2xl`}>Story Time</h1>
                <a href={`#${nextSectionId}`} className='underline text-sm'>Skip to next section</a>
            </div>
            <div className='flex flex-col gap-4 text-base/7 text-gray-400'>
                {children}
            </div>
        </section>
    )
}