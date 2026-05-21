import { WORLD_MAP_URL } from '../data';

interface HeroProps {
  hasStarted?: boolean;
  onStart?: () => void;
}

export default function Hero({ hasStarted = true, onStart }: HeroProps) {
  return (
    <div className={`relative overflow-hidden bg-[#050403] border-b border-stone-800/80 transition-all duration-1000 ${!hasStarted ? 'min-h-screen flex items-center justify-center' : ''}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: `url('https://i.postimg.cc/9FNLmccL/jemog-eobsneun-dijain.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0808] via-[#0a0808]/70 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0a0808]/80 to-[#0a0808]" />
      
      <div className={`relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center transition-all duration-1000 ${!hasStarted ? 'py-12' : 'py-32 md:py-48'}`}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border-y border-[#d4af37]/30 text-[#d4af37] text-sm font-serif tracking-[0.2em] mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 font-bold bg-black/50 backdrop-blur-sm">
          남녀역전 중세 전략 롤플레잉
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white tracking-widest mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150 drop-shadow-2xl font-black break-keep">
          남녀역전 중세에서<br/>
          유일한 <span className="text-stone-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] font-serif font-light tracking-widest ml-2">“&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;”</span>
        </h1>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent mb-8"></div>
        <p className="max-w-2xl text-lg md:text-xl text-stone-300 font-serif leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 drop-shadow-md break-keep">
          이 대륙에 마법이나 기적은 없습니다.<br className="hidden md:block" /> 오직 차가운 강철과 피비린내 나는 모략만이 세상을 지배할 뿐입니다.<br />
          그러나 세상의 섭리를 벗어난 단 한 사람, 바로 당신.<br className="hidden md:block" /> 당신만의 이능과 지략으로 이 난세의 서사를 쟁취하십시오.
        </p>
        
        {!hasStarted && onStart && (
          <button 
            onClick={onStart}
            className="group relative mt-16 animate-in fade-in slide-in-from-bottom-8 delay-500 transform hover:scale-[1.02] transition-all duration-500"
          >
            <div className="relative px-20 py-5 bg-gradient-to-b from-[#2a1c15] via-[#140c0a] to-[#0a0605] border-y-2 border-x border-[#855e0c] group-hover:border-[#d4af37] transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.6)] flex items-center justify-center gap-8 min-w-[320px]">
              
              {/* Inner Outline */}
              <div className="absolute inset-[3px] border border-[#d4af37]/20 group-hover:border-[#d4af37]/40 transition-colors pointer-events-none"></div>
              
              {/* Corner Rivets */}
              <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-gradient-to-br from-[#d4af37] to-[#855e0c] rounded-full border border-black shadow-sm pointer-events-none"></div>
              <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-gradient-to-br from-[#d4af37] to-[#855e0c] rounded-full border border-black shadow-sm pointer-events-none"></div>
              <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 bg-gradient-to-br from-[#d4af37] to-[#855e0c] rounded-full border border-black shadow-sm pointer-events-none"></div>
              <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 bg-gradient-to-br from-[#d4af37] to-[#855e0c] rounded-full border border-black shadow-sm pointer-events-none"></div>

              {/* Left Diamond Accent */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#140c0a] border-2 border-[#855e0c] group-hover:border-[#d4af37] rotate-45 transition-all duration-500 shadow-[0_0_10px_rgba(0,0,0,0.8)] pointer-events-none flex items-center justify-center">
                 <div className="w-2 h-2 bg-[#855e0c] group-hover:bg-[#d4af37] transition-colors rounded-sm text-[0px]"></div>
              </div>
              
              {/* Right Diamond Accent */}
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#140c0a] border-2 border-[#855e0c] group-hover:border-[#d4af37] rotate-45 transition-all duration-500 shadow-[0_0_10px_rgba(0,0,0,0.8)] pointer-events-none flex items-center justify-center">
                 <div className="w-2 h-2 bg-[#855e0c] group-hover:bg-[#d4af37] transition-colors rounded-sm text-[0px]"></div>
              </div>

              {/* Center Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.1),_transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Text & Icons */}
              <span className="relative z-10 text-[#855e0c] text-xl group-hover:text-[#d4af37] transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">⚔</span>
              <span className="relative z-10 pt-1 text-2xl font-display font-bold tracking-[0.4em] text-[#d4af37] group-hover:text-[#facc15] transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">START</span>
              <span className="relative z-10 text-[#855e0c] text-xl group-hover:text-[#d4af37] transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">⚔</span>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
