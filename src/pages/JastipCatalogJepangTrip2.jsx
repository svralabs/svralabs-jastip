import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function JastipCatalogJepangTrip2() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
{/*  Top AppBar  */}
<header className="bg-primary dark:bg-primary text-on-primary dark:text-on-primary w-full top-0 sticky border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center px-margin py-sm z-50">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-on-primary">shopping_bag</span>
<h1 className="font-headline-main-mobile text-[24px] uppercase tracking-tighter text-on-primary">Jastip Catalog</h1>
</div>
<button className="active:translate-y-0.5 active:shadow-none transition-all hover:bg-accent-pink p-2 rounded-full">
<span className="material-symbols-outlined text-on-primary">search</span>
</button>
</header>
<main className="px-margin pt-lg">
{/*  Event Banner Section  */}
<section className="bg-primary-container border-2 border-black block-shadow rounded-xl p-md mb-lg">
<div className="flex flex-col">
<span className="font-label-bold text-label-bold text-on-primary-container uppercase tracking-widest mb-xs">Active Event</span>
<h2 className="font-headline-main-mobile text-headline-main-mobile leading-none mb-sm">Event Jepang Trip</h2>
<div className="flex items-center gap-xs text-on-primary-container">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
<p className="font-label-bold text-label-bold">12–18 Jul 2026</p>
</div>
</div>
</section>
{/*  Search Bar  */}
<div className="mb-lg">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-4 text-on-surface-variant">search</span>
<input className="w-full bg-white border-2 border-black rounded-xl py-3 pl-12 pr-4 font-body-md block-shadow focus:outline-none focus:ring-2 focus:ring-accent-orange" placeholder="Cari oleh-oleh idamanmu..." type="text"/>
</div>
</div>
{/*  Category Filters  */}
<section className="mb-lg -mx-margin px-margin overflow-x-auto no-scrollbar flex gap-sm">
<button className="bg-secondary-container text-on-secondary-container border-2 border-black rounded-full px-6 py-2 font-label-bold text-label-bold block-shadow active-shadow-press whitespace-nowrap">Semua</button>
<button className="bg-white border-2 border-black rounded-full px-6 py-2 font-label-bold text-label-bold block-shadow active-shadow-press whitespace-nowrap">Skincare</button>
<button className="bg-white border-2 border-black rounded-full px-6 py-2 font-label-bold text-label-bold block-shadow active-shadow-press whitespace-nowrap">Snack</button>
<button className="bg-white border-2 border-black rounded-full px-6 py-2 font-label-bold text-label-bold block-shadow active-shadow-press whitespace-nowrap">Fashion</button>
<button className="bg-white border-2 border-black rounded-full px-6 py-2 font-label-bold text-label-bold block-shadow active-shadow-press whitespace-nowrap">Mainan</button>
</section>
{/*  Product Grid  */}
<section className="grid grid-cols-2 gap-gutter">
{/*  Product Card 1  */}
<div className="bg-white border-2 border-black rounded-xl overflow-hidden block-shadow flex flex-col">
<div className="relative h-40 w-full border-b-2 border-black overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close-up of a high-end Japanese Hada Labo Gokujyun skincare bottle set against a vibrant, energetic background of abstract cyan and yellow shapes. Professional studio lighting highlights the translucent texture of the packaging. The overall aesthetic is clean, modern, and high-contrast, fitting a premium jastip catalog vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8Ug4rAG5GumUXr88U3gLZVTMl5i6ag1zAw6NTmryYLqmWnq0iH9sqICB5ObR1TPr7bAA6YPmJtXfTI29OBDSg84YczveAt22rdCKF7mEY68AwMvQQnei03Nibo0voFchrRQy7mcydg--pbPCCdHGqHwi5E-Yqo_1oZlfLvVlE77oqJQuozoO_gYNrxsu2miZ60Xp__bkbwHx833Z8T5TFF1699xgIBgfmvr7h_Fk8G6buaDnVI1kk"/>
<div className="absolute top-2 left-2 bg-accent-pink border-2 border-black px-2 py-0.5 rounded-full font-label-bold text-[10px] uppercase">Fee 10%</div>
</div>
<div className="p-sm flex flex-col flex-grow">
<h3 className="font-label-bold text-label-bold text-on-surface line-clamp-2 h-10 mb-xs">Hada Labo Gokujyun Premium</h3>
<p className="font-headline-main-mobile text-[16px] text-primary mb-md">Rp 245.000</p>
<button className="mt-auto w-full bg-secondary-container border-2 border-black py-2 rounded-lg font-label-bold text-label-bold flex items-center justify-center gap-xs active-shadow-press block-shadow">
<span className="material-symbols-outlined text-[18px]">add</span>
                        Titip
                    </button>
