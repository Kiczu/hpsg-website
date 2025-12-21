import HeroSlider from "@/components/HeroSlider";
import ProductCategories from "@/components/ProductCategories";
import ServicesSection from "@/components/ServicesSection";
import Slider from "@/components/Slider";
import StatsSection from "@/components/StatsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      <ProductCategories />
      <Slider />
      <ServicesSection />
      <BlogSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
