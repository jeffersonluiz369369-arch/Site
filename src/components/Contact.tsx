import React, { useState } from "react";
import { 
  Mail, MapPin, Phone, MessageSquareIcon, ArrowRight, CheckCircle, 
  Sparkles, Check, Smartphone, HelpCircle, X, CheckSquare 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [companySize, setCompanySize] = useState("PME (Médio Porte)");
  const [leadInfo, setLeadInfo] = useState({ name: "", email: "", phone: "", message: "" });

  const toggleServiceSelection = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleAssessmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadInfo.name || !leadInfo.email) return;
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setLeadInfo({ name: "", email: "", phone: "", message: "" });
    setSelectedServices([]);
    setFormSubmitted(false);
    setShowModal(false);
  };

  // Benefits listings as shown in visual Page 10 list
  const benefits = [
    { title: "Diagnóstico digital gratuito", highlight: "para novos clientes" },
    { title: "Proposta personalizada em", highlight: "até 48 horas" },
    { title: "Equipe dedicada", highlight: "exclusivamente ao seu projeto" },
    { title: "Resultados mensuráveis", highlight: "desde o primeiro mês" }
  ];

  return (
    <section 
      id="contato"
      className="relative py-24 px-4 md:px-8 bg-[#0a0f1d] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Pill Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/15 text-brand-blue text-xs font-mono tracking-wider rounded uppercase">
            <MessageSquareIcon size={12} className="text-brand-blue" />
            Contato
          </span>
        </div>

        {/* Big Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight max-w-4xl mb-16">
          Pronto para <span className="text-brand-peach glow-peach">Transformar Seu</span> Negócio?
        </h2>

        {/* Main Grid: Card Form panel on Left, Benefits & Handshake photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Specialist Contacts Box */}
          <div className="lg:col-span-5 bg-brand-dark-card/60 rounded-2xl p-6 sm:p-8 border border-white/5 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-4">
                Fale com um Especialista
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                Nossa equipe está pronta para entender seus desafios e apresentar a solução ideal para o seu negócio. Sem compromisso, sem enrolação.
              </p>

              {/* Direct corporate details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-sm sm:text-base">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 text-brand-blue">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-gray-400 block text-xs font-mono uppercase">Escritório Central</span>
                    <span className="text-white font-medium">São Paulo, Brasil</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm sm:text-base">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 text-brand-blue">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-gray-400 block text-xs font-mono uppercase">E-mail Corporativo</span>
                    <a href="mailto:contato@geneses.com.br" className="text-brand-peach hover:underline font-semibold font-mono">
                      contato@geneses.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm sm:text-base">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 text-brand-blue">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-gray-400 block text-xs font-mono uppercase">Atendimento Telefônico</span>
                    <a href="tel:+5511999990000" className="text-white hover:text-brand-blue transition-colors font-mono">
                      +55 (11) 99999-0000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button
                onClick={() => setShowModal(true)}
                className="w-full text-center px-6 py-4 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20 cursor-pointer duration-300"
              >
                Iniciar Projeto
                <ArrowRight size={14} />
              </button>

              <a
                href="https://wa.me/5511999990000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-6 py-4 rounded-xl border border-white/10 hover:border-emerald-500 bg-transparent hover:bg-emerald-500/10 text-gray-300 hover:text-emerald-400 text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Smartphone size={14} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right Side: Why Act Now + Handshake Visual (Page 10 right) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-[#080c14]/30 rounded-2xl p-6 sm:p-8 border border-white/[0.04]">
              <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-6">
                Por Que Agir Agora?
              </h3>

              {/* Benefits list */}
              <div className="space-y-4">
                {benefits.map((bene, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                      <ArrowRight size={12} className="text-brand-blue" />
                    </div>
                    <div className="text-sm sm:text-base">
                      <span className="text-white font-medium">{bene.title} </span>
                      <strong className="text-brand-peach font-semibold italic">{bene.highlight}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suited Handshake Cover Picture representing a successful deal */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-white/5 relative group select-none">
              <img
                src="/src/assets/images/handshake_deal_1780403179194.png"
                alt="Parceria Estratégica Handshake"
                className="w-full h-48 md:h-56 object-cover group-hover:scale-105 duration-700 transition"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-brand-dark-card/90 border border-white/5 p-3 rounded-xl backdrop-blur">
                <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-brand-blue animate-pulse" />
                  98% Acordo de Lançamento Eficiente
                </span>
                <span className="text-[10px] font-mono text-brand-peach">SÃO PAULO CAPITAL</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Modal questionnaire proposal maker */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-brand-dark-card border border-white/10 rounded-2xl w-full max-w-lg p-6 sm:p-8 relative overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-all cursor-pointer"
              >
                <X size={16} />
              </button>

              {!formSubmitted ? (
                <form onSubmit={handleAssessmentSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
                      <Sparkles size={18} className="text-brand-peach animate-pulse" />
                      Proposta Expressa 48 Horas
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">
                      Selecione suas necessidades para customisarmos seu diagnóstico digital gratuito.
                    </p>
                  </div>

                  {/* Multi Services Selector checklist */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-2">
                      Que tipo de ativo você precisa? (Multi-seleção)
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {["Websites", "Aplicativos", "Marketing", "Branding"].map((service) => {
                        const isChecked = selectedServices.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleServiceSelection(service)}
                            className={`p-3 rounded-lg text-xs font-semibold border text-center transition-all cursor-pointer ${
                              isChecked 
                                ? "bg-brand-blue/20 border-brand-blue text-white" 
                                : "bg-[#080c14] border-white/5 text-gray-400 hover:text-white"
                            }`}
                          >
                            {service} {isChecked && "✓"}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Company Size Tier selector */}
                  <div>
                    <label className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-2">
                      Área de Atuação / Porte Empresarial
                    </label>
                    <select
                      value={companySize}
                      onChange={(e) => setCompanySize(e.target.value)}
                      className="w-full bg-[#080c14] border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-brand-blue"
                    >
                      <option>Start-up (Iniciando modelo)</option>
                      <option>PME (Médio Porte)</option>
                      <option>Grande Empresa (Exigência Corporativa)</option>
                    </select>
                  </div>

                  {/* Fields */}
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Seu Nome completo"
                      required
                      value={leadInfo.name}
                      onChange={(e) => setLeadInfo({ ...leadInfo, name: e.target.value })}
                      className="w-full bg-[#080c14] border border-white/5 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-brand-blue"
                    />

                    <input
                      type="email"
                      placeholder="Seu E-mail Corporativo"
                      required
                      value={leadInfo.email}
                      onChange={(e) => setLeadInfo({ ...leadInfo, email: e.target.value })}
                      className="w-full bg-[#080c14] border border-white/5 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-brand-blue"
                    />

                    <input
                      type="tel"
                      placeholder="DDD + Telefone / WhatsApp"
                      value={leadInfo.phone}
                      onChange={(e) => setLeadInfo({ ...leadInfo, phone: e.target.value })}
                      className="w-full bg-[#080c14] border border-white/5 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-brand-blue"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 duration-300"
                  >
                    Enviar Análise Gratuita
                    <ArrowRight size={14} />
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-6 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <Check size={32} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-display text-white">
                      Diagnóstico Solicitado!
                    </h3>
                    <p className="text-gray-400 text-sm max-w-md mx-auto">
                      Olá <strong className="text-brand-peach">{leadInfo.name}</strong>, registramos seus parâmetros para o perfil <strong className="text-white">{companySize}</strong>. Nosso especialista de growth analisará sua solicitação e enviará seu diagnóstico personalizado de canais em até 48 horas no e-mail <strong className="text-brand-blue font-mono">{leadInfo.email}</strong>.
                    </p>
                  </div>

                  {/* Speculating estimations summary dynamically */}
                  <div className="bg-[#080c14] border border-white/5 rounded-lg p-4 text-left max-w-sm mx-auto space-y-2.5">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block border-b border-white/[0.04] pb-1.5">
                      Estimativa Inicial de Escopo
                    </span>
                    <div className="text-xs text-gray-300 space-y-1">
                      <div>&bull; Ativos selecionados: <span className="text-brand-peach font-bold">{selectedServices.join(", ") || "Suporte Geral"}</span></div>
                      <div>&bull; Squad dedicada: <span className="text-brand-blue font-bold">Designer, Dev, Gestor Tráfego</span></div>
                      <div>&bull; Primeiro entregável: <span className="text-emerald-400 font-bold font-mono">Mockup interativo em 5 dias</span></div>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-2 border border-white/10 hover:border-brand-blue text-xs text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                  >
                    Voltar ao Início
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
export interface XProps {}
