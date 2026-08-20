import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AiProfitCalculatorBudgetingPanel1() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<aside className="flex flex-col fixed left-0 top-0 h-full p-4 h-screen w-64 rounded-r-[32px] bg-surface dark:bg-inverse-surface shadow-[0_8px_30px_rgb(0,0,0,0.06)] z-50">
<div className="mb-8 px-4">
<h1 className="font-h2 text-h2 font-bold text-primary dark:text-inverse-primary leading-tight">JastipAdmin</h1>
<p className="text-xs text-on-surface-variant opacity-70">Personal Shopper Hub</p>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center gap-3 bg-primary-container text-on-primary-container rounded-xl px-4 py-3 shadow-sm transition-all duration-300" href="#">
<span className="material-symbols-outlined active-pill" style={{fontVariationSettings: '\'FILL\' 1'}}>dashboard</span>
<span className="font-body-md text-body-md">Dashboard</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant hover:text-primary px-4 py-3 hover:bg-surface-container-highest transition-all duration-300 rounded-xl" href="#">
<span className="material-symbols-outlined">shopping_bag</span>
<span className="font-body-md text-body-md">Orders</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant hover:text-primary px-4 py-3 hover:bg-surface-container-highest transition-all duration-300 rounded-xl" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-body-md text-body-md">Shoppers</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant hover:text-primary px-4 py-3 hover:bg-surface-container-highest transition-all duration-300 rounded-xl" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-body-md text-body-md">Payments</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant hover:text-primary px-4 py-3 hover:bg-surface-container-highest transition-all duration-300 rounded-xl" href="#">
<span className="material-symbols-outlined">event</span>
<span className="font-body-md text-body-md">Events</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant hover:text-primary px-4 py-3 hover:bg-surface-container-highest transition-all duration-300 rounded-xl" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-body-md text-body-md">Settings</span>
</a>
</nav>
<div className="mt-auto p-4 flex items-center gap-3 bg-surface-container-low rounded-2xl">
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A high-quality professional portrait of a business administrator in a modern office, wearing a clean white shirt, smiling warmly against a soft-focus background of tech equipment and plants. The lighting is bright and inviting, maintaining the clean UI aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZv7waI3M8ebVsKS86jmuEIRWJeqDDkvQ0xtmxQnx4U0tt6Ka2ZpTMx9McV_miwCTadZlMOBpxh1RHjJXfB0dBIcavJbfpG2hQQOUpTh-51wTiYi08_Ynbt9_2CfRCgdAOrIjJi_0SwiRQNkYiPFUSnnt4hjr-0sM6RyG8N3K-P49ZynfdPpQ2mXWsXES6HwQ1EIUiwaMymmRzkWcA0nAfsrO2Pw1Utsj1vOBF1ea63tyiOcSW9wrlnw"/>
</div>
<div className="flex-1 overflow-hidden">
<p className="text-sm font-bold truncate">Alex Jastip</p>
<p className="text-xs text-on-surface-variant truncate">Premium Partner</p>
</div>
</div>
</aside>

<header className="flex justify-between items-center ml-64 px-8 py-4 w-[calc(100%-16rem)] h-20 bg-surface/80 backdrop-blur-md sticky top-0 z-40">
<div className="flex items-center gap-4">
<h2 className="font-h2 text-h2 font-black text-primary">Admin Workspace</h2>
<div className="hidden lg:flex items-center bg-surface-container rounded-full px-4 py-2 w-64 border border-surface-variant">
<span className="material-symbols-outlined text-on-surface-variant text-lg">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full" placeholder="Search parameters..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">notifications</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">account_circle</span>
</button>
</div>
</header>

<main className="ml-64 p-8 min-h-[calc(100vh-5rem)]">

<div className="mb-8">
<h3 className="font-headline-lg text-headline-lg text-text-dark">Profit & Budgeting Sandbox</h3>
<p className="text-text-secondary font-body-md mt-1">Simulate margins and manage operational overhead with AI-driven insights.</p>
</div>

<div className="grid grid-cols-12 grid-rows-auto gap-grid-gap">

<section className="col-span-12 xl:col-span-8 bg-[#FBBF24] rounded-clay p-8 relative overflow-hidden flex flex-col justify-between h-auto min-h-[440px] shadow-lg">
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div>
<span className="bg-white/30 backdrop-blur px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">AI Optimization Active</span>
<h4 className="font-headline-lg text-headline-lg text-text-dark">AI Projection Sandbox</h4>
</div>
<div className="bg-white/20 p-4 rounded-3xl backdrop-blur-md">
<p className="text-xs font-bold text-text-dark/60">ESTIMATED RANGE</p>
<p className="text-h2 font-black text-text-dark">$12,450 - $18,900</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 mt-4">

