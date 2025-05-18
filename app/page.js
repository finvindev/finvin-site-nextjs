import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-sky-400 to-blue-400 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming Distressed Assets into Opportunities
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner in NPA resolution and distressed asset
              management
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Link
                href="/contact-us"
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/what-we-do"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Finvin Advantage Section */}
      <section className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">
              <span className="border-b-2 border-blue-900 pb-2">
                The Finvin Advantage
              </span>
            </h3>
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-12 text-center">
              Comprehensive solution for distressed assets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-blue-50 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Expertise
                </h3>
                <p className="text-gray-700">
                  Deep understanding of distressed assets and NPA resolution
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-indigo-50 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-indigo-800 mb-4">
                  Experience
                </h3>
                <p className="text-gray-700">
                  Over ₹100 billion in debt resolved across India
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-blue-50 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Innovation
                </h3>
                <p className="text-gray-700">
                  Cutting-edge solutions for modern financial challenges
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Overview */}
      <section className="w-full max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What We Do */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between border-t-4 border-blue-600 hover:shadow-xl transition-shadow">
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                What We Do
              </h2>
              <p className="text-gray-700 mb-6">
                Distressed asset solutions, advisory, portfolio sales,
                insolvency support, and real estate monetization through
                Estatedeal.in.
              </p>
            </div>
            <Link
              href="/what-we-do"
              className="text-blue-700 font-semibold hover:text-blue-900 transition-colors inline-flex items-center"
            >
              Learn more
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          {/* Who We Are */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between border-t-4 border-green-600 hover:shadow-xl transition-shadow">
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-700 mb-6">
                Founded by Mohit Agarwal, Finvin is led by a team of experienced
                professionals from diverse backgrounds in finance, law, and
                distressed asset management.
              </p>
            </div>
            <Link
              href="/who-we-are"
              className="text-green-700 font-semibold hover:text-green-900 transition-colors inline-flex items-center"
            >
              Meet our team
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          {/* Resource Center */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between border-t-4 border-yellow-500 hover:shadow-xl transition-shadow">
            <div>
              <h2 className="text-2xl font-bold text-yellow-700 mb-4">
                Resource Center
              </h2>
              <p className="text-gray-700 mb-6">
                Explore insights, articles, and updates on NPAs, insolvency, and
                asset recovery from our experts.
              </p>
            </div>
            <Link
              href="/resource-center"
              className="text-yellow-700 font-semibold hover:text-yellow-900 transition-colors inline-flex items-center"
            >
              Visit Resource Center
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          {/* Contact Us */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between border-t-4 border-purple-600 hover:shadow-xl transition-shadow">
            <div>
              <h2 className="text-2xl font-bold text-purple-800 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-6">
                Get in touch to discuss your requirements or learn how Finvin
                can help resolve your stressed assets.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="text-purple-700 font-semibold hover:text-purple-900 transition-colors inline-flex items-center"
            >
              Contact us
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
