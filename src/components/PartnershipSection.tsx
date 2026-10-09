import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Globe, Ban, ShieldCheck, MapPin, Users, Edit3, MessageCircle,
  Calendar, Check, ChevronRight
} from 'lucide-react';
import { PARTNERSHIP_BENEFITS, TIMELINE_5_YEARS } from '../data/featuresData';

export const PartnershipSection: React.FC = () => {
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  const benefitIcons = [
    Globe, Ban, ShieldCheck, MapPin, Users, Edit3, MessageCircle
  ];

  return (
    <section id="parceria" className="py-14 sm:py-20 border-t border-[#E4E4E7] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#5C5C63]">
            Relação a Longo Prazo
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-[#0A0A0A] uppercase tracking-tight mt-1">
            MAIS DO QUE UM SITE: UMA PARCERIA DE 5 ANOS
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5C5C63] font-body max-w-2xl leading-relaxed">
            Não entregamos o site e desaparecemos. Ficamos contigo para o site acompanhar o crescimento e as transformações do teu espaço ao longo do tempo.
          </p>
        </div>

        {/* 7 BENEFIT CARDS (Responsive Asymmetric / Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-14 sm:mb-18">
          {PARTNERSHIP_BENEFITS.map((benefit, index) => {
            const Icon = benefitIcons[index] || ShieldCheck;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-[#F5F5F6] border border-[#E4E4E7] rounded-2xl p-6 flex flex-col justify-between hover:border-black transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E4E4E7] flex items-center justify-center text-[#0A0A0A]">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-600 bg-white px-2 py-0.5 rounded border border-[#E4E4E7]">
                      {benefit.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl text-[#0A0A0A] uppercase tracking-tight mb-2">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C5C63] font-body leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-200/60 flex items-center gap-1.5 text-[11px] font-mono text-neutral-600">
                  <Check className="w-3.5 h-3.5 text-black stroke-[2.5]" />
                  <span>Incluído na parceria</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* VISUAL 5-YEAR TIMELINE (Ano 1 a Ano 5) */}
        <div className="bg-[#F5F5F6] border border-[#E4E4E7] rounded-3xl p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#5C5C63]">
                Linha Temporal de Acompanhamento
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#0A0A0A] uppercase tracking-tight mt-1">
                CICLO DE VIDA DE 5 ANOS
              </h3>
            </div>
            <div className="text-xs font-mono text-neutral-600 bg-white px-3 py-1.5 rounded-lg border border-[#E4E4E7] self-start sm:self-auto">
              Suporte & Evolução Contínua
            </div>
          </div>

          {/* Timeline Bar with 5 Interactive Year Markers */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-6">
            {TIMELINE_5_YEARS.map((t, idx) => {
              const isActive = activeYearIndex === idx;
              return (
                <button
                  key={t.year}
                  onClick={() => setActiveYearIndex(idx)}
                  className={`p-3 sm:p-4 rounded-xl text-left transition-all border ${
                    isActive
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] shadow-md'
                      : 'bg-white text-[#0A0A0A] border-[#E4E4E7] hover:border-neutral-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-white' : 'text-neutral-500'}`}>
                      {t.year}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-neutral-300'}`} />
                  </div>
                  <div className="font-display text-base uppercase tracking-tight truncate">
                    {t.phase.split('&')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Year Detail Display */}
          <div className="bg-white border border-[#E4E4E7] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold text-neutral-400">
                  Fase Ativa
                </span>
                <span className="text-xs text-neutral-300">·</span>
                <span className="text-xs font-mono text-black font-semibold">
                  {TIMELINE_5_YEARS[activeYearIndex].year}
                </span>
              </div>
              <h4 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0A0A0A]">
                {TIMELINE_5_YEARS[activeYearIndex].phase}
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm text-[#5C5C63] font-body leading-relaxed max-w-2xl">
                {TIMELINE_5_YEARS[activeYearIndex].summary}
              </p>
            </div>

            <div className="shrink-0 font-mono text-xs text-neutral-400">
              Passo {activeYearIndex + 1} de 5
            </div>
          </div>

          {/* Fine print */}
          <p className="mt-6 text-[11px] text-neutral-500 font-mono">
            * Condições detalhadas da parceria enviadas por escrito antes de avançar.
          </p>
        </div>

      </div>
    </section>
  );
};
