import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminEventManagementScreen() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="w-full top-0 sticky z-40 bg-surface border-b border-black flex justify-between items-center px-lg py-md">
<div className="flex items-center gap-md">
<button className="material-symbols-outlined text-primary active:scale-95 duration-100" data-icon="menu">menu</button>
<h1 className="font-headline-md text-headline-md text-primary">Kelola Event Jastip</h1>
</div>
<button className="bg-primary-container text-on-primary-container border border-black rounded-full px-lg py-xs font-label-bold text-label-bold hover:bg-primary transition-colors active:scale-95 duration-100">
            + Event Baru
        </button>
</header>
<main className="max-w-md mx-auto p-lg space-y-2xl">

<section className="space-y-sm">
<h2 className="font-headline-lg text-headline-lg">Halo, Admin 👋</h2>
<p className="font-body-md text-body-md text-text-secondary">Waktunya merencanakan rute belanja baru untuk komunitasmu.</p>
</section>

<section className="bg-surface border border-black rounded-2xl p-lg space-y-lg">
<div className="flex items-center justify-between border-b border-black pb-md">
<h3 className="font-headline-md text-headline-md">Buat Event Baru</h3>
<span className="material-symbols-outlined text-accent-pink" data-icon="edit_calendar">edit_calendar</span>
</div>
<form className="space-y-md">
<div className="space-y-xs">
<label className="font-label-bold text-label-bold">Nama Event</label>
<input className="w-full border border-black rounded-lg px-md py-sm font-body-md focus:ring-0 focus:bg-accent-yellow transition-colors placeholder:text-slate-400" placeholder="Contoh: Jastip Tokyo Summer" type="text" />
</div>
<div className="grid grid-cols-2 gap-md">
<div className="space-y-xs">
<label className="font-label-bold text-label-bold">Tanggal Mulai</label>
<input className="w-full border border-black rounded-lg px-md py-sm font-body-md focus:ring-0 focus:bg-accent-yellow transition-colors" type="date" />
</div>
<div className="space-y-xs">
<label className="font-label-bold text-label-bold">Tanggal Selesai</label>
<input className="w-full border border-black rounded-lg px-md py-sm font-body-md focus:ring-0 focus:bg-accent-yellow transition-colors" type="date" />
</div>
</div>
<div className="flex items-center justify-between pt-sm">
<div className="flex flex-col">
<span className="font-label-bold text-label-bold">Status Aktif</span>
<span className="text-body-sm text-text-secondary">Publikasikan langsung ke pelanggan</span>
</div>
<label className="switch">
<input checked="" type="checkbox" />
<span className="slider"></span>
</label>
</div>
<button className="w-full py-md bg-secondary-container text-on-secondary-container font-headline-md border border-black rounded-xl active:translate-y-0.5 transition-transform" type="submit">
                    Simpan &amp; Publish
                </button>
</form>
</section>

<section className="space-y-lg">
<div className="flex justify-between items-center">
<h3 className="font-headline-md text-headline-md">Event Berjalan (1)</h3>
<span className="font-label-caps text-label-caps bg-primary-container border border-black px-sm py-0.5 rounded-full">ACTIVE</span>
</div>

<div className="bg-accent-yellow border border-black rounded-2xl p-lg space-y-md">
<div className="flex justify-between items-start">
<div className="space-y-xs">
<h4 className="font-headline-md text-headline-md">Jastip Bangkok Fashion</h4>
<div className="flex items-center gap-xs text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" data-icon="calendar_month">calendar_month</span>
<span className="font-body-sm text-body-sm">15 - 20 Aug 2026</span>
</div>
</div>
<label className="switch">
<input checked="" type="checkbox" />
<span className="slider"></span>
</label>
</div>

<div className="w-full h-32 rounded-xl border border-black bg-surface overflow-hidden relative">
<div className="w-full h-full bg-cover bg-center" data-alt="A vibrant street photography shot of a bustling Bangkok night market with neon signs in Thai script, street food stalls, and colorful fashion items on display. The lighting is moody and cinematic with high contrast, fitting the modern playful neubrutalist aesthetic of the app." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBQvgbB-M5HgKanymW-MkWfW00VXlroqGQypaI2pZpSuOWnDilRtiwZ6Y-FDqBNEnslifY4b6PxWgzYc9kJPDWxSNqRq8KAmMVTFfB2apw3ZhjawNIh0doIH28OYZc9B1tR-Qg8hr-NV7VBEg2OtBsySj7mjjSKDPIKUwO6E174TBLklS5Cy-ynWwW5TujKRqbSABvUaLZFpM4hjkAqTLqZmOeUv4XnuwaZu-WZkxUxoc9hoyMJWNIk\')'}}></div>
<div className="absolute top-2 right-2 bg-white border border-black px-sm py-xs rounded-lg font-label-bold text-label-bold">
                        128 Produk
                    </div>
</div>
<div className="flex gap-md pt-sm">
<button className="flex-1 py-sm bg-surface border border-black rounded-lg font-label-bold text-label-bold active:scale-95 transition-transform">
                        Kelola Katalog
                    </button>
<button className="flex-1 py-sm bg-accent-pink text-on-error border border-black rounded-lg font-label-bold text-label-bold active:scale-95 transition-transform">
                        Matikan Emergency
                    </button>
</div>
</div>

<div className="grid grid-cols-2 gap-lg">
<div className="bg-badge-purple-bg p-md border border-black rounded-xl">
<span className="font-label-caps text-label-caps text-badge-purple-text block mb-xs">TOTAL PESANAN</span>
<span className="font-headline-lg text-headline-lg">42</span>
</div>
<div className="bg-badge-green-bg p-md border border-black rounded-xl">
<span className="font-label-caps text-label-caps text-badge-green-text block mb-xs">EST. REVENUE</span>
<span className="font-headline-lg text-headline-lg">Rp 8.2M</span>
</div>
</div>
</section>

<section className="bg-surface-variant border border-black p-lg rounded-2xl flex items-center gap-md">
<div className="bg-white border border-black p-sm rounded-full">
<span className="material-symbols-outlined text-primary" data-icon="support_agent">support_agent</span>
</div>
<div>
<p className="font-label-bold text-label-bold">Butuh bantuan?</p>
<p className="font-body-sm text-body-sm">Hubungi tim Support JastipHub jika ada kendala pada sistem pembayaran.</p>
</div>
</section>
</main>

<nav className="fixed bottom-0 w-full z-50 mb-xl px-lg">
<div className="flex justify-around items-center h-16 bg-surface dark:bg-surface border border-black rounded-xl max-w-md mx-auto">

<button className="text-on-surface p-sm hover:bg-surface-container-high active:translate-y-0.5 transition-transform">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
</button>

<button className="bg-primary-container text-on-primary-container border border-black p-sm rounded-lg active:translate-y-0.5 transition-transform">
<span className="material-symbols-outlined" data-icon="event_available" style={{fontVariationSettings: '\'FILL\' 1'}}>event_available</span>
</button>

<button className="text-on-surface p-sm hover:bg-surface-container-high active:translate-y-0.5 transition-transform">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
</button>

<button className="text-on-surface p-sm hover:bg-surface-container-high active:translate-y-0.5 transition-transform">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</div>
</nav>




    </div>
  );
}
