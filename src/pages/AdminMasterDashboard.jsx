import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminMasterDashboard() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<aside className="h-screen w-64 fixed left-0 top-0 rounded-r-[32px] bg-surface-container-low dark:bg-inverse-surface shadow-[10px_0_30px_rgba(0,0,0,0.04)] dark:shadow-none flex flex-col h-full py-xl z-50">
<div className="font-h1 text-h1 font-bold text-primary dark:text-primary-fixed-dim px-6 py-8">
            Jastip Master
        </div>
<nav className="flex-1 space-y-sm px-md overflow-y-auto scroll-hide">

<a className="flex items-center gap-md mx-md my-sm p-lg bg-primary-container text-on-primary-container rounded-[24px] shadow-sm active:scale-[0.98] transition-all" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-body-md text-body-md">Dashboard</span>
</a>
<a className="flex items-center gap-md mx-md my-sm p-lg text-on-surface-variant hover:bg-surface-container-high rounded-[24px] active:scale-[0.98] transition-all" href="#">
<span className="material-symbols-outlined">shopping_bag</span>
<span className="font-body-md text-body-md">Orders</span>
</a>
<a className="flex items-center gap-md mx-md my-sm p-lg text-on-surface-variant hover:bg-surface-container-high rounded-[24px] active:scale-[0.98] transition-all" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-body-md text-body-md">Shoppers</span>
</a>
<a className="flex items-center gap-md mx-md my-sm p-lg text-on-surface-variant hover:bg-surface-container-high rounded-[24px] active:scale-[0.98] transition-all" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-body-md text-body-md">Payments</span>
</a>
<a className="flex items-center gap-md mx-md my-sm p-lg text-on-surface-variant hover:bg-surface-container-high rounded-[24px] active:scale-[0.98] transition-all" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-body-md text-body-md">Settings</span>
</a>
<a className="flex items-center gap-md mx-md my-sm p-lg text-on-surface-variant hover:bg-surface-container-high rounded-[24px] active:scale-[0.98] transition-all" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-body-md text-body-md">Help</span>
</a>
</nav>
<div className="px-md mt-auto pt-xl">
<button className="w-full flex items-center gap-md mx-md my-sm p-lg text-on-surface-variant hover:bg-surface-container-high rounded-[24px] transition-all">
<span className="material-symbols-outlined">logout</span>
<span className="font-body-md text-body-md">Logout</span>
</button>
</div>
</aside>

<header className="docked full-width top-0 sticky ml-64 bg-background/80 backdrop-blur-md dark:bg-background/80 z-40">
<div className="flex justify-between items-center px-2xl py-lg w-full max-w-[1600px] mx-auto">
<div className="flex items-center gap-2xl">
<h2 className="font-headline-md text-headline-md font-bold text-primary">Jastip Admin Hub</h2>
<div className="relative w-96 focus-within:ring-2 focus-within:ring-primary/20 rounded-full transition-all">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-12 pr-4 py-3 bg-surface-container-high border-none rounded-full font-body-md focus:ring-0" placeholder="Search orders, shoppers, or events..." type="text"/>
</div>
</div>
<div className="flex items-center gap-lg">
<button className="p-3 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-3 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">dark_mode</span>
</button>
<button className="p-3 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">apps</span>
</button>
<div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden ml-md border-2 border-primary-container">
<img className="w-full h-full object-cover" data-alt="A professional headshot of a female administrator with a friendly expression, wearing a clean modern blazer. She is set against a soft, out-of-focus lilac and grey office background, captured in high-quality portrait lighting that emphasizes her approachable yet authoritative persona in the Jastip ecosystem." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbwUAcPly75C35KBqpEBMXtcM5Mu3qB8J5wdol8euxQmUmyCrlZOlJl7cBxwTkVC_4SmpXWGBqhJkZPVNuBdhOI-m60MtVbVceEjVkzJm-axD-tjhyvt48tQ0SH0ca5ZyK3ohS6ZpfRqhzhS5edOrL5a7h0EzBWbjBNoXctc34pcXK2WWc3lSXLAfhV1UW9CmZY7zb04e-AeoXlbFsxfElZTmlvXpQgRcHyFvOUy2GmSSjORJrEgY9oA"/>
</div>
</div>
</div>
</header>

<main className="ml-64 p-2xl">
<div className="max-w-[1600px] mx-auto">

