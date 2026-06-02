import { HardDrive, MonitorCheck, HelpCircle, Activity, Sparkles, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { DIFFERENTIALS } from "../data";

// Matching micro icons for each differential item
const diffIcons = [
  <HardDrive size={18} className="text-brand-blue" />,
  <Sparkles size={18} className="text-brand-peach" />,
  <Activity size={18} className="text-brand-blue" />,
  <MonitorCheck size={18} className="text-brand-peach" />
];

export default function Diferenciais() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section 
      id="diferenciais"
      className="relative py-24 px-4 md:px-8 bg-[#0a0f1d] border-b border-gray-900/40"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Badge Tag */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/15 border border-brand-blue/30 text-brand-blue text-xs font-mono tracking-wider rounded uppercase">
            Diferenciais
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight max-w-4xl mb-16">
          Inovação e <span className="text-brand-peach glow-peach">Resultados</span> em Cada Entrega
        </h2>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Team agency picture (Page 6 style) */}
          <div className="lg:col-span-5 relative group">
            {/* Soft decorative glow behind */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-brand-blue/20 to-brand-peach/20 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-700" />
            
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/src/assets/images/team_meeting_1780403167299.png"
                alt="Equipe Gêneses"
                className="w-full h-auto object-cover group-hover:scale-105 duration-700 transition"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-70" />
              
              {/* Overlay dynamic statistic card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-brand-dark-card/90 border border-white/10 backdrop-blur-md flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <div className="text-xs">
                  <span className="font-mono text-white font-bold block">EQUIPE INTEGRADA 24/7</span>
                  <span className="text-gray-400 font-sans">Sinergia absoluta em inteligência estratégica</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Cards lists mapping DIFFERENTIALS */}
          <div className="lg:col-span-7 space-y-4">
            {DIFFERENTIALS.map((item, index) => {
              const isHovered = hoveredIdx === index;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredIdx(index)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`p-6 rounded-xl border transition-all duration-300 relative overflow-hidden group/card ${
                    isHovered 
                      ? "bg-brand-dark-card/90 border-brand-blue shadow-lg shadow-brand-blue/5" 
                      : "bg-[#080c14]/50 border-white/[0.06] hover:border-brand-blue/30"
                  }`}
                >
                  {/* Subtle accent border strip on left */}
                  <div className={`absolute top-0 bottom-0 left-0 w-1 transition-all duration-300 ${
                    isHovered ? "bg-brand-blue" : "bg-transparent"
                  }`} />

                  <div className="flex items-start gap-4">
                    {/* Icon container */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isHovered 
                        ? "bg-brand-blue/15 border-brand-blue text-brand-blue" 
                        : "bg-white/[0.02] border-white/5 text-gray-400 group-hover/card:border-brand-peach/30"
                    }`}>
                      {diffIcons[index] || <Sparkles size={18} />}
                    </div>

                    {/* text content */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold font-display text-white group-hover/card:text-brand-peach transition-colors">
                          {item.title}
                        </h3>
                        <ChevronRight 
                          size={13} 
                          className={`text-brand-peach transition-transform duration-300 ${
                            isHovered ? "translate-x-1 opacity-100" : "opacity-0"
                          }`}
                        />
                      </div>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
