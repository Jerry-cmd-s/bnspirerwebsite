import Header from "components/Header";
import Footer from "components/Footer";


export default function Blog() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12 mt-20 max-w-2xl text-center animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          What is Bnspirer?
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Bnspirer is an AI-powered app designed to help aspiring entrepreneurs discover the perfect business idea, generate a Bnspirer-tailored business plan, and follow a step-by-step action roadmap to launch it—all in one place.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-8">
          The Bnspirer app is like having a personal startup mentor in your pocket.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mt-8 mb-4">
          🧠 How Bnspirer Works
        </h2>
        <div className="space-y-6 text-left">
          <div>
            <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2 text-center">
              1. Discover the Right Business Idea with Bnspirer
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Users answer a few questions about their interests, skills, startup budget, available time, and preferred industries (optional). Bnspirer’s AI then suggests tailored business ideas—whether it’s a side hustle, digital product, service, or full-scale startup.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2 text-center">
              2. Generate a Full Business Plan with Bnspirer
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Once a user selects an idea, the Bnspirer app generates a comprehensive business plan, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2 space-y-1">
              <li>Bnspirer’s Executive Summary</li>
              <li>Bnspirer Market & Competitor Analysis</li>
              <li>Bnspirer Revenue Model</li>
              <li>Bnspirer Target Audience Persona</li>
              <li>Bnspirer Marketing & Sales Strategy</li>
              <li>Bnspirer Startup Costs & Tools Needed</li>
              <li>And more...</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Users can edit or regenerate any section for a personalized Bnspirer plan.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2 text-center">
              3. Bnspirer’s Launch Mode: Step-by-Step Action Plan
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              When users click “Start,” Bnspirer’s Launch Mode:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2 space-y-1">
              <li>Breaks the Bnspirer business plan into a day-by-day or week-by-week action plan</li>
              <li>Tracks progress through Bnspirer checklists</li>
              <li>Offers Bnspirer reminders, resources, and tools</li>
              <li>Gives Bnspirer motivational nudges along the way</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Bnspirer’s Launch Mode helps users move from idea to execution with clarity and confidence.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mt-10 mb-4">
          🤖 Bnspirer Key Features (Current & Future)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-600 dark:text-gray-400 mx-auto">
            <thead>
              <tr className="border-b dark:border-gray-700">
                <th className="py-2">Bnspirer Feature</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="py-2">Bnspirer AI-Powered Business Idea Finder</td>
                <td className="py-2">✅ In Progress</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="py-2">Bnspirer Auto-Generated Business Plans</td>
                <td className="py-2">✅ Planned</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="py-2">Bnspirer Step-by-Step Launch Action Plans</td>
                <td className="py-2">✅ Planned</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="py-2">Bnspirer Save & Resume Sessions</td>
                <td className="py-2">🛠 In Dev</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="py-2">Bnspirer Business Idea Quiz / Wizard</td>
                <td className="py-2">🛠 In Dev</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="py-2">Bnspirer Multi-Idea Exploration Support</td>
                <td className="py-2">🛠 Future</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="py-2">Bnspirer Accountability & Reminders</td>
                <td className="py-2">🛠 Future</td>
              </tr>
              <tr>
                <td className="py-2">Bnspirer Community or Mentor Access</td>
                <td className="py-2">🚧 Later Phase</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mt-10 mb-4">
          💡 Bnspirer’s Vision
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Bnspirer is more than a tool—it’s a business-launch accelerator for everyday people. With Bnspirer, side hustlers, full-time dreamers, and anyone with a passion can turn their ideas into a business with minimal friction, thanks to Bnspirer’s AI guidance and structure.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mt-10 mb-4">
          🌱 Who Bnspirer Is For
        </h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 mx-auto max-w-md">
          <li>Bnspirer for Aspiring Entrepreneurs</li>
          <li>Bnspirer for Students Exploring Startup Ideas</li>
          <li>Bnspirer for 9–5 Workers Seeking a Side Hustle</li>
          <li>Bnspirer for Creators Looking to Monetize</li>
          <li>Bnspirer for People with Passion but No Plan</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
  
}