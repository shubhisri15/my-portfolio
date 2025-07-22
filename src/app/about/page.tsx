// Inside your Next.js site, e.g., components/AboutSection.jsx

export default function AboutSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 text-left mb-8">
      <h2 className="text-4xl font-bold mb-8 text-indigo-600">Hi there, stalker 👀</h2>

      <div className="space-y-6 text-lg leading-relaxed text-gray-800">
        <p>
          Let me make the stalking easier for you.
        </p>

        <p>
          I began my career as a Software Engineer at Atlassian India LLP, working on SaaS products in the ITSM suite. Over 4 years, I worked with cross-functional teams, picked up new tools and ways of working, and honestly — found it all way more refreshing than DSA.
        </p>

        <p>
          The coolest part? As I grew into a Full Stack Engineer, I found myself drawn to the frontend — crafting clean, intuitive interfaces and thinking deeply about the user behind the screen. "5 Whys" wasn't just a process anymore, it became instinct.
        </p>

        <p>
          I started owning frontend-heavy features, focusing on accessibility, interaction design, and performance. Outside work, I doubled down on UI/UX and visual storytelling — blending code and creativity to build interfaces that feel effortless.
        </p>

        <p>
          Fast forward to today, I'm a UX designer and frontend developer who's spent the last few months bringing her eccentric ideas to life — crafting responsive, user-centric experiences that balance form and function.
        </p>

        <p>
          I thrive on projects where I get to push pixels, fine-tune interactions, and bring delight to every touchpoint. So if you think what I bring to the table is what you are looking for, let's chat over coffee!
        </p>
        </div>

      <a
        href="https://www.linkedin.com/in/shubhisrivastava15/"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition mt-8"
      >
        Let's chat over coffee
      </a>
    </section>
  );
}
