import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Instagram } from 'lucide-react';
import { InkCodeLogo } from './InkCodeLogo';
import { INSTAGRAM_URL } from '../data/featuresData';

interface FinalCtaSectionProps {
  studioName?: string;
  onOpenContact?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  studioName,
}) => {
  return (
    <section className="bg-[#0A0A0A] text-white py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle fine grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Subtle Paper Airplane Mark in White */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center mb-6"
        >
          <InkCodeLogo size={32} showText={false} textColor="#FFFFFF" />
        </motion.div>

        {/* Studio customization lead */}
        {studioName && (
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-3">
            Proposta preparada para o estúdio {studioName}
          </div>
        )}

        {/* Big Contrast Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none text-white max-w-3xl mx-auto"
        >
          QUERES VER O TEU SITE GANHAR VIDA?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 sm:mt-5 text-sm sm:text-base text-neutral-300 max-w-xl mx-auto font-body leading-relaxed"
        >
          Diz-me o que tens em mente para o teu espaço. Criamos uma proposta visual à medida da tua marca, sem modelos prontos.
        </motion.p>

        {/* White CTA Button with inverted hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white text-[#0A0A0A] hover:bg-neutral-100 text-sm font-semibold px-8 py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group min-touch-target"
          >
            <Instagram className="w-4 h-4 text-[#0A0A0A]" />
            <span>Falar por DM no Instagram</span>
            <ArrowUpRight className="w-4 h-4 text-[#0A0A0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Small reassuring line */}
        <p className="mt-4 text-xs text-neutral-400 font-body">
          Sem compromisso. Falamos com calma.
        </p>
      </div>
    </section>
  );
};
