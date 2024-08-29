import AboutHero from "@/app/(components)/pages/about/about_hero";
import AboutPublications from "@/app/(components)/pages/about/about_publications";
import HomeStats from "@/app/(components)/pages/home/home_stats";
import Footer from "@/app/(components)/universal/navigation/footer/footer";

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutPublications />
      <HomeStats />
      <Footer />
    </main>
  );
}
