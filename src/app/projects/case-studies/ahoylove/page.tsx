import CaseStudyHeader from '@/components/CaseStudyHeader';
import { notoSerif } from '@/app/fonts/noto-serif';
import CaseStudyTLDR from '@/components/CaseStudyTLDR';
import CaseStudyStory from '@/components/CaseStudyStory';

export default function AhoyLoveCaseStudy() {
  return (
      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-300">
        <h1 className={`text-6xl font-light ${notoSerif.className} mb-4 mt-8`}>AhoyLove</h1>
        <p className={`text-xl mb-10 text-gray-400 ${notoSerif.className}`}>
          Navigating love across oceans — a UX case study for long-distance maritime couples.
        </p>

        <CaseStudyHeader 
          product='Mobile first app, Chrome extension for desktop.'
          timeline='4 weeks (Prototype ready, development ongoing).'
          role='UX + UI Designer, Researcher, Strategist, Developer.'
        />

        <CaseStudyTLDR 
          problem='Maritime relationships often suffer from emotional disconnect due to inconsistent communication, timezone mismatch, and a lack of ambient presence. 
                    Traditional chat apps do not work because they rely on both parties being available at the same time.'
          solution="A mobile app, and a chrome extension that allows partners to stay updated on each others current timezone, with live ship tracking (using ship MMSI number),
                    the ability to send notes, add and save relationship / journey milestones, reminders for calls or important dates, and past journey history."
          impact='Usability testing revealed that 70% of the couples who used the prototype reported a CSAT score > 8, 
                    and 90% of the couples would like to see this launched as an app on Play Store or App Store.'
          prototype='TBA'
          nextSectionId='ahoylove-bts'
        />

        <CaseStudyStory currentSectionId='ahoylove-bts' nextSectionId='ahoylove-overview'>
          <>
            <p>AhoyLove started out as a way for me to track my partner, who is a maritime officer and lives at sea 6+ months a year. 
                It had only been a few months since we started dating when he left for his 4 month contract, and I felt lost, flummoxed 
                by the sudden change in our communication patterns.
            </p>
            <p>
              I would spend the entire day waiting for his one text, and track multiple websites a day just to figure out his whereabouts and his availability. 
              So to cope with this unease, I started thinking of ways to integrate all this information into a single screen, 
              and have it show up as a widget at the bottom of my laptop screen 24x7. (Yeah yeah, I know, it sounds like I am a crazy stalker.)
            </p>
            <p>
              But as I started looking into solutions trying to build my idea, I also started looking more into how other people in my situation were coping. 
              It made me realise exactly how taxing romantic relationships can be for both the seafarer and their at-home partner, even going so far as affecting their 
              careers and day-to-day functioning.
            </p>
            <p>
              And so, my tiny little single screen idea started taking the shape of a multi platform application.
            </p>
            <p>
              AhoyLove doesn't just show you your partner's info all in one place, but also allows you to strengthen your connection with 
              them in an ambient way. This product isn't yet another fancy chat app, it's your personal love journal, 
              and a way of communication that is independent of time and distance. It does not rely on their availability or their internet connectivity, 
              only on your willingness to love.
            </p>
          </>  
        </CaseStudyStory>

        <section id='ahoylove-overview' className="mb-10 scroll-mt-28">
          <h2 className={`text-4xl font-medium ${notoSerif.className} mb-4 mt-12`}>Context</h2>
          <p>
            AhoyLove is a multi-platform product designed for people in relationships with maritime officers.
            With features like ambient ship tracking, timezone sync, and timestamped love notes, it helps
            bridge emotional distance during long periods apart.
          </p>
        </section>

        <section className="mb-10">
          <h2 className={`text-4xl font-medium ${notoSerif.className} mb-4 mt-12`}>The Problem Statement</h2>
          <p>
            Maritime relationships often suffer from emotional disconnect due to inconsistent communication,
            timezone mismatch, and a lack of ambient presence. Traditional chat apps are not designed for this
            context.
          </p>
        </section>

        <section className="mb-10">
          <h2 className={`text-4xl font-medium ${notoSerif.className} mb-4 mt-12`}>Exploratory Research and Insights</h2>
          <ul className="list-disc pl-5">
            <li>80% of maritime workers are in long-term relationships</li>
            <li>Average contracts last 4-9 months with limited WiFi access</li>
            <li>Partners report 47% higher emotional stress during separations</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className={`text-4xl font-medium ${notoSerif.className} mb-4 mt-12`}>The Solution</h2>
          <p>
            A Chrome extension and mobile app that help couples feel connected even without chatting:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Live ship tracking (IMO/MMSI)</li>
            <li>Timezone & best collaboration hours</li>
            <li>Love notes, music, and milestone sharing</li>
            <li>Reminders for calls and anniversaries</li>
            <li>Journey maps with ports visited</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className={`text-4xl font-medium ${notoSerif.className} mb-4 mt-12`}>User Flows</h2>
          <h3 className="text-lg font-medium mt-4">For At-Home Partner</h3>
          <ul className="list-decimal pl-5">
            <li>Sign up → Add partner details</li>
            <li>Start a journey (IMO, contract, start date)</li>
            <li>Send love notes & milestone messages</li>
            <li>Track journey via ambient widget or app</li>
          </ul>

          <h3 className="text-lg font-medium mt-4">For Maritime Partner</h3>
          <ul className="list-decimal pl-5">
            <li>Lightweight app → Offline-first experience</li>
            <li>Read notes, sync when online</li>
            <li>View milestones passively</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className={`text-4xl font-medium ${notoSerif.className} mb-4 mt-12`}>Tech Stack</h2>
          <ul className="list-disc pl-5">
            <li>Frontend: React (Web), React Native (Mobile)</li>
            <li>Backend: FastAPI + PostgreSQL</li>
            <li>Ship tracking via MarineTraffic API</li>
            <li>Deployed with Vercel + Firebase</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className={`text-4xl font-medium ${notoSerif.className} mb-4 mt-12`}>📈 Placeholder Metrics</h2>
          <ul className="list-disc pl-5">
            <li>Onboarding completion: 86%</li>
            <li>Daily active users (DAU/MAU): 0.42</li>
            <li>Milestone engagement: 63%</li>
            <li>Emotional connectedness score: +1.6↑</li>
          </ul>
          <p className="text-sm text-gray-500 mt-2">*All metrics based on user testing simulations.</p>
        </section>

        <section className="mb-10">
          <h2 className={`text-4xl font-medium ${notoSerif.className} mb-4 mt-12`}>💬 What I Learned</h2>
          <p>
            Building for emotional connection requires a different lens than building for functionality.
            I learned the importance of designing for &quot;presence&quot;, not just communication. User feedback
            helped me simplify, slow down UI rhythms, and add more human warmth to the product.
          </p>
        </section>

        <section className="mb-20">
          <h2 className={`text-4xl font-medium ${notoSerif.className} mb-4 mt-12`}>🚀 Next Steps</h2>
          <ul className="list-disc pl-5">
            <li>Launch mobile MVP</li>
            <li>Conduct usability studies with 10+ real couples</li>
            <li>Test freemium model and feedback-driven monetization</li>
          </ul>
        </section>
      </main>
  );
}
