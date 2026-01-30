
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const FundServices: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('货币市场基金');
  const [currency, setCurrency] = useState('美元');

  const tabs = ['货币市场基金', '固收投资', '进取投资'];
  const currencies = ['美元', '港元'];

  const funds = [
    {
      id: 1,
      title: "易方达 (香港) 美元货币市场基金B-USD累积",
      cutoff: "认购及赎回截止时间: 每个交易日13:50",
      returnRate: "+3.75%",
      returnLabel: "七日年化",
      fee: "认购费率1%",
      minAmount: "100美元起投",
      risk: "中低风险",
      currencyTag: "美元",
      url: "https://dc-hk.molifund.com/#/fund/fund/fundDetail?fund_code=HK0000365467"
    },
    {
      id: 2,
      title: "易方达 (香港) 美元货币市场基金I-USD累积",
      cutoff: "认购及赎回截止时间: 每个交易日10:59",
      returnRate: "+4.12%",
      returnLabel: "七日年化",
      fee: "认购费率0",
      minAmount: "1000美元起投",
      risk: "中低风险",
      currencyTag: "美元",
      url: "https://dc-hk.molifund.com/#/fund/fund/fundDetail?fund_code=HK0000365541"
    },
    {
      id: 3,
      title: "易方达 (香港) 美元货币市场基金C-USD累积",
      cutoff: "认购及赎回截止时间: 每个交易日10:59",
      returnRate: "+4.05%",
      returnLabel: "七日年化",
      fee: "认购费率3%",
      minAmount: "1美元起投",
      risk: "中低风险",
      currencyTag: "美元",
      url: "https://dc-hk.molifund.com/#/fund/fund/fundDetail?fund_code=HK0000499811"
    }
  ];

  const handleBack = () => {
    navigate(-1);
  };

  const handleFundClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="flex flex-col min-h-full bg-[#f8fafc]">
      {/* Header - 保持统一风格 */}
      <header className="px-4 h-14 flex items-center justify-between bg-white sticky top-0 z-[60] border-b border-gray-50">
        <button 
          onClick={handleBack} 
          className="relative z-[70] p-2 -ml-2 text-gray-800 active:opacity-60 transition-opacity"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-[17px] font-bold text-gray-800 absolute left-0 right-0 text-center pointer-events-none">甄选基金</h1>
        <div className="relative z-[70] flex space-x-1 items-center p-2 -mr-2 cursor-pointer active:opacity-60">
           <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
           <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
           <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
        </div>
      </header>

      {/* Main Category Tabs */}
      <div className="bg-white px-4">
        <div className="flex justify-between">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 text-[15px] font-medium relative transition-colors ${
                activeTab === tab ? 'text-blue-600' : 'text-gray-400'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Currency Selector */}
      <div className="px-4 py-5 flex space-x-3">
        {currencies.map(curr => (
          <button
            key={curr}
            onClick={() => setCurrency(curr)}
            className={`px-7 py-2 rounded-full text-sm font-bold transition-all ${
              currency === curr 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
                : 'bg-[#f1f3f5] text-gray-400'
            }`}
          >
            {curr}
          </button>
        ))}
      </div>

      {/* Fund List */}
      <div className="px-4 space-y-3 pb-10">
        {funds.map(fund => (
          <div 
            key={fund.id} 
            onClick={() => handleFundClick(fund.url)}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-50 space-y-4 active:bg-gray-50 transition-colors cursor-pointer"
          >
            {/* Title Section */}
            <div className="space-y-1">
              <div className="flex items-start">
                <span className="mt-0.5 px-1.5 py-0.5 bg-[#eef6ff] text-[#4a90e2] text-[10px] font-bold rounded mr-2 shrink-0">
                  {fund.currencyTag}
                </span>
                <h3 className="text-[14px] font-bold text-[#333] leading-snug">{fund.title}</h3>
              </div>
              <p className="text-[11px] text-gray-400 ml-[42px]">{fund.cutoff}</p>
            </div>

            {/* Metrics Section */}
            <div className="flex items-end justify-between">
              <div className="space-y-1">
                <p className="text-[26px] font-black text-[#ff5252] leading-none tracking-tight">{fund.returnRate}</p>
                <p className="text-[11px] text-gray-400 font-medium">{fund.returnLabel}</p>
                <div className="pt-2">
                  <span className="px-1.5 py-0.5 bg-[#f0f7ff] text-[#4a90e2] text-[11px] font-bold rounded">
                    {fund.risk}
                  </span>
                </div>
              </div>

              <div className="text-right space-y-2 flex flex-col items-end">
                <button className="text-[11px] text-[#b08e4f] font-bold border-b border-[#b08e4f]/30 pb-0.5">
                  点击基金查看历年表现
                </button>
                <div className="flex space-x-3 text-[11px] text-gray-400 font-medium">
                  <span>认购费率{fund.fee.replace('认购费率','')}</span>
                  <span>{fund.minAmount}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Footer Disclaimer */}
        <div className="pt-10 pb-16 text-center space-y-1.5">
          <p className="text-[11px] text-gray-400 px-10 leading-relaxed">
            甄选基金服务由 XX 提供，不构成任何投资建议。
          </p>
          <p className="text-[11px] text-gray-400">
            基金投资有风险，投资须谨慎。
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundServices;
