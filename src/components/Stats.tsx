import { Award, Target, HelpCircle, FileText } from "lucide-react";
import { motion } from "motion/react";
import { STATS } from "../data";

// Helper icons mapping to give each statistic card a unique illustrative guide icon
const iconsList = [
  <FileText className="text-brand-blue" size={20} />,
  <Award className="text-brand-peach" size={20} />,
  <Target className="text-brand-blue" size={20} />,
  <Award className="text-brand-peach animate-pulse" size={20} />
];

export default function Stats() {
  return (
    <section 
      id="estatisticas"
      className="relative py-24 px-4 md:px-8 bg-[#080c14] border-b border-gray-900/40"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Por Que Empresas Líderes <span className="text-brand-peach glow-peach">Escolhem a Gêneses</span>
          </h2>
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mt-4">
            Métricas de Credibilidade & Performance Comprovada
          </p>
        </div>

        {/* Big Grid of the 4 Key statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 bg-brand-dark-card/30 hover:bg-brand-dark-card/70 border border-white/5 hover:border-brand-peach/20 rounded-2xl transition-all duration-300 text-center flex flex-col items-center justify-between group"
            >
              {/* Corner accent decorative glows */}
              <div className="absolute top-0 right-0 w-2 h-2 rounded-bl bg-brand-peach opacity-30 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col items-center">
                {/* Micro Icon */}
                <div className="w-10 h-10 rounded-full bg-white/[0.02] flex items-center justify-center mb-6 border border-white/5 group-hover:bg-brand-blue/10 duration-300">
                  {iconsList[index] || <Award size={20} />}
                </div>

                {/* Stat Big Display Number */}
                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-mono text-white tracking-tight leading-none mb-4 selection:bg-brand-peach/20">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-brand-peach/80">
                    {stat.value}
                  </span>
                </div>

                {/* Label title */}
                <h3 className="text-base sm:text-lg font-bold font-display text-brand-peach mb-3">
                  {stat.label}
                </h3>

                {/* Sub Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-[240px]">
                  {stat.description}
                </p>
              </div>

              {/* Little status bar accent */}
              <div className="w-12 h-1 bg-brand-blue/20 group-hover:w-full group-hover:bg-brand-blue duration-500 rounded-full mt-6 transition-all" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
