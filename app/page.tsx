import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import WhyMe from "@/components/WhyMe";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Brands from "@/components/Brands";
import Process from "@/components/Process";
import Software from "@/components/Software";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative w-full bg-[#0a0a0a] text-[#f5f5f5]">

      {/* Hero: Scroll-based canvas animation */}
      <ScrollyCanvas />

      {/* Content sections — overlaps into canvas */}
      <div className="relative z-20 -mt-[60vh] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[100vh] bg-gradient-to-b from-transparent via-[#0a0a0a]/90 to-[#0a0a0a] pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col relative z-10 mt-[40vh] space-y-32 md:space-y-48 pointer-events-auto">
          <About />
          <WhyMe />
          <Services />
          <Experience />
          <Portfolio />
        </div>

        {/* Brands marquee — full width */}
        <div className="py-24 md:py-32 overflow-hidden pointer-events-auto">
          <Brands />
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col space-y-32 md:space-y-48 pb-32 pointer-events-auto">
          <Process />
          <Software />
          <Stats />
          <Testimonials />
          <Contact />
        </div>
      </div>
    </main>
  );
}
