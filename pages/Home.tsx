
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Handshake, 
  UserRoundCheck, 
  Search, 
  ChevronRight,
  FileText,
  ShoppingBag,
  TrendingUp,
  User,
  Home as HomeIcon,
  Stethoscope,
  BellRing,
  Coins,
  Crown
} from 'lucide-react';

// 品牌相关图片
const BRAND_LOGO = "https://img.js.design/assets/static/f58d927c7f1a30f7b029281e646271a2.png"; 

// 银行 Logo
const LOGOS = {
  BOC: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Bank_of_China_logo.svg/512px-Bank_of_China_logo.svg.png",
  SC: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Standard_Chartered_%282021%29.svg/512px-Standard_Chartered_%282021%29.svg.png",
  HSBC: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/512px-HSBC_logo_%282018%29.svg.png"
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  const banks = [
    {
      name: "中国银行 (香港)",
      logo: LOGOS.BOC,
      tags: ['跨境便利', '中银理财'],
      brandColor: "bg-[#B31F24]",
      borderColor: "border-red-100",
      applyUrl: "https://www.bochk.com/dam/more/accountopening/sc.html#download"
    },
    {
      name: "汇丰银行 (HSBC)",
      logo: LOGOS.HSBC,
      tags: ['全球通行', '卓越理财'],
      brandColor: "bg-[#DB0011]",
      borderColor: "border-red-50"
    },
    {
      name: "渣打银行 (SC)",
      logo: LOGOS.SC,
      tags: ['快速审批', '优先理财'],
      brandColor: "bg-[#008F45]",
      borderColor: "border-green-50"
    }
  ];

  const goToMall = (category: string) => {
    navigate('/insurance-mall', { state: { category } });
  };

  return (
    <div className="flex flex-col space-y-4 pb-10 bg-[#f8fafc] min-h-full">
      {/* 1. Header Area */}
      <div className="px-4 pt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
           <div className="flex flex-col">
              <h1 className="text-xl font-bold text-[#1a2b4b] leading-tight">恒源环球</h1>
              <p className="text-[8px] text-[#c5a059] font-bold tracking-tight uppercase">Ever Fountain Global Wealth Management Limited</p>
           </div>
        </div>
        <div className="flex space-x-2">
          <div className="p-2.5 bg-white rounded-full shadow-sm border border-gray-100 active:scale-90 transition-transform cursor-pointer">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <div className="p-2.5 bg-white rounded-full shadow-sm border border-gray-100 relative active:scale-90 transition-transform cursor-pointer">
            <BellRing className="w-5 h-5 text-gray-400" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#c5a059] rounded-full border-2 border-white"></span>
          </div>
        </div>
      </div>

      {/* 2. Trust Indicators */}
      <div className="px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 flex items-center justify-between shadow-sm border border-white/50">
          <TrustItem icon={<ShieldCheck className="w-3.5 h-3.5" />} label="持牌经纪机构" />
          <div className="h-3 w-[1px] bg-gray-200"></div>
          <TrustItem icon={<Handshake className="w-3.5 h-3.5" />} label="合规资金出境" />
          <div className="h-3 w-[1px] bg-gray-200"></div>
          <TrustItem icon={<UserRoundCheck className="w-3.5 h-3.5" />} label="1对1专家服务" />
        </div>
      </div>

      {/* 3. Hero Banner */}
      <div className="px-4">
        <div 
          className="relative h-48 rounded-3xl overflow-hidden text-white shadow-2xl group cursor-pointer active:scale-[0.99] transition-transform"
        >
          <div className="absolute inset-0">
             <img src={BRAND_LOGO} className="w-full h-full object-cover opacity-20 scale-150 grayscale brightness-200" alt="Banner Background" />
             <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b4b] via-[#1a2b4b]/90 to-[#2c4a85]/80"></div>
          </div>
          
          <div className="relative p-6 flex flex-col justify-center h-full space-y-4">
            <div className="space-y-0.5">
              <h2 className="text-lg font-bold tracking-wide">恒源环球 | EVER FOUNTAIN GLOBAL</h2>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-bold opacity-90">Professional Wealth Management</p>
            </div>
            <div className="space-y-1.5">
              <p className="text-xl font-semibold leading-tight">定制您的个人专属保障方案</p>
              <div className="flex space-x-3">
                <BannerTag text="香港保险" />
                <BannerTag text="财富传承" />
                <BannerTag text="全球配置" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Main Grid Navigation */}
      <div className="px-4 grid grid-cols-4 gap-2 text-center pt-2">
        <NavIcon icon={<FileText className="w-6 h-6" />} label="保险建议书" color="bg-amber-50" textColor="text-[#c5a059]" onClick={() => navigate('/proposal')} />
        <NavIcon icon={<ShoppingBag className="w-6 h-6" />} label="保险商城" color="bg-blue-50" textColor="text-[#1a2b4b]" onClick={() => goToMall('全部')} />
        <NavIcon icon={<ShieldCheck className="w-6 h-6" />} label="我的保单" color="bg-indigo-50" textColor="text-indigo-600" onClick={() => navigate('/my-policy')} />
        <NavIcon icon={<TrendingUp className="w-6 h-6" />} label="甄选基金" color="bg-amber-50" textColor="text-[#c5a059]" onClick={() => navigate('/fund-services')} />
      </div>

      {/* 5. Insurance Categories */}
      <div className="px-4 py-4 border-y border-gray-100 bg-white shadow-sm">
        <div className="grid grid-cols-4 gap-4">
          <TypeIcon icon={<Stethoscope className="w-6 h-6" />} label="高端医疗" color="bg-sky-50" textColor="text-sky-600" onClick={() => goToMall('医疗险')} />
          <TypeIcon icon={<HomeIcon className="w-6 h-6" />} label="养老储蓄" color="bg-indigo-50" textColor="text-indigo-600" onClick={() => goToMall('储蓄险')} />
          <TypeIcon icon={<HomeIcon className="w-6 h-6" />} label="年金险" color="bg-amber-50" textColor="text-[#c5a059]" onClick={() => goToMall('年金险')} />
          <TypeIcon icon={<User className="w-6 h-6" />} label="成人重疾" color="bg-blue-50" textColor="text-[#1a2b4b]" onClick={() => goToMall('重疾险')} />
        </div>
      </div>

      {/* 6. Promotional Banner */}
      <div className="px-4">
        <div 
          onClick={() => navigate('/xufeibao')}
          className="bg-white rounded-[28px] overflow-hidden shadow-sm border border-gray-50 flex items-stretch h-[140px] cursor-pointer active:scale-[0.99] transition-transform"
        >
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div className="space-y-1.5">
              <h3 className="text-[20px] font-bold text-[#1a2b4b] tracking-tight">续费宝</h3>
              <p className="text-[12px] text-gray-400 font-medium tracking-tight whitespace-nowrap">提前规划 · 自动缴费 · 灵活增值</p>
            </div>
            <button className="w-[110px] bg-[#c5a059] text-white py-2.5 rounded-full text-xs font-bold shadow-lg shadow-amber-500/20">立即了解</button>
          </div>
          <div className="w-[140px] relative overflow-hidden">
             <img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=400&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Nature" />
             <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/5"></div>
          </div>
        </div>
      </div>

      {/* 7. Bank Account Services Section */}
      <div className="px-4 space-y-4 pt-2">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-lg font-bold text-[#1a2b4b] flex items-center">
            <span className="w-1.5 h-5 bg-[#c5a059] rounded-full mr-2.5"></span>
            港卡开户服务
          </h3>
          <button className="text-xs text-[#c5a059] font-bold bg-amber-50/50 px-3.5 py-1.5 rounded-xl hover:bg-amber-50 transition-all">查看全部</button>
        </div>
        <div className="space-y-3">
          {banks.map((bank, index) => (
            <BankCard 
              key={index}
              name={bank.name} 
              logo={bank.logo}
              tags={bank.tags} 
              brandColor={bank.brandColor}
              borderColor={bank.borderColor}
              applyUrl={bank.applyUrl}
            />
          ))}
        </div>
      </div>

      {/* 8. Footer Info */}
      <div className="px-4 py-12 text-center space-y-4">
        <div className="flex justify-center items-center space-x-6 text-[12px] text-gray-400 font-semibold">
          <span className="cursor-pointer">服务声明</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="cursor-pointer">隐私政策</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="cursor-pointer">风险提示</span>
        </div>
        <p className="text-[10px] text-gray-300 tracking-tight uppercase">Ever Fountain Global Wealth Management Limited © 2024</p>
      </div>
    </div>
  );
};

