import LeadersCTA from "@/app/(components)/pages/leaders/leaders_cta";
import LeadersFeatures from "@/app/(components)/pages/leaders/leaders_features";
import LeadersPromo from "@/app/(components)/pages/leaders/leaders_promo";
import Footer from "@/app/(components)/pages/navigation/footer/footer";

export default function Leaders() {
  return (
    <main>
      <LeadersFeatures />
      <LeadersPromo />
      <LeadersCTA />
      <Footer />
    </main>
  );
}
