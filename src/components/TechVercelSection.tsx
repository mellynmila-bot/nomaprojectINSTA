import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, Activity, Wrench } from 'lucide-react';

export const TechVercelSection: React.FC = () => {
  const pillars = [
    {
      icon: Zap,
      title: 'Velocidade',
      description: 'O site é servido a partir de servidores globais distribuídos perto de quem o abre em qualquer ponto do país ou do mundo.'
    },
    {
      icon: ShieldCheck,
      title: 'Segurança',
      description: 'Certificado HTTPS automático e contínuo em todo o site, protegendo as informações e transmitindo confiança máxima.'
    },
    {
      icon: Activity,
      title: 'Estabilidade',
      description: 'Infraestrutura com redundância de classe mundial desenhada para suportar picos de visitas e estar sempre no ar.'
    },
    {
      icon: Wrench,
      title: 'Sem manutenção técnica para ti',
      description: 'Não tens de configurar servidores, mexer em linhas de comando nem renovar parâmetros de infraestrutura. Fica tudo a correr por nós.'
    }
  ];

  return (
    <section id="tecnologia" className="py-14 sm:py-20 border-t border-[#E4E4E7] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Reference & Vercel Discreet Mark */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs uppercase tracking-widest text-[#5C5C63]">
                Infraestrutura de Ponta
              </span>
              <span className="text-[11px] font-mono text-neutral-400">·</span>
              <span className="text-[11px] font-mono text-[#5C5C63]">Vercel Edge Network</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl text-[#0A0A0A] uppercase tracking-tight">
              ALOJADO ONDE AS GRANDES EQUIPAS ALOJAM
            </h2>

            <p className="mt-2 text-sm sm:text-base text-[#5C5C63] font-body max-w-2xl leading-relaxed">
              O teu site fica na Vercel, uma plataforma de referência mundial usada por equipas de tecnologia e marcas inovadoras em todo o planeta.
            </p>
          </div>

          {/* Vercel Geometric Triangle Logo (Discreet mark) */}
          <div className="flex items-center gap-3 px-4 py-2 bg-[#F5F5F6] border border-[#E4E4E7] rounded-xl self-start md:self-auto">
            <svg
              className="w-5 h-5 text-[#0A0A0A]"
              viewBox="0 0 76 65"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Vercel Logo"
            >
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
            </svg>
            <div className="text-left font-mono text-xs">
              <span className="font-semibold block leading-none text-[#0A0A0A]">Vercel</span>
              <span className="text-[10px] text-[#5C5C63]">Cloud Infrastructure</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#F5F5F6] border border-[#E4E4E7] rounded-2xl p-6 flex flex-col justify-between hover:border-black transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E4E4E7] flex items-center justify-center text-[#0A0A0A] mb-4 shadow-xs">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h3 className="font-display text-xl text-[#0A0A0A] uppercase tracking-tight mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5C63] font-body leading-relaxed">
                    {pillar.description}
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
