import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Palette, Smartphone, Sparkles, Compass, PenTool, Image as ImageIcon,
  Maximize2, Users, HeartHandshake, Video, MessageSquareQuote, ShieldCheck,
  HelpCircle, CalendarCheck, FileText, Send, MapPin, Search, Cpu,
  BrainCircuit, Code2, Share2, Link2, Globe, Zap, Lock,
  Accessibility, Bookmark, Check, ChevronDown, ChevronUp, X,
  Info, CheckCircle2
} from 'lucide-react';
import { FEATURES_DATA, FeatureItem } from '../data/featuresData';

// Icon resolver
const getFeatureIcon = (iconName: string) => {
  const iconProps = { className: 'w-5 h-5 stroke-[1.75]' };
  switch (iconName) {
    case 'Palette': return <Palette {...iconProps} />;
    case 'Smartphone': return <Smartphone {...iconProps} />;
    case 'Sparkles': return <Sparkles {...iconProps} />;
    case 'Compass': return <Compass {...iconProps} />;
    case 'PenTool': return <PenTool {...iconProps} />;
    case 'Image': return <ImageIcon {...iconProps} />;
    case 'Maximize2': return <Maximize2 {...iconProps} />;
    case 'Users': return <Users {...iconProps} />;
    case 'HeartHandshake': return <HeartHandshake {...iconProps} />;
    case 'Video': return <Video {...iconProps} />;
    case 'MessageSquareQuote': return <MessageSquareQuote {...iconProps} />;
    case 'ShieldCheck': return <ShieldCheck {...iconProps} />;
    case 'HelpCircle': return <HelpCircle {...iconProps} />;
    case 'CalendarCheck': return <CalendarCheck {...iconProps} />;
    case 'FileText': return <FileText {...iconProps} />;
    case 'Send': return <Send {...iconProps} />;
    case 'MapPin': return <MapPin {...iconProps} />;
    case 'Search': return <Search {...iconProps} />;
    case 'Cpu': return <Cpu {...iconProps} />;
    case 'BrainCircuit': return <BrainCircuit {...iconProps} />;
    case 'Code2': return <Code2 {...iconProps} />;
    case 'Share2': return <Share2 {...iconProps} />;
    case 'Link2': return <Link2 {...iconProps} />;
    case 'Globe': return <Globe {...iconProps} />;
    case 'Zap': return <Zap {...iconProps} />;
    case 'Lock': return <Lock {...iconProps} />;
    case 'Accessibility': return <Accessibility {...iconProps} />;
    case 'Bookmark': return <Bookmark {...iconProps} />;
    default: return <CheckCircle2 {...iconProps} />;
  }
};

type CategoryFilter = 'Tudo' | 'Identidade e design' | 'Conteúdo' | 'Marcações' | 'Visibilidade' | 'Técnico';

