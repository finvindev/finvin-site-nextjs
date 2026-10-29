"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import ImagePlaceholder from "../common/ImagePlaceholder";

const FOUNDERS = [
  {
    name: "Mohit Agarwal",
    role: "Founder & CEO",
    credentials: "CA · DISA · B.COM",
    bio: "Brings over a decade of experience in resolving distressed assets, with a strong track record in NPA resolution, financial restructuring and value creation across sectors. He has resolved more than 50 billion stress debt either under SARFAESI or IBC.",
    linkedin: "https://www.linkedin.com/in/mohit-agarwal-4a5b22a0/",
  },
  {
    name: "Nayan Agrawal",
    role: "Co-Founder",
    credentials: "CA · CFA · B.COM",
    bio: "Specialises in complex NPA resolution, insolvency and strategic asset recovery, with a deep understanding of financial markets and corporate finance.",
    photo: "/images/team/nayan-agarwal.png",
    linkedin: "https://www.linkedin.com/in/nayan-agrawal-b654a9116/",
  },
  {
    name: "Khushal Agarwal",
    role: "Co-Founder",
    credentials: "CA · B.COM",
    bio: "Leads the team in professional credits & information technology consultancy and has developed extensive expertise in assets, liabilities, risk, and sectoral analysis for banks and NBFCs.",
    photo: "/images/team/khushal-agarwal.png",
    linkedin: "https://www.linkedin.com/in/ca-khushal-agarwal-a5399092/",
  },
];

const LEADERSHIP = [
  {
    name: "Ram Singh Sethia",
    role: "FCA, Insolvency Professional",
    bio: "Worked at Bank of Baroda for 32 years in various positions and retired as Executive Director. Also worked in ECL Finance for 4 years and Retired as Senior Vice President. He has acted as a Resolution Professional in two CIRP Cases and successfully resolved one.",
    photo: "/images/team/R-S-Setia.jpeg",
    linkedin: "https://www.linkedin.com/in/ca-ram-singh-setia-57708653/",
  },
  {
    name: "Mayank Agarwal",
    role: "Junior Partner (CA, B.COM)",
    bio: "Began his professional career as a Credit Manager at an NBFC. He has developed significant expertise in distressed asset recovery. His key competencies include buy-side due diligence, consultancy to promoters during insolvency and managing operations related to the resolution of NPAs.",
    photo: "/images/team/Mayank-Photo.jpeg",
    linkedin: "https://www.linkedin.com/in/ca-mayank-agarwal-7ba013113/",
  },
  {
    name: "Shreyansh Jain",
    role: "FCA, Insolvency Professional",
    bio: "Partner at the CA firm Jain & Kachhawaha, established in 1987. With 15 years of expertise spanning Insolvency and Bankruptcy Law, audit, and taxation. He has worked across various industries, including jewellery, pharmaceuticals, textiles, paper manufacturing, machine manufacturing, and logistics. He has successfully resolved two Corporate Insolvency Resolution Process (CIRP) cases and one liquidation case.",
    photo: "/images/team/Shreyansh-jain.jpeg",
    linkedin: "https://www.linkedin.com/in/shreyansh-jain-68154213/",
  },
  {
    name: "Pankaj Bhattad",
    role: "FCA, Insolvency Professional",
    bio: "Partner at M/s Bhattad and Company. He has served as GST consultant on various projects for Banks / Financial Institutions. Accounting & Fraud Audit for Allahabad Bank and Barclays Bank conducted under GST (RBI) for ICAI. In addition, he is proficient in preparing project reports and managing operations.",
    photo: "/images/team/Pankaj.png",
    linkedin: "https://www.linkedin.com/in/ca-ip-pankaj-bhattad-03156067/",
  },
  {
    name: "Nikhil Agarwal",
    role: "FCA, Insolvency Professional",
    bio: "A highly accomplished Chartered Accountant with over 5 years of experience in auditing, consulting, and financial due diligence. Nikhil has a proven track record of delivering exceptional results at top-tier accounting firms, including Ernst & Young. He has also successfully transitioned into entrepreneurship, establishing manufacturing units in Surat and Vapi.",
    photo: "/images/team/nikhil-agarwal.jpeg",
    linkedin: "https://www.linkedin.com/in/ca-nikhil-agarwal-a4794892/",
  },
  {
    name: "Milap Jain",
    role: "FCA, Insolvency Professional",
    bio: "A financial expert with over 20 years of experience, he has worked across the finance industry, including NBFCs, stock broking, and asset and wealth management. His background includes 8 years as an independent Chartered Accountant and key roles at DBS Cholamandalam, Motilal Oswal, DSP Merrill Lynch, and KIFS Group. His expertise spans financial management, audits, regulatory compliance, budgeting, and business analysis.",
    photo: "/images/team/Milap.jpg",
    linkedin: "https://www.linkedin.com/in/milaap-jain-24598a1b/",
  },
];

const BIO_PREVIEW_LIMIT = 250;

