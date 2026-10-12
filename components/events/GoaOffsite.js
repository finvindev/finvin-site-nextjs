import Image from "next/image";
import { MapPin, Palmtree } from "lucide-react";

const HIGHLIGHTS = [
  {
    tag: "DAY 01",
    title: "Conference",
    image: "/images/events/goa/conference.png",
    alt: "Goa offsite — conference",
  },
  {
    tag: "DAY 02",
    title: "Pool Party",
    image: "/images/events/goa/pool-party.png",
    alt: "Goa offsite — pool party",
  },
  {
    tag: "DAY 03",
    title: "DJ Night",
    image: "/images/events/goa/dj.png",
    alt: "Goa offsite — DJ night",
  },
];

export default function GoaOffsite() {
  return (
    <section className="w-full bg-[#f8f8f8]">
      <div className="max-w-[1366px] mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="flex items-center gap-1.5 text-xs font-bold tracking-[0.15em] uppercase text-[var(--brand)] mb-4">
              <MapPin size={14} strokeWidth={2.4} />
              Goa, 2026
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight">
              <span className="text-[var(--ink)]">Three days.</span>
              <br />
              <span className="text-[var(--brand)]">One unforgettable offsite.</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base text-[var(--ink)]/80 leading-relaxed max-w-md">
              The three-day escape to Goa that brought the FINVIN TEAM
              together beyond the usual workday, with conversations that
              sparkled ideas, moments that brought everyone closer, and
              obviously nights worth remembering.
            </p>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/events/goa/goa-offsite.png"
              alt="Goa offsite — team group photo"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-16 sm:w-32 bg-[var(--brand)]" />
          <p className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-[var(--ink)]">
            How We Made It Memorable
            <Palmtree size={16} className="text-[var(--brand)]" />
          </p>
          <span className="h-px w-16 sm:w-32 bg-[var(--brand)]" />
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {HIGHLIGHTS.map((item) => (
            <div key={item.tag} className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
              <span className="absolute top-3 left-3 rounded-md bg-black/60 text-white text-[0.65rem] font-bold tracking-wide px-2 py-1">
                {item.tag}
              </span>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                <p className="text-white text-sm font-bold uppercase tracking-wide">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
