import EventsHero from "../../components/events/EventsHero";
import GoaOffsite from "../../components/events/GoaOffsite";
import WallOfFame from "../../components/events/WallOfFame";
import LifeAtFinvin from "../../components/events/LifeAtFinvin";
import FYReview from "../../components/events/FYReview";
import CareerSection from "../../components/events/CareerSection";

export const metadata = {
  title: "Events | Finvin Turnaround & Restructuring Pvt. Ltd.",
  description:
    "Life at Finvin — team offsites, celebrations, culture and open career opportunities.",
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <GoaOffsite />
      <WallOfFame />
      <LifeAtFinvin />
      <FYReview />
      <CareerSection />
    </>
  );
}
