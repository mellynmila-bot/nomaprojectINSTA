import React from 'react';
import { Instagram, ArrowUp } from 'lucide-react';
import { InkCodeLogo } from './InkCodeLogo';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/featuresData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#E4E4E7] py-10 sm:py-14 text-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#E4E4E7]">
          {/* Logo & Descriptor */}
          <div className="space-y-2">
            <InkCodeLogo size={24} textColor="#0A0A0A" />
            <p className="text-xs text-[#5C5C63] font-body max-w-sm">
              Design de sites de raiz e engenharia web para estúdios e profissionais criativos.
            </p>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-[#5C5C63] hover:text-[#0A0A0A] transition-colors p-2 rounded-lg hover:bg-[#F5F5F6]"
            >
              <Instagram className="w-4 h-4 text-black" />
              <span className="font-mono">{INSTAGRAM_HANDLE}</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl border border-[#E4E4E7] hover:border-black text-[#0A0A0A] hover:bg-[#F5F5F6] transition-all text-xs flex items-center gap-1.5"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-mono">Topo</span>
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#5C5C63] font-mono">
          <div>
            © 2026 InkCode. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-[11px] text-neutral-400">
            <span>Página de Proposta Educativa</span>
            <span>·</span>
            <span>Sem preços públicos</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
