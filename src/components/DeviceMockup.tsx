import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface DeviceMockupProps {
  studioName: string;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({ studioName }) => {
  const displayStudio = studioName || 'O TEU ESTÚDIO';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-2xl mx-auto py-4 select-none"
    >
      {/* Floating container with subtle organic breath */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative flex items-end justify-center"
      >
        {/* LAPTOP MOCKUP */}
        <div className="relative w-[85%] sm:w-[78%] bg-[#0A0A0A] rounded-t-xl p-2.5 sm:p-3 shadow-2xl border border-neutral-700/80">
          {/* Laptop Camera dot */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-neutral-700 rounded-full" />
          
          {/* Laptop Screen */}
          <div className="bg-[#FFFFFF] text-[#0A0A0A] rounded-lg overflow-hidden border border-neutral-200 aspect-[16/10] flex flex-col">
            {/* Browser top chrome */}
            <div className="h-5 sm:h-6 bg-[#F5F5F6] border-b border-neutral-200 px-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-neutral-300" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-neutral-300" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-neutral-300" />
              </div>
              <div className="text-[8px] sm:text-[10px] text-neutral-500 font-mono tracking-tight bg-white px-2.5 py-0.5 rounded border border-neutral-200 max-w-[180px] truncate">
                {studioName ? `${studioName.toLowerCase().replace(/\s+/g, '')}.pt` : 'teuestudio.pt'}
              </div>
              <div className="w-4" />
            </div>

            {/* Inner studio webpage mockup */}
            <div className="flex-1 p-3 sm:p-5 flex flex-col justify-between bg-gradient-to-b from-white to-[#FBFBFC]">
              {/* Mini Nav */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <span className="font-display text-xs sm:text-sm tracking-wider font-bold">
                  {displayStudio}
                </span>
                <div className="flex items-center gap-2 text-[8px] sm:text-[10px] text-neutral-500 font-medium">
                  <span>Trabalhos</span>
                  <span>Equipa</span>
                  <span className="bg-[#0A0A0A] text-white px-2 py-0.5 rounded text-[8px]">Marcar</span>
                </div>
              </div>

              {/* Mini Hero inside Screen */}
              <div className="my-auto py-1">
                <div className="inline-flex items-center gap-1 text-[8px] uppercase tracking-widest text-neutral-400 font-mono">
                  <span>Arte & Precisão</span>
                  <span>·</span>
                  <span>Portugal</span>
                </div>
                <h4 className="font-display text-base sm:text-2xl leading-none tracking-tight text-[#0A0A0A] uppercase mt-0.5">
                  DESIGN EXCLUSIVO DE RAIZ
                </h4>
                <p className="text-[8px] sm:text-[11px] text-neutral-500 line-clamp-1 max-w-sm mt-0.5">
                  Projetos personalizados pensados para a identidade única de cada cliente.
                </p>
              </div>

              {/* Mini Gallery thumbnails */}
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 pt-2 border-t border-neutral-100">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="aspect-square bg-neutral-100 rounded border border-neutral-200/60 flex items-center justify-center p-1 group"
                  >
                    <div className="w-full h-full bg-neutral-200/60 rounded flex items-center justify-center text-[8px] text-neutral-400 font-mono">
                      0{item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Laptop Base Stand */}
          <div className="absolute -bottom-2 sm:-bottom-2.5 left-1/2 -translate-x-1/2 w-[108%] h-2 sm:h-2.5 bg-neutral-800 rounded-b-lg border-t border-neutral-700 shadow-md">
            <div className="w-12 h-1 bg-neutral-600 rounded-b mx-auto" />
          </div>
        </div>

        {/* SMARTPHONE MOCKUP (Overlapping at right with elevation) */}
        <motion.div
          animate={{ y: [3, -3, 3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="relative -ml-8 sm:-ml-12 z-20 w-[30%] sm:w-[26%] bg-[#0A0A0A] rounded-[24px] sm:rounded-[32px] p-1.5 sm:p-2 shadow-2xl border border-neutral-700/80"
        >
          {/* Mobile Screen */}
          <div className="bg-[#FFFFFF] text-[#0A0A0A] rounded-[18px] sm:rounded-[26px] overflow-hidden border border-neutral-200 aspect-[9/18] flex flex-col justify-between p-2 sm:p-3 relative">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-2.5 sm:h-3 bg-[#0A0A0A] rounded-full z-30" />

            {/* Mobile Header */}
            <div className="pt-3 sm:pt-4 flex items-center justify-between border-b border-neutral-100 pb-1.5">
              <span className="font-display text-[9px] sm:text-xs font-bold truncate max-w-[80px]">
                {displayStudio}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            </div>

            {/* Mobile Body */}
            <div className="my-auto space-y-1.5">
              <span className="text-[7px] text-neutral-400 uppercase tracking-widest font-mono block">
                Mobile-First
              </span>
              <h5 className="font-display text-[11px] sm:text-sm leading-tight uppercase font-bold">
                PRONTO PARA MARCAÇÃO
              </h5>
              
              {/* Mini CTA button */}
              <div className="w-full bg-[#0A0A0A] text-white rounded text-[8px] sm:text-[9px] font-medium py-1 px-1.5 text-center flex items-center justify-center gap-1 shadow-sm">
                <Calendar className="w-2.5 h-2.5" />
                <span>Pedir Marcação</span>
              </div>
            </div>

            {/* Mobile Footer features */}
            <div className="text-[7px] sm:text-[8px] text-neutral-500 border-t border-neutral-100 pt-1.5 flex items-center justify-between">
              <span className="flex items-center gap-0.5">
                <CheckCircle2 className="w-2 h-2 text-black" />
                <span>100% Rápido</span>
              </span>
              <span className="font-mono text-[6px] text-neutral-400">4G/5G</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Ground soft shadow */}
      <div className="w-3/4 h-3 bg-neutral-900/10 rounded-[100%] mx-auto blur-md mt-4" />
    </motion.div>
  );
};
