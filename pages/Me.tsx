
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Clock, 
  Calendar, 
  UserCircle, 
  Star, 
  ChevronRight,
  Info,
  ShieldCheck,
  AlertCircle,
  PhoneCall
} from 'lucide-react';

const Me: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-full bg-[#f8fafc] pb-10">
      {/* 1. 蓝金渐变头部 */}
      <div className="bg-gradient-to-br from-[#1a2b4b] to-[#2c4a85] pt-12 pb-16 px-6 rounded-b-[40px] shadow-lg shadow-blue-900/20">
        <div className="flex flex-col items-center text-center">
          {/* 头像 */}
          <div className="w-24 h-24 rounded-full border-4 border-[#c5a059]/30 overflow-hidden mb-4 shadow-inner">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* 姓名与等级 */}
          <div className="flex items-center space-x-2 mb-1">
            <h2 className="text-2xl font-bold text-white tracking-tight">张晓明</h2>
            <span className="px-2 py-0.5 bg-[#c5a059]/20 backdrop-blur-md rounded-md text-[10px] text-[#f5e6ab] font-bold border border-[#c5a059]/30 uppercase">
              钻石会员
            </span>
          </div>
          <p className="text-white/70 text-sm font-medium">点击进入个人信息页</p>
        </div>
      </div>

      {/* 2. 状态卡片 */}
      <div className="px-4 -mt-10 grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-[28px] shadow-xl shadow-gray-200/50 border border-gray-50 flex flex-col space-y-4">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#1a2b4b]">
            <FileText className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-gray-800">我的保单</h3>
            <p className="text-xs text-gray-400 font-medium">查看全部保障</p>
          </div>
          <span className="text-3xl font-black text-[#1a2b4b]">5</span>
        </div>

        <div className="bg-white p-6 rounded-[28px] shadow-xl shadow-gray-200/50 border border-gray-50 flex flex-col space-y-4">
          <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-[#c5a059]">
            <Clock className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-gray-800">我的理赔</h3>
            <p className="text-xs text-gray-400 font-medium">进度实时查询</p>
          </div>
          <span className="text-sm font-bold text-[#c5a059]">处理中(1)</span>
        </div>
      </div>

      {/* 3. 我的服务 */}
      <div className="mt-8 px-4 space-y-4">
        <h3 className="px-1 text-lg font-bold text-[#1a2b4b]">我的服务</h3>
        <div className="bg-white rounded-[28px] overflow-hidden shadow-sm border border-gray-50">
          <ServiceItem 
            icon={<Calendar className="w-5 h-5" />} 
            iconBg="bg-amber-50" 
            iconColor="text-[#c5a059]"
            title="我的预约" 
            subtitle="近期预约：3月15日 14:30" 
          />
          <ServiceItem 
            icon={<UserCircle className="w-5 h-5" />} 
            iconBg="bg-blue-50" 
            iconColor="text-[#1a2b4b]"
            title="我的顾问" 
            subtitle="专属顾问：李经理" 
          />
          <ServiceItem 
            icon={<Star className="w-5 h-5" />} 
            iconBg="bg-blue-50" 
            iconColor="text-blue-600"
            title="我的关注" 
            subtitle="已关注产品：3个" 
            isLast
          />
        </div>
      </div>

      {/* 4. 设置与合规 */}
      <div className="mt-8 px-4 space-y-4 pb-10">
        <h3 className="px-1 text-lg font-bold text-[#1a2b4b]">设置与合规</h3>
        <div className="bg-white rounded-[28px] overflow-hidden shadow-sm border border-gray-50">
          <SimpleLink icon={<Info className="w-5 h-5 text-gray-300" />} title="关于我们" />
          <SimpleLink icon={<ShieldCheck className="w-5 h-5 text-gray-300" />} title="用户协议" />
          <SimpleLink icon={<AlertCircle className="w-5 h-5 text-gray-300" />} title="风险提示" />
          <SimpleLink icon={<PhoneCall className="w-5 h-5 text-gray-300" />} title="联系我们" isLast />
        </div>
      </div>

      <p className="text-center text-[10px] text-gray-300 font-bold tracking-tight uppercase mt-4">Ever Fountain Global Wealth Management Limited © 2024</p>
    </div>
  );
};

const ServiceItem: React.FC<{ 
  icon: React.ReactNode, 
  iconBg: string, 
  iconColor: string,
  title: string, 
  subtitle: string,
  isLast?: boolean 
}> = ({ icon, iconBg, iconColor, title, subtitle, isLast }) => (
  <div className={`flex items-center px-6 py-5 active:bg-gray-50 transition-colors group ${!isLast ? 'border-b border-gray-50' : ''}`}>
    <div className={`w-12 h-12 ${iconBg} ${iconColor} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
      {icon}
    </div>
    <div className="ml-4 flex-1">
      <h4 className="text-base font-bold text-gray-800">{title}</h4>
      <p className="text-xs text-gray-400 font-medium mt-0.5">{subtitle}</p>
    </div>
    <ChevronRight className="w-5 h-5 text-gray-200 group-hover:text-gray-400 transition-colors" />
  </div>
);

const SimpleLink: React.FC<{ icon: React.ReactNode, title: string, isLast?: boolean }> = ({ icon, title, isLast }) => (
  <div className={`flex items-center px-6 py-5 active:bg-gray-50 transition-colors group ${!isLast ? 'border-b border-gray-50' : ''}`}>
    <div className="flex-1 flex items-center">
      <span className="text-sm font-bold text-gray-700">{title}</span>
    </div>
    <ChevronRight className="w-5 h-5 text-gray-200 group-hover:text-gray-400 transition-colors" />
  </div>
);

export default Me;