<div className="space-y-6">
<div className="space-y-4">
<div className="flex justify-between items-end">
<label className="font-headline-md text-headline-md text-text-dark">Margin Adjustment</label>
<span className="text-h2 font-black text-primary">24%</span>
</div>
<input className="w-full h-3 bg-white/40 rounded-full appearance-none slider-thumb cursor-pointer" max="50" min="5" type="range" value="24"/>
</div>
<div className="space-y-4">
<div className="flex justify-between items-end">
<label className="font-headline-md text-headline-md text-text-dark">Target Volume</label>
<span className="text-h2 font-black text-primary">150 units</span>
</div>
<input className="w-full h-3 bg-white/40 rounded-full appearance-none slider-thumb cursor-pointer" max="500" min="10" type="range" value="150"/>
</div>
</div>

<div className="bg-white/10 rounded-clay p-6 border border-white/20 backdrop-blur-sm flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 flex items-end justify-between px-6 pb-4">
<div className="w-8 bg-white/40 rounded-t-xl h-[40%]"></div>
<div className="w-8 bg-white/60 rounded-t-xl h-[55%]"></div>
<div className="w-8 bg-white/40 rounded-t-xl h-[35%]"></div>
<div className="w-8 bg-white/80 rounded-t-xl h-[80%]"></div>
<div className="w-8 bg-primary rounded-t-xl h-[95%] shadow-xl"></div>
<div className="w-8 bg-white/40 rounded-t-xl h-[60%]"></div>
</div>
<p className="font-bold text-text-dark/80 z-10 mb-20 text-center">Historical Profit Convergence</p>
</div>
</div>
</div>

<div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
<div className="absolute -left-10 -top-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
</section>

<section className="col-span-12 md:col-span-6 xl:col-span-4 clay-card p-8 flex flex-col">
<h4 className="font-headline-md text-headline-md mb-6">Cost Distribution</h4>
<div className="flex-1 flex flex-col items-center justify-center relative">

