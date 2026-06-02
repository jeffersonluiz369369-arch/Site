import { MessageSquare, Quote } from "lucide-react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section 
      id="depoimentos"
      className="relative py-24 px-4 md:px-8 bg-[#0a0f1d] border-b border-gray-900/40"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-mono rounded tracking-wider uppercase">
              <MessageSquare size={12} />
              Reconhecimento
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight">
            O Que Nossos <span className="text-brand-peach glow-peach">Clientes Dizem</span>
          </h2>
        </div>

        {/* 3 cards layout as on Page 8 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-xl bg-brand-dark-card/50 hover:bg-brand-dark-card border border-brand-blue/20 hover:border-brand-blue/60 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Floating Double quotation symbol */}
              <div className="absolute top-4 left-4 text-brand-blue/10 group-hover:text-brand-blue/20 transition-colors duration-300 pointer-events-none select-none">
                <Quote size={56} className="rotate-180" />
              </div>

              {/* Quote Content */}
              <div className="relative z-10 pt-4 mb-8">
                <p className="text-[#e2e8f0] text-sm sm:text-base leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-white/[0.05] pt-4 mt-auto">
                <div className="text-sm font-bold font-display text-brand-peach">
                  &mdash; {test.author}
                </div>
                <div className="text-xs text-gray-400 font-mono mt-1">
                  {test.role} <span className="text-slate-600">|</span> {test.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating background decorative wave */}
        <div className="absolute top-10 right-10 w-48 h-48 bg-brand-blue/5 rounded-full blur-[60px] pointer-events-none" />

      </div>
    </section>
  );
}
export interface QuoteProps {}
export interface MessageSquareProps {}
