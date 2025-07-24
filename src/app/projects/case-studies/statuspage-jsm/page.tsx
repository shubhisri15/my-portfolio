import { notoSerif } from "@/app/fonts/noto-serif";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import CaseStudyTLDR from "@/components/CaseStudyTLDR";

export default function StatuspageJSMCaseStudy() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12 text-gray-300">
            <h1 className={`text-6xl font-light ${notoSerif.className} mb-4 mt-8`}>Statuspage - JSM First Party Integration</h1>
            <p className={`text-xl mb-10 text-gray-400 ${notoSerif.className}`}>
                A first-party integration between JSM and Statuspage for seamless Incident Management without switching UIs.
            </p>
        
            <CaseStudyHeader 
                product='Enterprise SaaS webapp feature'
                timeline='6 weeks'
                role='Fullstack Developer, interim UX Designer.'
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