const TrustItem: React.FC<{ icon: React.ReactNode, label: string }> = ({ icon, label }) => (
  <div className="flex items-center space-x-1.5 text-[12px] text-gray-500 font-bold">
    <div className="text-[#c5a059]">{icon}</div>
    <span>{label}</span>
  </div>
);

const BannerTag: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center space-x-1.5 text-[13px] text-white/80 font-bold">
    <div className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></div>
    <span>{text}</span>
  </div>
);

const NavIcon: React.FC<{ icon: React.ReactNode, label: string, color: string, textColor: string, onClick?: () => void }> = ({ icon, label, color, textColor, onClick }) => (
  <button onClick={onClick} className="flex flex-col items-center space-y-2.5 group cursor-pointer">
    <div className={`${color} ${textColor} p-4 rounded-[22px] group-active:scale-90 transition-all shadow-sm border border-white flex items-center justify-center`}>{icon}</div>
    <span className="text-[13px] font-bold text-gray-600 whitespace-nowrap tracking-tight">{label}</span>
  </button>
);

const TypeIcon: React.FC<{ icon: React.ReactNode, label: string, color: string, textColor: string, onClick?: () => void }> = ({ icon, label, color, textColor, onClick }) => (
  <button onClick={onClick} className="flex flex-col items-center space-y-2 group active:scale-95 transition-transform">
    <div className={`${color} ${textColor} p-4 rounded-full shadow-sm border border-white flex items-center justify-center`}>{icon}</div>
    <span className="text-[13px] font-bold text-gray-700 whitespace-nowrap">{label}</span>
  </button>
);

