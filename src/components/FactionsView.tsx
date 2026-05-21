import { useState } from 'react';
import { factions, bandits, regions, WORLD_MAP_URL } from '../data';
import { ShieldAlert, Compass, ZoomIn } from 'lucide-react';
import ImageModal from './ImageModal';

export default function FactionsView() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-20 animate-in fade-in duration-1000">
      
      {/* 세계 지도 섹션 */}
      <section className="relative">
        <div className="text-center mb-12">
           <h2 className="text-4xl md:text-5xl font-display text-white tracking-widest mb-4 font-bold">전란의 대륙도</h2>
           <div className="w-16 h-px bg-[#d4af37] mx-auto"></div>
        </div>
        <div 
          className="w-full aspect-[21/9] md:aspect-[3/1] bg-stone-900 border border-stone-800 shadow-2xl overflow-hidden relative group cursor-pointer"
          onClick={() => setSelectedImage(WORLD_MAP_URL)}
        >
           <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]"></div>
           <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center pointer-events-none">
              <ZoomIn className="w-10 h-10 text-[#d4af37]" />
           </div>
           <img 
             src={WORLD_MAP_URL} 
             alt="대륙 전체 지도" 
             className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-transform duration-[2s] group-hover:scale-105"
           />
        </div>
      </section>

      {/* 5대 세력 섹션 */}
      <section>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-display text-white tracking-widest pl-3 border-l-4 border-[#d4af37] font-bold">5대 지배 세력</h2>
          <div className="flex-1 h-px bg-stone-800"></div>
        </div>

        <div className="space-y-20">
          {factions.map((faction, idx) => {
            const region = regions.find(r => r.faction === faction.name);
            const isEven = idx % 2 === 0;

            return (
              <div key={faction.id} className={`flex flex-col lg:flex-row gap-10 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                {/* 텍스트 영역 */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#d4af37] font-serif text-xs font-bold tracking-widest mb-4">
                      {faction.leaderType}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-display text-white tracking-widest flex items-center gap-4 mb-4 font-bold drop-shadow-md">
                       <span>{faction.name}</span>
                       <span className="text-2xl text-[#d4af37] opacity-80">{faction.emoji}</span>
                    </h3>
                    <p className="text-xl text-[#bf953f] font-serif font-bold italic drop-shadow-sm border-l-2 border-[#bf953f] pl-4">"{faction.description}"</p>
                  </div>

                  {region && (
                    <div className="space-y-6 bg-stone-900/60 p-8 border border-stone-800 shadow-xl">
                      <div>
                        <h4 className="flex items-center gap-2 text-sm font-serif text-stone-400 font-bold tracking-widest mb-3 border-b border-stone-800 pb-2">
                           <Compass className="w-4 h-4 text-[#d4af37]" /> 영지의 심장, 수도
                        </h4>
                        <p className="text-stone-200 font-serif leading-relaxed text-lg font-bold">{region.capital}</p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-sm font-serif text-stone-400 font-bold tracking-widest mb-3">전략적 요충지</h4>
                          <ul className="space-y-2">
                            {region.fortresses.map((fort, i) => (
                              <li key={i} className="text-stone-300 text-sm font-serif leading-relaxed flex gap-2">
                                <span className="text-[#d4af37] font-bold">•</span> {fort}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-serif text-stone-400 font-bold tracking-widest mb-3">징수 및 보급 마을</h4>
                          <ul className="space-y-2">
                            {region.villages.map((village, i) => (
                              <li key={i} className="text-stone-400 text-sm font-serif leading-relaxed flex gap-2">
                                <span className="text-stone-600 font-bold shrink-0">-</span> <span>{village}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 지도 영역 */}
                <div 
                  className="w-full lg:w-5/12 aspect-[4/3] lg:aspect-auto border border-stone-800 bg-stone-900 relative group overflow-hidden shadow-2xl cursor-pointer"
                  onClick={() => region?.imageUrl ? setSelectedImage(region.imageUrl) : null}
                >
                   <div className="absolute inset-0 bg-stone-950 flex items-center justify-center font-serif text-stone-700 z-0 text-sm leading-relaxed text-center px-4">지도가 유실되었습니다</div>
                   <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]"></div>
                   {region?.imageUrl && (
                      <>
                        <img 
                          src={region.imageUrl} 
                          alt={`${faction.name} 지도`}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105 mix-blend-screen relative z-10"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-30 flex items-center justify-center pointer-events-none">
                           <ZoomIn className="w-10 h-10 text-[#d4af37]" />
                        </div>
                      </>
                   )}
                   {/* 모서리 장식 */}
                   <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d4af37]/60 z-30 pointer-events-none m-4"></div>
                   <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d4af37]/60 z-30 pointer-events-none m-4"></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 도적단 영역 */}
      <section className="pt-16 border-t border-stone-900 mt-20">
        <div className="text-center mb-12">
          <ShieldAlert className="w-12 h-12 text-rose-800 mx-auto mb-4" />
          <h2 className="text-4xl font-display font-bold text-rose-700 tracking-widest mb-4 drop-shadow-md">도적단 출몰지</h2>
          <p className="text-stone-400 font-serif text-lg">기근과 전란이 낳은 대륙의 골칫거리들. 소규모 교전을 통한 명성 파밍의 주 대상입니다.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bandits.map((bandit, idx) => (
            <div key={idx} className="bg-gradient-to-br from-[#140b0b] to-[#0a0505] p-6 border border-rose-900/50 hover:border-rose-700/80 transition-colors shadow-lg group">
              <div className="text-xs font-serif font-bold tracking-widest text-[#d4af37] mb-2">{bandit.region}</div>
              <h3 className="text-2xl font-display font-bold text-rose-500 mb-4 tracking-widest group-hover:text-rose-400 transition-colors">{bandit.name}</h3>
              <p className="text-sm text-stone-300 font-serif leading-relaxed">{bandit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
