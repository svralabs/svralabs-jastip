import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function OrderHistoryTracking() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="fixed top-0 w-full z-50 bg-surface border-b border-black h-16 flex justify-between items-center px-lg">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary font-headline-md text-headline-md">shopping_bag</span>
<h1 className="font-headline-lg text-headline-lg font-black tracking-tighter text-on-surface">JastipBuddy</h1>
</div>
<button className="transition-transform active:scale-95 duration-100 hover:bg-primary-container p-sm rounded-full">
<span className="material-symbols-outlined text-on-surface-variant">notifications</span>
</button>
</header>
<main className="pt-24 pb-32 px-lg max-w-2xl mx-auto min-h-screen">

<section className="mb-2xl">
<h2 className="font-sohne font-black text-3xl mb-lg">Riwayat Pesanan</h2>

<div className="flex gap-sm overflow-x-auto no-scrollbar pb-sm">
<button className="flex-shrink-0 px-xl py-md rounded-full border border-black bg-on-background text-surface font-label-bold text-label-bold transition-all active:scale-95">
                    Semua
                </button>
<button className="flex-shrink-0 px-xl py-md rounded-full border border-black bg-badge-purple-bg text-badge-purple-text font-label-bold text-label-bold hover:bg-surface-container-high transition-all active:scale-95">
                    Diproses
                </button>
<button className="flex-shrink-0 px-xl py-md rounded-full border border-black bg-badge-yellow-bg text-badge-yellow-text font-label-bold text-label-bold hover:bg-surface-container-high transition-all active:scale-95">
                    Menunggu Bayar
                </button>
<button className="flex-shrink-0 px-xl py-md rounded-full border border-black bg-surface text-on-surface font-label-bold text-label-bold hover:bg-surface-container-high transition-all active:scale-95">
                    Selesai
                </button>
</div>
</section>

<div className="bg-surface neubrutalist-border rounded-2xl p-lg mb-xl transition-all" style={{transform: 'translate(0px, 0px)'}}>
<div className="flex justify-between items-start mb-lg">
<div>
<p className="font-sohne font-black text-lg">#JST-8821 | 16 Aug 2026</p>
<p className="text-on-surface-variant text-body-sm font-body-sm">Personal Shopper: Budi Pratama</p>
</div>
<div className="bg-badge-green-bg text-badge-green-text neubrutalist-border px-sm py-xs rounded-full text-label-bold font-label-bold">
                    Pesanan Aktif
                </div>
</div>

<div className="relative mb-2xl px-sm">
  
  <div className="absolute top-2 left-lg right-lg h-[2px] bg-outline-variant z-0"></div>
  
  <div className="absolute top-2 left-lg w-[66%] h-[2px] bg-primary z-0"></div>
  
  <div className="relative z-10 flex justify-between items-start">
    
    <div className="flex flex-col items-center gap-xs w-12">
      <div className="w-4 h-4 rounded-full border border-black bg-primary"></div>
      <span className="text-[10px] font-label-bold text-center leading-tight">Order Masuk</span>
    </div>

    
    <div className="flex flex-col items-center gap-xs w-12">
      <div className="w-4 h-4 rounded-full border border-black bg-primary"></div>
      <span className="text-[10px] font-label-bold text-center leading-tight">Diproses Tim</span>
    </div>

    
    <div className="flex flex-col items-center gap-xs w-12 -mt-1">
      <div className="w-6 h-6 rounded-full border-2 border-black bg-primary-container flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
      </div>
      <span className="text-[10px] font-black text-center leading-tight text-primary">Barang Terbeli</span>
    </div>

    
    <div className="flex flex-col items-center gap-xs w-12">
      <div className="w-4 h-4 rounded-full border border-black bg-surface"></div>
      <span className="text-[10px] font-label-bold text-center leading-tight text-outline">Invoice Final</span>
    </div>
  </div>
