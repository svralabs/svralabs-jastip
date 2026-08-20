import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AiProfitCalculatorBudgetingPanel2() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<aside className="h-screen w-72 flex-col fixed left-0 top-0 bg-surface-container-low dark:bg-surface-dim shadow-[4px_0_24px_rgba(0,0,0,0.06)] dark:shadow-none z-50 p-lg gap-xl flex">
<div className="mb-8">
<h1 className="font-h1 text-h1 text-primary tracking-tight">Jastip Admin</h1>
<p className="font-body-md text-text-secondary opacity-70">Global Workspace</p>
</div>
<nav className="flex flex-col gap-sm flex-1">
<a className="flex items-center gap-md text-on-surface-variant hover:bg-surface-container-high rounded-xl px-lg py-md transition-all" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-pill text-label-pill">Dashboard</span>
</a>
<a className="flex items-center gap-md text-on-surface-variant hover:bg-surface-container-high rounded-xl px-lg py-md transition-all" href="#">
<span className="material-symbols-outlined">shopping_bag</span>
<span className="font-label-pill text-label-pill">Orders</span>
</a>
<a className="flex items-center gap-md bg-primary-container text-on-primary-container rounded-xl px-lg py-md shadow-sm transition-all scale-[0.97]" href="#">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>payments</span>
<span className="font-label-pill text-label-pill">Payments</span>
</a>
<a className="flex items-center gap-md text-on-surface-variant hover:bg-surface-container-high rounded-xl px-lg py-md transition-all" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-label-pill text-label-pill">Shoppers</span>
</a>
<a className="flex items-center gap-md text-on-surface-variant hover:bg-surface-container-high rounded-xl px-lg py-md transition-all" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-pill text-label-pill">Settings</span>
</a>
</nav>
<div className="mt-auto pt-lg border-t border-outline-variant/30 flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-accent-pink/20 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
<img className="w-full h-full object-cover" data-alt="A cheerful administrator portrait with a professional look and a friendly smile, high-quality photography, clean background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBGD_Fk9WyCvPAT7cJabc8WImmWhCJ9sXsaNyxGOpuc0vMr21MzWMj_7Hk5cZ_j1DIAmEm9XPsDdOpAC08yzeqvrLj0_k3NPozmKVdpt3f5HnwVKe0qp4PJPC2hCIZvG9roz8-6w_FIaHPUa5oPE8ji6HA9YgHoL8dNslHMWBRfefGmeXeGFQuZZxdRFeCwXhT2e7poIb4H0pahcmnM9dUVmcY5sh_IlRJfAVv2Gg2wX9DSf_3gJXtcQ"/>
</div>
<div>
<p className="font-label-pill text-label-pill">Jastip Admin</p>
<p className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Premium Tier</p>
</div>
</div>
</aside>

<header className="flex items-center justify-between ml-72 px-2xl h-20 w-[calc(100%-288px)] sticky top-0 bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] z-40">
<div className="flex items-center gap-lg w-1/3">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full pl-12 pr-4 py-2 bg-surface-container-low rounded-full border-none focus:ring-2 focus:ring-primary/20 font-body-md text-sm" placeholder="Search analytics..." type="text"/>
</div>
</div>
<div className="flex items-center gap-xl">
<div className="flex items-center gap-md mr-4">
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-all text-on-surface-variant relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-all text-on-surface-variant">
<span className="material-symbols-outlined">help_outline</span>
</button>
</div>
<div className="h-8 w-px bg-outline-variant/30"></div>
<div className="flex items-center gap-sm pl-4">
<p className="font-label-pill text-label-pill text-primary">Profit Calculator</p>
<span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
</div>
</div>
</header>

<main className="ml-72 p-2xl">

<div className="mb-8 flex justify-between items-end">
<div>
<h2 className="font-headline-lg text-headline-lg text-text-primary">AI Profit Calculator</h2>
<p className="text-text-secondary font-body-md">Optimize your jastip margins with real-time budget projections.</p>
</div>
<div className="flex gap-md">
<button className="flex items-center gap-sm px-lg py-md bg-white border border-outline-variant rounded-2xl font-label-pill text-label-pill hover:bg-surface-container-low transition-all">
<span className="material-symbols-outlined text-md">cloud_download</span>
                    Export PDF
                </button>
