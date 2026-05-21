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
          이곳에는 마법도, 기적도 없습니다.<br className="hidden md:block" /> 오직 차가운 강철과 피비린내 나는 모략만이 지배할 뿐입니다.<br />
          출신 없는 평민에서 대륙을 호령하는 군주까지.<br className="hidden md:block" /> 당신의 검과 지략으로 난세의 서사를 쟁취하십시오.
        </p>
        
        {!hasStarted && onStart && (
          <button 
            onClick={onStart}
            className="group relative mt-16 px-16 py-5 bg-[#0a0808] border border-[#d4af37]/30 text-[#d4af37] font-display tracking-[0.4em] font-bold text-xl hover:bg-[#1a1105] hover:text-[#facc15] hover:border-[#d4af37]/80 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 delay-500 shadow-[inset_0_0_20px_rgba(0,0,0,0.8),_0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[inset_0_0_20px_rgba(212,175,55,0.2),_0_0_30px_rgba(212,175,55,0.3)] hover:scale-105"
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#d4af37]/70 group-hover:border-[#facc15] transition-colors m-1"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#d4af37]/70 group-hover:border-[#facc15] transition-colors m-1"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#d4af37]/70 group-hover:border-[#facc15] transition-colors m-1"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#d4af37]/70 group-hover:border-[#facc15] transition-colors m-1"></div>
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent group-hover:via-[#facc15]/80 transition-all duration-500 group-hover:w-3/4"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent group-hover:via-[#facc15]/80 transition-all duration-500 group-hover:w-3/4"></div>
            
            <span className="relative z-10 flex items-center justify-center gap-6 drop-shadow-md">
              <span className="text-[#bf953f] text-base group-hover:text-[#facc15] transition-colors opacity-80">⚔</span>
              <span className="pt-1">START</span>
              <span className="text-[#bf953f] text-base group-hover:text-[#facc15] transition-colors opacity-80">⚔</span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
