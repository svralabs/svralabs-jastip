import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboardOverview() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="w-full sticky top-0 bg-surface z-50 flex items-center justify-between px-lg py-md border-b border-black">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary font-bold" data-icon="shopping_bag">shopping_bag</span>
<h1 className="font-headline-lg text-headline-lg font-black text-primary">JastipHub</h1>
</div>
<button className="neubrutalist-border p-2 rounded-lg active:scale-95 transition-all">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</header>
<main className="px-lg py-xl space-y-xl">

<section>
<h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">Dashboard Admin</h2>
<p className="font-body-md text-text-secondary">Overview performa jastip hari ini.</p>
</section>

<section className="grid grid-cols-2 gap-md">

<div className="neubrutalist-border bg-secondary-container p-lg flex flex-col justify-between min-h-[120px] rounded-lg">
<span className="font-label-caps text-label-caps uppercase text-on-secondary-container opacity-80">Order Masuk</span>
<div>
<div className="font-headline-lg text-headline-lg">38</div>
<div className="font-label-bold text-label-bold mt-1">Orders</div>
</div>
</div>

<div className="neubrutalist-border bg-accent-pink p-lg flex flex-col justify-between min-h-[120px] rounded-lg">
<span className="font-label-caps text-label-caps uppercase text-badge-pink-text opacity-80">Omset Event</span>
<div>
<div className="font-headline-md text-headline-md leading-tight">Rp 14.5M</div>
<div className="font-label-bold text-label-bold mt-1">Total IDR</div>
</div>
</div>

<div className="neubrutalist-border bg-accent-yellow p-lg flex flex-col justify-between min-h-[120px] rounded-lg">
<span className="font-label-caps text-label-caps uppercase text-badge-yellow-text opacity-80">Sover List</span>
<div>
<div className="font-headline-lg text-headline-lg">12</div>
<div className="font-label-bold text-label-bold mt-1">Pending Items</div>
</div>
</div>

<div className="neubrutalist-border bg-primary-container p-lg flex flex-col justify-between min-h-[120px] rounded-lg">
<span className="font-label-caps text-label-caps uppercase text-on-primary-container opacity-80">Lunas</span>
<div>
<div className="font-headline-lg text-headline-lg">24</div>
<div className="font-label-bold text-label-bold mt-1">Transaksi</div>
</div>
</div>
</section>

<section className="neubrutalist-border bg-surface rounded-xl p-lg">
<div className="flex items-center justify-between mb-lg">
<h3 className="font-headline-md text-headline-md">Top Customers</h3>
<span className="material-symbols-outlined text-accent-yellow" data-icon="stars" style={{fontVariationSettings: '\'FILL\' 1'}}>stars</span>
</div>
<div className="space-y-md">

<div className="flex items-center justify-between p-md neubrutalist-border bg-surface-container-low rounded-lg">
<div className="flex items-center gap-md">
<div className="w-10 h-10 neubrutalist-border rounded-full bg-cover bg-center" data-alt="Close up portrait of a stylish woman with a trendy minimalist haircut, captured in high-key professional studio lighting against a clean pastel green background, reflecting a modern and premium service brand identity." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAu4MTe-vi2D5Qqx71KBhPO0royHOctitxzdzoRz5MOXxCB1gqk5J8knlrHG4d2wS0JHWHFEu30wAoK6w-71x9MyxDMqwn7kJ2vtu6aIBNmCn3PCdn2Wqj5DKmkyxNgzqJxzsNfJ3trkj1L665_OUVheZVFdXh7do_nhtIQ6DP96Tbil8d8H5VzoH6H_m1c2u_7Sk-jGV8c_RzG8iJXemlvr16K0cZwmWv1As0Wy7mKoGzMsbLhSUoR\')'}}></div>
<div>
<div className="font-headline-md text-[1rem]">Anita S.</div>
<div className="font-body-sm text-text-secondary">12 Orders</div>
</div>
</div>
<span className="neubrutalist-border bg-badge-purple-bg text-badge-purple-text font-label-caps text-label-caps px-sm py-1 rounded-full">VIP</span>
</div>

