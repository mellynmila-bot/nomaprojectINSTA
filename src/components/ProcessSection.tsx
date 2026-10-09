import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, LayoutTemplate, Sliders, Rocket, Clock, CheckCircle } from 'lucide-react';
import { PROCESS_STEPS } from '../data/featuresData';

export const ProcessSection: React.FC = () => {
  const stepIcons = [MessageSquare, LayoutTemplate, Sliders, Rocket];

  return (
    <section id="como-funciona" className="py-14 sm:py-20 border-t border-[#E4E4E7] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#5C5C63]">
            Metodologia Transparente
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-[#0A0A0A] uppercase tracking-tight mt-1">
            COMO FUNCIONA (4 PASSOS)
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5C5C63] font-body max-w-xl">
            Do primeiro contacto ao lançamento oficial: um processo simples e direto, sem complicações técnicas para o teu estúdio.
          </p>
        </div>

        {/* 4 Steps Timeline (Horizontal on desktop, vertical on mobile) */}
        <div className="relative">
          
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[1px] bg-[#E4E4E7] z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#F5F5F6] border border-[#E4E4E7] rounded-2xl p-6 flex flex-col justify-between hover:border-black transition-colors"
                >
                  <div>
                    {/* Step Number & Icon badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white border border-[#E4E4E7] flex items-center justify-center text-[#0A0A0A] shadow-xs">
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <span className="font-mono text-sm font-bold text-neutral-400">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl text-[#0A0A0A] uppercase tracking-tight mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-[#0A0A0A] font-body mb-2 leading-snug">
                      {step.description}
                    </p>

                    <p className="text-xs text-[#5C5C63] font-body leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-neutral-200/60 flex items-center gap-1.5 text-[11px] font-mono text-neutral-500">
                    <CheckCircle className="w-3.5 h-3.5 text-black" />
                    <span>Passo {index + 1} de 4</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Commitment note on delivery timing */}
        <div className="mt-8 p-4 bg-[#F5F5F6] border border-[#E4E4E7] rounded-xl flex items-center gap-3 text-xs text-[#5C5C63] max-w-xl">
          <Clock className="w-4 h-4 text-black shrink-0" />
          <div>
            <span className="font-semibold text-[#0A0A0A]">Prazo de entrega:</span>{' '}
            <span className="text-[#0A0A0A] font-medium">O site fica pronto em 24h para aprovação do cliente.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
