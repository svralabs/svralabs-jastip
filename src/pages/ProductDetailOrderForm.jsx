import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductDetailOrderForm() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="fixed top-0 w-full z-50 bg-surface border-b border-black flex justify-between items-center px-lg h-16">
<button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-primary-container active:translate-y-0.5 transition-all">
<span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
</button>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight">JASTIP.CO</h1>
<button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-primary-container active:translate-y-0.5 transition-all">
<span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
</button>
</header>
<main className="pt-20 px-lg space-y-lg">

<section className="relative group">
<div className="w-full aspect-square border border-black bg-surface rounded-xl overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="A studio photograph of a 'Gentle Woman' branded canvas tote bag featuring large black typography on a clean white fabric. The bag is placed against a vibrant pastel background with professional studio lighting that emphasizes its texture and modern, minimalist design. The overall aesthetic is clean, playful, and high-fashion." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc-EwH7xYAQVrzbPAhArfKnHpwtecpD3BlzwNBTp4Fdj-5m5WqfgQ5uHbhb4ezbko0Z8vYOCI4ehj1RiwPMrYQ33Xqs5rFn-29UEyQC9SiP2zV_k3X1WgqeVXtQ1-X5KBlx9Jw2fxNAK6Ak2pBp24fDWMDhqXYqglo-V7LZhH9B3AP7adutpcURD5TN-zKqQ_E7e2i9zoc-HtuUSME1EyzR4ZxdW6M8Ko61dCQxJM6iYvVDne3_Hyw" />

<div className="absolute top-4 left-4">
<span className="bg-badge-purple-bg text-badge-purple-text border border-black px-3 py-1 rounded-full font-label-bold text-label-bold">
                        ORIGINAL THAILAND
                    </span>
</div>
</div>
</section>

<section className="bg-accent-yellow border border-black rounded-2xl p-lg space-y-md">
<div className="flex justify-between items-start">
<div className="space-y-1">
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface leading-tight">Gentle Woman Tote Bag</h2>
<p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="store">store</span> Gentle Woman Store
                    </p>
</div>
<div className="bg-surface border border-black rounded-full px-3 py-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-primary" data-icon="star" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="font-label-bold text-label-bold">4.9</span>
</div>
</div>
<div className="pt-2 space-y-2">
<div className="flex justify-between items-center">
<span className="font-body-md text-body-md">Harga Produk</span>
<span className="font-headline-md text-headline-md">Rp 350.000</span>
</div>
<div className="flex justify-between items-center bg-white/40 border border-black/10 rounded-lg p-2">
<span className="font-label-bold text-label-bold text-on-surface">Fee Jastip</span>
<span className="font-label-bold text-label-bold bg-primary-container text-on-primary-container border border-black px-2 py-0.5 rounded-full">Rp 50.000</span>
</div>
</div>
<div className="border-t border-black/20 pt-4 flex justify-between items-center">
<p className="font-label-bold text-label-bold uppercase opacity-60">Jumlah Pesanan</p>
<div className="flex items-center gap-4 bg-surface border border-black rounded-full px-2 py-1">
<button className="w-8 h-8 flex items-center justify-center border border-black rounded-full hover:bg-surface-variant neo-button-active" id="minus-btn" style={{opacity: '0.3', cursor: 'not-allowed'}}>
<span className="material-symbols-outlined text-[18px]" data-icon="remove">remove</span>
</button>
<span className="font-headline-md text-headline-md min-w-[20px] text-center" id="qty-display">1</span>
<button className="w-8 h-8 flex items-center justify-center border border-black rounded-full hover:bg-primary-container neo-button-active" id="plus-btn">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
</button>
</div>
</div>
</section>

<section className="space-y-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary" data-icon="local_shipping">local_shipping</span>
<h3 className="font-headline-md text-headline-md">Detail Pengiriman</h3>
</div>
<form className="space-y-4">
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant px-1" htmlFor="name">NAMA PENERIMA</label>
<input className="w-full p-4 rounded-xl border border-black bg-surface neo-focus font-body-md text-body-md" id="name" placeholder="Contoh: Rian Alfian" type="text" />
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant px-1" htmlFor="whatsapp">NO. WHATSAPP</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 font-label-bold text-label-bold text-on-surface-variant">+62</span>
<input className="w-full p-4 pl-12 rounded-xl border border-black bg-surface neo-focus font-body-md text-body-md" id="whatsapp" placeholder="812 3456 7890" type="tel" />
</div>
</div>
<div className="space-y-2">
<label className="font-label-bold text-label-bold text-on-surface-variant px-1" htmlFor="address">ALAMAT LENGKAP PENGIRIMAN</label>
<textarea className="w-full p-4 rounded-xl border border-black bg-surface neo-focus font-body-md text-body-md resize-none" id="address" placeholder="Masukkan nama jalan, nomor rumah, RT/RW, Kecamatan, dan Kode Pos" rows="4"></textarea>
</div>
<div className="flex items-start gap-3 p-4 bg-surface-container rounded-xl border border-black">
<input className="mt-1 w-5 h-5 rounded border-black text-primary focus:ring-primary" id="insurance" type="checkbox" />
<label className="font-body-sm text-body-sm" htmlFor="insurance">Tambahkan asuransi pengiriman untuk proteksi lebih (Rp 5.000)</label>
</div>
</form>
</section>

<section className="bg-surface-container-high border border-black p-lg rounded-xl flex items-start gap-lg">
<div className="bg-secondary-container p-2 rounded-lg border border-black shrink-0">
<span className="material-symbols-outlined text-on-secondary-container" data-icon="info">info</span>
</div>
<div className="space-y-1">
<h4 className="font-label-bold text-label-bold">Informasi Estimasi</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Produk ini dibeli langsung dari Store Thailand. Estimasi sampai di Indonesia: 7-10 hari kerja.</p>
</div>
</section>
</main>

<footer className="fixed bottom-0 left-0 right-0 bg-surface p-lg border-t border-black flex items-center justify-between gap-4 z-50">
<div className="flex flex-col">
<span className="font-label-bold text-label-bold text-on-surface-variant">TOTAL PEMBAYARAN</span>
<span className="font-headline-lg text-headline-lg text-primary" id="total-price">Rp 400.000</span>
</div>
<button className="flex-1 bg-primary-container text-on-primary-container border border-black font-headline-md text-headline-md py-4 rounded-full neo-button-active hover:bg-primary active:text-white transition-colors">
            Beli Sekarang
        </button>
</footer>




    </div>
  );
}
