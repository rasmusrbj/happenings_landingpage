import HeroLocal from "@/app/(components)/pages/business/local/hero";
import LocalPricing from "@/app/(components)/pages/business/local/pricing";
import Footer from "@/app/(components)/universal/navigation/footer/footer";

export default function Business() {
  return (
    <main>
      <HeroLocal />
      <LocalPricing />
      <Footer />
    </main>
  );
}
