import HomeBottomCTA from "./(components)/pages/home/home_bottom_cta";
import HomeCTA from "./(components)/pages/home/home_cta";
import HomeFAQ from "./(components)/pages/home/home_faq";
import HomeHero from "./(components)/pages/home/home_hero";
import HomeProduct from "./(components)/pages/home/home_product";
import HomeSegments from "./(components)/pages/home/home_segments";
import HomeTestimonials from "./(components)/pages/home/home_testimonials";
import HomeWhy from "./(components)/pages/home/home_why";
import Footer from "./(components)/universal/navigation/footer/footer";
import { openGraphImage } from "./shared-metadata";

export const metadata = {
  title: "Happenings",
  description: "The best place to find the latest news and updates",
  keywords:
    "news, updates, events, happenings, happenings.nl, happenings.dk, happenings.com",
  image: "./images/home_hero_image.webp",
  openGraph: {
    ...openGraphImage,
  },
};

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
