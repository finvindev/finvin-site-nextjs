import Link from "next/link";

export default function ResourceCenter() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-sky-400 to-blue-400 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="mb-8">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                Our IBBI Recognition No. IBBI/IPE/0159
              </span>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your gateway to comprehensive insolvency and bankruptcy
              frameworks. Access official documents, regulations, and guidelines
              from the Insolvency and Bankruptcy Board of India.
            </p>
            <div className="mt-8">
              <p className="text-lg text-blue-100 italic">
                "Empowering stakeholders with authoritative legal resources and
                regulatory insights"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* IBBI Acts */}
          <a
            href="https://ibbi.gov.in/en/legal-framework/act"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-sky-400 group-hover:border-sky-600">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-sky-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                    IBBI Acts
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Legal framework and regulations
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* IBBI Rules */}
          <a
            href="https://ibbi.gov.in/en/legal-framework/rules"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-sky-400 group-hover:border-sky-600">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-sky-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                    IBBI Rules
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Operational rules and procedures
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* IBBI Regulations */}
          <a
            href="https://ibbi.gov.in/en/legal-framework/updated"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-sky-400 group-hover:border-sky-600">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-sky-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                    IBBI Regulations
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Updated regulatory framework
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* IBBI Circulars */}
          <a
            href="https://ibbi.gov.in/en/legal-framework/circulars"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-sky-400 group-hover:border-sky-600">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-sky-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                    IBBI Circulars
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Official communications and updates
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* IBBI Notifications */}
          <a
            href="https://ibbi.gov.in/en/legal-framework/notifications"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-sky-400 group-hover:border-sky-600">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-sky-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                    IBBI Notifications
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Important announcements and updates
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* IBBI Facilitations */}
          <a
            href="https://ibbi.gov.in/en/legal-framework/facilitation"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-sky-400 group-hover:border-sky-600">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-sky-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                    IBBI Facilitations
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Support and assistance programs
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* IBBI Guidelines */}
          <a
            href="https://ibbi.gov.in/en/legal-framework/guidelines"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-sky-400 group-hover:border-sky-600">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-sky-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                    IBBI Guidelines
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Best practices and procedures
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* IBBI by Other Authorities */}
          <a
            href="https://ibbi.gov.in/en/legal-framework/other-authorities"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-sky-400 group-hover:border-sky-600">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-sky-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                    IBBI by Other Authorities
                  </h3>
                  <p className="text-gray-600 text-sm">
                    External regulatory references
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
