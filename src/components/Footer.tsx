import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#080c14] border-t border-white/[0.05] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and brief summary */}
        <div className="text-center md:text-left space-y-2">
          <span className="text-lg font-bold font-display text-white tracking-widest block">
            Gêneses <span className="text-brand-peach">&mdash;</span>
          </span>
          <span className="text-xs text-gray-500 font-mono tracking-wide block">
            Onde Grandes Marcas São Criadas. &copy; {new Date().getFullYear()} Gêneses. Todos os direitos reservados.
          </span>
        </div>

        {/* Links block */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-400 font-mono">
          <a href="#agencia" className="hover:text-brand-peach transition-colors">Termos de Uso</a>
          <a href="#solucoes" className="hover:text-brand-peach transition-colors">Políticas de Privacidade</a>
          <a href="#contato" className="hover:text-brand-peach transition-colors">São Paulo, BR</a>
        </div>

        {/* Back to top click trigger */}
        <div>
          <button
            onClick={scrolltoTop}
            className="w-10 h-10 rounded-full bg-brand-dark-card border border-white/10 text-gray-400 hover:text-white hover:border-brand-blue flex items-center justify-center transition-all cursor-pointer group"
            title="Voltar ao Topo"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 duration-350 transition-transform" />
          </button>
        </div>

      </div>

      {/* Embedded SEO summary line */}
      <div className="max-w-6xl mx-auto text-center border-t border-white/[0.03] pt-6 mt-8 flex items-center justify-center gap-1.5 text-[10px] text-slate-700 font-mono">
        <span>Código simplificado e estruturado por</span>
        <Heart size={8} className="text-brand-peach" />
        <span>Gêneses Performance para otimização SEO integrada.</span>
      </div>
    </footer>
  );
}
export interface ArrowUpProps {}
export interface HeartProps {}
