import { useState } from "react";
import { Layers, Globe, Radio, Briefcase, Award, MessageCircle, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";
import { ECO_NODES } from "../data";

// Auxiliary node icons mapping
const nodeIcons = [
  <Globe size={18} />,
  <Layers size={18} />,
  <Radio size={18} />,
  <Award size={18} />,
  <MessageCircle size={18} />,
  <Briefcase size={18} />
];

export default function Ecossistema() {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  return (
    <section 
      id="ecossistema"
      className="relative py-24 px-4 md:px-8 bg-[#080c14] border-b border-gray-900/40"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-brand-peach/30 bg-brand-peach/5 text-brand-peach text-xs font-mono select-none">
            <HeartHandshake size={12} />
            CONEXÕES QUE GERAM VALOR
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-6">
            Nosso <span className="text-brand-peach">Ecossistema Interativo</span> de Soluções
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Um ecossistema completo de soluções digitais integradas, pensado para empresas que buscam crescimento consistente e presença digital de autoridade.
          </p>
        </div>

        {/* Constellation Container */}
        <div className="relative min-h-[500px] bg-brand-dark-card/20 rounded-3xl border border-white/5 p-8 flex items-center justify-center overflow-hidden">
          
          {/* Constellation Web SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
            {/* Center Coordinate is always exactly 50% / 50% */}
            {ECO_NODES.map((node, index) => {
              const isHovered = hoveredNodeId === node.id;
              return (
                <line
                  key={`line-${node.id}`}
                  x1="50%"
                  y1="50%"
                  x2={`${node.position.x}%`}
                  y2={`${node.position.y}%`}
                  stroke={isHovered ? node.color : "#3e8bff"}
                  strokeWidth={isHovered ? 2.5 : 1}
                  strokeDasharray={isHovered ? "none" : "5 5"}
                  className="transition-all duration-300"
                />
              );
            })}
          </svg>

          {/* Connected Surrounding Interactive Nodes */}
          <div className="relative z-10 w-full h-full min-h-[400px] flex flex-col md:block">
            
            {/* Central core node Gêneses Agency */}
            <div className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col items-center z-20 mb-8 md:mb-0">
              <div className="relative">
                {/* Double pulsing rings */}
                <div className="absolute -inset-4 rounded-full border-2 border-brand-peach/10 animate-ping duration-2000" />
                <div className="absolute -inset-2 rounded-full border border-brand-blue/30 animate-pulse duration-1500" />

                <div className="w-24 h-24 rounded-full bg-brand-dark-card border-2 border-brand-peach flex flex-col items-center justify-center text-center shadow-lg shadow-brand-peach/15">
                  <span className="text-[10px] font-mono font-black text-brand-peach tracking-wide uppercase">Gêneses</span>
                  <span className="text-xs text-white font-bold leading-none mt-0.5">AGENCY</span>
                </div>
              </div>
            </div>

            {/* Surrounding Nodes Mapping */}
            {ECO_NODES.map((node, index) => {
              const isHovered = hoveredNodeId === node.id;
              
              return (
                <div
                  key={node.id}
                  style={{
                    // Relative positioning for desktop layouts
                    ["--x-pos" as any]: `${node.position.x}%`,
                    ["--y-pos" as any]: `${node.position.y}%`,
                  }}
                  className={`md:absolute md:top-[var(--y-pos)] md:left-[var(--x-pos)] md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col items-center focus:outline-none transition-all duration-300 group z-10 my-4 md:my-0`}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 border shadow-md"
                    style={{
                      backgroundColor: isHovered ? node.color : "#0e1626",
                      borderColor: isHovered ? "white" : "rgba(255,255,255,0.06)",
                      color: isHovered ? "#080c14" : "white"
                    }}
                  >
                    {nodeIcons[index] || <Layers size={18} />}
                  </div>

                  {/* Node label box */}
                  <div className="mt-2 text-center max-w-[200px]">
                    <span className={`text-sm font-bold block transition-colors ${
                      isHovered ? "text-brand-peach" : "text-gray-300 group-hover:text-white"
                    }`}>
                      {node.label}
                    </span>
                    <span className="text-[11px] text-gray-500 block leading-tight mt-0.5">
                      {node.description}
                    </span>
                  </div>

                  {/* Pop-up float info for mobile/hover compatibility */}
                  {isHovered && (
                    <div className="absolute top-16 md:top-20 bg-[#0e1626] border border-brand-blue/30 p-3 rounded-lg shadow-2xl z-30 w-56 text-left pointer-events-none backdrop-blur-md animate-fade-in">
                      <span className="text-[10px] font-mono text-brand-peach font-bold uppercase block tracking-wider mb-1">
                        DIFERENCIAL FOCADO
                      </span>
                      <p className="text-xs text-white leading-relaxed">
                        {node.subText}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
