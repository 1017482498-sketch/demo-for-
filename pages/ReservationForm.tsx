
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, HelpCircle, Calendar, ChevronDown } from 'lucide-react';

const ReservationForm: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/product-detail');
  };

  return (
    <div className="flex flex-col min-h-full bg-white pb-32 isolate">
      {/* 头部还原 */}
      <header className="h-14 flex items-center bg-white sticky top-0 z-[999] border-b border-gray-50 px-4">
        <button onClick={handleBack} className="flex items-center text-gray-800">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm ml-1">返回</span>
        </button>
        <div className="flex-1 text-center">
          <h1 className="text-base font-bold text-gray-800">保单预约信息</h1>
        </div>
        <HelpCircle className="w-5 h-5 text-gray-300" />
      </header>

      {/* 步骤条 */}
      <div className="px-6 py-6 border-b border-gray-50">
        <div className="relative flex justify-between items-center px-4">
          <div className="absolute top-4 left-4 right-4 h-0.5 bg-gray-100"></div>
          <div className="absolute top-4 left-4 w-1/3 h-0.5 bg-blue-600"></div>
          <StepNode number="1" label="投保人" active />
          <StepNode number="2" label="受保人" />
          <StepNode number="3" label="受益人" />
        </div>
      </div>

      <div className="px-5 pt-8 space-y-10 overflow-y-auto hide-scrollbar">
        <h2 className="text-xl font-bold text-gray-800">持有人信息（投保人）</h2>

        {/* 基本证件信息 */}
        <section className="space-y-5">
          <h3 className="text-[15px] font-bold text-gray-800">基本证件信息</h3>
          <InputField label="身份证号码" placeholder="请输入身份证号码" required />
          <InputField label="港澳通行证或护照" placeholder="请输入通行证或护照号码" required />
          <InputField label="身份证件地址" placeholder="请输入身份证上的地址" required />
          <InputField label="出生日期" placeholder="请选择出生日期" required icon={<Calendar className="w-4 h-4" />} />
        </section>

        {/* 个人基本信息 */}
        <section className="space-y-5">
          <h3 className="text-[15px] font-bold text-gray-800">个人基本信息</h3>
          <InputField label="身份证姓名" placeholder="请输入身份证上的姓名" required />
          <InputField label="英文姓名（和证件一致）" placeholder="请输入英文姓名" required />
          <div className="space-y-2">
            <label className="text-[13px] font-medium text-gray-700">性别 <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-2 gap-4">
              <RadioBox label="男" name="gender" />
              <RadioBox label="女" name="gender" />
            </div>
          </div>
          <InputField label="通讯地址" placeholder="请输入通讯地址" required />
        </section>

        {/* 职业与财务信息 */}
        <section className="space-y-5">
          <h3 className="text-[15px] font-bold text-gray-800">职业与财务信息</h3>
          <InputField label="工作单位" placeholder="请输入工作单位名称" required />
          <InputField label="公司地址" placeholder="请输入公司地址" />
          <InputField label="工作职位" placeholder="请输入工作职位" required />
          <SelectBox label="行业类别" placeholder="请选择行业类别" required />
          <div className="grid grid-cols-2 gap-4">
             <SelectBox label="月收入" placeholder="请选择" required />
             <SelectBox label="支出" placeholder="请选择" required />
          </div>
          <SelectBox label="总流动资金" placeholder="请选择" required />
          <InputField label="联系电话" placeholder="请输入联系电话" required />
          <InputField label="E-mail" placeholder="请输入电子邮箱" required />
          <div className="grid grid-cols-2 gap-4">
             <SelectBox label="教育程度" placeholder="请选择" required />
             <SelectBox label="婚姻状况" placeholder="请选择" required />
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-medium text-gray-700">是否吸烟 <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-2 gap-4">
              <RadioBox label="是" name="smoke" />
              <RadioBox label="否" name="smoke" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <InputField label="身高(cm)" placeholder="请输入身高" required />
             <InputField label="体重(kg)" placeholder="请输入体重" required />
          </div>
        </section>

        {/* 产品与预约信息 */}
        <section className="space-y-5">
          <h3 className="text-[15px] font-bold text-gray-800">产品与预约信息</h3>
          <SelectBox label="咨询产品名称" placeholder="请选择产品信息" required />
          <InputField label="保险金额 (元)" placeholder="请输入保险金额" required />
          <InputField label="保险费用 (元/年)" placeholder="请输入保险费用" required />
          <SelectBox label="保险年期 (年)" placeholder="请选择保险年期" required />
          <InputField label="预约时间" placeholder="请选择预约时间" required icon={<Calendar className="w-4 h-4" />} />
          <div className="space-y-2">
            <label className="text-[13px] font-medium text-gray-700">受保人是否为儿童 <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-2 gap-4">
              <RadioBox label="是" name="isChild" />
              <RadioBox label="否" name="isChild" />
            </div>
          </div>
        </section>

        <div className="h-10"></div>
      </div>

      {/* 底部按钮 */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-white border-t border-gray-100 z-50">
        <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-blue-500/10 active:bg-blue-700 transition-colors">
          下一步：受保人信息
        </button>
      </div>
    </div>
  );
};

// --- 子组件 ---

const StepNode: React.FC<{ number: string, label: string, active?: boolean }> = ({ number, label, active }) => (
  <div className="flex flex-col items-center z-10">
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
      active ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-400'
    }`}>
      {number}
    </div>
    <span className={`text-[11px] mt-1.5 font-bold ${active ? 'text-gray-800' : 'text-gray-300'}`}>
      {label}
    </span>
  </div>
);

const InputField: React.FC<{ label: string, placeholder: string, required?: boolean, icon?: React.ReactNode }> = ({ label, placeholder, required, icon }) => (
  <div className="space-y-2">
    <label className="text-[13px] font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <input 
        type="text" 
        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm placeholder:text-gray-300 focus:outline-none focus:border-blue-500 transition-colors" 
        placeholder={placeholder} 
      />
      {icon && <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">{icon}</div>}
    </div>
  </div>
);

const SelectBox: React.FC<{ label: string, placeholder: string, required?: boolean }> = ({ label, placeholder, required }) => (
  <div className="space-y-2">
    <label className="text-[13px] font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm text-gray-300 flex justify-between items-center bg-white cursor-pointer">
      <span>{placeholder}</span>
      <ChevronDown className="w-4 h-4 text-gray-300" />
    </div>
  </div>
);

const RadioBox: React.FC<{ label: string, name: string }> = ({ label, name }) => (
  <label className="flex items-center space-x-3 px-4 py-3.5 border border-gray-200 rounded-xl cursor-pointer active:bg-gray-50 transition-colors">
    <div className="w-5 h-5 rounded-full border-2 border-gray-100 flex items-center justify-center">
       <div className="w-2.5 h-2.5 rounded-full bg-transparent"></div>
    </div>
    <span className="text-sm text-gray-600">{label}</span>
    <input type="radio" name={name} className="hidden" />
  </label>
);

export default ReservationForm;
