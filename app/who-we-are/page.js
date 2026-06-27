import TeamCard from "@/components/common/TeamCard";
import { founders, leadership, advisors } from "@/data/teamData";

function SectionHeading({ label, title }) {
  return (
    <div className="mb-10">
      <span className="inline-block text-xs font-bold text-blue-600 tracking-widest uppercase mb-2">
        {label}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
      <div className="mt-3 w-12 h-1 rounded-full" style={{ background: "linear-gradient(90deg, #2563eb, #60a5fa)" }} />
    </div>
  );
}

export default function WhoWeAre() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section
        className="relative w-full text-white overflow-hidden py-28"
        style={{
          background: "linear-gradient(135deg, #0B1929 0%, #1a1040 55%, #0B1929 100%)",
        }}
      >
        <div className="absolute inset-0 hero-dot-pattern" />
        <div
          className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(14,165,233,0.25) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 text-center space-y-5">
          <span className="inline-block text-xs font-bold text-purple-300 tracking-widest uppercase">
            Our Team
          </span>
          <h1 className="text-4xl md:text-6xl font-bold">Who We Are</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            A team of seasoned professionals united by a common purpose —
            transforming distressed assets into opportunities
          </p>
        </div>
      </section>

      {/* ── Company story ── */}
      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold text-blue-600 tracking-widest uppercase mb-3">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Built on Expertise,<br />
                Driven by Purpose
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Finvin was founded by Mohit Agarwal in October 2020 with a
                vision to create a comprehensive solution for resolving
                Non-Performing Assets (NPAs). Our professionals come from
                diverse backgrounds and qualifications including law firms,
                banks, NBFCs, ARCs, and distressed funds.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This diversity enables us to offer holistic solutions in the
                stressed asset ecosystem — from regulatory advisory to
                ground-level execution and digital asset monetization.
              </p>
            </div>

            {/* Key numbers */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "₹50B+", label: "Stressed Debt Resolved by Founders", color: "#2563eb", bg: "#eff6ff" },
                { value: "Since 2020", label: "Building India's Premier NPA Solutions Firm", color: "#7c3aed", bg: "#f5f3ff" },
                { value: "30+", label: "Among First 30 IPE Licenses from IBBI", color: "#0891b2", bg: "#ecfeff" },
                { value: "Multi-City", label: "Presence Across 6 Indian Cities", color: "#059669", bg: "#ecfdf5" },
              ].map(({ value, label, color, bg }) => (
                <div
                  key={label}
                  className="rounded-2xl p-6"
                  style={{ background: bg, border: `1px solid ${color}22` }}
                >
                  <div className="text-2xl font-bold mb-2" style={{ color }}>
                    {value}
                  </div>
                  <div className="text-sm text-gray-600 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team sections ── */}
      <section className="py-20" style={{ background: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto px-4 space-y-20">

          {/* Founders */}
          <div>
            <SectionHeading label="Leadership" title="Founders" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {founders.map((member, idx) => (
                <TeamCard key={idx} {...member} />
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div>
            <SectionHeading label="Core Team" title="Leadership" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leadership.map((member, idx) => (
                <TeamCard key={idx} {...member} />
              ))}
            </div>
          </div>

          {/* Advisors */}
          <div>
            <SectionHeading label="Guidance" title="Senior Advisors" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advisors.map((member, idx) => (
                <TeamCard key={idx} {...member} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
