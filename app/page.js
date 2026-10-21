import Hero from "../components/home/Hero";
import ImpactSection from "../components/home/ImpactSection";
import TeamSection from "../components/home/TeamSection";
import TrustedBy from "../components/home/TrustedBy";
import EstateDealsSection from "../components/home/EstateDealsSection";
import CTABanner from "../components/home/CTABanner";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactSection />
      <TeamSection />
      <TrustedBy />
      <EstateDealsSection />
      <CTABanner />
    </>
  );
}
