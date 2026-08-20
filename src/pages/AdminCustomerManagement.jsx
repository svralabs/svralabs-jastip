import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminCustomerManagement() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="bg-surface sticky top-0 w-full z-50 border-b border-black flex items-center justify-between px-lg py-md">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary font-headline-lg text-headline-lg">shopping_bag</span>
<h1 className="font-headline-lg text-headline-lg font-black text-primary">JastipHub</h1>
</div>
<button className="material-symbols-outlined p-sm hover:bg-surface-container rounded-full transition-colors">notifications</button>
</header>
<main className="px-lg mt-xl space-y-xl max-w-2xl mx-auto">

<section>
<h2 className="font-headline-lg text-headline-lg text-text-primary">Manajemen Customer</h2>
<p className="font-body-md text-body-md text-text-secondary">Kelola daftar pembeli dan riwayat loyalitas mereka.</p>
</section>

<section>
<div className="relative group">
<span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full pl-11 pr-md py-md bg-surface border border-black rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-accent-yellow transition-all" placeholder="Cari nama atau nomor HP..." type="text" />
</div>
</section>

<section className="space-y-lg">

<div className="bg-surface border border-black rounded-xl p-lg flex flex-col gap-md">
<div className="flex justify-between items-start">
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded-full border border-black overflow-hidden bg-primary-container">
<img className="w-full h-full object-cover" data-alt="A portrait of a cheerful Indonesian woman with a modern hijab, clean lighting, professional photography style, bright outdoor cafe background, 8k resolution, vibrant colors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6GgRRBlZY_ni6Ch4cvV5YSIbF-DnlHLn7aqPk_bxWjLQE2s6W1oz4eKYrTJxzB8uLUIJYz5rLU97E0hF1OEdsVlv0rh49h4NNU3wGCpozURM_0PRcEVQPELPA6-TfxeT2DQirlbwx6aD_7erGJt_OTjTnAlxywTuxinj-z8gXEDnAb0VT5xClBXiRdeSIpzRcU66a1TL6Sfp1roOjreABvdnQucXEVb7tgwQJouyFvgBgQU_yokhQ" />
</div>
<div>
<h3 className="font-headline-md text-headline-md text-text-primary">Siti Rahma</h3>
<p className="font-body-sm text-body-sm text-text-secondary">+6281234567890 • 15 Transaksi</p>
</div>
</div>
<span className="bg-badge-green-bg text-badge-green-text border border-black px-sm py-xs rounded-full font-label-bold text-label-bold whitespace-nowrap">VIP Customer</span>
</div>
<div className="flex items-center justify-between mt-sm">
<button className="neubrutalist-btn bg-surface-container border border-black px-md py-sm rounded-lg font-label-bold text-label-bold flex items-center gap-xs hover:bg-surface-container-high transition-all">
                        Lihat Riwayat Order
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<button className="w-10 h-10 border border-black rounded-lg flex items-center justify-center hover:bg-surface-container transition-all">
<span className="material-symbols-outlined text-on-surface-variant">edit</span>
</button>
</div>
</div>

<div className="bg-surface border border-black rounded-xl p-lg flex flex-col gap-md">
<div className="flex justify-between items-start">
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded-full border border-black overflow-hidden bg-accent-yellow">
<img className="w-full h-full object-cover" data-alt="A high-quality studio portrait of a young Indonesian man with short dark hair, wearing a trendy olive green jacket, neutral studio lighting, soft shadows, high contrast, neubrutalist vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgAV_4S4niogMlIoOqDqc_0NthtKtYHgUykEWTJbQ2DqF2h5V2wG9vMWemAUbbqmQCDj7ZfUlFBG-IobGIhz5WFDo17UOU_3yDs5ZRBrwTTb7WY1fQFwvdmmzLU8lBje--EyQPGXAaeApvk8GJ9K748ozfwTLFQmCGLdcQhpEfEaobQvbfH4up1D2Au4JGudTtDRr4HQM6wIdZZC3zXkdTxvkBP_LwhieynLUTiLW-1Ohr8FJBEj3O" />
</div>
<div>
<h3 className="font-headline-md text-headline-md text-text-primary">Rian S.</h3>
<p className="font-body-sm text-body-sm text-text-secondary">2 Transaksi</p>
</div>
</div>
<span className="bg-badge-pink-bg text-on-background border border-black px-sm py-xs rounded-full font-label-bold text-label-bold whitespace-nowrap">Sering Ghosting / Cancel</span>
</div>
<div className="flex items-center justify-between mt-sm">
<button className="neubrutalist-btn bg-surface-container border border-black px-md py-sm rounded-lg font-label-bold text-label-bold flex items-center gap-xs hover:bg-surface-container-high transition-all">
                        Lihat Riwayat Order
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<button className="w-10 h-10 border border-black rounded-lg flex items-center justify-center hover:bg-surface-container transition-all">
<span className="material-symbols-outlined text-on-surface-variant">edit</span>
</button>
</div>
</div>

