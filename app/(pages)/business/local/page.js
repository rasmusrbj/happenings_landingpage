import BenefitsLocal from "@/app/(components)/pages/business/local/benefits";
import HeroLocal from "@/app/(components)/pages/business/local/hero";
import HowItWorksLocal from "@/app/(components)/pages/business/local/how_it_works";
import IncentivesLocal from "@/app/(components)/pages/business/local/incentives";
import LocalPricing from "@/app/(components)/pages/business/local/pricing";
import Footer from "@/app/(components)/universal/navigation/footer/footer";

export default function Business() {
  return (
    <main>
      <HeroLocal />
      <HowItWorksLocal />
      <IncentivesLocal />
      <LocalPricing />
      <BenefitsLocal />
      <Footer />
    </main>
  );
}
