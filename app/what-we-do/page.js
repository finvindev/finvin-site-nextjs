import Link from "next/link";
import CheckIcon from "@/components/common/CheckIcon";

const services = [
  { id: "advisory", label: "Advisory" },
  { id: "portfolio-sale", label: "Portfolio Sale" },
  { id: "ip-services", label: "IP Services" },
  { id: "estatedeal", label: "Estatedeal.in" },
];

function ServiceSection({ id, accentFrom, accentTo, iconColor, icon, title, intro, offeringsTitle, offerings, note, children }) {
  return (
    <div
      id={id}
      className="rounded-2xl overflow-hidden scroll-mt-36"
      style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}
    >
      {/* Colored header strip */}
      <div
        className="px-8 py-6 flex items-center gap-4"
        style={{ background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})` }}
      >
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white flex-shrink-0">
          {icon}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
      </div>

      {/* Body */}
      <div className="bg-white px-8 py-8">
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">{intro}</p>

        {offeringsTitle && (
          <h3 className="text-base font-bold uppercase tracking-widest mb-5" style={{ color: iconColor }}>
            {offeringsTitle}
          </h3>
        )}

        {offerings && (
          <ul className="space-y-4 text-gray-700 mb-6">
            {offerings.map(({ title: t, body }) => (
              <li key={t} className="flex items-start gap-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})` }}
                >
                  <CheckIcon className="w-3.5 h-3.5 text-white" />
                </span>
                <div>
                  <span className="font-semibold text-gray-900">{t}:</span>{" "}
                  {body}
                </div>
              </li>
            ))}
          </ul>
        )}

        {children}

        {note && (
          <div
            className="mt-6 p-4 rounded-xl text-sm text-gray-600 italic"
            style={{ background: "#f8fafc", borderLeft: `4px solid ${accentFrom}` }}
          >
            {note}
          </div>
        )}
      </div>
    </div>
  );
}

