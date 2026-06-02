import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { SOLUTIONS } from "../data";

export default function Solutions() {
  return (
    <section 
      id="solucoes"
      className="relative py-24 px-4 md:px-8 bg-[#080c14] border-b border-gray-900/40"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Solutions Badge Tag */}
        <div className="mb-6 text-left">
          <span className="inline-flex items-center gap-2 px-3 py-1 border border-brand-blue/30 text-brand-blue text-xs font-mono tracking-wider rounded uppercase">
            Nossas Soluções
          </span>
        </div>

        {/* Header Title with peach colored accent */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight max-w-4xl mb-16">
          Design e Tecnologia ao <span className="text-brand-peach glow-peach">Serviço dos Seus Resultados</span>
        </h2>

        {/* Row of 3 Solutions (Horizontal Flex or Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOLUTIONS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-brand-dark-card/50 hover:bg-brand-dark-card/90 rounded-2xl border border-white/5 hover:border-brand-blue/30 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail (high fidelity generated mockups) */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-white/5">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 duration-700 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glowing Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  {/* Custom Miniature category badge */}
                  <span className="absolute top-3 left-3 bg-brand-blue/80 text-white text-[10px] font-mono tracking-widest uppercase px-2 py-1 rounded">
                    {item.badge}
                  </span>
                </div>

                {/* Text Content */}
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-[#e2a075] tracking-wide transition-colors duration-300 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom tag checkmark */}
              <div className="px-6 pb-6 pt-2 border-t border-white/[0.03] flex items-center justify-between text-xs text-indigo-400 font-mono">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-brand-peach" />
                  Padrão Premium UX/UI
                </span>
                
                <span className="text-slate-500 font-sans group-hover:text-brand-blue duration-300">
                  Saber mais &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
export interface CheckCircle2Props {}
