
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Share2, 
  ChevronDown, 
  ChevronRight,
  UserPlus,
  LayoutGrid,
  PenLine,
  Network
} from 'lucide-react';

const ProductDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-full bg-[#f8fafc] pb-32 isolate">
      <header className="h-14 flex items-center bg-white sticky top-0 z-[999] border-b border-gray-50 px-4">
        <button onClick={() => navigate('/insurance-mall')} className="p-1">
          <ArrowLeft className="w-6 h-6 text-gray-800" />
        </button>
        <div className="flex-1 text-center">
          <h1 className="text-lg font-bold text-[#1a2b4b]">产品详情</h1>
        </div>
        <button className="p-1">
          <Share2 className="w-6 h-6 text-gray-800" />
        </button>
      </header>

      <div className="px-4 pt-6 space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#1a2b4b]">环宇盈活储蓄保险计划</h2>
          <div className="space-y-3">
            <InfoRow label="承保公司" value="友邦人寿保险有限公司" />
            <InfoRow label="产品类型" value="储蓄险" />
            <InfoRow label="产品定位" value="长期资产规划与财富传承" />
            <InfoRow label="货币类型" value="港币（HKD）、美元（USD）" />
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            <Tag text="长期规划" />
            <Tag text="资产传承" />
            <Tag text="可指定受益人" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
          <h3 className="text-base font-bold text-[#1a2b4b] mb-5">产品概要</h3>
          <div className="space-y-4">
            <InfoRow label="投保年龄" value="15天~80岁" />
            <InfoRow label="保障期限" value="终身" />
            <InfoRow label="提取期限" value="100岁" />
            <InfoRow label="缴费年期" value="趸缴/5年" />
            <InfoRow label="非保证利益" value="是（如分红）" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
          <div className="px-6 py-5 flex items-center justify-between">
            <h3 className="text-base font-bold text-[#1a2b4b]">产品亮点</h3>
            <ChevronDown className="w-5 h-5 text-gray-300" />
          </div>
          <div className="px-6 pb-6 space-y-4 text-[13px] text-gray-600 leading-relaxed border-t border-gray-50 pt-5">
            <p>更早回本及更高回报，30年IRR达到6.5%</p>
            <p>9种货币转换功能，第2年起即可转换保单货币</p>
            <p>灵活提取选项：价值保障选项，红利及分红锁定选项，红利及分红解锁选项</p>
            <p>保单暂管人安排，保单拆分选项，受益人灵活选项，身故赔偿支付选项</p>
            <p>健康障碍选项，末期疾病利益</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 space-y-6">
          <h3 className="text-base font-bold text-[#1a2b4b]">传承与受益人安排</h3>
          <div className="space-y-4">
            <IconListItem icon={<UserPlus className="w-4 h-4" />} text="可指定一名或多名受益人" />
            <IconListItem icon={<LayoutGrid className="w-4 h-4" />} text="支持受益比例及顺位安排" />
            <IconListItem icon={<PenLine className="w-4 h-4" />} text="保单可延续" />
            <IconListItem icon={<Network className="w-4 h-4" />} text="含类信托功能" />
          </div>

          <div className="mt-8 space-y-4">
            <h4 className="text-sm font-bold text-gray-900">受益人安排示例</h4>
            <div className="bg-gray-50/80 rounded-2xl p-6 space-y-4">
              <div className="flex justify-center">
                <div className="bg-white px-6 py-2.5 rounded-lg border border-[#c5a059]/30 shadow-sm text-xs font-bold text-gray-700">
                  主要受益人（100%）
                </div>
              </div>
              <div className="flex justify-between space-x-4">
                <div className="flex-1 bg-white py-2.5 rounded-lg border border-[#c5a059]/20 shadow-sm text-xs font-bold text-center text-gray-700">
                  第一顺位（50%）
                </div>
                <div className="flex-1 bg-white py-2.5 rounded-lg border border-[#c5a059]/20 shadow-sm text-xs font-bold text-center text-gray-700">
                  第二顺位（50%）
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
          <h3 className="text-base font-bold text-[#1a2b4b] mb-4">产品资料</h3>
          <div className="divide-y divide-gray-50">
            <MaterialLink title="保险条款（PDF）" />
            <MaterialLink title="产品说明书" />
            <MaterialLink title="分红机制说明" />
            <MaterialLink title="常见问题" />
          </div>
        </div>

        <p className="text-[10px] text-gray-300 text-center px-8 leading-relaxed py-8 uppercase tracking-widest">
          Ever Fountain Global Wealth Management Limited
        </p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 p-4 pb-6 flex space-x-4 z-[100] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button className="flex-1 bg-[#1a2b4b] text-[#f5e6ab] py-4 rounded-xl font-bold text-base active:bg-[#2c4a85] transition-colors">
          咨询顾问
        </button>
        <button 
          onClick={() => navigate('/reservation')}
          className="flex-1 bg-white text-[#1a2b4b] border border-[#1a2b4b] py-4 rounded-xl font-bold text-base active:bg-blue-50 transition-colors"
        >
          预约投保
        </button>
      </div>
    </div>
  );
};

const InfoRow: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="flex justify-between items-start text-sm py-0.5">
    <span className="text-gray-400 font-medium shrink-0">{label}</span>
    <span className="text-gray-900 font-bold text-right ml-4 leading-tight">{value}</span>
  </div>
);

const Tag: React.FC<{ text: string }> = ({ text }) => (
  <span className="px-3 py-1.5 bg-amber-50 text-[#c5a059] text-[11px] font-bold rounded-lg border border-amber-100/50">
    {text}
  </span>
);

const IconListItem: React.FC<{ icon: React.ReactNode, text: string }> = ({ icon, text }) => (
  <div className="flex items-center space-x-3 text-sm text-gray-700">
    <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#c5a059] flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <span className="font-medium">{text}</span>
  </div>
);

const MaterialLink: React.FC<{ title: string }> = ({ title }) => (
  <div className="py-4 flex items-center justify-between group active:bg-gray-50 transition-colors cursor-pointer">
    <span className="text-sm font-medium text-gray-700">{title}</span>
    <ChevronRight className="w-4 h-4 text-gray-300" />
  </div>
);

export default ProductDetail;