<button className="flex items-center gap-sm px-lg py-md bg-primary text-white rounded-2xl font-label-pill text-label-pill hover:shadow-lg transition-all">
<span className="material-symbols-outlined text-md">save</span>
                    Save Report
                </button>
</div>
</div>

<div className="grid grid-cols-12 gap-grid-gap auto-rows-[minmax(180px,auto)]">

<div className="col-span-12 lg:col-span-8 row-span-2 clay-yellow-card rounded-3xl p-2xl relative overflow-hidden flex flex-col justify-between">

<div className="absolute -right-20 -top-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
<div className="absolute -left-10 -bottom-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
<div className="relative z-10 flex justify-between items-start">
<div>
<div className="flex items-center gap-sm mb-2">
<span className="material-symbols-outlined text-on-secondary-container" style={{fontVariationSettings: '\'FILL\' 1'}}>psychology</span>
<span className="uppercase tracking-widest text-[10px] font-bold text-on-secondary-container">AI Recommendation Engine</span>
</div>
<h3 className="font-headline-md text-headline-md text-text-dark">Dynamic Profit Strategy</h3>
</div>
<div className="bg-white/40 backdrop-blur-md px-lg py-md rounded-2xl flex flex-col items-center">
<span className="text-[10px] font-bold text-on-secondary-container/60 uppercase">Confidence</span>
<span className="font-headline-md text-text-dark">98.2%</span>
</div>
</div>
<div className="relative z-10 grid grid-cols-3 gap-xl my-8">
<div className="bg-white/50 backdrop-blur-md p-lg rounded-2xl flex flex-col gap-xs">
<span className="text-on-secondary-container/70 text-xs font-semibold">Recommended Margin</span>
<span className="text-3xl font-bold text-text-dark">22.5%</span>
<div className="w-full h-1 bg-on-secondary-container/10 rounded-full mt-2 overflow-hidden">
<div className="w-3/4 h-full bg-primary rounded-full"></div>
</div>
</div>
<div className="bg-white/50 backdrop-blur-md p-lg rounded-2xl flex flex-col gap-xs">
<span className="text-on-secondary-container/70 text-xs font-semibold">Target Revenue</span>
<span className="text-3xl font-bold text-text-dark">$12,450</span>
<span className="text-xs text-primary font-bold">+$2,100 from average</span>
</div>
<div className="bg-white/50 backdrop-blur-md p-lg rounded-2xl flex flex-col gap-xs">
<span className="text-on-secondary-container/70 text-xs font-semibold">Break Even Point</span>
<span className="text-3xl font-bold text-text-dark">85 Units</span>
<span className="text-xs text-on-secondary-container/60">Estimated 4.2 days</span>
</div>
</div>
<div className="relative z-10 grid grid-cols-2 gap-2xl items-end">
<div className="flex flex-col gap-lg">
<div>
<div className="flex justify-between mb-2">
<label className="text-sm font-bold text-text-dark">Margin Adjustment</label>
<span className="text-sm font-bold text-primary" id="margin-val">22.5%</span>
</div>
<input className="w-full h-2 bg-on-secondary-container/20 rounded-lg appearance-none cursor-pointer slider-thumb" max="45" min="5" oninput="document.getElementById('margin-val').innerText = this.value + '%'" step="0.5" type="range" value="22.5"/>
</div>
<div>
<div className="flex justify-between mb-2">
<label className="text-sm font-bold text-text-dark">Target Volume</label>
<span className="text-sm font-bold text-primary" id="volume-val">120</span>
</div>
<input className="w-full h-2 bg-on-secondary-container/20 rounded-lg appearance-none cursor-pointer slider-thumb" max="500" min="20" oninput="document.getElementById('volume-val').innerText = this.value" type="range" value="120"/>
</div>
</div>
<div className="h-32 flex items-end justify-between px-4">
<div className="w-8 bg-primary/20 rounded-t-xl h-[40%] transition-all duration-500 hover:bg-primary/40"></div>
<div className="w-8 bg-primary/30 rounded-t-xl h-[55%] transition-all duration-500 hover:bg-primary/50"></div>
<div className="w-8 bg-primary/40 rounded-t-xl h-[70%] transition-all duration-500 hover:bg-primary/60"></div>
<div className="w-8 bg-primary/60 rounded-t-xl h-[85%] transition-all duration-500 hover:bg-primary/80"></div>
<div className="w-8 bg-primary rounded-t-xl h-[100%]"></div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 row-span-1 clay-card rounded-3xl p-xl flex flex-col justify-between border-accent-blue/30 bg-accent-blue/5">
<div className="flex justify-between items-start">
<div className="p-md bg-accent-blue/20 rounded-2xl text-accent-blue">
<span className="material-symbols-outlined text-primary" style={{fontVariationSettings: '\'FILL\' 1'}}>trending_up</span>
</div>
<span className="text-[10px] font-bold text-text-secondary uppercase">Projected Net Profit</span>
</div>
<div>
<p className="text-4xl font-bold text-text-dark">$3,248.50</p>
<p className="text-sm text-primary font-semibold mt-1">+12.3% vs last event</p>
</div>
</div>
<div className="col-span-12 lg:col-span-4 row-span-1 clay-card rounded-3xl p-xl flex flex-col justify-between border-accent-pink/30 bg-accent-pink/5">
<div className="flex justify-between items-start">
<div className="p-md bg-accent-pink/20 rounded-2xl text-accent-pink">
<span className="material-symbols-outlined text-primary" style={{fontVariationSettings: '\'FILL\' 1'}}>shopping_cart_checkout</span>
</div>
<span className="text-[10px] font-bold text-text-secondary uppercase">Tax Efficiency</span>
</div>
<div>
<p className="text-4xl font-bold text-text-dark">8.2%</p>
<p className="text-sm text-text-secondary mt-1">AI Optimized Structure</p>
</div>
</div>

