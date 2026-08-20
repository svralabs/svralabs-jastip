import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CustomerHomeJastiphub() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="w-full sticky top-0 bg-surface z-50 border-b border-border-black flex items-center justify-between px-lg py-md h-16">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary" data-icon="shopping_bag">shopping_bag</span>
<h1 className="font-headline-lg text-headline-lg font-black text-primary tracking-tight">JastipHub</h1>
</div>
<button className="w-10 h-10 border border-border-black rounded-lg flex items-center justify-center hover:bg-surface-container transition-colors active:translate-x-0.5 active:translate-y-0.5">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</header>
<main className="px-lg py-lg space-y-2xl">

<section className="relative bg-accent-yellow border border-border-black rounded-2xl p-lg overflow-hidden">
<div className="flex flex-col relative z-10 space-y-md">
<div className="flex justify-between items-start">
<span className="bg-border-black text-white px-md py-xs rounded-full font-label-caps text-label-caps flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]" data-icon="timer" style={{fontVariationSettings: '\'FILL\' 1'}}>timer</span>
                        CLOSES IN 02D : 14H : 30M
                    </span>
</div>
<div className="space-y-xs">
<h2 className="font-headline-lg text-headline-lg text-border-black uppercase italic">Bangkok Snacks &amp; Fashion</h2>
<p className="font-body-md text-border-black/80 font-bold">15 - 20 Aug 2026</p>
</div>
<button className="bg-border-black text-white px-lg py-sm rounded-lg font-label-bold flex items-center justify-center self-start gap-sm transition-transform active:scale-95">
                    Explore Trip
                    <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>

<div className="absolute -right-8 -bottom-8 opacity-20 transform -rotate-12 pointer-events-none">
<span className="material-symbols-outlined text-[160px]" data-icon="flight_takeoff">flight_takeoff</span>
</div>
</section>

<nav className="flex overflow-x-auto gap-sm hide-scrollbar -mx-lg px-lg">
<button className="whitespace-nowrap px-lg py-sm bg-border-black text-white border border-border-black rounded-full font-label-bold transition-all">Semua</button>
<button className="whitespace-nowrap px-lg py-sm bg-surface text-border-black border border-border-black rounded-full font-label-bold hover:bg-surface-container transition-all">Makanan</button>
<button className="whitespace-nowrap px-lg py-sm bg-surface text-border-black border border-border-black rounded-full font-label-bold hover:bg-surface-container transition-all">Fashion</button>
<button className="whitespace-nowrap px-lg py-sm bg-surface text-border-black border border-border-black rounded-full font-label-bold hover:bg-surface-container transition-all">Skincare</button>
<button className="whitespace-nowrap px-lg py-sm bg-surface text-border-black border border-border-black rounded-full font-label-bold hover:bg-surface-container transition-all">Gadgets</button>
</nav>

<div className="grid grid-cols-2 gap-lg">

<div className="bg-surface border border-border-black rounded-xl overflow-hidden flex flex-col transition-transform active:scale-[0.98]">
<div className="h-40 w-full relative bg-surface-container">
<div className="w-full h-full bg-cover bg-center" data-alt="Close up high-quality photograph of a famous Thai Milk Bun with fluffy powdered sugar topping, soft lighting, vibrant pastel aesthetic, crisp studio photography, jastip app marketing style." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAF9EA8Jf8j-RFegKXs7noay6Ec8aajI1kL0yKNMMwnf-jEY_U3eyRV5QhU4TUCryPQdVWWOdK0vgltseY1plG_N5gd-BOoKeTeStvnyKFXuDxVknj2ch74k6PuBwzfXDLvOVBL49zNwR37fhy4nfQUzIV8C-n2iu6LayO8QFoh2UuanBwiugddTEQvq9NwvbNJnC8E6U1C0j-DPr4YXGpEeAcZqpb5Og0ABFinnsBv51F6W92Uu88I\')'}}></div>

</div>
<div className="p-md flex flex-col gap-sm flex-1">
<h3 className="font-headline-md text-body-md font-bold leading-tight line-clamp-2">Milk Bun After You</h3>
<div className="space-y-xs">
<p className="font-headline-md text-border-black">Rp 85.000</p>
<span className="inline-block bg-[#F472B6] text-white px-sm py-xs border border-border-black rounded font-label-bold text-[10px]">
                            + Fee Rp 20.000
                        </span>
</div>
<button className="mt-auto w-full border border-border-black bg-primary-container text-border-black font-label-bold py-xs rounded-lg hover:bg-primary transition-colors active:translate-x-0.5 active:translate-y-0.5">+ Tambah</button>
</div>
</div>

