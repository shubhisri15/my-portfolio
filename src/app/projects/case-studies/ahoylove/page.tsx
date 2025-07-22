import Head from 'next/head';

export default function AhoyLoveCaseStudy() {
  return (
    <>
      <Head>
        <title>AhoyLove - UX Case Study | Shubhi Srivastava</title>
        <meta
          name="description"
          content="A UX case study of AhoyLove — a tool for long-distance maritime couples to stay emotionally connected across oceans."
        />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-4">AhoyLove</h1>
        <p className="text-xl mb-10 text-gray-600">
          Navigating love across oceans — a UX case study for long-distance maritime couples.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">📌 Overview</h2>
          <p>
            AhoyLove is a multi-platform product designed for people in relationships with maritime officers.
            With features like ambient ship tracking, timezone sync, and timestamped love notes, it helps
            bridge emotional distance during long periods apart.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🎯 Role & Timeline</h2>
          <ul className="list-disc pl-5">
            <li>Role: UX & Product Designer, Frontend Developer</li>
            <li>Team: Solo project (mentored by senior UX leads)</li>
            <li>Timeline: 4 weeks (May 2025 to June 2025)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">💡 The Problem</h2>
          <p>
            Maritime relationships often suffer from emotional disconnect due to inconsistent communication,
            timezone mismatch, and a lack of ambient presence. Traditional chat apps aren't designed for this
            context.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🧠 Research Insights</h2>
          <ul className="list-disc pl-5">
            <li>80% of maritime workers are in long-term relationships</li>
            <li>Average contracts last 4-9 months with limited WiFi access</li>
            <li>Partners report 47% higher emotional stress during separations</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">✨ The Solution</h2>
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
          <h2 className="text-2xl font-semibold mb-2">📱 User Flows</h2>
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
          <h2 className="text-2xl font-semibold mb-2">🛠 Tech Stack</h2>
          <ul className="list-disc pl-5">
            <li>Frontend: React (Web), React Native (Mobile)</li>
            <li>Backend: FastAPI + PostgreSQL</li>
            <li>Ship tracking via MarineTraffic API</li>
            <li>Deployed with Vercel + Firebase</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">📈 Placeholder Metrics</h2>
          <ul className="list-disc pl-5">
            <li>Onboarding completion: 86%</li>
            <li>Daily active users (DAU/MAU): 0.42</li>
            <li>Milestone engagement: 63%</li>
            <li>Emotional connectedness score: +1.6↑</li>
          </ul>
          <p className="text-sm text-gray-500 mt-2">*All metrics based on user testing simulations.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">💬 What I Learned</h2>
          <p>
            Building for emotional connection requires a different lens than building for functionality.
            I learned the importance of designing for “presence,” not just communication. User feedback
            helped me simplify, slow down UI rhythms, and add more human warmth to the product.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-2">🚀 Next Steps</h2>
          <ul className="list-disc pl-5">
            <li>Launch mobile MVP</li>
            <li>Conduct usability studies with 10+ real couples</li>
            <li>Test freemium model and feedback-driven monetization</li>
          </ul>
        </section>
      </main>
    </>
  );
}
