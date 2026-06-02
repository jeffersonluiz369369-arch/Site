import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { HERO_CONTENT } from "../data";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 md:px-8 bg-[#080c14]"
    >
      {/* Visual background template grids & dynamic wave lines simulating Page 1 */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {/* Fine background thin lines of high-tech blueprint style */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Soft elegant glowing gradient background spots */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-peach/5 rounded-full blur-[140px]" />

        {/* Elegant wave SVG lines matching the PDF ambient background */}
        <svg 
          className="absolute inset-0 w-full h-full text-brand-peach/10" 
          viewBox="0 0 1440 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M-100,300 C300,500 600,100 1100,450 C1300,550 1500,400 1600,350" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeDasharray="5 5" 
          />
          <path 
            d="M-100,340 C300,540 600,140 1100,490 C1300,590 1500,440 1600,390" 
            stroke="currentColor" 
            strokeWidth="2" 
          />
          <path 
            d="M-100,260 C400,360 700,200 1200,350 C1400,410 1500,300 1600,290" 
            stroke="var(--color-brand-blue)" 
            strokeWidth="1" 
            strokeOpacity="0.2"
          />
        </svg>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl text-center mx-auto">
        {/* Micro agency tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full border border-brand-blue/30 bg-brand-blue/5 text-brand-blue text-xs font-mono tracking-wider uppercase"
        >
          <Sparkles size={13} className="text-brand-peach animate-pulse" />
          ESTRATÉGIA & DESIGN HIGH-PERFORMANCE
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold font-display tracking-tight text-white mb-6 leading-[1.1] md:leading-[1.15]"
        >
          <span className="text-brand-peach glow-peach">{HERO_CONTENT.titleStart}</span>
          {HERO_CONTENT.titleEnd}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-400 text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {HERO_CONTENT.subtitle}
        </motion.p>

        {/* Interaction CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <button
            onClick={() => scrollToSection("contato")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-base font-semibold tracking-wide shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40 duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            id="hero-btn-primary"
          >
            Quero Crescer Agora
            <ArrowRight size={18} />
          </button>

          <button
            onClick={() => scrollToSection("portfolio")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-blue-500/35 hover:border-brand-blue bg-transparent hover:bg-brand-blue/5 text-gray-300 hover:text-white text-base font-medium transition-all duration-300 cursor-pointer"
            id="hero-btn-secondary"
          >
            Ver Portfólio
          </button>
        </motion.div>
      </div>

      {/* Decorative clean ambient indicator at the page margin */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce text-xs font-mono text-gray-500">
        <span>Role para Explorar</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-brand-peach to-transparent" />
      </div>
    </section>
  );
}
