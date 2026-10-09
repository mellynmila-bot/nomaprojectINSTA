import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Instagram, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/featuresData';
import { InkCodeLogo } from './InkCodeLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  studioName?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  studioName,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A0A0A]/60 backdrop-blur-xs"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#FFFFFF] border border-[#E4E4E7] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-[#0A0A0A]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <InkCodeLogo size={24} showText={false} />
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                Contacto Direto · InkCode
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#0A0A0A] leading-none mb-2">
              VAMOS CONVERSAR SOBRE O TEU SITE
            </h3>

            <p className="text-sm text-[#5C5C63] leading-relaxed mb-6 font-body">
              {studioName
                ? `Fala comigo diretamente por mensagem privada no Instagram para tirar qualquer dúvida sobre o site do estúdio ${studioName}.`
                : 'Fala comigo diretamente por mensagem privada no Instagram para perceber o teu espaço e tirar dúvidas com total transparência.'}
            </p>

            {/* Action Buttons */}
            <div className="space-y-3">
              {/* Instagram DM Primary Action */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-4 bg-[#0A0A0A] text-white rounded-xl hover:bg-neutral-800 transition-all group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-sm flex items-center gap-2">
                      <span>Falar por DM no Instagram</span>
                      <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded font-mono">
                        Direto
                      </span>
                    </div>
                    <div className="text-xs text-neutral-300 font-mono">
                      {INSTAGRAM_HANDLE}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Reassuring note */}
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs text-[#5C5C63]">
              <ShieldCheck className="w-4 h-4 text-black shrink-0" />
              <span>Sem compromisso. Falamos com calma e sem pressão.</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