<div className="bg-surface-container-low border border-black rounded-xl p-lg flex flex-col gap-md">
<div className="flex justify-between items-start">
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded-full border border-black overflow-hidden bg-secondary-container">
<img className="w-full h-full object-cover" data-alt="Close up photography of an Asian customer's face, warm lighting, smiling, trendy streetwear, minimalist studio background, ultra detailed skin texture, neubrutalist high contrast style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaiNnTHTB4timy_WE4TMnuURF7IBInv2GoYiM0uY7EEn_d7GWtISP6CxdK5niJdtum243mGnYRx1BPnApEinz_o8sSVCpPj4NIk50ZDKqP5_HKKwfJJplbVCDy3t4qN6gxz4Ybllf4HIm1P5E4vvIx7tBFAOF_uoFhSXgaBp9D3FTLTQiWYW2aY5FZTk_FHpHle2oSeWiFhlBF8S8mwmQ9x3pnwF8W9v9LwVuYERv6wBgXQAKgqpYj" />
</div>
<div>
<h3 className="font-headline-md text-headline-md text-text-primary">Budi Arto</h3>
<p className="font-body-sm text-body-sm text-text-secondary">+62811223344 • 5 Transaksi</p>
</div>
</div>
<span className="bg-badge-yellow-bg text-badge-yellow-text border border-black px-sm py-xs rounded-full font-label-bold text-label-bold whitespace-nowrap">Pelanggan Baru</span>
</div>
<div className="flex items-center justify-between mt-sm">
<button className="neubrutalist-btn bg-surface border border-black px-md py-sm rounded-lg font-label-bold text-label-bold flex items-center gap-xs hover:bg-surface-container transition-all">
                        Lihat Riwayat Order
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<button className="w-10 h-10 border border-black rounded-lg flex items-center justify-center hover:bg-surface-container transition-all">
<span className="material-symbols-outlined text-on-surface-variant">edit</span>
</button>
</div>
</div>
</section>

<section className="grid grid-cols-2 gap-md">
<div className="bg-badge-green-bg border border-black rounded-xl p-md">
<span className="material-symbols-outlined text-on-surface mb-xs">trending_up</span>
<p className="font-label-bold text-label-bold uppercase">Customer Aktif</p>
<h4 className="font-headline-lg text-headline-lg mt-xs">124</h4>
</div>
<div className="bg-accent-yellow border border-black rounded-xl p-md">
<span className="material-symbols-outlined text-on-surface mb-xs">shopping_cart</span>
<p className="font-label-bold text-label-bold uppercase">Total Order</p>
<h4 className="font-headline-lg text-headline-lg mt-xs">1,4k</h4>
</div>
</section>
</main>



<nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center px-lg py-sm bg-surface border border-black rounded-full mx-auto mb-4 w-[90%] max-w-md flat no shadows">

<a className="text-on-surface-variant p-2 hover:scale-110 transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined">home</span>
</a>

<a className="text-on-surface-variant p-2 hover:scale-110 transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined">calendar_today</span>
</a>

<a className="text-on-surface-variant p-2 hover:scale-110 transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined">receipt_long</span>
</a>

<a className="bg-primary-container text-on-primary-container rounded-full p-2 border border-black hover:scale-110 transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined" style={{fontVariationSettings: '&quot'}}>person</span>
</a>
</nav>






    </div>
  );
}
