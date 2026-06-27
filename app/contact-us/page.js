import ContactForm from "@/components/common/ContactForm";

const offices = [
  { city: "Mumbai", address: ["602, Sunteck Crest,", "Andheri East,", "Mumbai – 400059"], primary: true },
  { city: "Delhi / NCR", address: ["609, Tower C, Sector 62,", "Noida,", "Uttar Pradesh – 201309"] },
  { city: "Hyderabad", address: ["6-1-130, Pillar No. 276,", "Inner Ring Rd, Vivekananda Nagar,", "Shivarampally Jagir,", "Telangana – 500052"] },
  { city: "Raipur", address: ["E-76, GK Chambers,", "Sector 2, Devendra Nagar,", "Raipur – 492009 CG"] },
  { city: "Vapi", address: ["D-323, Mcube,", "Opp Mamaldar Office,", "Vapi – 396145"] },
  { city: "Nagpur", address: ["A 503, Keshav Imperial,", "Shani Mandir Road,", "Sitabuldi Nagpur – 440012"] },
];

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 86553 53970",
    href: "tel:+918655353970",
    color: "#2563eb",
    bg: "#eff6ff",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "Info@finvin.co.in",
    href: "mailto:Info@finvin.co.in",
    color: "#7c3aed",
    bg: "#f5f3ff",
  },
];

function PinIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export default function ContactUs() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section
        className="relative w-full text-white overflow-hidden py-28"
        style={{
          background: "linear-gradient(135deg, #0B1929 0%, #0a2040 55%, #0B1929 100%)",
        }}
      >
        <div className="absolute inset-0 hero-dot-pattern" />
        <div
          className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(5,150,105,0.25) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 text-center space-y-5">
          <span className="inline-block text-xs font-bold text-emerald-300 tracking-widest uppercase">
            Reach Out
          </span>
          <h1 className="text-4xl md:text-6xl font-bold">Let&apos;s Connect</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Your journey to financial excellence starts with a conversation.
            We&apos;re here to listen, understand, and guide you through every step.
          </p>
          <p className="text-base text-blue-300 italic">
            &ldquo;Where expertise meets opportunity, and solutions find their perfect match&rdquo;
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20 space-y-20">

        {/* ── Contact methods strip ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {contactMethods.map(({ icon, label, value, href, color, bg }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-5 p-6 rounded-2xl card-lift group"
              style={{
                background: bg,
                border: `1px solid ${color}22`,
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ color, background: "white", boxShadow: `0 2px 12px ${color}22` }}
              >
                {icon}
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                  {label}
                </p>
                <p className="font-semibold text-lg" style={{ color }}>
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* ── Contact form ── */}
        <div>
          <div className="mb-8">
            <span className="inline-block text-xs font-bold text-blue-600 tracking-widest uppercase mb-2">
              Send a Message
            </span>
            <h2 className="text-3xl font-bold text-gray-900">How Can We Help?</h2>
            <p className="text-gray-500 mt-2">
              Fill in the form and we&apos;ll get back to you within one business day.
            </p>
          </div>
          <div
            className="rounded-2xl p-8 md:p-12 bg-white"
            style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}
          >
            <ContactForm />
          </div>
        </div>

        {/* ── Office locations ── */}
        <div>
          <div className="mb-10">
            <span className="inline-block text-xs font-bold text-blue-600 tracking-widest uppercase mb-2">
              Find Us
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Our Offices</h2>
            <p className="text-gray-500 mt-2">
              6 locations across India, ready to serve you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {offices.map(({ city, address, primary }) => (
              <div
                key={city}
                className="rounded-2xl p-6 bg-white card-lift relative"
                style={{
                  boxShadow: primary
                    ? "0 4px 24px rgba(37,99,235,0.15)"
                    : "0 2px 16px rgba(0,0,0,0.06)",
                  border: primary ? "1px solid #bfdbfe" : "1px solid #e5e7eb",
                }}
              >
                {primary && (
                  <span
                    className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: "#eff6ff", color: "#2563eb" }}
                  >
                    HQ
                  </span>
                )}
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "#eff6ff", color: "#2563eb" }}
                  >
                    <PinIcon />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">{city}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {address.map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < address.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
