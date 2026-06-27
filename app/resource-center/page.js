const resources = [
  {
    href: "https://ibbi.gov.in/en/legal-framework/act",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    label: "IBBI Acts",
    description: "The Insolvency and Bankruptcy Code and allied legislation",
    color: "#2563eb",
    bg: "#eff6ff",
  },
  {
    href: "https://ibbi.gov.in/en/legal-framework/rules",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    label: "IBBI Rules",
    description: "Operational rules and procedural frameworks",
    color: "#7c3aed",
    bg: "#f5f3ff",
  },
  {
    href: "https://ibbi.gov.in/en/legal-framework/updated",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    label: "IBBI Regulations",
    description: "Updated and consolidated regulatory framework",
    color: "#0891b2",
    bg: "#ecfeff",
  },
  {
    href: "https://ibbi.gov.in/en/legal-framework/circulars",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "IBBI Circulars",
    description: "Official communications and policy updates",
    color: "#d97706",
    bg: "#fffbeb",
  },
  {
    href: "https://ibbi.gov.in/en/legal-framework/notifications",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    label: "IBBI Notifications",
    description: "Important announcements and statutory notices",
    color: "#dc2626",
    bg: "#fef2f2",
  },
  {
    href: "https://ibbi.gov.in/en/legal-framework/facilitation",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "IBBI Facilitations",
    description: "Support programs and facilitation mechanisms",
    color: "#059669",
    bg: "#ecfdf5",
  },
  {
    href: "https://ibbi.gov.in/en/legal-framework/guidelines",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    label: "IBBI Guidelines",
    description: "Best practices, standards, and procedural guidance",
    color: "#0284c7",
    bg: "#f0f9ff",
  },
  {
    href: "https://ibbi.gov.in/en/legal-framework/other-authorities",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: "Other Authorities",
    description: "References from external regulatory bodies",
    color: "#6d28d9",
    bg: "#f5f3ff",
  },
];

export default function ResourceCenter() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section
        className="relative w-full text-white overflow-hidden py-28"
        style={{
          background: "linear-gradient(135deg, #0B1929 0%, #0e1f3d 55%, #0B1929 100%)",
        }}
      >
        <div className="absolute inset-0 hero-dot-pattern" />
        <div
          className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(14,165,233,0.25) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 text-center space-y-5">
          <div
            className="inline-flex items-center gap-2 mb-2 px-4 py-2 rounded-full text-xs font-bold text-sky-200 tracking-widest uppercase"
            style={{ background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.2)" }}
          >
            IBBI Recognition No. IBBI/IPE/0159
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">Resource Center</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Your gateway to comprehensive insolvency and bankruptcy frameworks.
            Access official documents, regulations, and guidelines from IBBI.
          </p>
          <p className="text-base text-blue-300 italic">
            &ldquo;Empowering stakeholders with authoritative legal resources and regulatory insights&rdquo;
          </p>
        </div>
      </section>

      {/* ── Info strip ── */}
      <div
        className="w-full border-b py-6"
        style={{ background: "#f8fafc", borderColor: "#e5e7eb" }}
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            All resources below link directly to the official IBBI portal at{" "}
            <span className="font-semibold text-blue-700">ibbi.gov.in</span>
          </p>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
            style={{ background: "#eff6ff", color: "#2563eb", border: "1px solid #bfdbfe" }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Opens on official IBBI website
          </div>
        </div>
      </div>

      {/* ── Resources grid ── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-10">
          <span className="inline-block text-xs font-bold text-blue-600 tracking-widest uppercase mb-2">
            Legal Framework
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            IBBI Official Resources
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map(({ href, icon, label, description, color, bg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 flex flex-col card-lift"
              style={{
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                border: "1px solid #e5e7eb",
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 flex-shrink-0 transition-transform group-hover:scale-110 duration-200"
                style={{ background: bg, color }}
              >
                {icon}
              </div>

              {/* Content */}
              <h3
                className="font-bold text-gray-900 mb-2 group-hover:transition-colors"
                style={{ "--hover-color": color }}
              >
                {label}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {description}
              </p>

              {/* Arrow */}
              <div
                className="mt-4 flex items-center gap-1 text-xs font-semibold"
                style={{ color }}
              >
                View on IBBI
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <div
        className="w-full py-16 text-center"
        style={{ background: "#f8fafc", borderTop: "1px solid #e5e7eb" }}
      >
        <div className="max-w-xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Need Expert Guidance?
          </h3>
          <p className="text-gray-600 mb-8">
            Our team can help you interpret regulations and build the right
            strategy for your distressed asset situation.
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
              boxShadow: "0 4px 16px rgba(37,99,235,0.35)",
            }}
          >
            Talk to Our Team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
