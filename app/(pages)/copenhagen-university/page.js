import KUBenefits from "@/app/(components)/pages/ku/ku_benefits";
import KUFeatures from "@/app/(components)/pages/ku/ku_features";
import KUHero from "@/app/(components)/pages/ku/ku_hero";
import KUProduct from "@/app/(components)/pages/ku/ku_product";
import KUCTA from "@/app/(components)/pages/ku/ku_cta";
import TrustedLogos from "@/app/(components)/pages/ku/trusted_logos";
import Footer from "@/app/(components)/universal/navigation/footer/footer";

export const metadata = {
  title: "Happenings | Gør det nemt at drive forening på KU",
  description: "Billetter. Medlemmer. Kommunikation. Alt samlet ét sted – helt gratis. Happenings er en gratis platform udviklet til foreninger som jeres.",
};

export default function CopenhagenUniversity() {
  return (
    <main>
      <KUHero />
      <KUProduct />
      <KUBenefits />
      <TrustedLogos />
      <KUFeatures />
      <KUCTA />
      <Footer />
    </main>
  );
}