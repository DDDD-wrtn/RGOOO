import { BookOpen, Crosshair, Star, Shield, HelpCircle } from 'lucide-react';
import { stats } from '../data';

export default function RulesOverview() {
  return (
    <div className="space-y-16 animate-in fade-in duration-1000">
      
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-display text-white mb-6 tracking-widest drop-shadow-md font-bold">
          대륙의 규율
        </h2>
        <div className="w-24 h-px bg-[#d4af37]/30 mx-auto mb-8"></div>
        <p className="text-stone-300 font-serif text-lg leading-relaxed">
          이 대륙에는 신의 기적도, 요정의 축복도 없습니다.<br/>모든 영주와 백성은 육신과 강철이라는 불변의 진리 아래 살아갑니다.
        </p>
      </div>

      <section className="bg-[url('https://i.postimg.cc/9FNLmccL/jemog-eobsneun-dijain.png')] bg-cover bg-center border border-stone-800 relative overflow-hidden group">
        <div className="absolute inset-0 bg-[#0a0808]/90 backdrop-blur-sm transition-colors group-hover:bg-[#0a0808]/80"></div>
        <div className="flex flex-col md:flex-row relative z-10 divide-y md:divide-y-0 md:divide-x divide-stone-800">
          
          <div className="flex-1 p-10 md:p-16">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-3xl font-display text-rose-800 tracking-widest font-bold">NPC</h3>
              <div className="text-sm font-serif tracking-widest text-[#d4af37] border border-[#d4af37]/50 px-3 py-1 bg-[#d4af37]/10 font-bold">철과 피의 규율</div>
            </div>
            <p className="text-lg text-stone-200 font-serif mb-6 leading-relaxed">
              "마법, 이능력 따위는 시정잡배들의 음유시일 뿐이다. 검과 책략만이 권력을 쟁취하는 유일한 수단이다."
            </p>
            <p className="text-sm text-stone-400 font-serif leading-relaxed">
              대륙의 모든 거주민들(NPC)은 판타지적 능력이나 기적을 부릴 수 없습니다. 
              오직 군사적인 무력, 치밀한 전술, 그리고 배신이 난무하는 정치적 모략만으로 영지를 다스리고 외교를 펼칩니다.
            </p>
          </div>

          <div className="flex-1 p-10 md:p-16">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-3xl font-display text-emerald-700 tracking-widest font-bold">Player</h3>
              <div className="text-sm font-serif tracking-widest text-[#d4af37] border border-[#d4af37]/50 px-3 py-1 bg-[#d4af37]/10 font-bold">구속받지 않는 자</div>
            </div>
            <p className="text-lg text-stone-200 font-serif mb-6 leading-relaxed">
              "모두가 검을 벼릴 때, 당신만이 '이능'을 움켜쥐었다. 이단으로 죽을 것인가, 대륙을 칭패할 것인가."
            </p>
            <p className="text-sm text-stone-400 font-serif leading-relaxed">
              당신은 세계의 룰에 구속받지 않는 유일한 존재입니다. 설정하신 판타지 능력을 제약 없이 구사할 수 있습니다. 
              중무장한 적 기병대의 돌격 앞에서도 당신의 능력은 판도를 완전히 뒤엎을 수 있는 가장 강력한 무기입니다.
            </p>
          </div>

        </div>
      </section>

      <div className="grid lg:grid-cols-2 gap-10">
        <section className="bg-stone-900/60 p-8 md:p-12 border border-stone-800 shadow-xl">
          <h2 className="text-2xl font-serif text-white flex items-center gap-4 mb-10 pb-4 border-b border-stone-800 font-bold tracking-wide">
            <Crosshair className="w-6 h-6 text-[#d4af37]" /> 6대 스탯 능력
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {stats.map(stat => (
              <div key={stat.id} className="text-center group border border-transparent hover:border-[#d4af37]/30 p-4 transition-all bg-[#0f0c0a]">
                <div className="text-4xl mb-3 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all">{stat.emoji}</div>
                <div className="font-serif font-bold text-stone-300 tracking-widest group-hover:text-white transition-colors text-lg">{stat.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-stone-900/60 p-8 md:p-12 border border-stone-800 shadow-xl">
          <h2 className="text-2xl font-serif text-white flex items-center gap-4 mb-10 pb-4 border-b border-stone-800 font-bold tracking-wide">
            <Shield className="w-6 h-6 text-[#d4af37]" /> 명예와 진급
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-base font-serif text-[#d4af37] tracking-widest mb-3 font-bold border-l-2 border-[#d4af37] pl-3">경험치 및 성장</h3>
              <p className="text-stone-300 font-serif text-sm leading-relaxed text-justify bg-black/40 p-4 border border-stone-800">
                전투 승리, 영지 경영 성공, 주요 퀘스트 완수 등 <strong className="text-white">서사적 성취</strong>에 따라 경험치가 부여됩니다. 
                <span className="text-[#bf953f] font-bold"> 경험치(EXP) 100</span>에 도달하면 레벨이 상승하며 최대 <strong className="text-white">Lv.20</strong>까지 성장할 수 있습니다. 
                레벨업 시 원하는 스탯 1가지를 성장시킬 수 있습니다.
              </p>
            </div>
            <div>
              <h3 className="text-base font-serif text-[#d4af37] tracking-widest mb-4 flex justify-between font-bold border-l-2 border-[#d4af37] pl-3">
                <span>가문 등급 (Tier)</span>
                <span className="text-stone-500 text-xs text-right normal-case tracking-normal font-normal">증가조건: 전투 승리 / 외교 성공<br/>하락조건: 무단 약탈 / 배신 / 패전</span>
              </h3>
              <ul className="space-y-3 font-serif bg-black/40 p-4 border border-stone-800">
                <li className="flex items-center justify-between border-b border-stone-800/50 pb-2">
                  <span className="text-stone-400 font-bold tracking-widest text-sm">Tier 1 <span className="mx-3 text-stone-300 font-medium">평민</span></span>
                  <span className="text-xs tracking-widest text-[#d4af37]/50 font-medium">기본 계급</span>
                </li>
                <li className="flex items-center justify-between border-b border-stone-800/50 pb-2">
                  <span className="text-stone-400 font-bold tracking-widest text-sm">Tier 2 <span className="mx-3 text-stone-200 font-medium">용병</span></span>
                  <span className="text-xs tracking-widest text-[#d4af37]/70 font-bold">명성 100</span>
                </li>
                <li className="flex items-center justify-between border-b border-stone-800/50 pb-2">
                  <span className="text-stone-400 font-bold tracking-widest text-sm">Tier 3 <span className="mx-3 text-white font-bold drop-shadow-sm">가신</span></span>
                  <span className="text-xs tracking-widest text-[#d4af37] font-bold">명성 300</span>
                </li>
                <li className="flex items-center justify-between border-b border-stone-800/50 pb-2">
                  <span className="text-[#bf953f] font-bold tracking-widest text-sm">Tier 4 <span className="mx-3 text-white font-bold drop-shadow-sm">영주</span></span>
                  <span className="text-xs tracking-widest text-[#d4af37] font-bold">명성 700</span>
                </li>
                <li className="flex items-center justify-between pt-1">
                  <span className="text-[#d4af37] font-bold tracking-widest text-lg">Tier 5 <span className="mx-3 text-white text-lg font-black shadow-[0_0_20px_#d4af37] drop-shadow-md">군주</span></span>
                  <span className="text-xs tracking-widest text-[#facc15] font-black drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">명성 1200</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
