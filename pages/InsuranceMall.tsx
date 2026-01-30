
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Flame, Star, Zap, Shield, HeartPulse, Wallet, BriefcaseMedical } from 'lucide-react';

const ProductCard: React.FC<{ product: any, onDetail: () => void }> = ({ product, onDetail }) => {
  const [imgError, setImgError] = useState(false);

  // 根据产品类型返回对应的占位图标
  const getPlaceholderIcon = () => {
    switch (product.type) {
      case '储蓄险': return <Wallet className="w-10 h-10 text-[#c5a059]" />;
      case '医疗险': return <BriefcaseMedical className="w-10 h-10 text-sky-500" />;
      case '重疾险': return <HeartPulse className="w-10 h-10 text-rose-500" />;
      default: return <Shield className="w-10 h-10 text-indigo-500" />;
    }
  };

  return (
    <div 
      onClick={onDetail}
      className={`group bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 flex flex-col transition-all duration-300 relative ${
        product.clickable ? 'active:scale-[0.98] cursor-pointer hover:shadow-md' : 'opacity-95'
      }`}
    >
      <div className={`absolute top-0 right-0 px-5 py-2 rounded-bl-2xl text-[12px] font-black shadow-sm z-10 border-l border-b border-gray-50/50 ${product.typeColor}`}>
        {product.type}
      </div>

      <div className="p-5 flex">
        <div className="w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-50 border border-gray-100 relative shadow-inner flex items-center justify-center">
          {!imgError ? (
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <div className="bg-gray-100 w-full h-full flex items-center justify-center">
              {getPlaceholderIcon()}
            </div>
          )}
          <div className="absolute top-1.5 left-1.5">
             <CheckCircle2 className="w-5 h-5 text-white fill-[#c5a059] opacity-90 shadow-sm" />
          </div>
        </div>
        <div className="ml-5 flex-1 flex flex-col justify-between min-h-[112px]">
          <div className="space-y-1.5">
            <div className="flex justify-between items-start pr-12">
              <h3 className="text-[18px] font-bold text-[#1a2b4b] leading-tight group-hover:text-[#c5a059] transition-colors line-clamp-1">
                {product.title}
              </h3>
              {product.id === 7 && <Flame className="w-4 h-4 text-red-500 fill-current animate-pulse ml-1 shrink-0" />}
            </div>
            <p className="text-[12px] text-gray-400 font-bold uppercase tracking-wide">
              {product.company}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-2">
            <span className={`text-[12px] font-black px-3 py-1 rounded-lg ${product.featureColor} tracking-tight`}>
              {product.featureTag}
            </span>
          </div>
          
          <p className="text-[14px] text-gray-500 line-clamp-2 font-medium leading-relaxed mt-2.5">
            {product.desc}
          </p>
        </div>
      </div>
      
      <div className="px-5 py-4 flex items-center justify-between border-t border-gray-50/50 bg-gray-50/40">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#c5a059] rounded-full animate-pulse"></div>
          <span className="text-[12px] text-gray-400 font-bold tracking-tight">
            {product.footerText}
          </span>
        </div>
        <button className="bg-[#1a2b4b] text-[#f5e6ab] px-8 py-2.5 rounded-full text-sm font-black shadow-lg shadow-blue-900/20 active:bg-[#2c4a85] transition-all hover:px-10">
          了解详情
        </button>
      </div>
    </div>
  );
};

