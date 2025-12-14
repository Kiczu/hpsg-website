import HeroSlider from "@/components/HeroSlider";
import ProductCategories from "@/components/ProductCategories";
import ServicesSection from "@/components/ServicesSection";
import Slider from "@/components/Slider";
import StatsSection from "@/components/StatsSection";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      <ProductCategories />
      <Slider />
      <ServicesSection />
    </>
  );
};

export default HomePage;
