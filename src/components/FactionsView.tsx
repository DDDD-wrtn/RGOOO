import { useState } from 'react';
import { factions, bandits, regions, WORLD_MAP_URL } from '../data';
import { ShieldAlert, Compass, ZoomIn } from 'lucide-react';
import ImageModal from './ImageModal';

const FACTION_IMAGES: Record<string, string> = {
  '셉텐트리아 제국': 'https://i.postimg.cc/90bdz5sp/aulelliuseu-1-jeontudol-ib.png',
  '발로리아 왕국': 'https://i.postimg.cc/Zn4PTKsR/mongpoleu-1-jeontudol-ib.png',
  '아르데니아 술탄국': 'https://i.postimg.cc/ydFX4SPg/al-jaheuleu-3-jeontudol-ib.png',
  '칸-테라 대칸국': 'https://i.postimg.cc/sxsPVDH2/boleujigin-1-jeontudol-ib.png',
  '노르드가드 왕국': 'https://i.postimg.cc/gcHqg8j7/aieonsaideu-1-jeontudol-ib.png',
};

const BANDIT_IMAGES: Record<string, string> = {
  '녹슨 철기대': 'https://i.postimg.cc/PJSS9wfs/dojeogdan-sebtenteulia-selyeog.webp',
  '검은 파도 해적': 'https://i.postimg.cc/C5ccXqht/dojeogdan-noleudeugadeu-selyeog.webp',
  '모래바람 노상강도': 'https://i.postimg.cc/NFddSHs3/dojeogdan-aleudenia-selyeog.webp',
  '검은 숲 밀렵꾼': 'https://i.postimg.cc/Znww2dYk/dojeogdan-ballolia-selyeog.webp',
  '버려진 발굽 약탈자': 'https://i.postimg.cc/hv226dDN/dojeogdan-kan-tela-selyeog.webp',
  '잿빛 넝마주이': 'https://i.postimg.cc/8cZZ96pq/dojeogdan-jeon-beom-wi.webp',
};