<div className="flex items-center justify-between p-md neubrutalist-border bg-surface-container-low rounded-lg">
<div className="flex items-center gap-md">
<div className="w-10 h-10 neubrutalist-border rounded-full bg-cover bg-center" data-alt="Studio headshot of a friendly man wearing modern spectacles and a minimalist linen shirt, set against a soft yellow saturated background with crisp, even lighting and high clarity, projecting a trustworthy and professional user persona." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuC70Q-RGyFyRYZYuDyd7xJ6BL0ndi6_ene3uixHD-ZXcmf3CRf3f9N0gL9ENxpj4x9Aex1IwD2nsVPEV33AV7bhuLsqR4CxZ2aQIp-8poHUuQS87h14Efi4LPHRMOT9dbUQ5ATrfcCRET_WqpMTokg7_cW4xKod4ivb60BHoRfF-owNPKC7kZWpkEv6fpPCJXmlWphCW8cj9R0igMlVAiykwg6q4wkq9wGlfOqZLWBtBQ49ECUnKoMM\')'}}></div>
<div>
<div className="font-headline-md text-[1rem]">Budi R.</div>
<div className="font-body-sm text-text-secondary">8 Orders</div>
</div>
</div>
<span className="neubrutalist-border bg-badge-green-bg text-badge-green-text font-label-caps text-label-caps px-sm py-1 rounded-full">ACTIVE</span>
</div>
</div>
</section>

<section className="neubrutalist-border bg-surface rounded-xl p-lg" style={{transform: 'translate(0px, 0px)'}}>
<h3 className="font-headline-md text-headline-md mb-lg">Weekly Performance</h3>
<div className="h-40 flex items-end justify-around gap-2 px-sm"><div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-primary border border-black rounded-t-sm transition-all hover:scale-x-105" style={{height: '40%'}}></div>
<span className="font-label-caps text-[10px]">MON</span>
</div>
<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-secondary border border-black rounded-t-sm transition-all hover:scale-x-105" style={{height: '70%'}}></div>
<span className="font-label-caps text-[10px]">TUE</span>
</div>
<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-accent-yellow border border-black rounded-t-sm transition-all hover:scale-x-105" style={{height: '55%'}}></div>
<span className="font-label-caps text-[10px]">WED</span>
</div>
<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-primary border border-black rounded-t-sm transition-all hover:scale-x-105" style={{height: '90%'}}></div>
<span className="font-label-caps text-[10px]">THU</span>
</div>
<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-secondary border border-black rounded-t-sm transition-all hover:scale-x-105" style={{height: '65%'}}></div>
<span className="font-label-caps text-[10px]">FRI</span>
</div>
<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-accent-yellow border border-black rounded-t-sm transition-all hover:scale-x-105" style={{height: '80%'}}></div>
<span className="font-label-caps text-[10px]">SAT</span>
</div>
<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-primary border border-black rounded-t-sm transition-all hover:scale-x-105" style={{height: '45%'}}></div>
<span className="font-label-caps text-[10px]">SUN</span>
</div></div>
</section>

<section className="neubrutalist-border bg-surface-container-highest rounded-xl p-lg" style={{transform: 'translate(0px, 0px)'}}>
<h3 className="font-headline-md text-headline-md mb-md">Quick Actions</h3>
<div className="grid grid-cols-2 gap-sm">
<button className="bg-surface neubrutalist-border p-md rounded-lg flex items-center gap-2 hover:bg-surface-container active:translate-x-0.5 active:translate-y-0.5 transition-all">
<span className="material-symbols-outlined text-primary" data-icon="add_box">add_box</span>
<span className="font-label-bold">New Item</span>
</button>
<button className="bg-surface neubrutalist-border p-md rounded-lg flex items-center gap-2 hover:bg-surface-container active:translate-x-0.5 active:translate-y-0.5 transition-all">
<span className="material-symbols-outlined text-secondary" data-icon="print">print</span>
<span className="font-label-bold">Labels</span>
</button>
</div>
</section>
</main>

<nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center px-lg py-sm bg-surface mb-4 mx-auto w-[90%] max-w-md border border-black rounded-full neubrutalist-shadow">

<div className="bg-primary-container text-on-primary-container rounded-full p-2 border border-black transition-all hover:scale-110 active:scale-95">
<span className="material-symbols-outlined block" data-icon="home" style={{fontVariationSettings: '\'FILL\' 1'}}>home</span>
</div>

<div className="text-on-surface-variant p-2 transition-all hover:scale-110 active:scale-95">
<span className="material-symbols-outlined block" data-icon="calendar_today">calendar_today</span>
</div>

<div className="text-on-surface-variant p-2 transition-all hover:scale-110 active:scale-95">
<span className="material-symbols-outlined block" data-icon="receipt_long">receipt_long</span>
</div>

<div className="text-on-surface-variant p-2 transition-all hover:scale-110 active:scale-95">
<span className="material-symbols-outlined block" data-icon="person">person</span>
</div>
</nav>




    </div>
  );
}
