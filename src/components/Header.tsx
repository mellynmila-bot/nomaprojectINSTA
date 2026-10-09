import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Instagram, Settings2 } from 'lucide-react';
import { InkCodeLogo } from './InkCodeLogo';
import { INSTAGRAM_URL } from '../data/featuresData';

interface HeaderProps {
  onOpenContact: () => void;
  studioName: string;
  onUpdateStudioName: (name: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenContact,
  studioName,
  onUpdateStudioName,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showStudioPrompt, setShowStudioPrompt] = useState(false);
  const [tempStudioInput, setTempStudioInput] = useState(studioName);

  const navLinks = [
    { label: 'O que inclui', href: '#menu' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Tecnologia', href: '#tecnologia' },
    { label: 'Parceria', href: '#parceria' },
    { label: 'FAQ', href: '#faq' },
  ];

  // Track scroll position for active section indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['menu', 'como-funciona', 'tecnologia', 'parceria', 'faq'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApplyStudio = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateStudioName(tempStudioInput.trim());
    setShowStudioPrompt(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#E4E4E7] transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-4">
          
          {/* ZONE 1: BRAND LOGO */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="group flex items-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black rounded-sm"
              aria-label="InkCode Início"
            >
              <InkCodeLogo size={26} textColor="#0A0A0A" />
            </a>

            {/* Client context pill / interactive test indicator */}
            {studioName && (
              <span className="hidden sm:inline-flex items-center text-xs font-mono text-[#5C5C63] border-l border-[#E4E4E7] pl-3 ml-1">
                para <strong className="text-[#0A0A0A] font-semibold ml-1">{studioName}</strong>
              </span>
            )}
          </div>

          {/* ZONE 2: DESKTOP NAVIGATION (Natural single-line editorial links) */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-[#5C5C63]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors whitespace-nowrap py-1 relative hover:text-[#0A0A0A] ${
                    isActive ? 'text-[#0A0A0A] font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0A0A0A]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ZONE 3: ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick studio parameter toggle (helps creator test different clients easily) */}
            <button
              onClick={() => {
                setTempStudioInput(studioName);
                setShowStudioPrompt(!showStudioPrompt);
              }}
              title="Personalizar nome do estúdio (?studio=...)"
              className="p-2 text-neutral-400 hover:text-black hover:bg-neutral-100 rounded-lg transition-colors text-xs flex items-center gap-1"
              aria-label="Configurar nome do estúdio"
            >
              <Settings2 className="w-4 h-4" />
              <span className="hidden xl:inline font-mono text-[11px]">
                {studioName ? `Estúdio: ${studioName}` : 'Personalizar'}
              </span>
            </button>

            {/* Primary Action Button */}
            <a
              href="https://www.instagram.com/inkcode.web/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A0A0A] text-white hover:bg-neutral-800 text-xs sm:text-sm font-medium px-4 py-2 sm:py-2.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap min-touch-target shadow-xs"
            >
              <span>Falar comigo</span>
              <ArrowUpRight className="w-3.5 h-3.5 hidden sm:inline" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-700 hover:text-black rounded-lg min-touch-target flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Studio name quick popover for the creator/consultant */}
        {showStudioPrompt && (
          <div className="bg-[#F5F5F6] border-b border-[#E4E4E7] px-4 py-3">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="text-neutral-600">
                <span className="font-semibold text-black">Personalização da Proposta:</span> Altera o nome do estúdio ou deixa em branco para genérico.
              </div>
              <form onSubmit={handleApplyStudio} className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Ex: NOMA, Black Anchor, ..."
                  value={tempStudioInput}
                  onChange={(e) => setTempStudioInput(e.target.value)}
                  className="bg-white border border-[#E4E4E7] px-3 py-1.5 rounded text-xs text-black placeholder:text-neutral-400 focus:outline-hidden focus:border-black font-medium"
                />
                <button
                  type="submit"
                  className="bg-[#0A0A0A] text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-neutral-800"
                >
                  Aplicar
                </button>
                {studioName && (
                  <button
                    type="button"
                    onClick={() => {
                      setTempStudioInput('');
                      onUpdateStudioName('');
                      setShowStudioPrompt(false);
                    }}
                    className="text-neutral-500 hover:text-red-600 underline px-1 text-xs"
                  >
                    Limpar
                  </button>
                )}
              </form>
            </div>
          </div>
        )}
      </header>

      {/* MOBILE FULLSCREEN MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-30 bg-white md:hidden flex flex-col justify-between p-6 overflow-y-auto animate-fadeIn">
          <div className="space-y-6 pt-4">
            <div className="font-mono text-xs uppercase tracking-widest text-[#5C5C63]">
              Navegação da proposta
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-2xl tracking-wide uppercase text-[#0A0A0A] border-b border-neutral-100 pb-2 hover:translate-x-1 transition-transform flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-neutral-400" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#E4E4E7] space-y-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#0A0A0A] text-white py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>Falar por DM no Instagram</span>
            </a>
            <div className="text-center font-mono text-[11px] text-neutral-400">
              InkCode · Design & Engenharia Web
            </div>
          </div>
        </div>
      )}
    </>
  );
};