const InsuranceMall: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('全部');
  const [activeTag, setActiveTag] = useState('');

  useEffect(() => {
    const state = location.state as { category?: string };
    if (state?.category) {
      setActiveCategory(state.category);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const categories = ['全部', '储蓄险', '年金险', '医疗险', '重疾险'];
  const tags = ['为孩子', '为自己', '为父母', '全家保障'];

  // 全新筛选的高端视觉素材
  const products = [
    {
      id: 1,
      title: "环宇盈活储蓄保险计划",
      company: "友邦保险 (AIA)",
      type: "储蓄险",
      typeColor: "text-[#c5a059] bg-amber-50",
      featureTag: "预期IRR 6.8%",
      featureColor: "text-blue-500 bg-blue-50",
      desc: "支持9种货币转换，保单拆分功能领先，是资产跨代传承的首选方案。",
      footerText: "财富传承 · 货币切换",
      image: "https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?q=80&w=400&auto=format&fit=crop",
      clickable: true
    },
    {
      id: 2,
      title: "信守明天多元货币计划",
      company: "保诚保险 (Prudential)",
      type: "储蓄险",
      typeColor: "text-[#c5a059] bg-amber-50",
      featureTag: "多元红利锁定",
      featureColor: "text-indigo-500 bg-indigo-50",
      desc: "第3个周年日起无限次转换货币，独有开支储蓄功能，助力全球财富配置。",
      footerText: "分红潜力 · 灵活提取",
      image: "https://images.unsplash.com/photo-1593672715438-d88a70629abe?q=80&w=400&auto=format&fit=crop",
      clickable: false
    },
    {
      id: 3,
      title: "万通延期年金",
      company: "万通保险 (YF Life)",
      type: "年金险",
      typeColor: "text-blue-600 bg-blue-50",
      featureTag: "QDAP扣税额$6万",
      featureColor: "text-emerald-500 bg-emerald-50",
      desc: "政府合资格延期年金，提供保证入息，锁定终身安稳的养老金流。",
      footerText: "税务减免 · 养老保障",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=400&auto=format&fit=crop",
      clickable: false
    },
    {
      id: 4,
      title: "享悦即享年金保险",
      company: "永明保险 (Sun Life)",
      type: "年金险",
      typeColor: "text-blue-600 bg-blue-50",
      featureTag: "保证每月年金",
      featureColor: "text-orange-500 bg-orange-50",
      desc: "即时入息方案，终身发放年金直到100岁，创造稳健的长寿现金流。",
      footerText: "即时派息 · 终身收入",
      image: "https://images.unsplash.com/photo-1444419444444-a953e1e93892?q=80&w=400&auto=format&fit=crop",
      clickable: false
    },
    {
      id: 5,
      title: "倍卫您医疗计划",
      company: "富卫(香港) (FWD)",
      type: "医疗险",
      typeColor: "text-purple-600 bg-purple-50",
      featureTag: "全数保障VHIS",
      featureColor: "text-sky-500 bg-sky-50",
      desc: "自愿医保灵活计划，全数保障住院手术费，涵盖未知既往症及癌症治疗。",
      footerText: "全额理赔 · 高端私院",
      image: "https://images.unsplash.com/photo-1519494087670-6502805a817e?q=80&w=400&auto=format&fit=crop",
      clickable: false
    },
    {
      id: 6,
      title: "臻尚环球医疗保障",
      company: "安盛保险 (AXA)",
      type: "医疗险",
      typeColor: "text-purple-600 bg-purple-50",
      featureTag: "全球名医绿通",
      featureColor: "text-rose-500 bg-rose-50",
      desc: "专为精英家庭设计，提供全球顶级医疗资源预约及多重自付额选择。",
      footerText: "顶级医疗 · 全球保障",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400&auto=format&fit=crop",
      clickable: false
    },
    {
      id: 7,
      title: "跨越无限保",
      company: "忠意保险 (Generali)",
      type: "重疾险",
      typeColor: "text-red-600 bg-red-50",
      featureTag: "癌症无限次赔付",
      featureColor: "text-amber-500 bg-amber-50",
      desc: "重疾险天花板，提供业内领先的无限次癌症赔付及中风、心脏病保障。",
      footerText: "极致保额 · 终身守护",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=400&auto=format&fit=crop",
      clickable: false
    },
    {
      id: 8,
      title: "诚保一生危疾保",
      company: "保诚保险 (Prudential)",
      type: "重疾险",
      typeColor: "text-red-600 bg-red-50",
      featureTag: "早期危疾豁免",
      featureColor: "text-pink-500 bg-pink-50",
      desc: "涵盖127种疾病，首10年赠送额外50%保额，涵盖早期危疾理赔与豁免。",
      footerText: "全面覆盖 · 早期理赔",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=400&auto=format&fit=crop",
      clickable: false
    }
  ];

  const filteredProducts = products.filter(p => {
    if (activeCategory === '全部') return true;
    return p.type === activeCategory;
  });

  return (
    <div className="flex flex-col min-h-full bg-[#f8fafc] animate-in fade-in duration-500">
      <header className="h-16 flex items-center bg-white sticky top-0 z-[1000] px-4 border-b border-gray-100 shadow-sm">
        <button onClick={() => navigate('/')} className="p-2 -ml-2 text-gray-800 active:scale-90 transition-transform">
          <ArrowLeft className="w-7 h-7" />
        </button>
        <div className="flex-1 text-center">
          <h1 className="text-xl font-bold text-[#1a2b4b] tracking-tight">保险商城</h1>
        </div>
        <div className="flex space-x-1.5 items-center">
           <div className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></div>
           <div className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></div>
           <div className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></div>
        </div>
      </header>

      <div className="bg-white overflow-x-auto hide-scrollbar sticky top-16 z-[999] border-b border-gray-50">
        <div className="px-4 py-3.5 flex space-x-3 items-center min-w-max">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-7 py-2.5 rounded-full text-[15px] font-bold whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-[#1a2b4b] text-[#f5e6ab] shadow-lg shadow-blue-900/20 scale-105' 
                  : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="px-4 py-4 flex space-x-3 items-center min-w-max">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? '' : tag)}
              className={`px-6 py-2 rounded-xl text-[14px] font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                activeTag === tag 
                  ? 'bg-blue-50 text-[#1a2b4b] border border-blue-100' 
                  : 'bg-white text-gray-500 border border-gray-100 shadow-sm'
              }`}
            >
              {tag === '为孩子' && <Star className="w-3.5 h-3.5 fill-[#c5a059]" />}
              {tag === '全家保障' && <Zap className="w-3.5 h-3.5 fill-[#c5a059]" />}
              <span>{tag}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 space-y-5 pb-16">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onDetail={() => product.id === 1 && navigate('/product-detail')} 
          />
        ))}
        
        <div className="pt-10 pb-6 text-center px-10 space-y-2.5 opacity-60">
           <div className="h-px w-10 bg-gray-200 mx-auto"></div>
           <p className="text-[11px] text-gray-400 leading-relaxed font-bold tracking-tight">
             具体保障范围、不保事项及赔偿限额以保险公司签发的保单条款为准
           </p>
           <p className="text-[10px] text-gray-400 leading-relaxed font-bold tracking-tight uppercase">
             Ever Fountain Global Wealth Management Limited | 2024
           </p>
        </div>
      </div>
    </div>
  );
};

export default InsuranceMall;
