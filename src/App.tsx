import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AgencyIntro from "./components/AgencyIntro";
import Solutions from "./components/Solutions";
import Methodology from "./components/Methodology";
import Stats from "./components/Stats";
import Diferenciais from "./components/Diferenciais";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Ecossistema from "./components/Ecossistema";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#080c14] text-gray-200 antialiased overflow-x-hidden selection:bg-brand-blue/30 selection:text-white">
      {/* Dynamic scrolling header navbar layout */}
      <Navbar />

      <main className="relative z-10">
        {/* Page 1: Hero Cover Section with waving backgrounds */}
        <Hero />

        {/* Page 2: High conversion Intro block container */}
        <AgencyIntro />

        {/* Page 3: Our prime UI solutions laptop phone dashboard grid */}
        <Solutions />

        {/* Page 4: Interactive Methodology (Diagnóstico -> Otimização) with checklists */}
        <Methodology />

        {/* Page 5: High-Performance Statistics counters */}
        <Stats />

        {/* Page 6: Corporate differentials with meeting mockup visuals */}
        <Diferenciais />

        {/* Page 7: Live filtered Case Studies portfolio */}
        <Portfolio />

        {/* Page 8: Floating Testimonials block from CEOs/Directors */}
        <Testimonials />

        {/* Page 9: Connected Nodes Ecossistema interactive Constellation map */}
        <Ecossistema />

        {/* Page 10: Special contact form with proposal simulator */}
        <Contact />
      </main>

      {/* Semantic compliance footer information */}
      <Footer />
    </div>
  );
}
