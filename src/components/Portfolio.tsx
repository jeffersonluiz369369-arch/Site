import { Grid, Eye, CheckSquare, Target } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PORTFOLIO_PROJECTS } from "../data";

type FilterCategory = "todos" | "site" | "app" | "marketing" | "branding";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("todos");

  const filteredProjects = activeCategory === "todos" 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  const filterButtons: { label: string; value: FilterCategory }[] = [
    { label: "Todos", value: "todos" },
    { label: "Sites", value: "site" },
    { label: "Aplicativos", value: "app" },
    { label: "Marketing", value: "marketing" },
    { label: "Branding", value: "branding" }
  ];

  return (
    <section 
      id="portfolio"
      className="relative py-24 px-4 md:px-8 bg-[#080c14] border-b border-gray-900/40"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Badge */}
        <div className="mb-6 text-left">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/15 text-brand-blue text-xs font-mono tracking-wider rounded uppercase">
            Cases de Sucesso
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight max-w-4xl mb-4">
          Portfólio — <span className="text-brand-peach glow-peach">Projetos que Inspiram</span>
        </h2>
        
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl font-light mb-12">
          Cada projeto é uma prova do nosso comprometimento com a excelência. Confira alguns dos trabalhos que transformaram negócios e mercados.
        </p>

        {/* Active Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-2 border-b border-white/[0.04]">
          {filterButtons.map((btn) => {
            const isActive = activeCategory === btn.value;
            return (
              <button
                key={btn.value}
                onClick={() => setActiveCategory(btn.value)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/15" 
                    : "bg-brand-dark-card/30 border border-white/5 text-gray-400 hover:text-white hover:bg-brand-dark-card/80"
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[#0a0f1d] hover:bg-brand-dark-card rounded-xl border border-white/[0.06] hover:border-brand-blue/30 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Photo Thumbnail */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-80" />
                    
                    {/* Floating top category identifier */}
                    <span 
                      className="absolute top-3 left-3 text-[10px] font-mono tracking-widest uppercase px-2 py-1 rounded text-white"
                      style={{ backgroundColor: project.accentColor }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Body textual specs */}
                  <div className="p-6">
                    <span className="text-xs font-mono text-slate-500 block mb-1">Cliente: {project.client}</span>
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-brand-peach transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Performance result strip */}
                <div className="p-6 pt-2 border-t border-white/[0.04]">
                  <div className="flex items-start gap-2 bg-[#080c14] p-3 rounded-lg border border-white/5">
                    <Target size={14} className="text-brand-blue shrink-0 mt-0.5" />
                    <div className="text-[11px] leading-snug">
                      <span className="font-mono text-gray-500 uppercase block font-bold">Métrica Transformada</span>
                      <span className="text-brand-peach font-semibold">{project.outcome}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Floating Page 7 Bottom Luxury Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex flex-col md:flex-row items-center gap-4 text-center md:text-left select-none"
        >
          <div className="w-10 h-10 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0">
            <CheckSquare size={20} className="text-brand-blue" />
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Cada case representa uma parceria estratégica construída sobre confiança, inovação e entrega de resultados acima do esperado. Entre em contato para conhecer os detalhes de cada projeto.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
export interface CheckSquareProps {}
