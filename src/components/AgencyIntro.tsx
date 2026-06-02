import { Zap, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { COMPACT_SERVICES } from "../data";

export default function AgencyIntro() {
  return (
    <section 
      id="agencia"
      className="relative py-24 px-4 md:px-8 bg-[#0a0f1d] border-b border-gray-900/40"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Badge Tagline */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/15 text-brand-blue text-xs font-mono tracking-wider rounded uppercase">
            <Zap size={11} className="text-brand-blue" />
            Agência de Alta Performance
          </span>
        </div>

        {/* Section Heading with Highlights */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight max-w-4xl mb-12">
          A Agência que <span className="text-brand-peach glow-peach">Transforma Negócios</span> em Líderes Digitais
        </h2>

        {/* Grid: Column 1 Text, Column 2 Card list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1 with paragraphs */}
          <div className="lg:col-span-5 space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
            <p>
              A <strong className="text-white font-medium">Gêneses</strong> é uma agência de propaganda e publicidade especializada em entregar soluções digitais que combinam design sofisticado, tecnologia de ponta e inteligência estratégica. Atuamos com empresas de médio e grande porte que exigem excelência e resultados mensuráveis.
            </p>
            <p className="border-l-2 border-brand-peach/40 pl-4 py-1 italic text-gray-300">
              Do conceito à conversão, somos parceiros estratégicos do seu crescimento digital.
            </p>
            
            <div className="pt-6 flex items-center gap-3 text-sm text-brand-blue font-mono font-semibold">
              <ShieldCheck size={18} className="text-brand-peach" />
              Selo de Alta Integridade & Performance Digital
            </div>
          </div>

          {/* Column 2 with Compact Service cards (deep navy block container) */}
          <div className="lg:col-span-7">
            <div className="bg-brand-dark-card/90 rounded-2xl p-6 sm:p-8 border border-white/5 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-[40px] pointer-events-none" />
              
              {COMPACT_SERVICES.map((serv, index) => (
                <motion.div 
                  key={serv.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-300 group"
                >
                  {/* Number tag */}
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-slate-600 group-hover:text-brand-blue duration-300 select-none">
                    {serv.number}
                  </span>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-brand-peach tracking-wide duration-300 mb-1.5">
                      {serv.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      {serv.description}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
