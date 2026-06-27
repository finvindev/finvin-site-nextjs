import TeamCard from "@/components/common/TeamCard";
import { founders, leadership, advisors } from "@/data/teamData";

function SectionHeading({ label, title }) {
  return (
    <div className="mb-10">
      <span className="eyebrow">{label}</span>
      <h2 className="text-2xl md:text-3xl font-bold font-display mt-2" style={{ color: "var(--ink)" }}>{title}</h2>
      <div className="rule-gold mt-3" />
    </div>
  );
}

export default function WhoWeAre() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden pt-40 pb-20" style={{ background: "var(--paper)" }}>
        <div className="absolute inset-0 paper-grid opacity-70" />
        <div
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(176,122,44,0.13) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div className="relative max-w-6xl mx-auto px-5 text-center space-y-5">
          <span className="eyebrow">Our Team</span>
          <h1 className="text-4xl md:text-6xl font-bold font-display" style={{ color: "var(--ink)" }}>Who We Are</h1>
          <div className="rule-gold mx-auto" />
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
            A team of seasoned professionals united by a common purpose —
            transforming distressed assets into opportunities.
          </p>
        </div>
      </section>

      {/* ── Company story ── */}
      <section className="w-full py-20" style={{ background: "var(--surface)", borderTop: "1px solid var(--line)" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-6 leading-tight" style={{ color: "var(--ink)" }}>
                Built on expertise,<br />
                <span className="italic" style={{ color: "var(--gold)" }}>driven by purpose</span>
              </h2>
              <p className="leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
                Finvin was founded by Mohit Agarwal in October 2020 with a
                vision to create a comprehensive solution for resolving
                Non-Performing Assets (NPAs). Our professionals come from
                diverse backgrounds and qualifications including law firms,
                banks, NBFCs, ARCs, and distressed funds.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                This diversity enables us to offer holistic solutions in the
                stressed asset ecosystem — from regulatory advisory to
                ground-level execution and digital asset monetization.
              </p>
            </div>

            {/* Key numbers */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "₹50B+", label: "Stressed Debt Resolved by Founders" },
                { value: "Since 2020", label: "Building India's Premier NPA Solutions Firm" },
                { value: "30+", label: "Among First 30 IPE Licenses from IBBI" },
                { value: "Multi-City", label: "Presence Across 6 Indian Cities" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl p-6"
                  style={{ background: "var(--paper)", border: "1px solid var(--line)" }}
                >
                  <div className="text-2xl font-bold font-display mb-2" style={{ color: "var(--ink)" }}>{value}</div>
                  <div className="text-sm leading-snug" style={{ color: "var(--muted)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team sections ── */}
      <section className="py-20" style={{ background: "var(--paper)" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-6 space-y-20">
          <div>
            <SectionHeading label="Leadership" title="Founders" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {founders.map((member, idx) => (
                <TeamCard key={idx} {...member} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeading label="Core Team" title="Leadership" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leadership.map((member, idx) => (
                <TeamCard key={idx} {...member} />
              ))}
            </div>
          </div>

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