export default function FactionsView() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-20 animate-in fade-in duration-1000">
      
      {/* 5대 세력 섹션 */}
      <section>
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white tracking-widest pl-3 border-l-4 border-[#d4af37] font-bold">5대 지배 세력</h2>
          <div className="flex-1 h-px bg-stone-800"></div>
        </div>

        <div className="space-y-12 sm:space-y-20">
          {factions.map((faction, idx) => {
            const region = regions.find(r => r.faction === faction.name);
            const isEven = idx % 2 === 0;

            return (
              <div key={faction.id} className={`flex flex-col lg:flex-row gap-8 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                {/* 텍스트 및 전투 아트 영역 */}
                <div className="flex-1 relative border border-stone-800 group overflow-hidden bg-stone-950 flex flex-col justify-center shadow-xl">
                  {FACTION_IMAGES[faction.name] && (
                    <>
                      <img 
                        src={FACTION_IMAGES[faction.name]} 
                        alt={`${faction.name} 전경`}
                        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000 grayscale-[0.3]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/90 to-stone-950/40"></div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${isEven ? 'from-stone-950 via-stone-950/80 to-transparent' : 'from-transparent via-stone-950/80 to-stone-950'}`}></div>
                    </>
                  )}
                  
                  <div className="relative z-10 p-6 sm:p-8 lg:p-12 h-full flex flex-col justify-center">
                    <div className="mb-6 sm:mb-8">
                      <span className="inline-block px-3 py-1 border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#d4af37] font-serif text-[10px] sm:text-xs font-bold tracking-widest mb-3 sm:mb-4 backdrop-blur-md">
                        {faction.leaderType}
                      </span>
                      <h3 className="text-2xl sm:text-3xl md:text-5xl font-display text-white tracking-widest flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 font-bold drop-shadow-md whitespace-nowrap sm:whitespace-normal break-keep">
                        <span>{faction.name}</span>
                        <span className="text-xl sm:text-2xl text-[#d4af37] opacity-80">{faction.emoji}</span>
                      </h3>
                      <p className="text-base sm:text-xl text-[#bf953f] font-serif font-bold italic drop-shadow-sm border-l-2 border-[#bf953f] pl-3 sm:pl-4 break-keep">"{faction.description}"</p>
                    </div>

                    {region && (
                      <div className="space-y-4 sm:space-y-6 bg-black/60 backdrop-blur-sm p-5 sm:p-6 lg:p-8 border border-stone-700/50 shadow-2xl">
                        <div>
                          <h4 className="flex items-center gap-2 text-sm font-serif text-stone-300 font-bold tracking-widest mb-3 border-b border-stone-700 pb-2">
                             <Compass className="w-4 h-4 text-[#d4af37]" /> 영지의 심장, 수도
                          </h4>
                          <p className="text-stone-200 font-serif leading-relaxed text-lg font-bold">{region.capital}</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-sm font-serif text-stone-300 font-bold tracking-widest mb-3">전략적 요충지</h4>
                            <ul className="space-y-2">
                              {region.fortresses.map((fort, i) => (
                                <li key={i} className="text-stone-300 text-sm font-serif leading-relaxed flex gap-2">
                                  <span className="text-[#d4af37] font-bold">•</span> {fort}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-serif text-stone-300 font-bold tracking-widest mb-3">징수 및 보급 마을</h4>
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
      <section className="pt-12 sm:pt-16 mt-16 sm:mt-20 relative px-4 sm:px-8 py-12 sm:py-16 border border-stone-800 shadow-2xl overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/Wz8GtLxg/bobe-1-jeontudol-ib.png" 
            alt="도적단 토벌"
            className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-1000 grayscale-[0.6]"
          />
          <div className="absolute inset-0 bg-stone-950/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950"></div>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <ShieldAlert className="w-10 h-10 sm:w-12 sm:h-12 text-rose-800 mx-auto mb-3 sm:mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-rose-700 tracking-widest mb-3 sm:mb-4 drop-shadow-md">도적단 출몰지</h2>
            <p className="text-stone-400 font-serif text-sm sm:text-lg break-keep px-4">기근과 전란이 낳은 대륙의 골칫거리들. 소규모 교전을 통한 명성 파밍의 주 대상입니다.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {bandits.map((bandit, idx) => (
              <div key={idx} className="bg-black/80 backdrop-blur-md p-5 sm:p-6 border border-rose-900/50 hover:border-rose-700/80 transition-colors shadow-lg group/bandit relative overflow-hidden">
                {BANDIT_IMAGES[bandit.name] && (
                  <>
                    <img 
                      src={BANDIT_IMAGES[bandit.name]}
                      alt={bandit.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover/bandit:opacity-40 group-hover/bandit:scale-110 transition-all duration-700 grayscale-[0.4]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                  </>
                )}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-[10px] sm:text-xs font-serif font-bold tracking-widest text-[#d4af37] mb-1 sm:mb-2">{bandit.region}</div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-rose-500 mb-3 sm:mb-4 tracking-widest group-hover/bandit:text-rose-400 transition-colors drop-shadow-md break-keep whitespace-nowrap sm:whitespace-normal">{bandit.name}</h3>
                  <p className="text-xs sm:text-sm text-stone-300 font-serif leading-relaxed mt-auto break-keep">{bandit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 세계 지도 섹션 */}
      <section className="relative mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-stone-800">
        <div className="text-center mb-8 sm:mb-12">
           <h2 className="text-2xl sm:text-3xl md:text-5xl font-display text-white tracking-widest mb-3 sm:mb-4 font-bold">전란의 대륙도</h2>
           <div className="w-16 h-px bg-[#d4af37] mx-auto"></div>
        </div>
        <div 
          className="w-full bg-[#050403] border border-[#d4af37]/30 shadow-2xl relative group cursor-pointer p-1 rounded-sm flex items-center justify-center"
          onClick={() => setSelectedImage(WORLD_MAP_URL)}
        >
           {/* 골드 라인 프레임 */}
           <div className="absolute inset-2 border border-[#d4af37]/20 pointer-events-none z-20"></div>
           <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-30 flex items-center justify-center pointer-events-none">
              <ZoomIn className="w-12 h-12 text-[#d4af37] drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
           </div>
           
           <img 
             src={WORLD_MAP_URL} 
             alt="대륙 전체 지도" 
             className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-700"
           />
        </div>
      </section>

      <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
