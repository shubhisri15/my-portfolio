import { notoSerif } from '@/app/fonts/noto-serif';

type CaseStudyHeaderProps = {
    product: string,
    timeline: string,
    role: string
}

export default function CaseStudyHeader({ product, timeline, role }: CaseStudyHeaderProps) {
    return (
        <section className='bg-[#1E2E54] flex items-stretch justify-between rounded-lg my-8'>
            <div className='flex flex-col items-center text-center gap-4 p-8 border-r-1 border-slate-600 basis-1/3'>
                <h1 className={`${notoSerif.className} text-2xl`}>Product</h1>
                <p >{product}</p>
            </div>
            <div className='flex flex-col items-center text-center gap-4 p-8 border-r-1 border-slate-600 basis-1/3'>
                <h1 className={`${notoSerif.className} text-2xl`}>Timeline</h1>
                <p className='flex-1'>{timeline}</p>
            </div>
            <div className='flex flex-col items-center text-center gap-4 p-8 basis-1/3'>
                <h1 className={`${notoSerif.className} text-2xl`}>Role</h1>
                <p className='flex-1'>{role}</p>
            </div>
        </section>
    )
}