import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/resource-center", label: "Resource Center" },
  { href: "/contact-us", label: "Contact Us" },
];

const serviceLinks = [
  { href: "/what-we-do#advisory", label: "Advisory Services" },
  { href: "/what-we-do#portfolio-sale", label: "Portfolio Sale" },
  { href: "/what-we-do#ip-services", label: "IP Services" },
  { href: "/what-we-do#estatedeal", label: "Estatedeal.in" },
];

const finvinGroup = [
  "Finvin Investor Private Limited",
  "Finvin Advisor Private Limited",
  "Finvin Turnaround & Restructuring Pvt. Ltd.",
  "Finvin Estatedeal Technologies Pvt. Ltd.",
];

function FooterHeading({ children }) {
  return (
    <h4
      className="font-semibold mb-5 text-[0.7rem] uppercase tracking-[0.2em]"
      style={{ color: "var(--gold-soft)" }}
    >
      {children}
    </h4>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)" }} className="text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 hero-dot-pattern opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-5 md:px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div>
            <div className="mb-5 inline-flex bg-white/95 rounded-lg px-3 py-2">
              <Image src="/finvin-logo.png" alt="Finvin" width={104} height={42} className="h-9 w-auto" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Finvin Turnaround and Restructuring Private Limited is an IBBI
              recognized Insolvency Professional Entity providing comprehensive
              distressed asset resolution services.
            </p>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                color: "var(--gold-soft)",
                background: "rgba(176,122,44,0.12)",
                border: "1px solid rgba(176,122,44,0.25)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--gold-soft)" }} />
              IBBI Recognized &middot; IBBI/IPE/0159
            </div>
          </div>

          {/* Navigation */}
          <div>
            <FooterHeading>Navigation</FooterHeading>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + Group */}
          <div>
            <FooterHeading>Our Services</FooterHeading>
            <ul className="space-y-3 mb-8">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <FooterHeading>Finvin Group</FooterHeading>
            <ul className="space-y-2">
              {finvinGroup.map((name) => (
                <li key={name} className="text-xs text-gray-500 leading-snug">
                  {name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <FooterHeading>Get In Touch</FooterHeading>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--gold-soft)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+918655353970" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +91 86553 53970
                </a>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--gold-soft)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:Info@finvin.co.in" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Info@finvin.co.in
                </a>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--gold-soft)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-400 leading-snug">
                  602, Sunteck Crest,
                  <br />
                  Andheri East, Mumbai – 400059
                </span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, var(--gold), var(--gold-soft))",
                  boxShadow: "0 6px 18px rgba(176,122,44,0.3)",
                }}
              >
                Talk to an Expert
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p>
            &copy; {new Date().getFullYear()} Finvin Turnaround &amp;
            Restructuring Pvt. Ltd. All rights reserved.
          </p>
          <p>IBBI Registration No. IBBI/IPE/0159</p>
        </div>
      </div>
    </footer>
  );
}
