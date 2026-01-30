
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-full">
      <header className="px-4 h-14 flex items-center bg-white border-b border-gray-100 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-1 -ml-2">
          <ArrowLeft className="w-6 h-6 text-gray-800" />
        </button>
        <h1 className="ml-2 text-lg font-bold text-gray-800">{title}</h1>
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-300">
           <div className="w-10 h-10 border-4 border-gray-200 border-t-orange-400 rounded-full animate-spin"></div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-700">正在努力建设中...</h2>
          <p className="text-sm text-gray-400 mt-2">
            您刚才点击了「{title}」，该页面详情稍后将由用户提供。
          </p>
        </div>
        <button 
          onClick={() => navigate('/')}
          className="bg-orange-500 text-white px-8 py-2.5 rounded-full font-bold shadow-lg shadow-orange-100 active:scale-95 transition-transform"
        >
          返回首页
        </button>
      </div>
    </div>
  );
};

export default PlaceholderPage;
