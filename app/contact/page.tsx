import Header from "components/Header";

export const metadata = {
    title: 'Contact Bnspirer - Reach Out to Our Team',
    description: 'Contact Bnspirer via our classic form or email info@bnspirer.com. Get support for your startup journey with our AI-powered tools.',
    keywords: 'Bnspirer, contact Bnspirer, info@bnspirer.com, entrepreneur support, startup app',
  };
  
  export default function Contact() {
    return (
      <div className="bg-white dark:bg-black min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-12 mt-20 max-w-2xl text-center animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Contact Bnspirer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Got questions about Bnspirer or need help with your startup? Use our classic Bnspirer contact form or email us directly to connect with the Bnspirer team.
          </p>
  
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
            Send Bnspirer a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-600 dark:text-gray-400 text-left mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 dark:text-gray-400 text-left mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-600 dark:text-gray-400 text-left mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
                rows={5}
                placeholder="Your Message to Bnspirer"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors w-full sm:w-auto"
            >
              Send to Bnspirer
            </button>
          </form>
  
          <p className="text-gray-600 dark:text-gray-400 mt-8">
            Prefer email? Reach out to Bnspirer at{' '}
            <a
              href="mailto:info@bnspirer.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              info@bnspirer.com
            </a>
          </p>
  
          <div className="mt-10">
            <a
              href="/signup"
              className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              Join Bnspirer Today
            </a>
          </div>
        </main>
      </div>
    );
  }