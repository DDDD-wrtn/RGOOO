import { useState } from 'react';
import Hero from './components/Hero';
import RulesOverview from './components/RulesOverview';
import FactionsView from './components/FactionsView';
import CompanionsView from './components/CompanionsView';
import NPCsView from './components/NPCsView';
import { BookOpen, Map, Users, Crown } from 'lucide-react';

type Tab = 'rules' | 'factions' | 'companions' | 'npcs';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('rules');

  return (
    <div className="min-h-screen bg-[#0a0808] text-stone-300 font-sans selection:bg-yellow-600/30">
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10 animate-in fade-in duration-1000 flex-1">
        <div className="flex justify-center mb-8 sm:mb-16">
          <nav className="flex flex-col sm:flex-row w-full sm:w-auto sm:inline-flex justify-center gap-2 sm:gap-1 bg-stone-900/60 p-2 border border-stone-800 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur">
            <button
              onClick={() => setActiveTab('rules')}
              className={`flex items-center justify-center gap-2 px-4 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-serif uppercase tracking-widest transition-all ${
                activeTab === 'rules' 
                  ? 'bg-gradient-to-b from-[#6a4c14] to-[#3a2808] text-[#facc15] shadow-inner border-t border-[#facc15]/30' 
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/80 border-t border-transparent'
              }`}
            >
              <BookOpen className="w-4 h-4 opacity-70" /> 시스템
            </button>
            <button
              onClick={() => setActiveTab('factions')}
              className={`flex items-center justify-center gap-2 px-4 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-serif uppercase tracking-widest transition-all sm:border-l border-stone-800/50 ${
                activeTab === 'factions' 
                  ? 'bg-gradient-to-b from-[#6a4c14] to-[#3a2808] text-[#facc15] shadow-inner border-t border-[#facc15]/30' 
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/80 border-t border-transparent'
              }`}
            >
              <Map className="w-4 h-4 opacity-70" /> 세력 및 지도
            </button>
            <button
              onClick={() => setActiveTab('companions')}
              className={`flex items-center justify-center gap-2 px-4 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-serif uppercase tracking-widest transition-all sm:border-l border-stone-800/50 ${
                activeTab === 'companions' 
                  ? 'bg-gradient-to-b from-[#6a4c14] to-[#3a2808] text-[#facc15] shadow-inner border-t border-[#facc15]/30' 
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/80 border-t border-transparent'
              }`}
            >
              <Users className="w-4 h-4 opacity-70" /> 용병과 동료
            </button>
            <button
              onClick={() => setActiveTab('npcs')}
              className={`flex items-center justify-center gap-2 px-4 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-serif uppercase tracking-widest transition-all sm:border-l border-stone-800/50 ${
                activeTab === 'npcs' 
                  ? 'bg-gradient-to-b from-[#6a4c14] to-[#3a2808] text-[#facc15] shadow-inner border-t border-[#facc15]/30' 
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/80 border-t border-transparent'
              }`}
            >
              <Crown className="w-4 h-4 opacity-70" /> 유력 가문
            </button>
          </nav>
        </div>

        <div className="min-h-[600px] animate-in fade-in duration-1000">
          {activeTab === 'rules' && <RulesOverview />}
          {activeTab === 'factions' && <FactionsView />}
          {activeTab === 'companions' && <CompanionsView />}
          {activeTab === 'npcs' && <NPCsView />}
        </div>
      </main>

      <footer className="border-t border-stone-900 bg-black py-16 mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-900/40 via-black to-black"></div>
        <div className="max-w-7xl mx-auto px-6 text-center text-stone-600 font-serif relative z-10 space-y-4">
          <div className="text-[#facc15]/30 mb-6">
            <Crown className="w-8 h-8 mx-auto" />
          </div>
          <p className="text-sm uppercase tracking-widest">남녀역전 중세 전략 RP &copy; {new Date().getFullYear()}</p>
          <p className="text-xs italic text-stone-700">Crafted with pure logic, blood, and zero magic.</p>
        </div>
      </footer>
    </div>
  );
}
