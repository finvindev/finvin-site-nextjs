"use client";

import { useEffect, useRef, useState } from "react";
import {
  Lightbulb,
  ChartNoAxesCombined,
  Building2,
  Users,
  Target,
  Mountain,
} from "lucide-react";
import "./OurJourney.css";

export const defaultMilestones = [
  {
    year: "2020 – 21",
    title: "Vision",
    description:
      "FINVIN begins its journey with a clear vision to create value-driven solutions across distressed assets.",
    icon: Lightbulb,
    x: 17,
    y: 91,
    cardGap: 18,
    cardWidth: 180,
    connectorHeight: 90,
  },
  {
    year: "2021 – 22",
    title: "Capability",
    description:
      "Building credibility through strategic partnerships and strong transaction execution.",
    icon: ChartNoAxesCombined,
    x: 30,
    y: 79,
    cardGap: 18,
    cardWidth: 180,
    connectorHeight: 100,
  },
  {
    year: "2022 – 23",
    title: "Expansion",
    description:
      "Expanding our reach and service offerings to address a wider range of asset classes and opportunities.",
    icon: Building2,
    x: 42,
    y: 68,
    cardGap: 18,
    cardWidth: 190,
    connectorHeight: 105,
  },
  {
    year: "2023 – 24",
    title: "Scale",
    description:
      "Strengthening our operational capabilities and expanding our presence across regions.",
    icon: Users,
    x: 54,
    y: 59,
    cardGap: 18,
    cardWidth: 190,
    connectorHeight: 105,
  },
  {
    year: "2024 – 25",
    title: "Impact",
    description:
      "Expanding our impact across IBC, Advisory, Portfolio Sale and Retail NPA solutions.",
    icon: Target,
    x: 66,
    y: 50,
    cardGap: 18,
    cardWidth: 185,
    connectorHeight: 105,
  },
  {
    year: "2025 – 26",
    title: "Leadership",
    description:
      "Evolving into a stronger, more integrated platform across Advisory, IBC Services and Distressed Asset Solutions.",
    icon: Mountain,
    x: 78,
    y: 38,
    cardGap: 18,
    cardWidth: 205,
    connectorHeight: 100,
  },
];

function randomYearLabel() {
  const start = 1990 + Math.floor(Math.random() * 45);
  return `${start} – ${String((start + 1) % 100).padStart(2, "0")}`;
}

function YearShuffle({ year, active, delay = 0 }) {
  const [display, setDisplay] = useState(year);

  useEffect(() => {
    if (!active) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(year);
      return;
    }

    let tickId;
    let count = 0;
    const totalTicks = 9;

    const startId = setTimeout(() => {
      tickId = setInterval(() => {
        count += 1;
        if (count >= totalTicks) {
          setDisplay(year);
          clearInterval(tickId);
        } else {
          setDisplay(randomYearLabel());
        }
      }, 55);
    }, delay);

    return () => {
      clearTimeout(startId);
      clearInterval(tickId);
    };
  }, [active, year, delay]);

  return <span className="journey__year">{display}</span>;
}

export default function OurJourney({
  backgroundImage,
  eyebrow = "OUR JOURNEY",
  title = "From Vision to Leadership",
  subtitle = "A journey of growth, expansion and impact.",
  milestones = defaultMilestones,
  className = "",
}) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`journey ${className}`.trim()}
      style={{ "--journey-image": `url("${backgroundImage}")` }}
      aria-labelledby="journey-title"
    >
      <div className="journey__background" aria-hidden="true" />
      <div className="journey__wash" aria-hidden="true" />

      <header className="journey__heading">
        <div className="journey__eyebrow">
          <span aria-hidden="true" />
          {eyebrow}
        </div>
        <h2 id="journey-title">{title}</h2>
        <p>{subtitle}</p>
      </header>

      <div className="journey__desktop" aria-label="FINVIN company milestones">
        <svg
          className="journey__route"
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <filter id="journey-route-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            className="journey__route-shadow"
            d="M 90 470 C 120 460, 150 448, 170 436 S 250 385, 300 350 S 370 305, 420 271 S 480 230, 540 207 S 600 170, 660 143 S 720 95, 780 57"
          />
          <path
            className="journey__route-line"
            filter="url(#journey-route-glow)"
            d="M 90 470 C 120 460, 150 448, 170 436 S 250 385, 300 350 S 370 305, 420 271 S 480 230, 540 207 S 600 170, 660 143 S 720 95, 780 57"
          />
        </svg>

        {milestones.map((item, index) => {
          const Icon = item.icon;
          const delay = index * 180;
          return (
            <article
              className="journey__milestone"
              key={`${item.year}-${item.title}`}
              style={{
                "--x": `${item.x}%`,
                "--y": `${item.y}%`,
                "--card-gap": `${item.cardGap ?? 18}px`,
                "--card-width": `${item.cardWidth ?? 180}px`,
                "--connector-height": `${item.connectorHeight ?? 100}px`,
                "--milestone-index": index,
              }}
            >
              <div className="journey__year-anchor">
                <YearShuffle year={item.year} active={inView} delay={delay} />
                <h3>{item.title}</h3>
              </div>
              <div className="journey__card">
                <p>{item.description}</p>
              </div>
              <div className="journey__connector" aria-hidden="true" />
              <div className="journey__icon" aria-hidden="true">
                <Icon size={24} strokeWidth={1.8} />
              </div>
            </article>
          );
        })}
      </div>

      <div className="journey__mobile" aria-label="FINVIN company milestones">
        {milestones.map((item) => {
          const Icon = item.icon;
          return (
            <article className="journey__mobile-item" key={`mobile-${item.year}-${item.title}`}>
              <div className="journey__mobile-icon" aria-hidden="true">
                <Icon size={21} strokeWidth={1.8} />
              </div>
              <div className="journey__mobile-copy">
                <span className="journey__year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