<div className="mb-2xl flex justify-between items-end">
<div>
<h1 className="font-h1 text-h1 text-text-primary mb-xs">Welcome back, Admin!</h1>
<p className="font-body-md text-text-secondary">Here's what's happening with Jastip platform today.</p>
</div>
<button className="px-2xl py-3 bg-primary text-on-primary rounded-full font-label-pill shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-sm">
<span className="material-symbols-outlined">add_circle</span>
                    Create Report
                </button>
</div>

<div className="bento-grid">

<div className="clay-card clay-card-purple col-span-2 p-2xl text-white flex flex-col justify-between h-[240px]">
<div className="flex justify-between items-start">
<div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
<span className="material-symbols-outlined text-white" style={{fontVariationSettings: '\'FILL\' 1'}}>shopping_cart</span>
</div>
<span className="font-label-pill bg-white/20 px-3 py-1 rounded-full">+12% vs last week</span>
</div>
<div>
<h3 className="font-h2 text-h2 mb-1">Active Orders</h3>
<p className="text-white/80 font-body-md mb-4">Total orders currently being processed</p>
<span className="text-4xl font-bold">1,284</span>
</div>
</div>

<div className="clay-card clay-card-yellow p-2xl flex flex-col justify-between h-[240px]">
<div className="flex justify-between items-start">
<div className="p-3 bg-black/10 rounded-2xl">
<span className="material-symbols-outlined text-on-secondary-container" style={{fontVariationSettings: '\'FILL\' 1'}}>workspace_premium</span>
</div>
</div>
<div>
<h3 className="font-h2 text-h2 text-on-secondary-container mb-1">Top Shoppers</h3>
<p className="text-on-secondary-container/70 font-body-md mb-4">Elite tier partners</p>
<span className="text-4xl font-bold text-on-secondary-container">86</span>
</div>
</div>

<div className="clay-card clay-card-blue p-2xl flex flex-col justify-between h-[240px]">
<div className="flex justify-between items-start">
<div className="p-3 bg-white/40 rounded-2xl">
<span className="material-symbols-outlined text-primary" style={{fontVariationSettings: '\'FILL\' 1'}}>explore</span>
</div>
</div>
<div>
<h3 className="font-h2 text-h2 text-primary mb-1">Active Events</h3>
<p className="text-primary/70 font-body-md mb-4">Ongoing trip campaigns</p>
<span className="text-4xl font-bold text-primary">12</span>
</div>
</div>