const BankCard: React.FC<{ name: string, logo: string, tags: string[], brandColor: string, borderColor: string, applyUrl?: string }> = ({ name, logo, tags, brandColor, borderColor, applyUrl }) => {
  const [imgError, setImgError] = useState(false);
  const firstChar = name.charAt(0);

  const handleApply = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (applyUrl) {
      window.location.href = applyUrl;
    }
  };

  return (
    <div className={`flex items-center justify-between p-4 bg-white rounded-3xl border-2 ${borderColor} shadow-sm active:bg-gray-50 active:scale-[0.98] transition-all cursor-pointer group`}>
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-2xl overflow-hidden bg-white border border-gray-100 flex items-center justify-center p-1.5 flex-shrink-0 shadow-inner relative">
          {!imgError ? (
            <img 
              src={logo} 
              alt={name} 
              className="max-w-full max-h-full object-contain transition-opacity duration-300 opacity-100" 
              onError={() => setImgError(true)}
            />
          ) : (
            <div className={`w-full h-full ${brandColor} flex items-center justify-center text-white font-bold text-lg rounded-xl shadow-inner`}>
              {firstChar}
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-1">
          <span className="text-[15px] font-bold text-gray-800 tracking-tight">{name}</span>
          <div className="flex flex-wrap gap-1.5">
            {tags.map(tag => (
              <span key={tag} className="text-[10px] px-2.5 py-0.5 bg-gray-50 text-gray-400 rounded-lg font-bold border border-gray-100/50">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button 
          onClick={handleApply}
          className="text-[11px] text-white bg-[#1a2b4b] px-4 py-2 rounded-xl font-bold shadow-lg shadow-blue-900/10 active:scale-90 transition-transform"
        >
          申请
        </button>
        <ChevronRight className="w-5 h-5 text-gray-200" />
      </div>
    </div>
  );
};

export default Home;
