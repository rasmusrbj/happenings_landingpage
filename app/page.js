import HomeBottomCTA from "./(components)/pages/home/home_bottom_cta";
import HomeCTA from "./(components)/pages/home/home_cta";
import HomeFAQ from "./(components)/pages/home/home_faq";
import HomeHero from "./(components)/pages/home/home_hero";
import HomeProduct from "./(components)/pages/home/home_product";
import HomeSegments from "./(components)/pages/home/home_segments";
import HomeTestimonials from "./(components)/pages/home/home_testimonials";
import HomeWhy from "./(components)/pages/home/home_why";
import Footer from "./(components)/pages/navigation/footer/footer";

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
