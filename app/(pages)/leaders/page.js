import LeadersCTA from "@/app/(components)/leaders/leaders_cta";
import LeadersFeatures from "@/app/(components)/leaders/leaders_features";
import LeadersPromo from "@/app/(components)/leaders/leaders_promo";
import Footer from "@/app/(components)/navigation/footer/footer";

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
