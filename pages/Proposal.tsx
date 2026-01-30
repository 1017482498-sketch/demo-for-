
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, ChevronDown } from 'lucide-react';

const Proposal: React.FC = () => {
  const navigate = useNavigate();

  const proposals = [
    {
      id: 'fwd-medical',
      title: "倍卫您医疗计划",
      insured: "张晓明 / 男 / 37岁",
      extraInfo: "垫底费：16000",
      date: "2026-01-29 14:56"
    },
    {
      id: 'aia-wealth',
      title: "环宇盈活储蓄保险计划",
      insured: "张晓明 / 男 / 36岁",
      extraInfo: "年缴保费：USD 3,000",
      date: "2026-01-29 14:55"
    }
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#f8fafc]">
      <header className="px-4 h-14 flex items-center bg-white sticky top-0 z-[60] border-b border-gray-100">
        <button 
          onClick={() => navigate('/')} 
          className="p-2 -ml-2 text-gray-800 active:opacity-60 transition-opacity"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold text-[#1a2b4b] absolute left-1/2 -translate-x-1/2 pointer-events-none">保险建议书</h1>
      </header>

      <div className="px-4 pt-4 pb-2">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="请输入投保人/受保人/产品名称进行搜索"
            className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-[#c5a059] transition-colors shadow-sm"
          />
        </div>
      </div>

      <div className="px-4 py-2 flex space-x-2">
        <FilterButton label="全部时间" />
        <FilterButton label="全部险种" />
        <FilterButton label="全部状态" />
      </div>

      <div className="px-4 py-4 space-y-4">
        {proposals.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-50 flex flex-col space-y-4">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#1a2b4b] tracking-tight">{item.title}</h3>
              <div className="space-y-1.5">
                <p className="text-sm text-gray-500 font-medium">受保人：{item.insured}</p>
                <p className="text-sm text-gray-500 font-medium">{item.extraInfo}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-gray-400 font-medium">{item.date}</span>
              <button 
                onClick={() => {}}
                className="bg-[#1a2b4b] px-6 py-2 rounded-xl text-sm font-bold text-[#f5e6ab] shadow-lg active:scale-95 transition-transform cursor-pointer"
              >
                查看详情
              </button>
            </div>
          </div>
        ))}

        <div className="py-10 text-center">
          <p className="text-xs text-gray-300 font-bold uppercase tracking-widest">Ever Fountain Global</p>
        </div>
      </div>
    </div>
  );
};

const FilterButton: React.FC<{ label: string }> = ({ label }) => (
  <button className="flex-1 bg-white border border-gray-200 py-2.5 rounded-xl flex items-center justify-between px-3 active:bg-gray-50 shadow-sm">
    <span className="text-xs font-bold text-gray-600">{label}</span>
    <ChevronDown className="w-3.5 h-3.5 text-gray-300" />
  </button>
);

export default Proposal;
