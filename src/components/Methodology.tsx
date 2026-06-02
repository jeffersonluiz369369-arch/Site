import React, { useState } from "react";
import { Search, Compass, User, Rocket, Activity, Check, Settings2, RefreshCcw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { METHODOLOGY_STEPS } from "../data";

// Map string icon names to Lucide icon components
const iconMap = {
  Search: Search,
  Compass: Compass,
  User: User,
  Rocket: Rocket,
  Microscope: Activity
};

export default function Methodology() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = METHODOLOGY_STEPS[activeStepIndex];
  const ActiveIcon = iconMap[activeStep.iconName] || Search;

  return (
    <section 
      id="metodologia"
      className="relative py-24 px-4 md:px-8 bg-[#0a0f1d] border-b border-gray-900/40 overflow-hidden"
    >
      {/* Background soft grids */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Tag Pill */}
        <div className="mb-6 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-mono tracking-wider rounded uppercase">
            <Settings2 size={11} className="spin-slow text-brand-peach" />
            Metodologia
          </span>
        </div>

        {/* Section Heading */}
        <div className="text-center lg:text-left mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">
            O <span className="text-brand-peach glow-peach">Método Gêneses</span> — Como Trabalhamos
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl font-light">
            Um processo estruturado e transparente, construído para entregar resultados excepcionais em cada etapa da jornada.
          </p>
        </div>

        {/* Timeline circular selector (Page 4 style) */}
        <div className="relative mb-16 px-4 py-8 bg-brand-dark-card/30 rounded-3xl border border-white/5">
          {/* Connecting line on desktop */}
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-brand-blue/10 via-brand-peach/20 to-brand-blue/10 -translate-y-1/2 hidden md:block z-0" />

          {/* Responsive row of 5 cyclic stages */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 max-w-5xl mx-auto">
            {METHODOLOGY_STEPS.map((step, idx) => {
              const StepIcon = iconMap[step.iconName] || Search;
              const isSelected = idx === activeStepIndex;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center gap-4 text-center cursor-pointer group focus:outline-none w-full md:w-auto"
                >
                  {/* Circular step outline & outer neon ring */}
                  <div className="relative">
                    {/* Animated Ripple for active ring */}
                    {isSelected && (
                      <span className="absolute -inset-2 rounded-full bg-brand-blue/20 animate-ping duration-1000" />
                    )}

                    <div className={`w-20 h-20 rounded-full flex items-center justify-center border-3 transition-all duration-300 ${
                      isSelected 
                        ? "border-brand-blue bg-brand-dark-card shadow-lg shadow-brand-blue/20 scale-110" 
                        : "border-slate-800 bg-[#080c14] group-hover:border-brand-peach group-hover:scale-105"
                    }`}>
                      <StepIcon size={28} className={isSelected ? "text-brand-blue" : "text-gray-400 group-hover:text-brand-peach duration-300"} />
                    </div>

                    {/* Numeric Badge helper */}
                    <span className="absolute -top-1 -right-1 bg-brand-peach text-brand-bg text-[10px] font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title labels */}
                  <div className="space-y-1">
                    <span className={`text-base font-bold font-display uppercase tracking-wider block transition-all duration-300 ${
                      isSelected ? "text-brand-peach text-shadow-peach" : "text-gray-500 group-hover:text-white"
                    }`}>
                      {step.title}
                    </span>
                    <span className="text-[10px] text-slate-600 font-mono hidden md:block">Etapa {idx + 1}/5</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Details Content Card Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-dark-card/60 rounded-2xl border border-white/5 p-8 max-w-5xl mx-auto relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand-peach/5 rounded-full blur-[40px]" />
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                <ActiveIcon size={20} />
              </div>
              <span className="text-xs font-mono text-brand-blue tracking-wide uppercase">Fase {activeStepIndex + 1} &bull; Métricas Ativas</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Entregáveis da fase de <span className="text-brand-peach">{activeStep.title}</span>
            </h3>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {activeStep.description}
            </p>
          </div>

          {/* Action deliverables list */}
          <div className="lg:col-span-5 bg-[#080c14]/60 rounded-xl p-6 border border-white/5 space-y-3">
            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-1.5">
              <Check size={12} className="text-brand-peach" /> Ativos Práticos Gerados
            </h4>
            
            {activeStep.deliverables.map((deliv, dIdx) => (
              <div 
                key={dIdx}
                className="flex items-start gap-3 p-2 hover:bg-white/[0.02] rounded-lg transition-colors border border-transparent hover:border-white/5"
              >
                <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={11} />
                </div>
                <span className="text-sm text-gray-300 font-medium">{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footnote explanation (Page 4 footer caption) */}
        <div className="mt-16 text-center max-w-4xl mx-auto border-t border-white/[0.05] pt-8">
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed italic">
            Each project is born from a deep diagnostics blueprint and matures through constant feedback — guaranteeing that each engineering decision is fully backed by rich data indicators and carefully geared to match your enterprise objectives.
          </p>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-brand-blue font-mono font-medium">
            <RefreshCcw size={12} className="animate-spin duration-3000" />
            Otimização Iterativa Focada em Conversão
          </div>
        </div>

      </div>
    </section>
  );
}
