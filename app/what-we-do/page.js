import Link from "next/link";

export default function WhatWeDo() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-sky-400 to-blue-400 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive solutions for distressed assets and insolvency
              resolution
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12">
          {/* Advisory Services Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-600">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Advisory Services
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Our Advisory Division provides specialized guidance to
              stakeholders involved in insolvency, restructuring, and financial
              recovery. With a deep understanding of the Insolvency and
              Bankruptcy Code (IBC), allied regulations, and evolving market
              practices, we help clients—financial institutions, investors,
              resolution applicants, and corporates—navigate the multifaceted
              challenges of distressed asset situations.
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Key Offerings:
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <span className="font-medium">
                    Resolution Strategy Consulting:
                  </span>{" "}
                  We help formulate effective and compliant resolution plans
                  under IBC, backed by robust legal and financial analysis.
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <span className="font-medium">IBC Advisory:</span> From
                  pre-admission strategies to post-resolution support, we advise
                  on the full cycle of IBC matters.
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <span className="font-medium">
                    Stakeholder Representation:
                  </span>{" "}
                  We act as advisors to lenders and resolution applicants,
                  ensuring their interests are protected throughout the
                  resolution or liquidation process.
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <span className="font-medium">
                    Process Design & Negotiation Support:
                  </span>{" "}
                  Our team assists in designing eligibility criteria, evaluation
                  matrices, and facilitating negotiations between the Committee
                  of Creditors (CoC) and resolution applicants.
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <span className="font-medium">
                    Regulatory & Transactional Advisory:
                  </span>{" "}
                  We offer counsel on regulatory filings, compliance frameworks,
                  and transactional structures for optimal recovery and
                  turnaround.
                </div>
              </li>
            </ul>
            <p className="text-gray-700 text-lg mt-6 italic">
              Our advisory service is built on trust, discretion, and a
              solutions-first mindset—making us a reliable partner for strategic
              decision-making in distressed scenarios.
            </p>
          </div>

          {/* Portfolio Sale Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-600">
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              Portfolio Sale (Distressed Asset Disposal)
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Finvin provides end-to-end solutions for the structured disposal
              of distressed portfolios. Through our Portfolio Sell services, we
              assist banks, NBFCs, ARCs, and corporates in identifying,
              packaging, and selling distressed loans or assets to suitable
              investors and resolution applicants.
            </p>
            <h3 className="text-xl font-semibold text-green-700 mb-4">
              Key Offerings:
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <span className="font-medium">
                    Asset Identification & Packaging:
                  </span>{" "}
                  We help identify eligible stressed or non-performing accounts,
                  conduct detailed data room preparation, and organize them into
                  sale-ready portfolios.
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <span className="font-medium">
                    Investor Discovery & Deal Structuring:
                  </span>{" "}
                  With access to a wide network of ARCs, special situation
                  funds, and institutional investors, we identify the right
                  buyers and structure the transaction for maximum realization.
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <span className="font-medium">
                    Transaction Execution Support:
                  </span>{" "}
                  We coordinate across stakeholders to facilitate transparent,
                  compliant, and timely closure of portfolio deals—whether
                  single-credit sales, bulk deals, or structured transfers.
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <span className="font-medium">
                    Regulatory Compliance & Documentation:
                  </span>{" "}
                  We ensure that all aspects of the deal—from valuation to
                  documentation—align with RBI guidelines, IBC mandates, and
                  internal credit policies.
                </div>
              </li>
            </ul>
            <p className="text-gray-700 text-lg mt-6 italic">
              By combining market insight with legal and operational acumen, our
              Portfolio Sell service optimizes asset disposal strategies while
              ensuring stakeholder confidence and regulatory alignment.
            </p>
          </div>

          {/* Insolvency Professional Services Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-purple-600">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">
              Insolvency Professional Services
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Our company provides comprehensive support to Insolvency
              Professionals (IPs) acting as Interim Resolution Professionals
              (IRPs), Resolution Professionals (RPs), or Liquidators. We
              understand the complexity of managing corporate insolvency and
              liquidation assignments and offer backend, legal, and field-level
              assistance to help IPs execute their duties effectively under IBC,
              2016.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-4">
                  CIRP Support:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Claim verification, classification, and collation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Constitution and management of Committee of Creditors
                      (CoC)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Site visits, asset inventories, and control/custody
                      takeover
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Information Memorandum drafting and distribution
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Inviting and evaluating resolution plans</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-4">
                  Liquidation Support:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Formation of the liquidation estate and public
                      announcements
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Asset sale via e-auction (piecemeal and going concern)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Handling stakeholders' consultations and documentation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Distribution of funds and final reporting to NCLT
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-6 italic">
              Our strong execution team ensures Insolvency Professionals receive
              the operational backbone they need to maintain compliance, manage
              complexity, and maximize recovery.
            </p>
          </div>

          {/* Estatedeal.in Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-yellow-500">
            <h2 className="text-3xl font-bold text-yellow-700 mb-6">
              Estatedeal.in – Real Estate & Asset Monetization Platform
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Estatedeal.in is Finvin's dedicated digital platform for
              marketing, managing, and maximizing the sale of distressed real
              estate assets. Whether part of a liquidation estate, an asset
              under CIRP, or a bank auction property, Estatedeal.in connects
              genuine buyers with verified properties—ensuring visibility,
              compliance, and value optimization.
            </p>
            <h3 className="text-xl font-semibold text-yellow-700 mb-4">
              Key Offerings:
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <span className="font-medium">
                    Asset Listing & Marketing:
                  </span>{" "}
                  We create verified listings for IBC and bank auction
                  properties, ensuring maximum reach through digital and offline
                  channels.
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <span className="font-medium">
                    Buyer Discovery & Lead Qualification:
                  </span>{" "}
                  Using intelligent targeting and real estate analytics, we
                  attract qualified buyers and investors aligned with asset
                  characteristics.
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <span className="font-medium">
                    Documentation & Transaction Support:
                  </span>{" "}
                  We assist in due diligence, document collection, legal
                  clearance, and liaising with financial institutions or IPs to
                  ensure smooth deal closures.
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <span className="font-medium">End-to-End Monetization:</span>{" "}
                  From marketing to sale execution, Estatedeal.in is a one-stop
                  platform that bridges the gap between distressed real estate
                  and genuine market demand.
                </div>
              </li>
            </ul>
            <p className="text-gray-700 text-lg mt-6 italic">
              This platform empowers banks, RPs, and liquidators with a
              digital-first tool to unlock value from real estate, while
              simplifying the asset acquisition journey for end-buyers and
              investors.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link
            href="/contact-us"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