</div>
</div>
{/*  Product Card 2 (FAILED STATE)  */}
<div className="bg-white border-2 border-black rounded-xl overflow-hidden block-shadow flex flex-col">
<div className="relative h-40 w-full border-b-2 border-black bg-surface-container flex flex-col items-center justify-center text-on-surface-variant p-4 text-center">
<span className="material-symbols-outlined text-[48px] mb-xs">hide_image</span>
<p className="font-label-bold text-[10px] uppercase opacity-60">Product Image Missing</p>
<div className="absolute top-2 left-2 bg-accent-orange border-2 border-black px-2 py-0.5 rounded-full font-label-bold text-[10px] uppercase text-white">Fee Rp15.000</div>
</div>
<div className="p-sm flex flex-col flex-grow">
<h3 className="font-label-bold text-label-bold text-on-surface line-clamp-2 h-10 mb-xs">KitKat Matcha Kyoto Edition</h3>
<p className="font-headline-main-mobile text-[16px] text-primary mb-md">Rp 85.000</p>
<button className="mt-auto w-full bg-secondary-container border-2 border-black py-2 rounded-lg font-label-bold text-label-bold flex items-center justify-center gap-xs active-shadow-press block-shadow text-on-secondary-container">
<span className="material-symbols-outlined text-[18px]">add</span>
                        Titip
                    </button>
</div>
</div>
{/*  Product Card 3  */}
<div className="bg-white border-2 border-black rounded-xl overflow-hidden block-shadow flex flex-col">
<div className="relative h-40 w-full border-b-2 border-black overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A trendy Japanese streetwear oversized graphic t-shirt displayed on a bright orange background with mechanical neubrutalist design elements like heavy black lines and grids. The lighting is harsh and direct, creating a bold, street-style aesthetic. The t-shirt features colorful Japanese typography and anime-inspired illustrations." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVidW2XqSGa_umMEbQDCmXOSgelwHu_jJzGccCBhwPRArS5KNt7CZgKLb5X22t7o2GyQcOo21e33RtrWbhqqh92uERD_oAycU19kURG42-j2x9n4igU5EPGAbn6WRhqIzUv-84dSZoKpyaoz5LLJc9-kLPcCAqN8g1fU4exGExTJhLfDsRwZtJyVCZpOgZJkFfwG3WD8-evQFSVxglKY5TFrSdnrLGHKO4NgZVTXAwFbgBCAJxDoiu"/>
<div className="absolute top-2 left-2 bg-accent-pink border-2 border-black px-2 py-0.5 rounded-full font-label-bold text-[10px] uppercase">Fee 10%</div>
</div>
<div className="p-sm flex flex-col flex-grow">
<h3 className="font-label-bold text-label-bold text-on-surface line-clamp-2 h-10 mb-xs">Uniqlo Japan Graphic Tee</h3>
<p className="font-headline-main-mobile text-[16px] text-primary mb-md">Rp 299.000</p>
<button className="mt-auto w-full bg-secondary-container border-2 border-black py-2 rounded-lg font-label-bold text-label-bold flex items-center justify-center gap-xs active-shadow-press block-shadow">
<span className="material-symbols-outlined text-[18px]">add</span>
                        Titip
                    </button>
</div>
</div>
{/*  Product Card 4  */}
<div className="bg-white border-2 border-black rounded-xl overflow-hidden block-shadow flex flex-col">
<div className="relative h-40 w-full border-b-2 border-black overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A collection of cute Japanese Gashapon figurines including small characters and cats, arranged in a playful composition. The background is a clean white with pops of neon pink and cyan. High-key lighting creates a cheerful and vibrant atmosphere, perfect for a toy collection showcase. The visual style is crisp and detailed." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_C9XNBtaMWdFfkeyqaOfqZDlG_JtIZZm2og6uyqzy6poB35yMpv4QzxwbAuWmSTbN5G_9yy7Dd01_ihlrXVYh_s4GBRtrMhCYHYnh6NBDXKexbqMJ1iZPNV_w4oHPexlXkYd0GKP9YwWs0q26ItNePEdNYXyCYdtzJ4bBNBT5ByWMh_xVxoMJept_AbeFzXCd9XYQ37Drhp4v7kDzOytUY0ucEdQJjfQxIuoBDnJN4M0Rj3ujNBLV"/>
<div className="absolute top-2 left-2 bg-accent-orange border-2 border-black px-2 py-0.5 rounded-full font-label-bold text-[10px] uppercase text-white">Fee Rp10.000</div>
</div>
<div className="p-sm flex flex-col flex-grow">
<h3 className="font-label-bold text-label-bold text-on-surface line-clamp-2 h-10 mb-xs">Bandai Gashapon Set A</h3>
<p className="font-headline-main-mobile text-[16px] text-primary mb-md">Rp 65.000</p>
<button className="mt-auto w-full bg-secondary-container border-2 border-black py-2 rounded-lg font-label-bold text-label-bold flex items-center justify-center gap-xs active-shadow-press block-shadow">
<span className="material-symbols-outlined text-[18px]">add</span>
                        Titip
                    </button>
</div>
</div>
</section>
</main>
{/*  Bottom Navigation Bar  */}
<nav className="fixed bottom-0 w-full z-50 bg-surface dark:bg-surface-container-highest border-t-2 border-black shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)] flex justify-around items-center h-20 px-2">
{/*  Beranda  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-accent-orange active:scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-label-bold text-[10px]">Beranda</span>
</a>
{/*  Katalog (Active)  */}
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container border-2 border-black rounded-full px-4 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>import_contacts</span>
<span className="font-label-bold text-[10px]">Katalog</span>
</a>
{/*  Transaksi  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-accent-orange active:scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined">receipt_long</span>
<span className="font-label-bold text-[10px]">Transaksi</span>
</a>
{/*  Akun  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-accent-orange active:scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-bold text-[10px]">Akun</span>
</a>
</nav>


    </div>
  );
}
