
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  Share2, 
  Download, 
  ZoomIn, 
  ZoomOut,
  ChevronUp,
  ChevronDown,
  FileText,
  Loader2
} from 'lucide-react';

const ProposalViewer: React.FC = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [isLoading, setIsLoading] = useState(true);

  // 1. 这里是建议书图片映射表
  // 您只需要将转换好的图片 URL 填入对应的数组即可
  const proposalData: Record<string, { title: string, fileName: string, images: string[] }> = {
    'fwd-medical': {
      title: "倍卫您医疗计划",
      fileName: 'FWD_BraveHealth_VVIP.pdf',
      // 这里放入你转换好的 FWD 12张图片的链接
      images: [
        "https://api.placeholder.com/800/1131?text=FWD+Page+1", 
        "https://api.placeholder.com/800/1131?text=FWD+Page+2",
        "https://api.placeholder.com/800/1131?text=FWD+Page+3",
        "https://api.placeholder.com/800/1131?text=FWD+Page+4",
        "https://api.placeholder.com/800/1131?text=FWD+Page+5",
        "https://api.placeholder.com/800/1131?text=FWD+Page+6",
        "https://api.placeholder.com/800/1131?text=FWD+Page+7",
        "https://api.placeholder.com/800/1131?text=FWD+Page+8",
        "https://api.placeholder.com/800/1131?text=FWD+Page+9",
        "https://api.placeholder.com/800/1131?text=FWD+Page+10",
        "https://api.placeholder.com/800/1131?text=FWD+Page+11",
        "https://api.placeholder.com/800/1131?text=FWD+Page+12",
      ]
    },
    'aia-wealth': {
      title: "环宇盈活储蓄保险计划",
      fileName: 'AIA_GlobalWealth_VIP.pdf',
      // 这里放入你转换好的 AIA 14张图片的链接
      images: [
        "https://api.placeholder.com/800/1131?text=AIA+Page+1",
        "https://api.placeholder.com/800/1131?text=AIA+Page+2",
        "https://api.placeholder.com/800/1131?text=AIA+Page+3",
        "https://api.placeholder.com/800/1131?text=AIA+Page+4",
        "https://api.placeholder.com/800/1131?text=AIA+Page+5",
        "https://api.placeholder.com/800/1131?text=AIA+Page+6",
        "https://api.placeholder.com/800/1131?text=AIA+Page+7",
        "https://api.placeholder.com/800/1131?text=AIA+Page+8",
        "https://api.placeholder.com/800/1131?text=AIA+Page+9",
        "https://api.placeholder.com/800/1131?text=AIA+Page+10",
        "https://api.placeholder.com/800/1131?text=AIA+Page+11",
        "https://api.placeholder.com/800/1131?text=AIA+Page+12",
        "https://api.placeholder.com/800/1131?text=AIA+Page+13",
        "https://api.placeholder.com/800/1131?text=AIA+Page+14",
      ]
    }
  };

  const current = proposalData[type || ''] || proposalData['fwd-medical'];

  // 模拟初次加载过程
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [type]);

  // 监听滚动更新页码
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      const totalH = scrollHeight - clientHeight;
      const progress = scrollTop / totalH;
      const page = Math.min(current.images.length, Math.max(1, Math.round(progress * (current.images.length - 1)) + 1));
      if (page !== currentPage) {
        setCurrentPage(page);
      }
    };

    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [currentPage, current.images.length]);

  const handleZoom = (delta: number) => {
    setZoom(prev => Math.min(200, Math.max(50, prev + delta)));
  };

  return (
    <div className="flex flex-col h-full bg-[#333639] overflow-hidden select-none">
      {/* 1. 顶部专业工具栏 */}
      <header className="h-14 flex items-center justify-between bg-[#202124] px-3 shadow-xl z-50 shrink-0 border-b border-black/30">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="p-1.5 text-white/80 active:scale-90 transition-transform">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="ml-2 flex flex-col">
            <h2 className="text-[12px] font-bold text-white/90 truncate max-w-[140px]">
              {current.fileName}
            </h2>
            <div className="flex items-center space-x-1.5">
               <span className="text-[9px] text-white/40">官方 PDF 视图</span>
               <div className="w-0.5 h-0.5 bg-white/20 rounded-full"></div>
               <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider">Secure</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          <button className="p-2 text-white/60 active:text-white">
            <Download className="w-4 h-4" />
          </button>
          <button className="p-2 text-white/60 active:text-white">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* 2. PDF 内容滚动区 */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto bg-[#525659] p-4 flex flex-col items-center space-y-4 hide-scrollbar scroll-smooth relative"
      >
        {isLoading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/40 space-y-4">
             <Loader2 className="w-8 h-8 animate-spin" />
             <p className="text-xs font-bold tracking-widest">高清页面载入中...</p>
          </div>
        ) : (
          <>
            {current.images.map((imgUrl, index) => (
              <div 
                key={index}
                className="bg-white shadow-[0_8px_24px_rgba(0,0,0,0.3)] shrink-0 relative transition-transform duration-300 ease-out"
                style={{ 
                  width: `${zoom}%`, 
                  maxWidth: '100%',
                  aspectRatio: '1 / 1.414' // 标准 A4 比例
                }}
              >
                {/* 底部页码装饰 */}
                <div className="absolute bottom-2 right-4 text-[8px] text-gray-300 pointer-events-none">
                  Page {index + 1}
                </div>
                
                {/* 实际加载图片 */}
                <img 
                  src={imgUrl} 
                  className="w-full h-full object-contain"
                  alt={`Proposal Page ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
            
            <div className="py-12 flex flex-col items-center space-y-4 text-white/20">
               <div className="w-10 h-px bg-white/10"></div>
               <p className="text-[10px] font-bold tracking-[0.4em] uppercase">End of Document</p>
            </div>
          </>
        )}
      </div>

      {/* 3. 底部 PDF 浮动控制条 */}
      <div className="h-14 bg-[#202124] border-t border-white/5 flex items-center justify-between px-6 z-50 shrink-0">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 bg-white/5 rounded-lg px-2 py-1">
            <button 
              onClick={() => handleZoom(-10)} 
              className="p-1.5 text-white/40 active:text-white transition-colors"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-[10px] text-white/60 font-mono w-10 text-center font-bold">{zoom}%</span>
            <button 
              onClick={() => handleZoom(10)} 
              className="p-1.5 text-white/40 active:text-white transition-colors"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center bg-white/10 px-4 py-1.5 rounded-full space-x-4 border border-white/5 shadow-inner">
          <button className="text-white/40 active:text-white transition-colors">
            <ChevronUp className="w-4 h-4" />
          </button>
          <div className="flex flex-col items-center">
            <span className="text-[11px] text-white font-black font-mono leading-none">
              {currentPage} / {current.images.length}
            </span>
            <span className="text-[8px] text-white/30 uppercase mt-0.5 font-bold tracking-tighter">Pages</span>
          </div>
          <button className="text-white/40 active:text-white transition-colors">
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="hidden sm:flex items-center space-x-2">
           <FileText className="w-3 h-3 text-white/20" />
           <span className="text-[9px] text-white/20 font-bold uppercase tracking-widest">Digital Verified</span>
        </div>
      </div>
    </div>
  );
};

export default ProposalViewer;
