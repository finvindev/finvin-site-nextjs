"use client";

import { useState } from "react";
import Image from "next/image";
import ImagePlaceholder from "../common/ImagePlaceholder";
import { cldImage } from "../../lib/cloudinary";

const FOUNDERS = [
  {
    name: "Mohit Agarwal",
    role: "Founder & CEO",
    credentials: "CA · DISA · B.COM",
    bio: "Brings over a decade of experience in resolving distressed assets, with a strong track record in NPA resolution, financial restructuring and value creation across sectors. He has resolved more than 50 billion stress debt either under SARFAESI or IBC.",
  },
  {
    name: "Nayan Agarwal",
    role: "Co-Founder",
    credentials: "CA · CFA · B.COM",
    bio: "Specialises in complex NPA resolution, insolvency and strategic asset recovery, with a deep understanding of financial markets and corporate finance.",
    photo: cldImage("finvin/images/team/nayan-agarwal"),
  },
  {
    name: "Khushal Agarwal",
    role: "Co-Founder",
    credentials: "CA · B.COM",
    bio: "Leads the team in professional credits & information technology consultancy and has developed extensive expertise in assets, liabilities, risk, and sectoral analysis for banks and NBFCs.",
    photo: cldImage("finvin/images/team/khushal-agarwal"),
  },
];

const LEADERSHIP = [
  {
    name: "Ram Singh Sethia",
    role: "FCA, Insolvency Professional",
    bio: "Worked at Bank of Baroda for 32 years in various positions and retired as Executive Director. Also worked in IDBI, Finance for Industry and Retired as Senior Vice President. He has acted as a Resolution Professional in two CIRP Cases and successfully resolved one.",
    photo: cldImage("finvin/images/team/r-s-setia"),
  },
  {
    name: "Mayank Agarwal",
    role: "Junior Partner (CA, B.COM)",
    bio: "Began his professional career as a Credit Manager at an NBFC. He has developed significant expertise in distressed asset recovery. His key competencies include buy-side due diligence, consultancy to promoters during insolvency and managing operations related to the resolution of NPAs.",
    photo: cldImage("finvin/images/team/mayank-photo"),
  },
  {
    name: "Shreyansh Jain",
    role: "FCA, Insolvency Professional",
    bio: "Partner at the CA firm Jain & Kochhandani, established in 1987. With 15 years of experience spanning insolvency and bankruptcy law audit, he has worked across various services including property, pharmaceuticals, textiles, paper manufacturing, real estate and infrastructure. He has successfully resolved three Corporate Insolvency Resolution Process (CIRP) cases and one liquidation.",
    photo: cldImage("finvin/images/team/shreyansh-jain"),
  },
  {
    name: "Pankaj Bhattad",
    role: "FCA, Insolvency Professional",
    bio: "Partner at M L Bhattad and Company. He has served as GST consultant on various projects for Banks / Financial Institutions. Accounting & Fraud Audit for Allahabad Bank and Barclays Bank conducted under GST (RBI) for ICAI. In addition, he is proficient in preparing project reports and managing operations.",
  },
  {
    name: "Nikhil Agarwal",
    role: "FCA, Insolvency Professional",
    bio: "A highly accomplished Chartered Accountant with over 9 years of experience in auditing, consulting, and financial due diligence. Nikhil has a proven track record of delivering exceptional results at top-tier accounting firms. He has also successfully transitioned into entrepreneurship, establishing manufacturing units in Surat and Vapi.",
    photo: cldImage("finvin/images/team/nikhil-agarwal"),
  },
  {
    name: "Milap Jain",
    role: "FCA, Insolvency Professional",
    bio: "A financial expert with over 20 years of experience across the finance industry. He has worked across the retail banking, stock broking, asset and wealth management. His background includes 8 years as an independent Chartered Accountant and has expertise across financial management, audits, regulatory compliance, budgeting and business analysis.",
  },
];

function TeamCard({ person }) {
  return (
    <div className="card-lift flex items-stretch min-h-[230px] bg-white border border-[var(--line)] rounded-xl overflow-hidden">
      {person.photo ? (
        <div className="relative w-[38%] shrink-0 self-stretch">
          <Image
            src={person.photo}
            alt={person.name}
            fill
            sizes="200px"
            className="object-cover"
          />
        </div>
      ) : (
        <ImagePlaceholder
          label={`Photo — ${person.name}`}
          className="w-[38%] shrink-0 self-stretch"
        />
      )}
      <div className="flex flex-col justify-center gap-2 px-5 py-6 min-w-0">
        <h3 className="font-display font-bold text-[1.1rem] text-[var(--ink)] leading-tight">
          {person.name.toUpperCase()}
        </h3>
        <p className="text-sm font-bold text-[var(--brand)]">{person.role}</p>
        {person.credentials && (
          <p className="text-xs font-medium text-[var(--brand-2)]">{person.credentials}</p>
        )}
        <p className="text-xs text-[var(--brand-2)] leading-relaxed line-clamp-5">
          {person.bio}
        </p>
        <a
          href="#"
          className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand)]"
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
  const [tab, setTab] = useState("founders");
  const people = tab === "founders" ? FOUNDERS : LEADERSHIP;

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <img
        src={cldImage("finvin/decor/circle-rings")}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -left-10 bottom-0 w-[260px] opacity-70"
      />
      <img
        src={cldImage("finvin/decor/circle-rings")}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-10 -top-10 w-[220px] opacity-70 scale-x-[-1]"
      />

      <div className="relative max-w-[1366px] mx-auto px-6 sm:px-10 py-20">
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

        <div className="inline-flex items-center gap-1 rounded-full border border-[var(--line)] p-1 mb-10">
          <button
            type="button"
            onClick={() => setTab("founders")}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors ${
              tab === "founders"
                ? "bg-[var(--navy)] text-white"
                : "text-[var(--muted)] hover:text-[var(--ink)]"
            }`}
          >
            Founders
          </button>
          <button
            type="button"
            onClick={() => setTab("leadership")}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors ${
              tab === "leadership"
                ? "bg-[var(--navy)] text-white"
                : "text-[var(--muted)] hover:text-[var(--ink)]"
            }`}
          >
            Leadership Team
          </button>
        </div>

        <div
          className={`grid gap-6 ${
            tab === "founders" ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {people.map((person) => (
            <TeamCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
}
