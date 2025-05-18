import TeamCard from "@/components/common/TeamCard";
import { founders, leadership, advisors } from "@/data/teamData";

export default function WhoWeAre() {
  return (
    <main className="section-main">
      <p className="mb-4 text-lg">
        Finvin was founded by Mohit Agarwal in October 2020 with a vision to
        create a comprehensive solution for resolving Non-Performing Assets
        (NPAs). Our professionals come from diverse backgrounds and
        qualifications including law firms, banks, NBFCs, ARCs, and distressed
        funds, enabling us to offer holistic solutions in the stressed asset
        ecosystem.
      </p>

      <h2 className="section-subtitle mb-3">Founders</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {founders.map((member, idx) => (
          <TeamCard key={idx} {...member} />
        ))}
      </div>

      <h2 className="section-subtitle mb-3">Leadership</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {leadership.map((member, idx) => (
          <TeamCard key={idx} {...member} />
        ))}
      </div>

      <h2 className="section-subtitle mb-3">Senior Advisors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {advisors.map((member, idx) => (
          <TeamCard key={idx} {...member} />
        ))}
      </div>
    </main>
  );
}