<div className="col-span-12 lg:col-span-12 clay-card rounded-3xl p-2xl">
<div className="flex justify-between items-center mb-8">
<div>
<h3 className="font-headline-md text-headline-md">Operational Cost Matrix</h3>
<p className="text-sm text-text-secondary">Input all base expenses for precise AI calculations.</p>
</div>
<div className="bg-surface-container-high px-lg py-sm rounded-full">
<span className="text-sm font-bold text-primary">Total: $9,201.50</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-xl">
<div className="flex flex-col gap-sm">
<label className="flex items-center gap-xs text-xs font-bold text-text-secondary uppercase">
<span className="material-symbols-outlined text-sm">account_balance_wallet</span>
                            Event Capital
                        </label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-text-secondary">$</span>
<input className="clay-input w-full pl-10 pr-4 py-4 rounded-2xl font-headline-md" type="number" value="5000"/>
</div>
</div>
<div className="flex flex-col gap-sm">
<label className="flex items-center gap-xs text-xs font-bold text-text-secondary uppercase">
<span className="material-symbols-outlined text-sm">flight</span>
                            Transport
                        </label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-text-secondary">$</span>
<input className="clay-input w-full pl-10 pr-4 py-4 rounded-2xl font-headline-md" type="number" value="1200"/>
</div>
</div>
<div className="flex flex-col gap-sm">
<label className="flex items-center gap-xs text-xs font-bold text-text-secondary uppercase">
<span className="material-symbols-outlined text-sm">hotel</span>
                            Accommodations
                        </label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-text-secondary">$</span>
<input className="clay-input w-full pl-10 pr-4 py-4 rounded-2xl font-headline-md" type="number" value="850"/>
</div>
</div>
<div className="flex flex-col gap-sm">
<label className="flex items-center gap-xs text-xs font-bold text-text-secondary uppercase">
<span className="material-symbols-outlined text-sm">confirmation_number</span>
                            Tickets
                        </label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-text-secondary">$</span>
