import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Agência", targetId: "agencia" },
    { label: "Soluções", targetId: "solucoes" },
    { label: "Metodologia", targetId: "metodologia" },
    { label: "Diferenciais", targetId: "diferenciais" },
    { label: "Portfólio", targetId: "portfolio" },
    { label: "Contato", targetId: "contato" }
  ];

  const scrollToElement = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? "bg-[#080c14]/90 border-b border-white/5 backdrop-blur-md py-4" 
        : "bg-transparent py-6"
    }`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Elegant display Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1.5 focus:outline-none cursor-pointer group"
        >
          <span className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white group-hover:text-brand-peach duration-350">
            Gêneses <span className="text-brand-blue">&mdash;</span>
          </span>
          <span className="text-[10px] font-mono tracking-widest uppercase bg-brand-blue/10 text-brand-blue px-2 py-0.5 rounded group-hover:bg-brand-peach/10 group-hover:text-brand-peach duration-350">
            AGENCY
          </span>
        </button>

        {/* Desktop items navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.targetId}
              onClick={() => scrollToElement(item.targetId)}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action item CTA (Desktop only) */}
        <div className="hidden md:block">
          <button 
            onClick={() => scrollToElement("contato")}
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-brand-peach/40 hover:border-brand-peach text-brand-peach hover:text-white bg-transparent hover:bg-brand-peach/10 rounded-lg text-xs font-semibold uppercase tracking-wider duration-300 cursor-pointer"
          >
            Começar Agora
            <ArrowUpRight size={12} />
          </button>
        </div>

        {/* Hamburger triggers (Mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-400 hover:text-white rounded-lg focus:outline-none transition-all cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Dynamic mobile collapse drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0f1d] border-b border-white/5"
          >
            <div className="px-6 py-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.targetId}
                  onClick={() => scrollToElement(item.targetId)}
                  className="block w-full text-left font-medium text-gray-300 hover:text-brand-peach py-2 text-base transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={() => scrollToElement("contato")}
                  className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white text-center font-bold font-display py-3 rounded-lg text-sm uppercase tracking-wide duration-300"
                >
                  Diagnóstico Gratuito
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
export interface MenuProps {}
export interface XProps {}
export interface ArrowUpRightProps {}
