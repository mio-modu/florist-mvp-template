import Hero from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <AboutSection />
      <ProductsSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}

export default App;