export const FeaturesMenu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Tudo');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const categories: CategoryFilter[] = [
    'Tudo',
    'Identidade e design',
    'Conteúdo',
    'Marcações',
    'Visibilidade',
    'Técnico'
  ];

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { Tudo: FEATURES_DATA.length };
    for (const f of FEATURES_DATA) {
      counts[f.category] = (counts[f.category] || 0) + 1;
    }
    return counts;
  }, []);

  // Filtered features
  const filteredFeatures = useMemo(() => {
    return FEATURES_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'Tudo' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.miniExplanation.toLowerCase().includes(q) ||
        item.paraQueServe.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpand = (id: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<number, boolean> = {};
    filteredFeatures.forEach((f) => {
      allExpanded[f.id] = true;
    });
    setExpandedItems(allExpanded);
  };

  const collapseAll = () => {
    setExpandedItems({});
  };

  return (
    <section id="menu" className="py-14 sm:py-20 border-t border-[#E4E4E7] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#5C5C63]">
                Catálogo Transparente
              </span>
              <span className="text-[11px] font-mono bg-[#F5F5F6] border border-[#E4E4E7] px-2 py-0.5 rounded text-neutral-700">
                {FEATURES_DATA.length} Itens Incluídos
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-[#0A0A0A] uppercase tracking-tight mt-1">
              O QUE ESTÁ INCLUÍDO NO TEU SITE
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5C5C63] font-body max-w-xl">
              Clica em qualquer cartão para ver exatamente para que serve e como protege ou valoriza o teu negócio.
            </p>
          </div>

          {/* Quick expand/collapse controls */}
          <div className="flex items-center gap-2 self-start md:self-auto text-xs font-medium">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 rounded-lg border border-[#E4E4E7] text-neutral-600 hover:text-black hover:bg-[#F5F5F6] transition-colors"
            >
              Expandir todos
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 rounded-lg border border-[#E4E4E7] text-neutral-600 hover:text-black hover:bg-[#F5F5F6] transition-colors"
            >
              Recolher
            </button>
          </div>
        </div>

        {/* CONTROLS BAR: Category Chips & Search Bar */}
        <div className="space-y-4 mb-8">
          
          {/* Search input with clean focus ring */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Pesquisar recurso (ex: SEO, Instagram, domínio, mapas)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F5F5F6] border border-[#E4E4E7] rounded-xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-[#0A0A0A] placeholder:text-neutral-400 focus:outline-hidden focus:border-[#0A0A0A] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black p-1"
                aria-label="Limpar pesquisa"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Chips: Horizontal scroll on mobile, flex on desktop */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap min-touch-target flex items-center gap-1.5 shrink-0 ${
                    isSelected
                      ? 'bg-[#0A0A0A] text-white shadow-xs'
                      : 'bg-[#F5F5F6] text-[#5C5C63] hover:text-[#0A0A0A] hover:bg-neutral-200/70 border border-[#E4E4E7]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`font-mono text-[10px] px-1.5 py-0.2 rounded ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-neutral-200/80 text-neutral-600'
                    }`}
                  >
                    {categoryCounts[cat] || 0}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* EDUCATIONAL NOTICE: SEO, GEO & AIO (Prominent, honest, transparent) */}
        {(selectedCategory === 'Tudo' || selectedCategory === 'Visibilidade') && !searchQuery && (
          <div className="mb-8 p-5 sm:p-6 bg-[#F5F5F6] border border-[#E4E4E7] rounded-2xl flex flex-col sm:flex-row items-start gap-4">
            <div className="w-9 h-9 rounded-xl bg-white border border-[#E4E4E7] flex items-center justify-center shrink-0 text-[#0A0A0A]">
              <Info className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="font-semibold text-[#0A0A0A] uppercase tracking-wide font-display text-base">
                NOTA EDUCATIVA: VISIBILIDADE REAL NO GOOGLE E EM IA
              </div>
              <p className="text-[#5C5C63] leading-relaxed font-body">
                SEO, GEO e AIO são formas técnicas de preparar o site para ser encontrado organicamente. Com o tempo, o Google e as ferramentas de IA leem e interpretam a estrutura do site, o que permite subir nas pesquisas da tua zona.
              </p>
              <p className="text-[#0A0A0A] font-medium leading-relaxed font-body">
                Sem um site próprio, ter esse posicionamento orgânico é simplesmente impossível. Não prometemos primeiro lugar imediato nem resultados milagrosos de um dia para o outro, porque os motores de busca exigem tempo — mas o propósito é garantir que és posicionado organicamente com solidez.
              </p>
            </div>
          </div>
        )}

        {/* RESULTS GRID (1 col mobile, 2 col tablet, 3 col desktop) */}
        {filteredFeatures.length === 0 ? (
          <div className="py-16 text-center border border-dashed border-[#E4E4E7] rounded-2xl p-8">
            <Search className="w-8 h-8 text-neutral-400 mx-auto mb-3" />
            <p className="text-sm font-medium text-neutral-700">
              Nenhum recurso encontrado para "{searchQuery}"
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              Tenta procurar por outra palavra ou limpa a pesquisa.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Tudo');
              }}
              className="mt-4 px-4 py-2 bg-[#0A0A0A] text-white text-xs rounded-lg"
            >
              Ver todos os recursos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {filteredFeatures.map((item) => {
              const isExpanded = !!expandedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleExpand(item.id)}
                  className={`group bg-white border rounded-2xl p-5 transition-all cursor-pointer flex flex-col justify-between select-none ${
                    isExpanded
                      ? 'border-[#0A0A0A] shadow-md ring-1 ring-[#0A0A0A]'
                      : 'border-[#E4E4E7] hover:border-neutral-400 hover:shadow-xs'
                  }`}
                >
                  <div>
                    {/* Top Row: Icon, Category & Included tag */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#F5F5F6] border border-[#E4E4E7] flex items-center justify-center text-[#0A0A0A] group-hover:bg-neutral-200/50 transition-colors">
                        {getFeatureIcon(item.icon)}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                          #{String(item.id).padStart(2, '0')}
                        </span>
                        <div className="inline-flex items-center gap-1 text-[11px] font-medium text-[#0A0A0A] bg-[#F5F5F6] border border-[#E4E4E7] px-2 py-0.5 rounded-full">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                          <span>Incluído</span>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl text-[#0A0A0A] uppercase tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    {/* Mini explanation (1 to 2 lines) */}
                    <p className="mt-1.5 text-xs sm:text-[13px] text-[#5C5C63] font-body leading-relaxed">
                      {item.miniExplanation}
                    </p>

                    {/* Category subtitle */}
                    <div className="mt-2 text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                      {item.category}
                    </div>
                  </div>

                  {/* Expandable "Para que serve" Section */}
                  <div className="mt-4 pt-3 border-t border-neutral-100">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between text-xs font-semibold text-[#0A0A0A] hover:text-neutral-600 transition-colors"
                    >
                      <span className="font-mono uppercase tracking-wider text-[11px]">
                        {isExpanded ? 'Ocultar detalhe' : 'Para que serve?'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-neutral-600" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2.5 p-3 bg-[#F5F5F6] rounded-xl border border-[#E4E4E7] text-xs text-[#0A0A0A] leading-relaxed font-body">
                            <span className="font-semibold block text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                              Impacto real no negócio:
                            </span>
                            {item.paraQueServe}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
