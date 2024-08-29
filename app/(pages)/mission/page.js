import MissionCTA from "@/app/(components)/pages/mission/mission_cta";
import MissionHero from "@/app/(components)/pages/mission/mission_hero";
import Footer from "@/app/(components)/universal/navigation/footer/footer";

export default function Leaders() {
  return (
    <main>
      <MissionHero />
      <MissionCTA />
      <Footer />
    </main>
  );
}
