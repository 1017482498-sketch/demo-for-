
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Info, Sparkles, ShieldCheck, TrendingUp } from 'lucide-react';

const XufeibaoPoster: React.FC = () => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    window.location.href = "https://dc-hk.molifund.com/#/fund/fund/fundDetail?fund_code=HK0000365467";
  };

  return (
    <div className="flex flex-col h-full bg-[#001838] relative overflow-hidden">
      {/* 增强背景装饰层 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001838] via-[#0b284e] to-[#001838]"></div>
      
      {/* 金色光晕氛围 */}
      <div className="absolute top-[-5%] right-[-10%] w-[70%] h-[40%] bg-[#d4af37]/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[60%] h-[30%] bg-[#d4af37]/5 blur-[80px] rounded-full"></div>

      {/* 顶部导航 */}
      <header className="relative z-50 px-4 h-14 flex items-center shrink-0">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-white/80 active:opacity-50 transition-opacity">
          <ArrowLeft className="w-6 h-6" />
        </button>
      </header>

      {/* 海报主体内容 */}
      <div className="relative z-10 flex-1 flex flex-col items-center pt-4 px-8 text-center overflow-hidden">
        
        {/* 1. 标题区 */}
        <div className="space-y-3 animate-in fade-in slide-in-from-top-4 duration-1000 shrink-0 flex flex-col items-center">
          {/* 港版余额宝 标签 - 放大字号至 14px */}
          <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-[#d4af37]/20 to-transparent border-l-2 border-[#d4af37] mb-1">
             <span className="text-[14px] font-black text-[#f5e6ab] tracking-[0.2em] drop-shadow-sm">“港版”余额宝</span>
          </div>

          <h1 className="text-6xl font-black tracking-[0.25em] bg-gradient-to-b from-[#f5e6ab] via-[#d4af37] to-[#b08e4f] bg-clip-text text-transparent drop-shadow-[0_4px_10px_rgba(212,175,55,0.4)] leading-tight">
            续费宝
          </h1>
          
          <div className="space-y-3">
            {/* 白色描述文字 */}
            <p className="text-xl font-bold text-white tracking-wide">提前存入、自动缴费</p>
            <div className="flex items-center justify-center space-x-3 py-1">
              <div className="flex flex-col items-center space-y-1">
                <span className="text-[#d4af37] text-[14px] font-black tracking-[0.1em]">提前规划</span>
                <div className="w-8 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              </div>
              <div className="w-[1px] h-4 bg-white/10"></div>
              <div className="flex flex-col items-center space-y-1">
                <span className="text-[#d4af37] text-[14px] font-black tracking-[0.1em]">自动缴费</span>
                <div className="w-8 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              </div>
              <div className="w-[1px] h-4 bg-white/10"></div>
              <div className="flex flex-col items-center space-y-1">
                <span className="text-[#d4af37] text-[14px] font-black tracking-[0.1em]">灵活增值</span>
                <div className="w-8 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. 进度条区域 - 模块整体左移 (调整为 8/42/76) */}
        <div className="w-full mt-10 mb-6 relative h-44 animate-in fade-in zoom-in duration-1000 delay-300 shrink-0">
          {/* 背景斜向板装饰 */}
          <div className="absolute top-[40%] left-[-20%] w-[140%] h-[100px] bg-gradient-to-r from-[#d4af37]/5 via-[#d4af37]/15 to-transparent -rotate-[12deg] rounded-full blur-xl"></div>
          
          {/* 时间轴主线 */}
          <div className="absolute top-1/2 left-[-5%] w-[110%] h-[2px] bg-white/10 -rotate-[12deg] overflow-hidden">
            <div className="absolute top-0 left-[-50%] w-[50%] h-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent animate-[flow_3s_linear_infinite]"></div>
          </div>
          
          <style>{`
            @keyframes flow {
              0% { left: -50%; }
              100% { left: 150%; }
            }
          `}</style>

          {/* 节点位置调整 - 向左平移以平衡视觉 */}
          <TimelineNode 
            pos="top-[25%] left-[8%]" 
            label="资金存入" 
            sub="" 
            icon={<ShieldCheck className="w-3.5 h-3.5 text-[#001838]" />}
          />

          <TimelineNode 
            pos="top-[45%] left-[42%]" 
            label="稳步增值" 
            sub="" 
            active
            icon={<TrendingUp className="w-4 h-4 text-[#001838]" />}
          />

          <TimelineNode 
            pos="top-[65%] left-[76%]" 
            label="保障延续" 
            sub="" 
            icon={<Sparkles className="w-3.5 h-3.5 text-[#001838]" />}
          />
          
          <div className="absolute bottom-[-100px] left-[-20%] w-[140%] h-[260px] bg-gradient-to-tr from-[#d1d5db]/10 via-[#f3f4f6]/20 to-transparent -rotate-[22deg] -z-10 blur-[2px] border-t border-white/20"></div>
        </div>

        {/* 3. 优势展示 */}
        <div className="flex justify-center w-full mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 shrink-0">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-[#d4af37]/20 flex flex-col items-center space-y-1 px-10">
            <span className="text-[11px] text-[#d4af37] font-bold tracking-wider">活期便利</span>
            <span className="text-lg font-black text-white">随存随用</span>
          </div>
        </div>

        {/* 4. 风险提示区 */}
        <div className="mt-auto pb-28 text-left animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 overflow-y-auto no-scrollbar">
          <h3 className="text-sm font-black text-[#d4af37] mb-2 flex items-center">
            <span className="mr-2"><Info className="w-4 h-4" /></span>
            风险提示:
          </h3>
          <div className="text-[11px] text-white/40 leading-relaxed font-medium text-justify space-y-1.5 border-l-2 border-[#d4af37]/20 pl-4">
            <p>本页面所示“续费宝”为保险保费资金规划与管理服务，并非独立金融产品或基金名称。</p>
            <p>客户资金将根据授权申购与保险缴费币种一致的货币基金，用于未来保费缴付安排。货币基金不等同于存款，存在市场波动及投资风险。</p>
            <p>过往业绩不代表未来表现，亦不保证收益或本金安全。具体安排以相关产品条款为准。</p>
          </div>
        </div>
      </div>

      {/* 5. 底部操作栏 */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 pb-8 z-50 bg-gradient-to-t from-[#001838] via-[#001838]/95 to-transparent flex justify-center items-end">
        <button 
          onClick={handleBuyNow}
          className="w-full relative group overflow-hidden bg-gradient-to-b from-[#f5e6ab] via-[#d4af37] to-[#b08e4f] text-[#001838] py-4 rounded-2xl font-black text-lg shadow-[0_10px_40px_rgba(212,175,55,0.3)] active:scale-[0.98] transition-all"
        >
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-active:translate-x-[100%] transition-transform duration-500"></div>
          立即购买
        </button>
      </div>
    </div>
  );
};

// 进度条节点组件
const TimelineNode: React.FC<{ pos: string, label: string, sub: string, active?: boolean, icon: React.ReactNode }> = ({ pos, label, sub, active, icon }) => (
  <div className={`absolute ${pos} flex flex-col items-center -rotate-[12deg] z-20`}>
    <div className={`
      relative rounded-full flex items-center justify-center transition-all duration-700
      ${active ? 'w-10 h-10 bg-white scale-125 shadow-[0_0_25px_rgba(212,175,55,1)]' : 'w-8 h-8 bg-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.4)]'}
      border-2 border-white/50
    `}>
      {icon}
      {active && <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20"></div>}
    </div>
    <div className="mt-3 flex flex-col items-center">
      <span className={`text-[13px] font-black tracking-tighter ${active ? 'text-white' : 'text-white/60'}`}>{label}</span>
      {sub && <span className="text-[10px] text-[#d4af37] font-bold opacity-80 mt-0.5 uppercase tracking-tight">{sub}</span>}
    </div>
  </div>
);

export default XufeibaoPoster;
