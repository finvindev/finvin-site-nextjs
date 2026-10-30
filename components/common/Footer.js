import Image from "next/image";
import Link from "next/link";

const COLUMNS = [
  {
    title: "Overview",
    links: [
      { label: "Our Impact", href: "/#our-impact" },
      { label: "Founders", href: "/?team=founders#leadership-team" },
      { label: "Leadership Team", href: "/?team=leadership#leadership-team" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Advisory Services", href: "/services#advisory-services" },
      { label: "Portfolio Sale", href: "/services#portfolio-sell" },
      {
        label: "Insolvency Professional Entity",
        href: "/services#insolvency-professional-entity",
      },
      { label: "Estate Deal", href: "https://estatedeal.in", external: true },
      {
        label: "Retail NPA Pool Servicing",
        href: "/services#retail-npa-pool-services",
      },
    ],
  },
  {
    title: "Investments",
    links: [
      { label: "Retail", href: "/investments#retail-portfolios" },
      { label: "Wholesale", href: "/investments#wholesale-debt" },
      { label: "Company Under NCLT", href: "/investments#ibc-liquidation" },
    ],
  },
  {
    title: "Events",
    links: [
      { label: "Conferences", href: "/events#conferences" },
      { label: "Life at FINVIN", href: "/events#life-at-finvin" },
      { label: "Career", href: "/events#career" },
    ],
  },
  {
    title: "Deals",
    links: [],
  },
];

const BRANCHES = [
  {
    city: "Mumbai",
    address:
      "605, Sunteck Crest, Mukund Nagar, Andheri Kurla Road, Andheri (E), Mumbai – 400 059",
  },
  {
    city: "Delhi/NCR",
    address:
      "C-60, 3rd Floor, C-Block Community Centre, Janak Cinema Complex, Janak Puri, New Delhi, NCT of Delhi – 110058",
  },
  {
    city: "Hyderabad",
    address:
      "6-1-130, Pillar No. 276, Inner Ring Rd, Vivekananda Nagar, Shivarampally, Jagir, Telangana – 500052",
  },
  {
    city: "Nagpur",
    address: "A 503 Keshav Imperial, Shani Mandir Road, Sitabuldi, Nagpur – 440012",
  },
  {
    city: "Jaipur",
    address: "3rd Floor of E-6, Gautam Marg, Vaishali Nagar, Jaipur – 302021",
  },
  {
    city: "Bhopal",
    address: "223, Maharana Pratap Nagar, Zone II, Bhopal",
  },
  {
    city: "Indore",
    address: "401, 4th Floor, Mangal City Mall, Scheme No. 54, Vijay Nagar, Indore, M.P. – 452010",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--navy)] text-white/80">
      <div className="max-w-[1366px] mx-auto px-6 sm:px-10 pt-7 pb-4">
        <div className="grid lg:grid-cols-[1fr_2.2fr] gap-6">
          <div>
            <Image
              src="/images/finvin-logo.jpg"
              alt="Finvin"
              width={196}
              height={80}
              className="h-16 w-auto mb-7"
            />
            <p className="text-white font-semibold text-[10px] mb-1.5">
              Finvin Turnaround &amp; Restructuring Pvt. Ltd.
            </p>
            <p className="text-[10px] mb-0.5">+91 86533 53970</p>
            <a href="mailto:info@finvin.co.in" className="text-[10px] hover:text-white transition-colors">
              info@finvin.co.in
            </a>
            <p className="mt-5 text-[10px] text-white/60 leading-snug max-w-[260px] text-justify">
              Finvin is a distressed asset resolution and advisory firm
              helping banks, ARCs and investors navigate NPA recovery,
              insolvency and structured transactions across India.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-4 sm:gap-y-6">
              {COLUMNS.map((col) => (
                <div key={col.title}>
                  <h3 className="text-white font-semibold text-[10px] mb-2">{col.title}</h3>
                  <ul className="space-y-1.5 text-[10px]">
                    {col.links.map((link) =>
                      link.external ? (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                          >
                            {link.label}
                          </a>
                        </li>
                      ) : (
                        <li key={link.label}>
                          <Link href={link.href} className="hover:text-white transition-colors">
                            {link.label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-white/10">
              <h3 className="text-white font-semibold text-[11px] mb-2.5">Our Branches</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-3">
                {BRANCHES.map((branch) => (
                  <div key={branch.city}>
                    <p className="text-white font-semibold text-[10px] mb-0.5">{branch.city}</p>
                    <p className="text-[9px] text-white/60 leading-snug">{branch.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 items-center gap-2 text-[9px] text-white/60">
          <p className="text-center sm:text-left">
            &copy; 2026 FINVIN. All rights reserved. FINVIN GROUP
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/_finvin_?obrf=MTQzNXAxczByZjB1ag=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.25.07 1.63.07 4.81s-.01 3.56-.07 4.81c-.15 3.23-1.66 4.77-4.92 4.92-1.25.06-1.62.07-4.85.07s-3.6 0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.25-.07-1.63-.07-4.81s.02-3.56.07-4.81c.15-3.23 1.67-4.77 4.92-4.92 1.25-.07 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/1PbkU9CHkC/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a
              href="https://in.linkedin.com/company/finvin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.38v4.57h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@finvinadvisory?si=WjFSk42lsVRwZnGI"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
          <p className="text-center sm:text-right">
            Website by{" "}
            <a
              href="https://labs.picoids.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Picoids Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
