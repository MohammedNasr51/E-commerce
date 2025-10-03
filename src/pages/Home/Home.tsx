import HeroSection from "../../components/HeroSection/HeroSection";
import ProductsSection from "../../components/Products/ProductsSection";
import FirstBanner from "../../components/banners/FirstBanner";
import SecondBanner from "../../components/banners/SecondBanner";
import ThirdBanner from "../../components/banners/ThirdBanner";

function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <ProductsSection />
      <FirstBanner />
      <ProductsSection />
      <ProductsSection />
      <SecondBanner />
      <ProductsSection />
      <ProductsSection />
      <ThirdBanner />
      <ProductsSection />
      <ProductsSection />
    </>
  );
}

export default Home;
