import { useState } from 'react';
import { npcs, families } from '../data';
import { Crown, ZoomIn } from 'lucide-react';
import ImageModal from './ImageModal';

export default function NPCsView() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const factionNames = Object.keys(npcs);

  return (
    <div className="space-y-24 animate-in fade-in duration-1000">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="flex justify-center mb-6">
          <div className="p-4 border border-[#d4af37]/30 rounded-full bg-stone-900/50 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
            <Crown className="w-10 h-10 text-[#d4af37]" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-display text-white mb-6 tracking-widest drop-shadow-md font-bold">
          대륙의 영주들과 유력 가문
        </h2>
        <div className="w-32 h-px bg-[#d4af37]/40 mx-auto"></div>
      </div>

      {factionNames.map(faction => (
        <section key={faction} className="relative">
          <div className="flex flex-col items-center mb-16">
            <h3 className="text-4xl font-display font-bold text-white tracking-[0.2em] mb-4 text-center">{faction}</h3>
            <div className="flex items-center gap-4 w-full max-w-2xl">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50"></div>
              <div className="w-2 h-2 rotate-45 bg-[#d4af37]"></div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50"></div>
            </div>
          </div>
          
          {/* 가문 목록 요약 */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {families[faction].map((fam, i) => (
              <div key={i} className="bg-stone-900/80 border border-stone-700 p-6 text-center transform transition-all hover:-translate-y-1 hover:border-[#d4af37]/60 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#d4af37]/40 rounded-b"></div>
                <div className="text-sm font-bold tracking-widest text-[#d4af37] font-serif mb-2">{fam.role} 세력</div>
                <div className="font-display font-bold text-white text-2xl mb-4 tracking-wider">{fam.name} 가문</div>
                <div className="text-sm text-stone-300 font-serif font-medium">
                  {fam.members.join(' · ')}
                </div>
              </div>
            ))}
          </div>

          {/* NPC 초상화 갤러리 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {npcs[faction].map((npc, idx) => (
              <div key={idx} className="group relative bg-[#0a0808] border border-stone-800 flex flex-col overflow-hidden transition-all duration-500 hover:border-[#d4af37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] shadow-xl">
                {/* 상단 초상화 영역 */}
                <div 
                  className="relative aspect-[3/4] overflow-hidden bg-stone-950 flex items-center justify-center cursor-pointer"
                  onClick={() => npc.imageUrl ? setSelectedImage(npc.imageUrl) : null}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0808] via-transparent to-black/50 z-10 pointer-events-none"></div>
                  {npc.imageUrl ? (
                    <>
                      <img 
                        src={npc.imageUrl} 
                        alt={npc.name} 
                        className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center pointer-events-none">
                         <ZoomIn className="w-12 h-12 text-[#d4af37]" />
                      </div>
                    </>
                  ) : (
                    <div className="font-serif text-stone-700 italic">No Portrait</div>
                  )}
                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-6 z-20 bg-gradient-to-t from-[#0a0808] via-[#0a0808]/90 to-transparent pointer-events-none">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-[#d4af37] font-serif font-bold text-sm mb-1">{npc.title}</div>
                        <h4 className="text-3xl font-display font-bold text-white tracking-widest">{npc.name}</h4>
                      </div>
                      <div className={`px-3 py-1 text-xs font-bold font-serif ${ npc.gender === '女' ? 'text-rose-400 border border-rose-900/50 bg-rose-950/80' : 'text-blue-400 border border-blue-900/50 bg-blue-950/80'}`}>
                        {npc.gender === '女' ? '여성' : '남성'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 하단 정보 영역 */}
                <div className="p-6 flex flex-col flex-1 bg-[#0a0808]">
                  <div className="mb-4 bg-stone-900/60 border border-stone-800 p-3">
                    <p className="text-[#bf953f] text-sm font-serif font-bold tracking-wide text-center">"{npc.traits}"</p>
                  </div>
                  
                  <div className="flex-1"></div>
                  
                  {npc.stats && (
                    <div className="pt-4 border-t border-stone-800">
                      <div className="flex items-center justify-between">
                         <div className="text-[0.65rem] font-serif tracking-widest text-stone-500 font-bold border-l-2 border-stone-700 pl-2">전투 스탯</div>
                         <div className="font-mono tracking-widest text-[#d4af37] font-bold text-sm">{npc.stats}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="my-20 h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent w-full"></div>
        </section>
      ))}

      <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