</div>
<div className="bg-primary-container/20 neubrutalist-border rounded-xl p-md mb-lg flex items-center gap-md" style={{transform: 'translate(0px, 0px)'}}>
<span className="material-symbols-outlined text-primary" style={{fontVariationSettings: '\'FILL\' 1'}}>info</span>
<p className="text-body-md font-label-bold text-on-primary-container">Barang Terbeli - Menunggu Invoice</p>
</div>
<div className="flex items-center gap-lg mb-lg">
<div className="w-20 h-20 neubrutalist-border rounded-xl overflow-hidden bg-surface-container" style={{transform: 'translate(0px, 0px)'}}>
<img className="w-full h-full object-cover" data-alt="A professional studio product photograph of two fluffy Thai milk buns from 'After You' bakery, soft texture visible, arranged on a vibrant pastel green plate. The lighting is bright and cheerful with high contrast, following a modern food photography aesthetic for a premium SaaS application." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1IVHrIBcggABobIWTHHpQljEHU8gvVEbttOlzxY_FAuMDabnYvo-e8cG9F9BrAjs98p44TA7fBD3334qiYylXKyRoPzCj28Xn9E4-7Ln3QLFE55dV6D_nBeB4fMhH-HjuV-Zj3VW9CisqotqEADgky8053yUFv7IYctvceUbUZGIsGj0j6sO7SSQ_B3l9Cuw1w82ESt2diROZ-7wlKKLRcVd3JNT0NepxfzJWW1vOQmqicst7QqL_" />
</div>
<div className="flex-1">
<h4 className="font-sohne font-black text-md">Milk Bun After You x2</h4>
<p className="text-on-surface-variant text-body-sm font-body-sm">Variant: Original &amp; Nutella</p>
<p className="font-label-bold mt-xs text-primary">฿ 450.00</p>
</div>
</div>
<button className="w-full bg-surface neubrutalist-border rounded-full py-md font-label-bold text-label-bold hover:bg-surface-container-high transition-transform active:scale-95 duration-100 flex items-center justify-center gap-sm" style={{transform: 'translate(0px, 0px)'}}>
                Lihat Detail
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>

<div className="bg-surface neubrutalist-border rounded-2xl p-lg opacity-80 hover:opacity-100 transition-opacity">
<div className="flex justify-between items-start mb-lg">
<div>
<p className="font-sohne font-black text-lg">#JST-8810 | 12 Aug 2026</p>
<p className="text-on-surface-variant text-body-sm font-body-sm">Status: Telah Diterima</p>
</div>
<div className="bg-secondary-container text-on-secondary-container neubrutalist-border px-sm py-xs rounded-full text-label-bold font-label-bold">
                    Selesai
                </div>
</div>
<div className="flex items-center gap-lg mb-lg">
<div className="w-20 h-20 neubrutalist-border rounded-xl overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="A stylish flat-lay photo of a Gentle Woman branded canvas tote bag with bold black lettering on a cream-colored fabric. The bag is placed on a clean white surface with a minimalist aesthetic. Lighting is even and soft, creating a trendy, lifestyle-oriented visual perfect for a shopping app." src="https://lh3.googleusercontent.com/aida-public/AB6AXuANY1yOXKwOSyMDcF7DJWyOU7m6yDLqn1ZR7IRwQLpHuRIvEU6qlglcJ4vCqVHUbXdB7uMjVJurGVHTXmeQQdpOYyM-GlXcsutHiICwF6cbqLnGYqal5WCvEYBC6FbM3x1ylCKvV6uy_5jYHfbDDX9ZVGXE7oyuqZI6-vc2sgPkUy5GswkpvH7ZgNeksUbORrSp7wjjBQlMkv7FGySlKf3YVuACKp9tKFeqNotgOkjKzAbLm0yneU67" />
</div>
<div className="flex-1">
<h4 className="font-sohne font-black text-md">Gentle Woman Tote Bag x1</h4>
<p className="text-on-surface-variant text-body-sm font-body-sm">Color: Cream Black</p>
<p className="font-label-bold mt-xs text-secondary">฿ 590.00</p>
</div>
</div>
<button className="w-full bg-surface neubrutalist-border rounded-full py-md font-label-bold text-label-bold hover:bg-surface-container-high transition-transform active:scale-95 duration-100 flex items-center justify-center gap-sm">
                Beli Lagi
                <span className="material-symbols-outlined text-[18px]">rebase_edit</span>
</button>
</div>
</main>

<nav className="fixed bottom-lg left-0 right-0 z-50 pointer-events-none">
<div className="mx-auto w-[90%] pointer-events-auto bg-surface border border-black rounded-full h-16 flex justify-around items-center px-md shadow-lg">
<button className="text-on-surface p-md transition-all active:scale-90 duration-150 hover:bg-surface-container-high rounded-full">
<span className="material-symbols-outlined">home</span>
</button>
<button className="text-on-surface p-md transition-all active:scale-90 duration-150 hover:bg-surface-container-high rounded-full">
<span className="material-symbols-outlined">calendar_today</span>
</button>

<button className="bg-primary-container text-on-primary-container border border-black p-md rounded-full transition-all active:scale-90 duration-150">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>receipt_long</span>
</button>
<button className="text-on-surface p-md transition-all active:scale-90 duration-150 hover:bg-surface-container-high rounded-full">
<span className="material-symbols-outlined">person</span>
</button>
</div>
</nav>




    </div>
  );
}
