import React from 'react';
import { motion } from 'motion/react';
import { PenTool, CalendarCheck, Search } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const cards = [
    {
      number: '01',
      icon: PenTool,
      title: 'É teu, feito de raiz',
      description: 'Criamos o site a partir da identidade da tua marca. Nada de modelos genéricos.',
      highlight: 'Design exclusivo'
    },
    {
      number: '02',
      icon: CalendarCheck,
      title: 'Feito para gerar marcações',
      description: 'Não é só bonito. Cada secção guia o visitante até à marcação.',
      highlight: 'Foco em conversão'
    },
    {
      number: '03',
      icon: Search,
      title: 'Preparado para ser encontrado',
      description: 'Estrutura pensada para o Google e para as pesquisas por IA, para quem procura o teu serviço na tua zona.',
      highlight: 'Visibilidade local'
    }
  ];

  return (
    <section className="py-12 sm:py-16 border-t border-[#E4E4E7] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#5C5C63]">
            Filosofia de Construção
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-[#0A0A0A] uppercase tracking-tight mt-1">
            COMO PENSAMOS O TEU SITE
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5C5C63] max-w-xl font-body">
            Uma abordagem pensada para que não tenhas de te preocupar com rigorosamente nada técnico.
          </p>
        </div>

        {/* 3 Light Gray Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="bg-[#F5F5F6] border border-[#E4E4E7] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-400 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-[#5C5C63]">
                      {card.number}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 bg-white px-2 py-0.5 rounded border border-[#E4E4E7]">
                      {card.highlight}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E4E4E7] flex items-center justify-center text-[#0A0A0A] mb-4">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl text-[#0A0A0A] uppercase tracking-tight mb-2">
                    {card.title}
                  </h3>

                  <p className="text-sm text-[#5C5C63] leading-relaxed font-body">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
