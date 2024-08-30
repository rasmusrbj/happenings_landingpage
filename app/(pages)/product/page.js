import ProductHero from "@/app/(components)/pages/product/product_hero";
import ProductSpecifications from "@/app/(components)/pages/product/product_specifications";
import Footer from "@/app/(components)/universal/navigation/footer/footer";

export default function Product() {
  return (
    <main className="h-full">
      <ProductHero />
      <ProductSpecifications />
      <Footer />
    </main>
  );
}
