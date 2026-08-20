import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CancellationOutOfStockResolution() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="w-full top-0 sticky z-40 bg-surface dark:bg-on-background border-b-2 border-black flex items-center justify-between px-lg py-md">
<button className="flex items-center justify-center p-xs transition-transform active:scale-95 duration-100">
<span className="material-symbols-outlined text-on-surface" data-icon="arrow_back">arrow_back</span>
</button>
<h1 className="font-headline-md text-headline-md font-bold text-on-surface">Resolusi Pesanan</h1>
<button className="flex items-center justify-center p-xs transition-transform active:scale-95 duration-100">
<span className="material-symbols-outlined text-on-surface" data-icon="help_outline">help_outline</span>
</button>
</header>
<main className="px-lg py-xl space-y-xl">

<section className="space-y-sm">
<div className="flex items-center gap-sm mb-xs">
<span className="material-symbols-outlined text-error" data-icon="cancel">cancel</span>
<h2 className="font-label-bold text-label-bold text-on-surface uppercase tracking-wider">Pengajuan Pembatalan</h2>
</div>
<div className="bg-pink-200 neubrutalist-border rounded-2xl p-lg space-y-lg">
<p className="font-body-md text-body-md text-slate-900 leading-snug">
<span className="font-bold">Penting:</span> Pengajuan pembatalan hanya dapat disetujui jika barang belum dibeli tim shopper. Harap periksa status pesanan Anda.
                </p>
<div className="space-y-sm">
<label className="font-label-bold text-label-bold block">Alasan Pembatalan</label>
<div className="relative">
<select className="w-full bg-white neubrutalist-border rounded-lg p-md pr-10 appearance-none focus:bg-accent-yellow transition-colors font-body-md">
<option>Pilih alasan...</option>
<option>Perubahan rencana perjalanan</option>
<option>Salah pilih varian barang</option>
<option>Waktu pengiriman terlalu lama</option>
<option>Lainnya</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" data-icon="expand_more">expand_more</span>
</div>
</div>
<button className="w-full bg-slate-950 text-white neubrutalist-border rounded-full py-3 font-label-bold transition-all active:scale-95 hover:bg-slate-800">
                    Ajukan Cancel
                </button>
</div>
</section>

<div className="relative py-sm">
<div className="absolute inset-0 flex items-center"><div className="w-full border-t border-dashed border-slate-400"></div></div>
<div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-slate-500 font-bold tracking-widest">Atau</span></div>
</div>

<section className="space-y-sm">
<div className="flex items-center gap-sm mb-xs">
<span className="material-symbols-outlined text-tertiary" data-icon="inventory_2">inventory_2</span>
<h2 className="font-label-bold text-label-bold text-on-surface uppercase tracking-wider">Status Stok Barang</h2>
</div>
<div className="bg-amber-300 neubrutalist-border rounded-2xl p-lg space-y-xl">
<div className="flex items-start gap-md">
<div className="w-16 h-16 bg-white neubrutalist-border rounded-xl flex-shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A close-up studio photograph of a limited edition designer sneaker in a vibrant neubrutalist style. The background is a flat pastel yellow that matches the UI aesthetic. The lighting is crisp and bright, creating high contrast with sharp shadows. The sneaker features bold primary colors and clean geometric patterns, conveying a sense of premium streetwear luxury." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1MT3ls0AWAdEPUkUNGcJz6XFvd4zoEQAIXJsbotFv5RBpR0mMr3xFVQ1fUjrcvwEWPbnhqGme_ILqo8E9u2gYfC8ELW9vdZxQKwjj7kOz1jiERUIzBLwh0UEIZyOfkj7ZVr8UaTsnEBR2c2-jv9O22mE1tW5MoQ3WR0694yeOYIphJzwuGQDHvc4LXR0vsDeZfIz6lTaFwn4CKb8THdzFt0lHIzK_-AFaXNSGl0k-x2jJ9qW69XKB" />
</div>
<div className="space-y-xs">
<h3 className="font-label-bold text-label-bold text-slate-950 leading-none">Limited Edition Retro Sneakers</h3>
<p className="font-body-sm text-body-sm text-slate-800">Barang pilihan Anda stoknya habis di toko saat tim shopper melakukan pengecekan.</p>
</div>
</div>
<div className="flex flex-col gap-md">
<button className="w-full bg-purple-400 text-slate-950 neubrutalist-border font-bold rounded-full py-3 transition-all active:scale-95 flex items-center justify-center gap-sm">
<span className="material-symbols-outlined text-[20px]" data-icon="rebase_edit">rebase_edit</span>
                        Pilih Barang Pengganti
                    </button>
<button className="w-full bg-white text-slate-950 neubrutalist-border font-bold rounded-full py-3 transition-all active:scale-95 flex items-center justify-center gap-sm">
<span className="material-symbols-outlined text-[20px]" data-icon="delete_outline">delete_outline</span>
                        Batalkan Item Ini
                    </button>
</div>
</div>
</section>

<div className="bg-white neubrutalist-border rounded-2xl p-lg space-y-md">
<div className="flex justify-between items-center border-b border-black pb-sm">
<span className="font-label-bold">Ringkasan Resolusi</span>
<span className="bg-badge-green-bg text-badge-green-text px-2 py-xs text-[10px] rounded-full font-bold neubrutalist-border">ACTIVE CASE</span>
</div>
<div className="space-y-sm">
<div className="flex justify-between text-body-sm">
<span className="text-slate-500">ID Pesanan</span>
<span className="font-bold">#JB-99281-RT</span>
</div>
<div className="flex justify-between text-body-sm">
<span className="text-slate-500">Estimasi Pengembalian</span>
<span className="font-bold text-primary">Rp 1.250.000</span>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md z-50 flex justify-around items-center bg-surface dark:bg-on-background border-2 border-black p-xs rounded-full">
<a className="text-on-surface dark:text-surface-variant p-md flex items-center justify-center transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
</a>
<a className="bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary rounded-full p-md border-black dark:border-white border-1 flex items-center justify-center transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="calendar_month" style={{fontVariationSettings: '\'FILL\' 1'}}>calendar_month</span>
</a>
<a className="text-on-surface dark:text-surface-variant p-md flex items-center justify-center transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
</a>
<a className="text-on-surface dark:text-surface-variant p-md flex items-center justify-center transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
</a>
</nav>




    </div>
  );
}
