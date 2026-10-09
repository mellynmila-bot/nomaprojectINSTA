import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Check, Layers, Shield, Sparkles, Globe } from 'lucide-react';
import { DeviceMockup } from './DeviceMockup';
import { FEATURES_DATA } from '../data/featuresData';

interface HeroProps {
  studioName: string;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ studioName }) => {
  const totalFeatures = FEATURES_DATA.length;

  const headlineText = studioName
    ? `O QUE VEM NO SITE DO ${studioName}`
    : 'O QUE VEM NO TEU SITE';

  const fourHighlights = [
    { text: 'Identidade visual única', icon: Sparkles },
    { text: 'Pensado para Google e IA', icon: Globe },
    { text: 'Domínio e alojamento incluídos', icon: Shield },
    { text: 'Parceria de 5 anos', icon: Layers },
  ];

  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Kicker Label */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between gap-2 mb-4"
        >
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5C5C63]">
            <span>Proposta Educativa & Técnica</span>
            <span aria-hidden="true">·</span>
            <span>InkCode</span>
          </div>

          {/* Dynamic calculated counter badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5F5F6] border border-[#E4E4E7] rounded-md text-xs font-medium text-[#0A0A0A]">
            <span className="font-mono font-bold">{totalFeatures}</span>
            <span>recursos incluídos</span>
          </div>
        </motion.div>

        {/* Main Headline & Subtitle */}
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[#0A0A0A] uppercase"
          >
            {headlineText}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-[#5C5C63] font-body leading-relaxed max-w-2xl"
          >
            Tudo o que o teu site inclui, explicado sem complicações.{' '}
            <span className="text-[#0A0A0A] font-medium">Sem modelos prontos e sem mensalidades</span>.
          </motion.p>
        </div>

        {/* 4 HIGHLIGHTS STRIP (Visible without scroll on mobile & desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 sm:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3"
        >
          {fourHighlights.map((hl, index) => {
            const Icon = hl.icon;
            return (
              <div
                key={index}
                className="bg-[#F5F5F6] border border-[#E4E4E7] rounded-lg p-3 sm:p-3.5 flex items-center gap-2.5"
              >
                <div className="w-6 h-6 rounded-md bg-white border border-[#E4E4E7] flex items-center justify-center shrink-0 text-[#0A0A0A]">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#0A0A0A] leading-tight">
                  {hl.text}
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <a
            href="#menu"
            className="bg-[#0A0A0A] text-white hover:bg-neutral-800 text-xs sm:text-sm font-medium px-5 sm:px-6 py-3 rounded-xl transition-all shadow-sm flex items-center gap-2 min-touch-target"
          >
            <span>Ver tudo o que está incluído</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#parceria"
            className="bg-white text-[#0A0A0A] border border-[#E4E4E7] hover:bg-[#F5F5F6] text-xs sm:text-sm font-medium px-5 sm:px-6 py-3 rounded-xl transition-all min-touch-target"
          >
            Ver a parceria
          </a>

          <div className="text-xs text-[#5C5C63] font-mono ml-auto hidden sm:block">
            Sem custos ocultos · Pacote transparente
          </div>
        </motion.div>

        {/* GRAPHIC ELEMENT: B&W Phone + Laptop Mockup */}
        <div className="mt-10 sm:mt-14 pt-4 border-t border-[#E4E4E7]/70">
          <DeviceMockup studioName={studioName} />
        </div>
      </div>
    </section>
  );
};
