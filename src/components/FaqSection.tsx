import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/featuresData';

export const FaqSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<Record<number, boolean>>({
    0: true, // First open by default for immediate context
  });

  const toggleFaq = (index: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="faq" className="py-14 sm:py-20 border-t border-[#E4E4E7] bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5F5F6] border border-[#E4E4E7] rounded-full text-xs font-mono text-neutral-600 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-black" />
            <span>Respostas Claras</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-[#0A0A0A] uppercase tracking-tight">
            PERGUNTAS FREQUENTES
          </h2>

          <p className="mt-2 text-sm text-[#5C5C63] font-body">
            Tudo o que precisas de saber sobre como trabalhamos, custos e suporte.
          </p>
        </div>

        {/* 6 FAQ Accordion Items */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = !!openIndices[index];
            return (
              <div
                key={index}
                className="bg-[#F5F5F6] border border-[#E4E4E7] rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 select-none hover:bg-neutral-200/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-neutral-400 font-bold shrink-0">
                      0{index + 1}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A] uppercase tracking-tight leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center shrink-0 text-[#0A0A0A]">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-500" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5C5C63] font-body leading-relaxed border-t border-neutral-200/40 mt-1">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
