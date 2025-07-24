import { notoSerif } from '@/app/fonts/noto-serif';
import CaseStudyHeader from '@/components/CaseStudyHeader';
import CaseStudyTLDR from '@/components/CaseStudyTLDR';

export default function OvuaCaseStudy() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12 text-gray-300">
            <h1 className={`text-6xl font-light ${notoSerif.className} mb-4 mt-8`}>Ovua</h1>
            <p className={`text-xl mb-10 text-gray-400 ${notoSerif.className}`}>
                Helping the modern woman navigate her hormones without disrupting her ambitions.
            </p>

            <CaseStudyHeader 
                product='Mobile app'
                timeline='4 weeks'
                role='UX + UI Designer, Researcher, Strategist, Developer.'
            />
            
            <CaseStudyTLDR 
                problem=''
                solution=''
                impact=''
                prototype='TBA'
                nextSectionId=''
            />

            <p>More details TBA (this site is still a WIP with atomic commits being pushed everyday. Please bear with me!)</p>
        </main>
    )
}