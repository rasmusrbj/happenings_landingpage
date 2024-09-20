import GovHero from "@/app/(components)/pages/gov/gov_hero";
import GovUSP from "@/app/(components)/pages/gov/gov_usp";
import Footer from "@/app/(components)/universal/navigation/footer/footer";
import { metadata } from "@/app/layout";

export default function Gov() {
  return (
    <main>
      <GovHero />
      <GovUSP />
      <Footer />
    </main>
  );
}