export default function WhatWeDo() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section
        className="relative w-full text-white overflow-hidden py-28"
        style={{
          background: "linear-gradient(135deg, #0B1929 0%, #0e2647 55%, #0B1929 100%)",
        }}
      >
        <div className="absolute inset-0 hero-dot-pattern" />
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 text-center space-y-5">
          <span className="inline-block text-xs font-bold text-blue-300 tracking-widest uppercase">
            Our Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold">What We Do</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions for distressed assets and insolvency
            resolution — from advisory to digital monetization
          </p>
        </div>
      </section>

      {/* ── Sticky jump nav ── */}
      <div className="sticky top-[89px] z-20 bg-white border-b border-gray-200" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {services.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold text-blue-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services ── */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 gap-10">

        <ServiceSection
          id="advisory"
          accentFrom="#1d4ed8"
          accentTo="#2563eb"
          iconColor="#2563eb"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          }
          title="Advisory Services"
          intro="Our Advisory Division provides specialized guidance to stakeholders involved in insolvency, restructuring, and financial recovery. With a deep understanding of the Insolvency and Bankruptcy Code (IBC), allied regulations, and evolving market practices, we help clients — financial institutions, investors, resolution applicants, and corporates — navigate the multifaceted challenges of distressed asset situations."
          offeringsTitle="Key Offerings"
          offerings={[
            { title: "Resolution Strategy Consulting", body: "We help formulate effective and compliant resolution plans under IBC, backed by robust legal and financial analysis." },
            { title: "IBC Advisory", body: "From pre-admission strategies to post-resolution support, we advise on the full cycle of IBC matters." },
            { title: "Stakeholder Representation", body: "We act as advisors to lenders and resolution applicants, ensuring their interests are protected throughout the resolution or liquidation process." },
            { title: "Process Design & Negotiation Support", body: "Our team assists in designing eligibility criteria, evaluation matrices, and facilitating negotiations between the Committee of Creditors (CoC) and resolution applicants." },
            { title: "Regulatory & Transactional Advisory", body: "We offer counsel on regulatory filings, compliance frameworks, and transactional structures for optimal recovery and turnaround." },
          ]}
          note="Our advisory service is built on trust, discretion, and a solutions-first mindset — making us a reliable partner for strategic decision-making in distressed scenarios."
        />

        <ServiceSection
          id="portfolio-sale"
          accentFrom="#4f46e5"
          accentTo="#6d28d9"
          iconColor="#4f46e5"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <polyline points="3 3 3 21 21 21" />
              <polyline points="7 16 11 10 15 13 21 7" />
            </svg>
          }
          title="Portfolio Sale (Distressed Asset Disposal)"
          intro="Finvin provides end-to-end solutions for the structured disposal of distressed portfolios. Through our Portfolio Sell services, we assist banks, NBFCs, ARCs, and corporates in identifying, packaging, and selling distressed loans or assets to suitable investors and resolution applicants."
          offeringsTitle="Key Offerings"
          offerings={[
            { title: "Asset Identification & Packaging", body: "We help identify eligible stressed or non-performing accounts, conduct detailed data room preparation, and organize them into sale-ready portfolios." },
            { title: "Investor Discovery & Deal Structuring", body: "With access to a wide network of ARCs, special situation funds, and institutional investors, we identify the right buyers and structure the transaction for maximum realization." },
            { title: "Transaction Execution Support", body: "We coordinate across stakeholders to facilitate transparent, compliant, and timely closure of portfolio deals — whether single-credit sales, bulk deals, or structured transfers." },
            { title: "Regulatory Compliance & Documentation", body: "We ensure that all aspects of the deal — from valuation to documentation — align with RBI guidelines, IBC mandates, and internal credit policies." },
          ]}
          note="By combining market insight with legal and operational acumen, our Portfolio Sell service optimizes asset disposal strategies while ensuring stakeholder confidence and regulatory alignment."
        />

        <ServiceSection
          id="ip-services"
          accentFrom="#0891b2"
          accentTo="#0284c7"
          iconColor="#0891b2"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          }
          title="Insolvency Professional Services"
          intro="Our company provides comprehensive support to Insolvency Professionals (IPs) acting as Interim Resolution Professionals (IRPs), Resolution Professionals (RPs), or Liquidators. We understand the complexity of managing corporate insolvency and liquidation assignments and offer backend, legal, and field-level assistance to help IPs execute their duties effectively under IBC, 2016."
          note="Our strong execution team ensures Insolvency Professionals receive the operational backbone they need to maintain compliance, manage complexity, and maximize recovery."
        >
          <div className="grid md:grid-cols-2 gap-6 my-6">
            {[
              {
                title: "CIRP Support",
                items: [
                  "Claim verification, classification, and collation",
                  "Constitution and management of Committee of Creditors (CoC)",
                  "Site visits, asset inventories, and control/custody takeover",
                  "Information Memorandum drafting and distribution",
                  "Inviting and evaluating resolution plans",
                ],
              },
              {
                title: "Liquidation Support",
                items: [
                  "Formation of the liquidation estate and public announcements",
                  "Asset sale via e-auction (piecemeal and going concern)",
                  "Handling stakeholders' consultations and documentation",
                  "Distribution of funds and final reporting to NCLT",
                ],
              },
            ].map(({ title, items }) => (
              <div key={title} className="rounded-xl p-5" style={{ background: "#f0f9ff", border: "1px solid #bae6fd" }}>
                <h3 className="font-bold text-base mb-4" style={{ color: "#0284c7" }}>
                  {title}
                </h3>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "linear-gradient(135deg, #0891b2, #0284c7)" }}
                      >
                        <CheckIcon className="w-3 h-3 text-white" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ServiceSection>

        <ServiceSection
          id="estatedeal"
          accentFrom="#059669"
          accentTo="#047857"
          iconColor="#059669"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          }
          title="Estatedeal.in – Real Estate & Asset Monetization Platform"
          intro="Estatedeal.in is Finvin's dedicated digital platform for marketing, managing, and maximizing the sale of distressed real estate assets. Whether part of a liquidation estate, an asset under CIRP, or a bank auction property, Estatedeal.in connects genuine buyers with verified properties — ensuring visibility, compliance, and value optimization."
          offeringsTitle="Key Offerings"
          offerings={[
            { title: "Asset Listing & Marketing", body: "We create verified listings for IBC and bank auction properties, ensuring maximum reach through digital and offline channels." },
            { title: "Buyer Discovery & Lead Qualification", body: "Using intelligent targeting and real estate analytics, we attract qualified buyers and investors aligned with asset characteristics." },
            { title: "Documentation & Transaction Support", body: "We assist in due diligence, document collection, legal clearance, and liaising with financial institutions or IPs to ensure smooth deal closures." },
            { title: "End-to-End Monetization", body: "From marketing to sale execution, Estatedeal.in is a one-stop platform that bridges the gap between distressed real estate and genuine market demand." },
          ]}
          note="This platform empowers banks, RPs, and liquidators with a digital-first tool to unlock value from real estate, while simplifying the asset acquisition journey for end-buyers and investors."
        />
      </section>

      {/* ── CTA ── */}
      <div className="max-w-6xl mx-auto px-4 pb-20 text-center">
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-white text-lg transition-all hover:-translate-y-0.5 hover:brightness-110"
          style={{
            background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
            boxShadow: "0 4px 20px rgba(37,99,235,0.35)",
          }}
        >
          Get in Touch
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
