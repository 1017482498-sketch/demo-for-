
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Lightbulb,
  FileText,
  Phone,
  Zap
} from 'lucide-react';

const PolicyDetail: React.FC = () => {
  const navigate = useNavigate();
  const [activeMainTab, setActiveMainTab] = useState('客户信息');
  const [customerType, setCustomerType] = useState('投保人');

  const mainTabs = ['客户信息', '保障信息', '交费信息', '服务信息'];

  // 修改返回函数逻辑，直接返回首页
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/');
  };

  const handleBuyNow = () => {
    window.location.href = "https://dc-hk.molifund.com/#/fund/fund/fundDetail?fund_code=HK0000499811";
  };

  return (
    <div className="flex flex-col min-h-full bg-[#f8fafc] pb-10">
      {/* 1. Header - 优化返回按钮逻辑 */}
      <header className="px-4 h-14 flex items-center justify-between bg-white sticky top-0 z-[60] border-b border-gray-100 shadow-sm">
        <button 
          type="button"
          onClick={handleBack} 
          className="relative z-[70] p-2 -ml-2 text-gray-800 active:opacity-60 transition-all cursor-pointer"
          aria-label="返回首页"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold text-gray-800 absolute left-1/2 -translate-x-1/2 pointer-events-none">保单详情</h1>
        <div className="flex space-x-1 items-center p-2 -mr-2 cursor-pointer active:opacity-60">
           <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
           <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
           <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto hide-scrollbar space-y-4 pt-4 px-4 pb-12">
        
        {/* 2. 主概要卡片 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 space-y-4">
          <div className="space-y-3">
            <h2 className="text-[17px] font-bold text-gray-900 leading-snug">
              环宇盈活储蓄保险计划
            </h2>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase">
                有效
              </span>
              <span className="text-[10px] text-gray-400 font-medium">保障中</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-3.5 pt-4 border-t border-gray-50">
            <InfoRow label="保单编号 (Policy No.)" value="PL202305128765" />
            <InfoRow label="保单生效日期 (Policy Issue Date)" value="2023-05-15" />
            <InfoRow label="保单币种" value="USD" />
          </div>
        </div>

        {/* 3. 锚点导航页签 */}
        <div className="flex justify-between items-center px-2 py-1 sticky top-14 bg-[#f8fafc] z-50">
           {mainTabs.map((tab) => (
             <button 
               key={tab} 
               onClick={() => setActiveMainTab(tab)}
               className={`text-xs font-bold py-2 transition-colors ${activeMainTab === tab ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400'}`}
             >
               {tab}
             </button>
           ))}
        </div>

        {/* 4. 客户信息板块 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50">
          <div className="p-5 flex items-center justify-between border-b border-gray-50">
            <h3 className="font-bold text-gray-900 text-[15px]">客户信息</h3>
            <div className="flex space-x-4">
              {['投保人', '被保险人', '受益人'].map(type => (
                <button 
                  key={type}
                  onClick={() => setCustomerType(type)}
                  className={`text-xs font-bold transition-all ${customerType === type ? 'text-orange-500' : 'text-gray-400'}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="p-5">
            {customerType === '受益人' ? (
              <div className="space-y-5">
                <h4 className="text-base font-bold text-gray-800 mb-4">受益人信息</h4>
                <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-100 space-y-3">
                  <p className="text-sm font-bold text-gray-700 mb-1">受益人 1 (受益顺序: 1)</p>
                  <InfoRow label="姓名" value="李华" />
                  <InfoRow label="性别" value="女" />
                  <InfoRow label="与被保险人关系" value="配偶" />
                  <InfoRow label="证件类型" value="居民身份证" />
                  <InfoRow label="证件号码" value="110********5678" />
                  <InfoRow label="受益份额" value="50%" />
                </div>
                <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-100 space-y-3">
                  <p className="text-sm font-bold text-gray-700 mb-1">受益人 2 (受益顺序: 1)</p>
                  <InfoRow label="姓名" value="张小明" />
                  <InfoRow label="性别" value="男" />
                  <InfoRow label="与被保险人关系" value="子女" />
                  <InfoRow label="证件类型" value="居民身份证" />
                  <InfoRow label="证件号码" value="110********9012" />
                  <InfoRow label="受益份额" value="50%" />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-base font-bold text-gray-800">{customerType}信息</h4>
                  {customerType === '被保险人' && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-bold rounded-full">本人</span>
                  )}
                </div>
                <InfoRow label="姓名" value="张明" />
                <InfoRow label="性别" value="男" />
                <InfoRow label="证件类型" value="居民身份证" />
                <InfoRow label="证件号码" value="110********1234" />
                <InfoRow label="出生日期" value="1985-03-15" />
                <InfoRow label="联系方式" value="138****5678" />
                <InfoRow label="Email" value="zhang.ming@example.com" />
                <InfoRow label="通讯地址" value="北京市朝阳区建国路88号" />
              </div>
            )}
          </div>
        </div>

        {/* 5. 保障信息板块 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50">
          <div className="p-5 border-b border-gray-50">
            <h3 className="font-bold text-gray-900 text-[15px]">保障信息</h3>
          </div>
          <div className="p-5 space-y-4">
            <InfoRow label="产品名称" value="环宇盈活储蓄保险计划" />
            <div className="flex justify-between items-center text-sm">
               <span className="text-gray-400 font-medium shrink-0">保单状态</span>
               <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[9px] font-bold">有效</span>
            </div>
            <InfoRow label="生效日期" value="2023-05-15" />
            <InfoRow label="到期日期" value="终身" />
            <InfoRow label="基本保额" value="USD 5,000,000" />
            
            <div className="pt-4 border-t border-gray-50">
              <button className="w-full flex items-center justify-center space-x-1.5 py-2 text-blue-500 text-xs font-bold active:bg-blue-50">
                <FileText className="w-3.5 h-3.5" />
                <span>查看条款详情</span>
              </button>
            </div>
          </div>
        </div>

        {/* 6. 交费信息板块 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50">
          <div className="p-5 border-b border-gray-50">
            <h3 className="font-bold text-gray-900 text-[15px]">交费信息</h3>
          </div>
          <div className="p-5 space-y-4">
            <InfoRow label="交费年期" value="20 年" />
            <InfoRow label="每期保费" value="USD 2,500.00" />
            <InfoRow label="缴费频率" value="年缴" />
            <InfoRow label="下次交费日期" value="2024-05-15" />
            <div className="flex justify-between items-center text-sm">
               <span className="text-gray-400 font-medium shrink-0">当前缴费状态</span>
               <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[9px] font-bold uppercase">已缴清</span>
            </div>
            <InfoRow label="缴费账户" value="中国银行(香港) ****1234" />
            
            <button className="w-full mt-2 py-3 bg-gray-50 text-gray-600 text-xs font-bold rounded-xl active:bg-gray-100 border border-gray-100/50">
               交费历史
            </button>
          </div>
        </div>

        {/* 7. 续费宝 - 跳转至海报页 */}
        <div className="bg-[#f2f8ff] rounded-[32px] p-6 border border-blue-100/50 shadow-sm space-y-5">
          <div className="flex items-center space-x-2">
             <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white fill-current" />
             </div>
             <h4 className="text-base font-bold text-gray-800 tracking-tight">续费宝</h4>
          </div>
          
          <div className="space-y-4">
             <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-[#ff5252]">
                  <span className="text-sm font-bold mr-1">近7日年化</span>
                  +4.12%
                </p>
                <span className="px-3 py-1 bg-gray-200/50 text-gray-400 text-[10px] font-bold rounded-full">
                  中低风险
                </span>
             </div>

             <div className="space-y-1">
                <h5 className="text-[15px] font-bold text-gray-800">提前存入、自动缴费</h5>
                <p className="text-[12px] text-gray-400 leading-relaxed font-medium">
                  提前规划下期保费资金，到期自动缴付资金灵活使用，省心同时更有潜在收益
                </p>
             </div>

             <div className="flex space-x-3 pt-2">
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 bg-orange-500 text-white py-3.5 rounded-2xl text-[13px] font-bold shadow-lg shadow-orange-100 active:scale-95 transition-transform"
                >
                  一键买入
                </button>
                <button 
                  onClick={() => navigate('/xufeibao')}
                  className="flex-1 bg-gray-100 text-blue-600 py-3.5 rounded-2xl text-[13px] font-bold active:bg-gray-200 transition-colors"
                >
                  了解详情
                </button>
             </div>
             
             <div className="space-y-0.5">
                <p className="text-[10px] text-gray-400 leading-tight">
                  相关资金将用于申购易方达（香港）美元货币市场基金 C-USD 累积
                </p>
                <p className="text-[10px] text-gray-400 leading-tight">
                  基金服务由XX提供，不构成投资建议
                </p>
             </div>
          </div>
        </div>

        {/* 8. 服务信息板块 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50">
          <div className="p-5 border-b border-gray-50">
            <h3 className="font-bold text-gray-900 text-[15px]">服务信息</h3>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400 font-medium">服务专线</span>
              <div className="flex items-center space-x-1.5 text-blue-600 font-bold">
                 <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 fill-current" />
                 </div>
                 <span className="text-sm">400-888-9999</span>
              </div>
            </div>
            <InfoRow label="服务时间" value="周一至周日 9:00-18:00" />
            <InfoRow label="服务人员" value="王顾问" />
            <InfoRow label="所属保险经纪公司" value="香港环球保险经纪有限公司" />
            <InfoRow label="销售渠道" value="保险经纪" />
            <div className="flex justify-between items-center pt-3 border-t border-gray-50">
              <span className="text-sm text-gray-400 font-medium">客户经理联系方式</span>
              <div className="flex items-center space-x-1.5 text-blue-600 font-bold">
                 <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 fill-current" />
                 </div>
                 <span className="text-sm">139****8888</span>
              </div>
            </div>
          </div>
        </div>

        {/* 9. Footer Info */}
        <div className="pt-8 pb-12 text-center space-y-4">
           <div className="flex justify-center space-x-6 text-[11px] text-gray-400 font-bold">
             <span>香港持牌保险经纪</span>
             <span>声明</span>
             <span>风险提示</span>
             <span>关于我们</span>
           </div>
           <p className="text-[9px] text-gray-300 tracking-wider">© 2026 保险服务平台 版权所有</p>
        </div>
      </div>
    </div>
  );
};

const InfoRow: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="flex justify-between items-start text-sm py-0.5">
    <span className="text-gray-400 font-medium shrink-0 leading-tight">{label}</span>
    <span className="text-gray-900 font-bold tracking-tight text-right ml-4 leading-tight">{value}</span>
  </div>
);

export default PolicyDetail;
