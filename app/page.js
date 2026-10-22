import { Suspense } from "react";
import Hero from "../components/home/Hero";
import ImpactSection from "../components/home/ImpactSection";
import TeamSection from "../components/home/TeamSection";
import TrustedBy from "../components/home/TrustedBy";
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
      <Suspense fallback={null}>
        <TeamSection />
      </Suspense>
      <TrustedBy />
      <CTABanner />
    </>
  );
}
