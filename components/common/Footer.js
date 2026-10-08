const COLUMNS = [
  {
    title: "Overview",
    links: ["Our Impact", "Leadership Team", "Board of Directors"],
  },
  {
    title: "Services",
    links: [
      "Advisory Services",
      "Portfolio Sale",
      "Insolvency Professional Entity",
      "EstateDeal.in",
      "Retail NPA Pool Servicing",
    ],
  },
  {
    title: "Investments",
    links: ["Retail", "Wholesale", "Company Under NCLT"],
  },
  {
    title: "Events",
    links: ["Conferences", "Life at FINVIN", "Career"],
  },
  {
    title: "Deals",
    links: [],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--navy)] text-white/80">
      <div className="max-w-[1366px] mx-auto px-6 sm:px-10 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span>+91 86533 53970</span>
              </li>
              <li className="flex items-start gap-2">
                <span>info@finvin.co.in</span>
              </li>
              <li className="flex items-start gap-2">
                <span>602, Sunteck Crest, Andheri East, Mumbai &ndash; 400059</span>
              </li>
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-semibold text-sm mb-4">{col.title}</h3>
              <ul className="space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>&copy; 2026 FINVIN. All rights reserved. FINVIN GROUP</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.25.07 1.63.07 4.81s-.01 3.56-.07 4.81c-.15 3.23-1.66 4.77-4.92 4.92-1.25.06-1.62.07-4.85.07s-3.6 0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.25-.07-1.63-.07-4.81s.02-3.56.07-4.81c.15-3.23 1.67-4.77 4.92-4.92 1.25-.07 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.38v4.57h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
