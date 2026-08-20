import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function KalenderEventJastip() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-lg py-md dark:bg-surface-dim border-b border-black bg-white">
<div className="flex items-center gap-sm">
<button className="material-symbols-outlined p-sm hover:bg-accent-yellow transition-colors active:translate-y-px">menu</button>
<h1 className="font-headline-lg text-headline-lg text-primary dark:text-primary-fixed-dim uppercase tracking-tighter">JastipBuddy</h1>
</div>
<button className="material-symbols-outlined p-sm hover:bg-accent-yellow transition-colors active:translate-y-px">shopping_bag</button>
</header>
<main className="pt-24 pb-32 px-lg max-w-md mx-auto min-h-screen">

<div className="mb-xl">
<h2 className="font-headline-lg text-headline-lg leading-tight tracking-tight mb-2">Kalender Event Jastip</h2>
<p className="font-body-md text-on-surface-variant">Pantau jadwal jastip favoritmu agar tidak ketinggalan!</p>
</div>

<div className="bg-secondary-fixed p-md border border-black rounded-xl flex items-center justify-between mb-2xl">
<button className="material-symbols-outlined border border-black rounded-lg p-xs bg-white active:scale-95 transition-transform">chevron_left</button>
<span className="font-headline-md text-headline-md">September 2026</span>
<button className="material-symbols-outlined border border-black rounded-lg p-xs bg-white active:scale-95 transition-transform">chevron_right</button>
</div>

<div className="space-y-xl">

<div className="bg-primary-container border border-black rounded-2xl p-lg flex flex-col gap-md relative overflow-hidden group">

<div className="flex justify-between items-start">
<div className="flex flex-col">
<span className="bg-white border border-black text-label-bold font-label-bold px-sm py-xs rounded-full inline-block w-fit mb-sm">Mendatang</span>
<h3 className="font-headline-md text-headline-md leading-tight">Jastip Tokyo Pop Culture</h3>
</div>
<div className="p-sm bg-white border border-black rounded-xl">
<span className="material-symbols-outlined">star</span>
</div>
</div>
<div className="flex items-center gap-sm font-label-bold text-label-bold">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    1 - 5 Sept 2026
                </div>
<div className="flex items-center justify-between mt-sm border-t border-black/10 pt-md">
<div className="flex flex-col">
<span className="text-label-bold font-label-bold">Ingatkan Saya</span>
<span className="text-body-sm font-body-sm opacity-70">Notifikasi 1 hari sebelum</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value="" />
<div className="w-11 h-6 bg-white border border-black peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-accent-yellow after:border-black after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-on-primary-container"></div>
</label>
</div>
</div>

<div className="bg-secondary-container border border-black rounded-2xl p-lg flex flex-col gap-md relative overflow-hidden group">

<div className="flex justify-between items-start">
<div className="flex flex-col">
<span className="bg-accent-yellow border border-black text-label-bold font-label-bold px-sm py-xs rounded-full inline-block w-fit mb-sm">Buka Pre-Order</span>
<h3 className="font-headline-md text-headline-md leading-tight">Jastip Seoul Beauty Week</h3>
</div>
<div className="p-sm bg-white border border-black rounded-xl">
<span className="material-symbols-outlined">favorite</span>
</div>
</div>
<div className="flex items-center gap-sm font-label-bold text-label-bold">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    12 - 18 Sept 2026
                </div>
<button className="w-full bg-white border border-black py-md px-lg font-label-bold text-label-bold rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-sm hover:bg-accent-yellow">
                    Lihat Produk Pre-Order
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>

<div className="bg-tertiary-container border border-black rounded-2xl p-lg flex flex-col gap-md relative overflow-hidden group" style={{transform: 'translate(0px, 0px)', boxShadow: 'rgb(15, 23, 42) 2px 2px 0px 0px'}}>

<div className="flex justify-between items-start">
<div className="flex flex-col">
<span className="bg-white border border-black text-label-bold font-label-bold px-sm py-xs rounded-full inline-block w-fit mb-sm">Segera Hadir</span>
<h3 className="font-headline-md text-headline-md leading-tight">Jastip Bandung Market</h3>
</div>
<div className="p-sm bg-white border border-black rounded-xl">
<span className="material-symbols-outlined">notification_add</span>
</div>
</div>
<div className="flex items-center gap-sm font-label-bold text-label-bold">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    25 - 27 Sept 2026
                </div>
</div>
</div>

<div className="mt-2xl py-xl flex flex-col items-center justify-center text-center gap-sm">
<div className="w-24 h-24 bg-surface-container-highest border border-black rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-[40px] text-primary">event_note</span>
</div>
<p className="font-label-bold text-label-bold max-w-[200px] text-on-surface-variant uppercase tracking-widest">Siapkan wishlist belanjaanmu!</p>
</div>
</main>

<nav className="fixed bottom-lg left-0 right-0 z-50 flex justify-around items-center px-lg py-sm bg-surface-container-lowest dark:bg-surface-container-highest docked rounded-full mx-auto w-[90%] max-w-md border border-black">

<button className="text-on-surface-variant p-md hover:bg-surface-variant active:scale-95 transition-transform flex flex-col items-center">
<span className="material-symbols-outlined">home</span>
</button>

<button className="bg-primary-container text-on-primary-container rounded-full p-md border border-black active:scale-95 transition-transform flex flex-col items-center">
<span className="material-symbols-outlined" style={{fontVariationSettings: '&quot'}}>calendar_month</span>
</button>

<button className="text-on-surface-variant p-md hover:bg-surface-variant active:scale-95 transition-transform flex flex-col items-center">
<span className="material-symbols-outlined">list_alt</span>
</button>

<button className="text-on-surface-variant p-md hover:bg-surface-variant active:scale-95 transition-transform flex flex-col items-center">
<span className="material-symbols-outlined">person</span>
</button>
</nav>






    </div>
  );
}
