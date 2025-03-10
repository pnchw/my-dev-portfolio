import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skill from "@/components/Skill";
import LogoAnimation from "@/components/LogoAnimation";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="bg-black">  
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <LogoAnimation />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
