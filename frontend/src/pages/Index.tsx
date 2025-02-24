import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Values from "@/components/Values";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Awards from "@/components/Awards";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Sustainability from "@/components/Sustainability";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Values />
      <Collections />
      <Sustainability />
      <About />
      <Partners />
      <Testimonials />
      <Awards />
      <Footer />
    </div>
  );
};

export default Index;
