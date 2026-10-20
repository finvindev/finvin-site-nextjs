import EventsHero from "../../components/events/EventsHero";
import GoaOffsite from "../../components/events/GoaOffsite";
import WallOfFame from "../../components/events/WallOfFame";
import LifeAtFinvin from "../../components/events/LifeAtFinvin";
import FYReview from "../../components/events/FYReview";
import CareerSection from "../../components/events/CareerSection";

const PAGE_TITLE = "Events";
const PAGE_DESCRIPTION =
  "Life at Finvin — team offsites, celebrations, culture and open career opportunities.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/events",
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
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