<div className="relative w-48 h-48">
<svg className="w-full h-full transform -rotate-90">
<circle cx="96" cy="96" fill="transparent" r="80" stroke="#F3F4F6" strokeWidth="16"></circle>
<circle cx="96" cy="96" fill="transparent" r="80" stroke="#674bb5" stroke-dasharray="502" stroke-dashoffset="150" strokeLinecap="round" strokeWidth="16"></circle>
<circle cx="96" cy="96" fill="transparent" r="80" stroke="#FBBF24" stroke-dasharray="502" stroke-dashoffset="400" strokeLinecap="round" strokeWidth="16"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-h2 font-black">70%</span>
<span className="text-xs text-on-surface-variant font-bold">EFFICIENCY</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 w-full mt-8">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-primary"></div>
<span className="text-sm font-medium">Fixed</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-[#FBBF24]"></div>
<span className="text-sm font-medium">Variable</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-accent-pink"></div>
<span className="text-sm font-medium">Safety</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-accent-blue"></div>
<span className="text-sm font-medium">Misc</span>
</div>
</div>
</div>
</section>

<section className="col-span-12 xl:col-span-7 clay-card p-8">
<div className="flex justify-between items-center mb-6">
<h4 className="font-headline-md text-headline-md">Operational Cost Matrix</h4>
<button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
<span className="material-symbols-outlined text-lg">sync</span> Refresh Data
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold text-on-surface-variant px-1 uppercase tracking-wider">Event Capital</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold">$</span>
<input className="clay-input w-full pl-10 pr-4 py-4 font-bold text-text-dark" type="text" value="12,500"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-on-surface-variant px-1 uppercase tracking-wider">Transport</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold">$</span>
<input className="clay-input w-full pl-10 pr-4 py-4 font-bold text-text-dark" type="text" value="1,200"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-on-surface-variant px-1 uppercase tracking-wider">Accommodations</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold">$</span>
<input className="clay-input w-full pl-10 pr-4 py-4 font-bold text-text-dark" type="text" value="3,400"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-on-surface-variant px-1 uppercase tracking-wider">Tickets & Entry</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold">$</span>
<input className="clay-input w-full pl-10 pr-4 py-4 font-bold text-text-dark" type="text" value="850"/>
</div>
</div>
<div className="col-span-full space-y-2">
<label className="text-xs font-bold text-on-surface-variant px-1 uppercase tracking-wider">Misc. Goods</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold">$</span>
<input className="clay-input w-full pl-10 pr-4 py-4 font-bold text-text-dark" type="text" value="500"/>
</div>
</div>
</div>
<button className="w-full mt-8 bg-primary text-white font-bold py-4 rounded-2xl clay-button hover:bg-primary/90 transition-all">
                    Commit Budget Parameters
                </button>
</section>

<div className="col-span-12 xl:col-span-5 flex flex-col gap-grid-gap">

<div className="clay-card p-8 flex-1 bg-white relative overflow-hidden group">
<div className="relative z-10">
<h4 className="text-sm font-bold text-on-surface-variant mb-1">Projected Net Profit</h4>
<div className="flex items-baseline gap-2 mb-4">
<span className="text-h1 font-black text-text-dark">$15,200</span>
<span className="text-green-500 font-bold text-sm flex items-center">
<span className="material-symbols-outlined text-sm">trending_up</span> +12%
                            </span>
</div>
<div className="h-24 w-full flex items-end gap-1">

<div className="flex-1 bg-surface-container rounded-full h-[30%] group-hover:h-[45%] transition-all duration-500"></div>
<div className="flex-1 bg-surface-container rounded-full h-[50%] group-hover:h-[65%] transition-all duration-500 delay-75"></div>
<div className="flex-1 bg-surface-container rounded-full h-[45%] group-hover:h-[55%] transition-all duration-500 delay-100"></div>
<div className="flex-1 bg-primary-container rounded-full h-[80%] group-hover:h-[95%] transition-all duration-500 delay-150"></div>
<div className="flex-1 bg-primary rounded-full h-[60%] group-hover:h-[75%] transition-all duration-500 delay-200"></div>
<div className="flex-1 bg-surface-container rounded-full h-[40%] group-hover:h-[50%] transition-all duration-500 delay-250"></div>
</div>
</div>
</div>

<div className="clay-card p-8 flex-1 bg-primary-fixed-dim text-on-primary-fixed-variant">
<div className="flex justify-between items-start mb-4">
<h4 className="text-sm font-black uppercase tracking-widest">Tax Efficiency</h4>
<span className="material-symbols-outlined text-3xl">verified</span>
</div>
<p className="text-h1 font-black mb-1">94.2<span className="text-h2">%</span></p>
<p className="text-sm font-medium opacity-80">AI Optimized Deduction Strategy</p>
<div className="mt-6 flex gap-2">
<span className="bg-white/40 px-3 py-1 rounded-full text-[10px] font-bold">VAT RECLAIM</span>
<span className="bg-white/40 px-3 py-1 rounded-full text-[10px] font-bold">EXPORT CREDIT</span>
</div>
</div>
</div>

<section className="col-span-12 md:col-span-4 clay-card p-6 flex items-center gap-6">
<div className="w-16 h-16 bg-accent-blue/30 rounded-3xl flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: '\'FILL\' 1'}}>account_balance_wallet</span>
</div>
<div>
<p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Current Liquidity</p>
<p className="text-headline-md font-black">$45.8k</p>
</div>
</section>
<section className="col-span-12 md:col-span-4 clay-card p-6 flex items-center gap-6">
<div className="w-16 h-16 bg-accent-pink/30 rounded-3xl flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: '\'FILL\' 1'}}>speed</span>
</div>
<div>
<p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Growth Velocity</p>
<p className="text-headline-md font-black">+2.4x</p>
</div>
</section>
<section className="col-span-12 md:col-span-4 clay-card p-6 flex items-center gap-6">
<div className="w-16 h-16 bg-tertiary-fixed/30 rounded-3xl flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: '\'FILL\' 1'}}>security</span>
</div>
<div>
<p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Risk Score</p>
<p className="text-headline-md font-black">Low</p>
</div>
</section>
</div>

<footer className="mt-12 flex justify-between items-center bg-inverse-surface text-white p-6 rounded-clay">
<div>
<p className="font-bold text-lg">Ready to execute this budget?</p>
<p className="text-sm opacity-60">Synchronize these parameters across all active shopping missions.</p>
</div>
<div className="flex gap-4">
<button className="px-6 py-3 rounded-full font-bold bg-white/10 hover:bg-white/20 transition-colors">Save Draft</button>
<button className="px-8 py-3 rounded-full font-bold bg-primary shadow-xl hover:scale-105 active:scale-95 transition-all">Publish & Notify Team</button>
</div>
</footer>
</main>


    </div>
  );
}
