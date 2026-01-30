
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronRight,
  Info,
  Calendar,
  AlertCircle
} from 'lucide-react';

const FundDetail: React.FC = () => {
  const navigate = useNavigate();
  const [activeIntervalTab, setActiveIntervalTab] = useState('区间表现');
  const [activeChartTab, setActiveChartTab] = useState('近1周');

  const intervalTabs = ['区间表现', '历史净值', '年度业绩'];
  const chartTabs = ['近1周', '近1月', '近3月', '近6月', '更多'];

  return (
    <div className="flex flex-col min-h-full bg-[#f8fafc] pb-28 isolate">
      {/* 1. Header with Gradient Background */}
      <div className="relative pt-12 pb-20 px-6 bg-gradient-to-br from-indigo-600 via-blue-500 to-purple-600">
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-4 left-4 p-2 text-white active:opacity-60 z-20"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        <div className="space-y-4 relative z-10">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white tracking-tight">易方达 (香港) 美元货币市场基金C-USD累积</h2>
            <div className="flex items-center space-x-2 text-[10px]">
              <span className="text-white/60">HK0000499811</span>
              <span className="px-1.5 py-0.5 bg-blue-400/30 text-white rounded font-bold">货币型</span>
              <span className="px-1.5 py-0.5 bg-blue-400/30 text-white rounded font-bold">中低风险</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <div>
              <p className="text-3xl font-black text-white tracking-tighter">+8.13%</p>
              <p className="text-[10px] text-white/70 mt-1">七日年化收益率</p>
            </div>
            <div>
              <p className="text-lg font-bold text-[#ff5252] tracking-tight mt-2">+0.03%</p>
              <p className="text-[10px] text-white/70 mt-1">日涨跌幅</p>
            </div>
            <div>
              <p className="text-lg font-bold text-white mt-2">119.8230</p>
              <p className="text-[10px] text-white/70 mt-1">单位净值(01-19)</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-3 pt-4 border-t border-white/10">
            <div className="flex justify-between pr-4">
              <span className="text-[10px] text-white/60">今年以来</span>
              <span className="text-[10px] text-[#ff5252] font-bold">+0.33%</span>
            </div>
            <div className="flex justify-between pl-4">
              <span className="text-[10px] text-white/60">成立时长</span>
              <span className="text-[10px] text-white font-bold">6年263天</span>
            </div>
            <div className="flex justify-between pr-4">
              <span className="text-[10px] text-white/60">交易货币</span>
              <span className="text-[10px] text-white font-bold">美元</span>
            </div>
            <div className="flex justify-between pl-4">
              <span className="text-[10px] text-white/60">基金规模</span>
              <span className="text-[10px] text-white font-bold">1000.82万</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-4 -mt-10 space-y-4 relative z-20">
        
        {/* 2. 业绩走势图表 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-bold text-gray-800">业绩走势</h3>
          </div>
          
          <div className="relative h-40 w-full mt-4">
            {/* Legend */}
            <div className="flex items-center space-x-2 mb-2">
               <div className="w-2 h-2 rounded-full bg-blue-500"></div>
               <span className="text-[10px] font-bold text-gray-800">本基金</span>
               <span className="text-[10px] font-bold text-[#ff5252]">+0.15%</span>
            </div>

            {/* Simple Line Chart Mock using SVG */}
            <svg className="w-full h-32 overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
              <path 
                d="M 0 80 L 100 70 L 200 65 L 300 45 L 400 30" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="2"
              />
              <path 
                d="M 0 80 L 100 70 L 200 65 L 300 45 L 400 30 V 100 H 0 Z" 
                fill="url(#gradient)" 
                opacity="0.1"
              />
              <defs>
                <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="white" />
                </linearGradient>
              </defs>
              {/* Grid Lines */}
              <line x1="0" y1="20" x2="400" y2="20" stroke="#f0f0f0" strokeDasharray="4" />
              <line x1="0" y1="40" x2="400" y2="40" stroke="#f0f0f0" strokeDasharray="4" />
              <line x1="0" y1="60" x2="400" y2="60" stroke="#f0f0f0" strokeDasharray="4" />
              <line x1="0" y1="80" x2="400" y2="80" stroke="#f0f0f0" strokeDasharray="4" />
            </svg>
            
            {/* Axis Labels */}
            <div className="flex justify-between text-[8px] text-gray-300 mt-2">
              <span>2026-01-12</span>
              <span>2026-01-15</span>
              <span>2026-01-19</span>
            </div>
          </div>

          <div className="flex justify-between items-center border-t border-gray-50 pt-4">
            {chartTabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveChartTab(tab)}
                className={`text-[11px] font-bold px-3 py-1 rounded-full transition-all ${
                  activeChartTab === tab ? 'bg-gray-100 text-gray-800' : 'text-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 3. 区间表现 Table */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-50">
          <div className="flex border-b border-gray-50 px-6">
            {intervalTabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveIntervalTab(tab)}
                className={`py-4 text-[13px] font-bold mr-6 relative transition-colors ${
                  activeIntervalTab === tab ? 'text-gray-800' : 'text-gray-400'
                }`}
              >
                {tab}
                {activeIntervalTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
          
          <div className="p-6">
            <div className="flex justify-between text-[11px] text-gray-400 font-bold mb-4">
              <span>时间区间</span>
              <span>涨跌幅</span>
            </div>
            <div className="space-y-6">
              <TableRateRow label="近1周" value="+0.15%" />
              <TableRateRow label="近1月" value="+0.46%" />
              <TableRateRow label="近3月" value="+0.96%" />
              <TableRateRow label="近6月" value="+2.30%" />
              <TableRateRow label="近1年" value="+4.25%" />
            </div>
            <button className="w-full text-center py-4 text-[11px] text-gray-400 font-bold mt-2 active:bg-gray-50">
              查看更多
            </button>
          </div>
        </div>

        {/* 4. 基金档案 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50 space-y-6">
          <h3 className="text-[15px] font-bold text-gray-800">基金档案</h3>
          <div className="grid grid-cols-2 gap-y-4">
             <div>
                <p className="text-[10px] text-gray-300 font-bold">基金经理</p>
                <p className="text-[13px] text-gray-800 font-bold mt-1">唐博伦</p>
                <p className="text-[10px] text-gray-300 mt-0.5">2019-05-02至今</p>
             </div>
             <div>
                <p className="text-[10px] text-gray-300 font-bold">任职时长</p>
                <p className="text-[13px] text-gray-800 font-bold mt-1">6年263天</p>
             </div>
             <div className="col-span-2">
                <p className="text-[10px] text-gray-300 font-bold">基金公司</p>
                <p className="text-[13px] text-gray-800 font-bold mt-1">易方达资产管理（香港）有限公司</p>
                <p className="text-[10px] text-gray-300 mt-0.5">成立于2019-05-02</p>
             </div>
          </div>
        </div>

        {/* 5. 交易规则 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50 space-y-6">
          <h3 className="text-[15px] font-bold text-gray-800">交易规则</h3>
          <div className="relative pt-2">
             <div className="absolute top-[26px] left-2 right-2 h-0.5 bg-blue-100 z-0"></div>
             <div className="flex justify-between relative z-10">
                <RuleStep label="买入" time="21日10:59以前" active />
                <RuleStep label="确认份额" time="01-21" active />
                <RuleStep label="查看收益" time="01-22" active />
             </div>
          </div>
          <div className="bg-orange-50 p-3 rounded-xl flex items-start space-x-2">
             <AlertCircle className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
             <p className="text-[10px] text-orange-600 font-medium leading-relaxed">
               10:59后提交的订单，视为下一个交易日的交易申请
             </p>
          </div>
        </div>

        {/* 6. 购买须知 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50 space-y-6">
          <h3 className="text-[15px] font-bold text-gray-800">购买须知</h3>
          <div className="space-y-5">
             <InfoRow label="起购金额" value="1美元" />
             <InfoRow label="追加金额" value="1.4美元" />
             <InfoRow label="开放频次" value="每日开放" />
             <InfoRow label="认购费" value="3.00%" />
             <InfoRow label="管理费" value="0.60%" />
             <InfoRow label="托管费" value="0.05%" />
             <InfoRow label="赎回费" value="--" />
             <InfoRow label="赎回确认日" value="--" />
             <InfoRow label="赎回到账日" value="T+1日内" />
             <InfoRow label="赎回限制" value="--" />
          </div>
        </div>

        {/* 7. 相关协议附件 */}
        <div className="bg-white rounded-2xl px-6 py-5 shadow-sm border border-gray-50 flex items-center justify-between active:bg-gray-50 cursor-pointer">
           <span className="text-[13px] font-bold text-gray-700">相关协议附件</span>
           <ChevronRight className="w-4 h-4 text-gray-300" />
        </div>

        <div className="pt-8 pb-10 text-center space-y-2">
           <p className="text-[11px] text-gray-400 font-bold">重要事项及相关说明</p>
        </div>
      </div>

      {/* 8. Bottom Sticky Button */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 backdrop-blur-md border-t border-gray-100 p-4 pb-8 z-[100] shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <div className="text-center mb-3">
           <p className="text-[11px] text-gray-400">买入费率：<span className="font-bold text-gray-700">3.00%</span></p>
        </div>
        <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-blue-500/20 active:bg-blue-700 active:scale-[0.98] transition-all">
          立即买入
        </button>
      </div>
    </div>
  );
};

// Internal Components
const TableRateRow: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="flex justify-between items-center text-[13px]">
    <span className="text-gray-800 font-medium">{label}</span>
    <span className="text-[#ff5252] font-bold tracking-tight">{value}</span>
  </div>
);

const RuleStep: React.FC<{ label: string, time: string, active?: boolean }> = ({ label, time, active }) => (
  <div className="flex flex-col items-center space-y-2">
    <div className={`w-3.5 h-3.5 rounded-full border-2 border-white shadow-sm ring-1 ${active ? 'bg-blue-500 ring-blue-200' : 'bg-gray-200 ring-gray-100'}`}></div>
    <div className="text-center">
       <p className={`text-[11px] font-bold ${active ? 'text-gray-800' : 'text-gray-300'}`}>{label}</p>
       <p className="text-[9px] text-gray-300 mt-0.5">{time}</p>
    </div>
  </div>
);

const InfoRow: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="flex justify-between items-center text-[13px]">
    <span className="text-gray-400 font-medium">{label}</span>
    <span className="text-gray-800 font-bold">{value}</span>
  </div>
);

export default FundDetail;