function TeamCard({ person }) {
  const [expanded, setExpanded] = useState(false);
  const isLongBio = person.bio.length > BIO_PREVIEW_LIMIT;

  return (
    <div className="card-lift flex items-stretch gap-5 bg-white border border-[var(--line)] rounded-xl p-5 sm:p-6 min-h-[310px] h-full">
      {person.photo ? (
        <div className="relative w-28 sm:w-32 h-[205px] sm:h-[215px] shrink-0 overflow-hidden rounded-lg">
          <Image
            src={person.photo}
            alt={person.name}
            fill
            sizes="130px"
            className="object-cover"
          />
        </div>
      ) : (
        <ImagePlaceholder
          label={`Photo — ${person.name}`}
          className="w-28 sm:w-32 h-[205px] sm:h-[215px] shrink-0 rounded-lg"
        />
      )}
      <div className="flex flex-col gap-2 min-w-0 flex-1">
        <h3 className="font-display font-bold text-[1.1rem] text-[var(--ink)] leading-tight">
          {(() => {
            const [first, ...rest] = person.name.toUpperCase().split(" ");
            return (
              <>
                {first}
                {rest.length > 0 && (
                  <>
                    <br />
                    {rest.join(" ")}
                  </>
                )}
              </>
            );
          })()}
        </h3>
        <p className="text-sm font-bold text-[var(--brand)]">{person.role}</p>
        {person.credentials && (
          <p className="text-xs font-medium text-[var(--brand-2)]">{person.credentials}</p>
        )}
        <p
          className={`text-[0.7rem] text-[var(--brand-2)] leading-snug ${
            isLongBio && !expanded ? "line-clamp-5 sm:line-clamp-6" : ""
          }`}
        >
          {person.bio}
        </p>
        {isLongBio && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="self-start text-[0.65rem] font-semibold text-[var(--brand)] -mt-1"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
        <a
          href={person.linkedin || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto pt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand)]"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-[var(--brand)]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.38v4.57h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z" />
            </svg>
          </span>
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState("founders");
  const people = tab === "founders" ? FOUNDERS : LEADERSHIP;

  const foundersTabRef = useRef(null);
  const leadershipTabRef = useRef(null);
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [ringTop, setRingTop] = useState(0);
  const pendingScrollY = useRef(null);

  const handleTabClick = (nextTab) => {
    pendingScrollY.current = window.scrollY;
    setTab(nextTab);
  };

  useLayoutEffect(() => {
    if (pendingScrollY.current !== null) {
      window.scrollTo(0, pendingScrollY.current);
      pendingScrollY.current = null;
    }
  }, [tab]);

  useEffect(() => {
    const team = searchParams.get("team");
    if (team === "founders" || team === "leadership") setTab(team);
  }, [searchParams]);

  useEffect(() => {
    const updateIndicator = () => {
      const node = tab === "founders" ? foundersTabRef.current : leadershipTabRef.current;
      if (node) {
        setIndicator({ left: node.offsetLeft, width: node.offsetWidth });
      }
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [tab]);

  useEffect(() => {
    const updateRingTop = () => {
      if (introRef.current && sectionRef.current) {
        const introRect = introRef.current.getBoundingClientRect();
        const sectionRect = sectionRef.current.getBoundingClientRect();
        setRingTop(introRect.bottom - sectionRect.top - 240);
      }
    };
    updateRingTop();
    window.addEventListener("resize", updateRingTop);
    return () => window.removeEventListener("resize", updateRingTop);
  }, []);

  return (
    <section
      id="leadership-team"
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden scroll-mt-28"
      style={{ overflowAnchor: "none" }}
    >
      <img
        src="/decor/circle-rings.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -left-10 w-[260px] opacity-70"
        style={{ top: ringTop }}
      />
      <img
        src="/decor/circle-rings.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-10 -top-10 w-[220px] opacity-70 scale-x-[-1]"
      />

      <div className="relative max-w-[1366px] mx-auto px-6 sm:px-10 py-20">
        <div ref={introRef}>
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-start mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--ink)] max-w-md">
            The minds behind <span className="text-[var(--brand)]">FINVIN&apos;s expertise.</span>
          </h2>
          <div className="hidden md:block w-px self-stretch bg-[var(--line)]" />
          <p className="text-sm text-[var(--muted)] max-w-sm">
            Finvin was founded by Mohit Agarwal in October 2020 with a vision
            to create a comprehensive solution for resolving Non-Performing
            Assets (NPAs). Our professionals come from diverse backgrounds and
            qualifications, including law firms, banks, NBFCs, ARCs, and
            distressed funds.
          </p>
        </div>

        <div className="relative inline-flex items-center gap-1 rounded-full border border-[var(--line)] p-1 mb-10">
          <div
            aria-hidden="true"
            className="absolute inset-y-1 rounded-full bg-[var(--navy)] transition-all duration-300 ease-out"
            style={{ left: indicator.left, width: indicator.width }}
          />
          <button
            ref={foundersTabRef}
            type="button"
            onClick={() => handleTabClick("founders")}
            className={`relative z-10 px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors duration-300 ${
              tab === "founders"
                ? "text-white"
                : "text-[var(--muted)] hover:text-[var(--ink)]"
            }`}
          >
            Founders
          </button>
          <button
            ref={leadershipTabRef}
            type="button"
            onClick={() => handleTabClick("leadership")}
            className={`relative z-10 px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors duration-300 ${
              tab === "leadership"
                ? "text-white"
                : "text-[var(--muted)] hover:text-[var(--ink)]"
            }`}
          >
            Leadership Team
          </button>
        </div>
        </div>

        <div
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {people.map((person) => (
            <TeamCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
}
