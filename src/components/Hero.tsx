import { WORLD_MAP_URL } from '../data';

export default function Hero() {
  return (
    <div className={`relative overflow-hidden bg-[#050403] border-b border-stone-800/80 transition-all duration-1000`}>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: `url('https://i.postimg.cc/9FNLmccL/jemog-eobsneun-dijain.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0808] via-[#0a0808]/70 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0a0808]/80 to-[#0a0808]" />
      
      <div className={`relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center transition-all duration-1000 py-24 md:py-32 lg:py-48`}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border-y border-[#d4af37]/30 text-[#d4af37] text-sm font-serif tracking-[0.2em] mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 font-bold bg-black/50 backdrop-blur-sm">
          남녀역전 중세 전략 롤플레잉
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display text-white tracking-widest mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150 drop-shadow-2xl font-black break-keep">
          남녀역전 중세에서<br/>
          유일한 <span className="text-stone-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] font-serif font-light tracking-widest ml-1 md:ml-2">“&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;”</span>
        </h1>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent mb-8"></div>
        <p className="max-w-2xl text-lg md:text-xl text-stone-300 font-serif leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 drop-shadow-md break-keep">
          이 대륙에 마법이나 기적은 없었습니다.<br className="hidden md:block" />
          당신이 오기 전까진.
        </p>
      </div>
    </div>
  );
}
