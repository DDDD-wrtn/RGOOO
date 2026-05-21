import { useState } from 'react';
import { companions } from '../data';
import { Users, Coins, HeartHandshake, AlertTriangle, ChevronRight, ZoomIn } from 'lucide-react';
import ImageModal from './ImageModal';

export default function CompanionsView() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-16 animate-in fade-in duration-1000">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-display text-white mb-6 tracking-widest drop-shadow-md font-bold">
          용병과 동료 모집
        </h2>
        <div className="w-24 h-px bg-[#d4af37]/30 mx-auto mb-8"></div>
        <p className="text-stone-300 font-serif text-lg leading-relaxed">
          대막을 떠도는 무뢰배부터 가문을 등진 소드마스터까지.<br/>
          돈과 신뢰로 그들을 부리십시오. 호의를 베풀면 목숨을 바치지만, 금화가 마르면 당신의 등을 찌를 것입니다.
        </p>
      </div>

      <section className="bg-stone-900/60 p-8 md:p-12 border border-[#d4af37]/20 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#d4af37] to-[#855e0c]"></div>
        <h3 className="text-2xl font-serif text-[#d4af37] flex items-center gap-3 mb-8 font-bold">
          <HeartHandshake className="w-6 h-6" />
          결속과 배신의 규율
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="flex items-center gap-2 text-stone-100 font-serif text-xl border-b border-stone-700 pb-2 font-bold"><Users className="w-5 h-5 text-emerald-500"/> 부대원 모집</h4>
            <ul className="text-sm text-stone-300 space-y-3 font-serif leading-relaxed">
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 shrink-0 text-[#d4af37] mt-0.5"/> <strong>선술집 조우:</strong> 각 세력 대도시 타번(선술집) 방문 시 해당 세력 출신 동료 2인 무작위 조우</li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 shrink-0 text-[#d4af37] mt-0.5"/> <strong>고용 협상:</strong> 대화를 통한 사연 파악 후 부대 합류 제안 및 금화 흥정</li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 shrink-0 text-[#d4af37] mt-0.5"/> <strong>재야 인물:</strong> 영입을 거절하더라도 훗날 다른 선술집에서 재회하여 재협상 가능</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="flex items-center gap-2 text-stone-100 font-serif text-xl border-b border-stone-700 pb-2 font-bold"><Coins className="w-5 h-5 text-[#d4af37]"/> 주급 (시즌 단위 단위 유지비)</h4>
            <ul className="text-sm text-stone-300 space-y-3 font-serif leading-relaxed">
              <li className="flex items-center justify-between bg-black/40 px-3 py-2 border border-stone-800"><span className="text-stone-400 font-bold">Tier 1 보병/궁수</span> <strong className="text-[#bf953f] font-mono text-base">3 Gold</strong></li>
              <li className="flex items-center justify-between bg-black/40 px-3 py-2 border border-stone-800"><span className="text-stone-400 font-bold">Tier 2 정예/전문가</span> <strong className="text-[#bf953f] font-mono text-base">8 Gold</strong></li>
              <li className="flex items-center justify-between bg-black/40 px-3 py-2 border border-stone-800"><span className="text-stone-400 font-bold">Tier 3 기병/지휘관</span> <strong className="text-[#bf953f] font-mono text-base">15 Gold</strong></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="flex items-center gap-2 text-stone-100 font-serif text-xl border-b border-stone-700 pb-2 font-bold"><AlertTriangle className="w-5 h-5 text-rose-600"/> 사기 및 충성도</h4>
            <ul className="text-sm text-stone-300 space-y-3 font-serif leading-relaxed">
              <li className="flex items-start gap-2"><span className="text-rose-400 font-bold tracking-widest min-w-[70px]">불만 폭증 </span> 급여 미지급(+20), 잦은 패전(+10), 전투 배제(+5)</li>
              <li className="flex items-start gap-2"><span className="text-rose-500 font-bold tracking-widest min-w-[70px]">부대 이탈 </span> 불만도 80 도달 시 병영 내 갈등 및 탈주 경고 발생</li>
              <li className="flex items-start gap-2"><span className="text-rose-600 font-bold tracking-widest min-w-[70px]">반발 적대 </span> 불만도 100 달성 시 장비 탈취 후 도주 및 적대 팩션 합류</li>
              <li className="flex items-start gap-2 mt-2 pt-2 border-t border-stone-800"><span className="text-emerald-400 font-bold tracking-widest min-w-[70px]">충성 맹세 </span> 동료 개인의 복수나 미션 해결 시 불만도 영구 초기화</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-3xl font-display text-white tracking-widest pl-3 border-l-4 border-[#d4af37] font-bold">인물 명부</h3>
          <div className="flex-1 h-px bg-stone-800"></div>
          <div className="text-stone-500 font-serif italic text-sm">{companions.length}명의 떠돌이들</div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companions.map(comp => (
            <div key={comp.id} className="group relative bg-[#0f0c0a] border border-stone-800 flex flex-col transition-all duration-300 hover:border-[#d4af37]/50 shadow-xl box-border hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              {/* Image Header */}
              <div 
                className="relative aspect-square overflow-hidden bg-stone-950 cursor-pointer"
                onClick={() => comp.imageUrl ? setSelectedImage(comp.imageUrl) : null}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c0a] via-transparent to-black/30 z-10 pointer-events-none"></div>
                {comp.imageUrl ? (
                  <>
                    <img 
                      src={comp.imageUrl} 
                      alt={comp.name} 
                      className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                       <ZoomIn className="w-8 h-8 text-[#d4af37]" />
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-serif text-stone-700">초상화 없음</div>
                )}
                
                <div className="absolute top-3 right-3 z-20 pointer-events-none">
                  <span className="bg-black/90 backdrop-blur border border-[#d4af37]/60 text-[#d4af37] px-2 py-1 text-xs font-serif font-bold tracking-widest shadow-2xl">
                    {comp.tier}
                  </span>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-4 z-20 translate-y-2 group-hover:translate-y-0 transition-transform pointer-events-none">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 text-[0.65rem] font-bold tracking-widest border ${
                      comp.gender === '女' ? 'text-rose-400 border-rose-900 bg-rose-950/80' : 'text-blue-400 border-blue-900 bg-blue-950/80'
                    }`}>
                      {comp.gender === '女' ? '여성' : '남성'}
                    </span>
                    <span className="text-[#bf953f] font-serif font-bold text-xs tracking-wider">{comp.role}</span>
                  </div>
                  <h4 className="text-2xl font-display font-bold text-stone-100 tracking-widest drop-shadow-lg">{comp.name}</h4>
                </div>
              </div>
              
              {/* Content Body */}
              <div className="p-5 flex flex-col flex-1 divide-y divide-stone-800/80 bg-[#0f0c0a]">
                <div className="pb-4">
                  <div className="text-[0.7rem] text-stone-500 font-serif font-bold tracking-widest mb-2 border-l-2 border-stone-700 pl-2">전투 능력치</div>
                  <div className="font-mono text-sm text-[#bf953f] tracking-widest pl-2">{comp.stats}</div>
                </div>
                
                <div className="py-4">
                  <div className="text-[0.7rem] text-stone-500 font-serif font-bold tracking-widest mb-2 border-l-2 border-stone-700 pl-2">부대 특기</div>
                  <p className="text-sm text-stone-300 font-serif leading-relaxed h-10 line-clamp-2 pl-2 font-medium">{comp.specialty}</p>
                </div>

                {comp.habit && (
                  <div className="pt-4 mt-auto">
                    <p className="text-xs text-stone-400 font-serif italic leading-relaxed bg-stone-900/50 p-3 border border-stone-800/50">"{comp.habit}"</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
