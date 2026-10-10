"use client";

import { useState } from "react";
import Image from "next/image";
import ImagePlaceholder from "../common/ImagePlaceholder";

const FILTERS = ["Advisory", "Portfolio Sale", "IPE", "EstateDeal", "Retail NPA"];

const PLACEHOLDER_LOGOS = Array.from({ length: 16 }, (_, i) => `Partner logo ${i + 1}`);

function buildLogos(folder, items) {
  return items.map(({ file, label }) => ({
    label,
    src: `/images/logos/${folder}/${file}`,
  }));
}

const ESTATEDEAL_LOGOS = buildLogos("estatedeal", [
  { file: "abc.svg", label: "ABC" },
  { file: "anand-rathi.webp", label: "Anand Rathi" },
  { file: "bank-of-mah.jpg", label: "Bank of Maharashtra" },
  { file: "canara-bank-logo.jpg", label: "Canara Bank" },
  { file: "chola-logo.svg", label: "Cholamandalam" },
  { file: "deutsche.jpg", label: "Deutsche Bank" },
  { file: "earc-logo.png", label: "EARC" },
  { file: "edelweiss-arc.png", label: "Edelweiss ARC" },
  { file: "icic-logo.webp", label: "ICIC" },
  { file: "icici-header-logo.png", label: "ICICI" },
  { file: "iob.jpg", label: "Indian Overseas Bank" },
  { file: "kmbl-logo.svg", label: "Kotak Mahindra Bank" },
  { file: "logo-header.webp", label: "Partner" },
  { file: "omkara.png", label: "Omkara" },
  { file: "orix.jpg", label: "Orix" },
  { file: "piramal.png", label: "Piramal" },
  { file: "reliance-asset-reconstruction-company-limited-logo.jpg", label: "Reliance ARC" },
  { file: "reliance-industries-logo-blk.png", label: "Reliance Industries" },
  { file: "smfg-india-credit-logo.jpg", label: "SMFG India Credit" },
  { file: "svc.png", label: "SVC" },
  { file: "tata-business-logo-compressor-png.png", label: "Tata" },
  { file: "unionbankofindia-logo.jpg", label: "Union Bank of India" },
  { file: "yes-bank-logo.jpg", label: "Yes Bank" },
]);

const PORTFOLIOSALE_LOGOS = buildLogos("portfoliosale", [
  { file: "agile-finserv-logo.png", label: "Agile Finserv" },
  { file: "ambit.avif", label: "Ambit" },
  { file: "amrit.gif", label: "Amrit" },
  { file: "baid.jpg", label: "Baid" },
  { file: "creditwise.png", label: "Creditwise" },
  { file: "edelweiss.png", label: "Edelweiss" },
  { file: "ez.svg", label: "EZ" },
  { file: "fed-fina.png", label: "Fedfina" },
  { file: "finnova.png", label: "Finnova" },
  { file: "irep.png", label: "IREP" },
  { file: "laxmi-india.png", label: "Laxmi India" },
  { file: "midland.png", label: "Midland" },
  { file: "muthoot-microfin.png", label: "Muthoot Microfin" },
  { file: "sugmya.png", label: "Sugmya" },
  { file: "universal.svg", label: "Universal" },
]);

const ADVISORY_LOGOS = buildLogos("advisory", [
  { file: "dhurandar.png", label: "Dhurandar" },
  { file: "ivrcl.png", label: "IVRCL" },
  { file: "minerva.png", label: "Minerva" },
  { file: "reliance-arc.png", label: "Reliance ARC" },
  { file: "reliance-capital.png", label: "Reliance Capital" },
]);

const IPE_LOGOS = buildLogos("ipe", [
  { file: "ardent.png", label: "Ardent" },
  { file: "bombay-rayon.png", label: "Bombay Rayon" },
  { file: "feedback.png", label: "Feedback" },
  { file: "gajanan.png", label: "Gajanan" },
  { file: "galore.png", label: "Galore" },
  { file: "laxmiflex.png", label: "Laxmiflex" },
  { file: "mahagun.png", label: "Mahagun" },
  { file: "matoshri.png", label: "Matoshri" },
  { file: "privilege.png", label: "Privilege" },
]);

const splitRows = (logos) => [
  logos.filter((_, i) => i % 2 === 0),
  logos.filter((_, i) => i % 2 === 1),
];

const LOGO_SETS = {
  Advisory: ADVISORY_LOGOS,
  "Portfolio Sale": PORTFOLIOSALE_LOGOS,
  IPE: IPE_LOGOS,
  EstateDeal: ESTATEDEAL_LOGOS,
};

const SINGLE_ROW_FILTERS = new Set(["Advisory", "IPE"]);

const MIN_TRACK_ITEMS = 10;

function LogoMarqueeRow({ logos, direction }) {
  const repeats = Math.max(1, Math.ceil(MIN_TRACK_ITEMS / logos.length));
  const base = Array.from({ length: repeats }, () => logos).flat();
  const track = [...base, ...base];

  return (
    <div className="marquee-row relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max items-center gap-10 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {track.map((logo, i) => (
          <div
            key={`${logo.src}-${i}`}
            className="relative h-16 w-32 shrink-0 flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.label}
              fill
              sizes="130px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TrustedBy() {
  const [active, setActive] = useState("EstateDeal");
  const activeLogos = LOGO_SETS[active];
  const singleRow = activeLogos && SINGLE_ROW_FILTERS.has(active);
  const [row1, row2] = activeLogos && !singleRow ? splitRows(activeLogos) : [[], []];

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1366px] mx-auto px-6 sm:px-10 py-20 text-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--ink)]">
          Trusted by <span className="text-[var(--brand)]">Leading Organisation</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-[var(--ink)]/80">
          Our solutions support leading institutions across the distressed
          asset ecosystem.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors border ${
                active === filter
                  ? "bg-[var(--navy)] text-white border-[var(--navy)]"
                  : "text-[var(--muted)] border-[var(--line)] hover:border-[var(--brand)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {activeLogos && singleRow ? (
          <div className="mt-12">
            <LogoMarqueeRow logos={activeLogos} direction="left" />
          </div>
        ) : activeLogos ? (
          <div className="mt-12 flex flex-col gap-8">
            <LogoMarqueeRow logos={row1} direction="left" />
            <LogoMarqueeRow logos={row2} direction="right" />
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-4 sm:grid-cols-8 gap-px bg-[var(--line)] border border-[var(--line)]">
            {PLACEHOLDER_LOGOS.map((logo) => (
              <ImagePlaceholder key={logo} label={logo} className="aspect-[3/2] bg-white" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
