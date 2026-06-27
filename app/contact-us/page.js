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
      <section className="relative w-full overflow-hidden pt-40 pb-20" style={{ background: "var(--paper)" }}>
        <div className="absolute inset-0 paper-grid opacity-70" />
        <div
          className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(176,122,44,0.13) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div className="relative max-w-6xl mx-auto px-5 text-center space-y-5">
          <span className="eyebrow">Reach Out</span>
          <h1 className="text-4xl md:text-6xl font-bold font-display" style={{ color: "var(--ink)" }}>Let&apos;s Connect</h1>
          <div className="rule-gold mx-auto" />
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
            Your journey to financial excellence starts with a conversation.
            We&apos;re here to listen, understand, and guide you through every step.
          </p>
          <p className="text-base italic font-display" style={{ color: "var(--gold)" }}>
            &ldquo;Where expertise meets opportunity, and solutions find their perfect match&rdquo;
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-6 py-20 space-y-20" style={{ background: "var(--paper)" }}>

        {/* ── Contact methods strip ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {contactMethods.map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-5 p-6 rounded-2xl card-editorial group"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ color: "var(--ink-2)", background: "var(--paper-2)" }}
              >
                {icon}
              </div>
              <div>
                <p className="eyebrow mb-1">{label}</p>
                <p className="font-semibold text-lg font-display" style={{ color: "var(--ink)" }}>{value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* ── Contact form ── */}
        <div>
          <div className="mb-8">
            <span className="eyebrow">Send a Message</span>
            <h2 className="text-3xl font-bold font-display mt-2" style={{ color: "var(--ink)" }}>How Can We Help?</h2>
            <p className="mt-2" style={{ color: "var(--muted)" }}>
              Fill in the form and we&apos;ll get back to you within one business day.
            </p>
          </div>
          <div className="rounded-2xl p-8 md:p-12 bg-white" style={{ border: "1px solid var(--line)", boxShadow: "0 18px 40px rgba(20,35,58,0.06)" }}>
            <ContactForm />
          </div>
        </div>

        {/* ── Office locations ── */}
        <div>
          <div className="mb-10">
            <span className="eyebrow">Find Us</span>
            <h2 className="text-3xl font-bold font-display mt-2" style={{ color: "var(--ink)" }}>Our Offices</h2>
            <p className="mt-2" style={{ color: "var(--muted)" }}>6 locations across India, ready to serve you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {offices.map(({ city, address, primary }) => (
              <div
                key={city}
                className="rounded-2xl p-6 bg-white card-editorial relative"
                style={primary ? { borderColor: "var(--gold)" } : undefined}
              >
                {primary && (
                  <span
                    className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(176,122,44,0.12)", color: "var(--gold)" }}
                  >
                    HQ
                  </span>
                )}
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "var(--paper-2)", color: "var(--ink-2)" }}
                  >
                    <PinIcon />
                  </div>
                  <div>
                    <h3 className="font-bold font-display text-lg mb-1.5" style={{ color: "var(--ink)" }}>{city}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
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
