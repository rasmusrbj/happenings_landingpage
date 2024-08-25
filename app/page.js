import HomeHero from "./(components)/home/home_hero";
import HomeWhy from "./(components)/home/home_why";
import Footer from "./(components)/navigation/footer/footer";
import HomeStats from "./(components)/home/home_stats";
import HomeTestimonials from "./(components)/home/home_testimonials";
import HomeCTA from "./(components)/home/home_cta";
import HomeFAQ from "./(components)/home/home_faq";
import HomeSegments from "./(components)/home/home_segments";
import HomeBottomCTA from "./(components)/home/home_bottom_cta";
import HomeProduct from "./(components)/home/home_product";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeWhy />
      <HomeSegments />
      <HomeTestimonials />
      <HomeCTA />
      <HomeFAQ />
      <HomeProduct />
      <HomeBottomCTA />
      <Footer />
    </main>
  );
}