<div className="bg-surface border border-border-black rounded-xl overflow-hidden flex flex-col transition-transform active:scale-[0.98]">
<div className="h-40 w-full relative bg-surface-container">
<div className="w-full h-full bg-cover bg-center" data-alt="A colorful Care Bears plush keychain with detailed fur texture and vibrant colors, hanging in a trendy urban setting, high-saturation pastel Neubrutalist aesthetic, 4k crisp detail." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDZKs8tfpyF1JL9lsHVqLcFes4H_1F_S1i1pfJwgaRt3oO2vzlgNb40p54v4U6ysAybrNuxQDldNCPaEd1WaaQ8rzykW36H5KMQPkelC5LIqfRFL28XIjt8_QVz6k83srucJztsP6Aw2GxQlhaSl1KxwGINhvbYB4vByKLBHVNDFoucPDm8oUGdB9KRSiXrbiGbU2VWRA5yjg4y4PbXqN5uSqFEKl37g4i6GR4qXfI_KBBG5vFvj3vc\')'}}></div>

</div>
<div className="p-md flex flex-col gap-sm flex-1">
<h3 className="font-headline-md text-body-md font-bold leading-tight line-clamp-2">Care Bears Keychain</h3>
<div className="space-y-xs">
<p className="font-headline-md text-border-black">Rp 150.000</p>
<span className="inline-block bg-[#4ADE80] text-border-black px-sm py-xs border border-border-black rounded font-label-bold text-[10px]">
                            + Fee Rp 35.000
                        </span>
</div>
<button className="mt-auto w-full border border-border-black bg-primary-container text-border-black font-label-bold py-xs rounded-lg hover:bg-primary transition-colors active:translate-x-0.5 active:translate-y-0.5">+ Tambah</button>
</div>
</div>

<div className="bg-surface border border-border-black rounded-xl overflow-hidden flex flex-col transition-transform active:scale-[0.98] col-span-2"><div className="flex h-44">
<div className="w-1/2 relative bg-surface-container-high border-r border-border-black">
<div className="w-full h-full bg-cover bg-center" data-alt="A luxury Goyard Mini Anjou handbag in a classic green pattern, presented on a minimalist platform, high contrast lighting, premium aesthetic, 1px black border details, vibrant neon accents." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBejTkh9vJF6Jen2wLsJF_LSOCKz-H4OAY3zPS0wBZglc8Ynkeus36A9s8bYghLoqlHDsU0YyT1WlvAC63UBDIjjvXKZV8ClrsFrfrk70nbSrOUShQSPR6kb_WjjFtUBOfARmNbLSxR6BfOpE_gSSi64whh8ozxU1F2XAiZH7zPN4_qCmHOht-7_9vn_D0OHnjIZBsbcQm8FRfF2nq30hu9n4VhVQr08-m94GLVI_dLsJBnxGHEBhQj\')'}}></div>
</div>
<div className="w-1/2 p-lg flex flex-col justify-between">
<div className="space-y-sm">
<h3 className="font-headline-md text-headline-md font-bold leading-tight">Goyard Mini Anjou</h3>
<div className="space-y-xs">
<p className="font-headline-md text-headline-md text-border-black">Rp 25.000.000</p>
<div className="flex">
<span className="inline-block bg-[#C084FC] text-white px-md py-xs border border-border-black rounded font-label-bold text-[12px] text-center">
                                + Fee Rp 2.500.000
                            </span>
</div>
</div>
</div>
<button className="w-full border border-border-black bg-primary-container text-border-black font-label-bold py-sm rounded-lg hover:bg-primary transition-colors active:translate-x-0.5 active:translate-y-0.5 flex items-center justify-center">+ Tambah</button>
</div>
</div></div>
</div>
</main>

<nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-surface border border-border-black rounded-full h-16 flex items-center justify-around px-lg z-50">
<button className="flex items-center justify-center p-2 rounded-full bg-primary-container border border-border-black transition-all hover:scale-110 active:scale-95">
<span className="material-symbols-outlined text-border-black" data-icon="home" style={{fontVariationSettings: '\'FILL\' 1'}}>home</span>
</button>
<button className="flex items-center justify-center p-2 text-outline transition-all hover:scale-110 active:scale-95">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
</button>
<button className="flex items-center justify-center p-2 text-outline transition-all hover:scale-110 active:scale-95">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
</button>
<button className="flex items-center justify-center p-2 text-outline transition-all hover:scale-110 active:scale-95">
<span className="material-symbols-outlined" data-icon="person">person</span>
</button>
</nav>




    </div>
  );
}