<input className="clay-input w-full pl-10 pr-4 py-4 rounded-2xl font-headline-md" type="number" value="450"/>
</div>
</div>
<div className="flex flex-col gap-sm">
<label className="flex items-center gap-xs text-xs font-bold text-text-secondary uppercase">
<span className="material-symbols-outlined text-sm">shopping_basket</span>
                            Misc. Goods
                        </label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-text-secondary">$</span>
<input className="clay-input w-full pl-10 pr-4 py-4 rounded-2xl font-headline-md" type="number" value="300"/>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-6 clay-card rounded-3xl overflow-hidden h-[300px] relative group">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A professional high-angle shot of a minimalist travel workspace including a laptop showing financial graphs, a leather passport holder, a sleek designer watch, and some international currency. The lighting is soft and airy with a claymorphic color palette of purples and creams, suggesting a modern digital nomad or jastip lifestyle." src="https://lh3.googleusercontent.com/aida-public/AB6AXuApnkjcvDM96hGZauwPuhuB2f8Xcp-hvIHHZKsNB8PTyFR54hmZnH75RHj02Gzoyy3aQCZVhNs9ZTmNh_NZF-CTO7fceX-SRjn4vE7Thx8NV_Vk16qr6qwaYzAKh4gYK9rrAofAVl8EXJdgrSt-6LkiRzO77fp9CmJKOSNrNJCtgNYXOXavK3NuYEcDnkKQDGB6qlX8GeNicLTGkoXa_gIEG_MZr9fNJHS2sYtTgbAJ7piNciq6qr935Q"/>
<div className="absolute bottom-6 left-6 z-20">
<p className="text-white/80 font-bold text-xs uppercase tracking-widest mb-1">Upcoming Route</p>
<h4 className="text-white text-2xl font-bold">Tokyo Summer Festival</h4>
<div className="flex gap-md mt-3">
<span className="px-md py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs">Aug 12 - 18</span>
<span className="px-md py-1 bg-secondary text-white rounded-full text-xs font-bold">High Profit Potential</span>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-6 clay-card rounded-3xl p-2xl">
<div className="flex justify-between items-center mb-6">
<h4 className="font-bold text-text-dark">Cost Distribution</h4>
<span className="material-symbols-outlined text-text-secondary">more_horiz</span>
</div>
<div className="flex items-center gap-2xl">
<div className="relative w-40 h-40 flex items-center justify-center">
<svg className="w-full h-full -rotate-90">
<circle cx="80" cy="80" fill="transparent" r="70" stroke="#f2ecf6" strokeWidth="20"></circle>
<circle cx="80" cy="80" fill="transparent" r="70" stroke="#674bb5" stroke-dasharray="440" stroke-dashoffset="110" strokeLinecap="round" strokeWidth="20"></circle>
</svg>
<div className="absolute flex flex-col items-center">
<span className="text-2xl font-extrabold text-text-dark">75%</span>
<span className="text-[10px] text-text-secondary uppercase">Operational</span>
</div>
</div>
<div className="flex-1 flex flex-col gap-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-sm">
<div className="w-3 h-3 rounded-full bg-primary"></div>
<span className="text-sm font-semibold">Fixed Costs</span>
</div>
<span className="text-sm font-bold">$6,900</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-sm">
<div className="w-3 h-3 rounded-full bg-accent-pink"></div>
<span className="text-sm font-semibold">Variable Costs</span>
</div>
<span className="text-sm font-bold">$2,301</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-sm">
<div className="w-3 h-3 rounded-full bg-accent-blue"></div>
<span className="text-sm font-semibold">Safety Buffer</span>
</div>
<span className="text-sm font-bold">$500</span>
</div>
<div className="mt-4 p-md bg-surface-container-low rounded-2xl text-[11px] text-text-secondary italic">
                            "AI suggests reducing ticket costs by $200 through early bird booking."
                        </div>
</div>
</div>
</div>
</div>
</main>



    </div>
  );
}