<div className="clay-card col-span-3 p-2xl bg-surface">
<div className="flex justify-between items-center mb-xl">
<h3 className="font-h2 text-h2 text-text-primary">Recent Transactions</h3>
<button className="text-primary font-label-pill hover:underline">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="text-left border-b border-surface-variant">
<th className="pb-lg font-label-pill text-text-secondary">Order ID</th>
<th className="pb-lg font-label-pill text-text-secondary">Customer</th>
<th className="pb-lg font-label-pill text-text-secondary">Event</th>
<th className="pb-lg font-label-pill text-text-secondary">Status</th>
<th className="pb-lg font-label-pill text-text-secondary text-right">Amount</th>
</tr>
</thead>
<tbody className="font-body-md">
<tr className="border-b border-surface-variant/50 hover:bg-surface-container-low transition-colors group">
<td className="py-lg text-primary font-semibold">#JP-2938</td>
<td className="py-lg">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-accent-blue/30 flex items-center justify-center text-xs font-bold text-primary">AR</div>
<span>Anita Rahayu</span>
</div>
</td>
<td className="py-lg text-text-secondary">Bangkok Sale</td>
<td className="py-lg">
<span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-semibold">Order Masuk</span>
</td>
<td className="py-lg text-right font-semibold">Rp 1,250,000</td>
</tr>
<tr className="border-b border-surface-variant/50 hover:bg-surface-container-low transition-colors group">
<td className="py-lg text-primary font-semibold">#JP-2937</td>
<td className="py-lg">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-secondary-container/30 flex items-center justify-center text-xs font-bold text-secondary">BS</div>
<span>Budi Santoso</span>
</div>
</td>
<td className="py-lg text-text-secondary">Tokyo Disney Trip</td>
<td className="py-lg">
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-semibold">Diproses</span>
</td>
<td className="py-lg text-right font-semibold">Rp 4,800,000</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-lg text-primary font-semibold">#JP-2936</td>
<td className="py-lg">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-accent-pink/30 flex items-center justify-center text-xs font-bold text-on-primary-fixed-variant">CL</div>
<span>Cindy Lestari</span>
</div>
</td>
<td className="py-lg text-text-secondary">Seoul Summer</td>
<td className="py-lg">
<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Lunas</span>
</td>
<td className="py-lg text-right font-semibold">Rp 950,000</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="clay-card p-2xl bg-surface flex flex-col">
<h3 className="font-h2 text-h2 text-text-primary mb-xl">Event Status</h3>
<div className="space-y-lg">
<div className="flex items-center justify-between p-lg bg-surface-container-low rounded-[24px]">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-2xl overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A vibrant landscape photo of Bangkok at night with neon lights and bustling street markets, styled as a soft-focus background for a travel UI card." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCldKGpxqEBopjjnLwAGUgOySWJTfyito50PVYxMjVToaI23abUj71IT7dlpof5ZsQ-MpNa5hwV8ZWkLxqgnATmGVY-UwV7OXtg-uxvvEJUykF7oltMO8Kiajjs07blZttOk0C6gGafhCwfkKm0HaeX_HnzQr1UPa_vPK6AG6LIuNGzP0KL3Mqa5ZnniSQQWmr_cdHEzUvxz4FsC2zRTyR0O2npR_R688E-gc9tDsxgOh4zbKXtEqPwLw"/>
</div>
<span className="font-body-md font-semibold">Bangkok Sale</span>
</div>
<div className="clay-switch active" onclick="this.classList.toggle('active')"></div>
</div>
<div className="flex items-center justify-between p-lg bg-surface-container-low rounded-[24px]">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-2xl overflow-hidden">
<img className="w-full h-full object-cover" data-alt="The iconic Tokyo Disney Resort castle with soft, pastel-colored skies and a magical atmosphere, captured in a clean and modern photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxP67M7dTB9Wy76F35TZctI4j7CuHsG8TClrvwAhcjk4A6052DQmOM0UJRDdnPocEFfCa9TBG3IMzxi7T1wQoVGtXoxsJIlNSfn1cTNCTxv7K2RWPfIoJ6aY_0SHjGANLYt1hp57kOGoDzjDw3SGBaPczApgSpQ5p936kKFOmLxNEUiGTN0dXaxSu2uCgYI9bvLACT9AFt19SlBwy1kwmeDx_fq-hEHFvP6cFULp_VcxzsIi4QZjfJPw"/>
</div>
<span className="font-body-md font-semibold">Tokyo Disney</span>
</div>
<div className="clay-switch active" onclick="this.classList.toggle('active')"></div>
</div>
<div className="flex items-center justify-between p-lg bg-surface-container-low rounded-[24px]">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-2xl overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A minimal and stylish view of Seoul's modern architecture under a bright summer sky, representing a premium travel destination for a shopping app." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe-7pYN4TcreMST89ovYnHSVv2sirTpWzocbERiDDZBKNp4PuDgyYaaEK-ucXODkrVbko8PyKO7x-prlbP4qgXyaHgq9Em9slgZ7CaKEWG_mdMxTDRWIpQo7nOeQSgyaomPW6r45y-btGF1LmIOr8aOekyNB02MZAGy56LvYj4L7FvyxaqoAZg1ckG0QQIrHtxR-k-lOI3_K1ZUj-ueCWYwF2wmCfg_1vtnVO6frbJhWO2rprL9aggKw"/>
</div>
<span className="font-body-md font-semibold">Seoul Summer</span>
</div>
<div className="clay-switch" onclick="this.classList.toggle('active')"></div>
</div>
<button className="w-full mt-auto py-3 border-2 border-dashed border-outline-variant text-outline rounded-[24px] font-label-pill hover:bg-surface-container-high transition-colors">
                            + Add New Event
                        </button>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-md mt-2xl">
<div className="clay-card p-xl flex items-center gap-xl">
<div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
<span className="material-symbols-outlined text-primary">trending_up</span>
</div>
<div>
<p className="font-caption-sm text-text-secondary">Monthly Revenue</p>
<p className="font-h2 text-h2 text-text-primary">Rp 42.8M</p>
</div>
</div>
<div className="clay-card p-xl flex items-center gap-xl">
<div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary">verified_user</span>
</div>
<div>
<p className="font-caption-sm text-text-secondary">Verified Shoppers</p>
<p className="font-h2 text-h2 text-text-primary">12 New This Week</p>
</div>
</div>
<div className="clay-card p-xl flex items-center gap-xl overflow-hidden relative">
<div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center relative z-10">
<span className="material-symbols-outlined text-on-primary-container">support_agent</span>
</div>
<div className="relative z-10">
<p className="font-caption-sm text-text-secondary">Support Queue</p>
<p className="font-h2 text-h2 text-text-primary">3 Waiting</p>
</div>

<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
</div>
</div>
</div>
</main>



    </div>
  );
}
