import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PhilosophySection } from './components/PhilosophySection';
import { FeaturesMenu } from './components/FeaturesMenu';
import { ProcessSection } from './components/ProcessSection';
import { TechVercelSection } from './components/TechVercelSection';
import { PartnershipSection } from './components/PartnershipSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { DEFAULT_CLIENT_NAME } from './data/featuresData';
import { Link as LinkIcon, Check } from 'lucide-react';

export default function App() {
  const [studioName, setStudioName] = useState<string>('');
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Initialize studio from URL parameter if present (?studio=NOMA or ?cliente=...)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const studioParam = params.get('studio') || params.get('cliente') || params.get('client') || params.get('estudio');
      if (studioParam && studioParam.trim()) {
        setStudioName(studioParam.trim());
      } else {
        // Pre-fill default sample client for illustrative demonstration
        setStudioName(DEFAULT_CLIENT_NAME);
      }
    } catch {
      setStudioName(DEFAULT_CLIENT_NAME);
    }
  }, []);

  const handleUpdateStudioName = (newName: string) => {
    setStudioName(newName);
    // Update URL query string without reloading
    try {
      const url = new URL(window.location.href);
      if (newName) {
        url.searchParams.set('studio', newName);
      } else {
        url.searchParams.delete('studio');
      }
      window.history.replaceState({}, '', url.toString());
    } catch {
      // Ignore if in restricted iframe
    }
  };

  const copyShareableLink = () => {
    const url = new URL(window.location.href);
    if (studioName) {
      url.searchParams.set('studio', studioName);
    } else {
      url.searchParams.delete('studio');
    }
    navigator.clipboard.writeText(url.toString()).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    });
  };

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-body flex flex-col selection:bg-[#0A0A0A] selection:text-white">
      {/* Top micro-bar for link testing / DM preparation */}
      <div className="bg-[#F5F5F6] border-b border-[#E4E4E7] py-1.5 px-4 text-xs font-mono text-[#5C5C63]">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="text-[10px] uppercase font-bold tracking-wider text-black bg-white px-1.5 py-0.5 rounded border border-[#E4E4E7]">
              Modo Proposta DM
            </span>
            <span className="truncate hidden sm:inline">
              {studioName ? `Link personalizado para: "${studioName}"` : 'Link genérico ("O que vem no teu site")'}
            </span>
          </div>

          <button
            onClick={copyShareableLink}
            className="inline-flex items-center gap-1.5 text-xs text-black hover:text-neutral-600 font-sans font-medium transition-colors shrink-0"
            title="Copiar link com o parâmetro ?studio="
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-600 stroke-[2.5]" />
                <span className="text-green-600 font-mono text-[11px]">Link copiado!</span>
              </>
            ) : (
              <>
                <LinkIcon className="w-3.5 h-3.5" />
                <span className="font-mono text-[11px]">Copiar link ?studio</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Header */}
      <Header
        onOpenContact={() => setIsContactOpen(true)}
        studioName={studioName}
        onUpdateStudioName={handleUpdateStudioName}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 5.2 Hero with 4 highlights and device mockup */}
        <Hero
          studioName={studioName}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 5.3 Filosofia: "Como pensamos o teu site" */}
        <PhilosophySection />

        {/* 5.4 Menu explicativo interativo (28 recursos + extras + aviso SEO/GEO/AIO) */}
        <FeaturesMenu />

        {/* 5.5 Como funciona (4 passos) */}
        <ProcessSection />

        {/* 5.6 A tecnologia (Vercel) */}
        <TechVercelSection />

        {/* 5.7 A parceria (5 anos + linha temporal) */}
        <PartnershipSection />

        {/* 5.8 FAQ (6 perguntas) */}
        <FaqSection />

        {/* 5.9 Chamada final (Faixa preta) */}
        <FinalCtaSection
          studioName={studioName}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* 5.10 Rodapé */}
      <Footer />

      {/* Contact modal triggered by "Falar comigo" */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        studioName={studioName}
      />
    </div>
  );
}
