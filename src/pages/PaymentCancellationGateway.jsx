import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PaymentCancellationGateway() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="w-full top-0 sticky z-50 bg-background dark:bg-on-surface flex justify-between items-center px-screen-margin py-md">
<div className="flex items-center gap-md">
<button className="material-symbols-outlined text-primary hover:opacity-80 transition-opacity active:scale-95 transition-transform">arrow_back_ios</button>
<h1 className="font-headline-md text-headline-md text-primary dark:text-inverse-primary">Payment</h1>
</div>
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-on-surface-variant">notifications</span>
<div className="w-10 h-10 rounded-full bg-primary-fixed-dim overflow-hidden clay-card">
<img className="w-full h-full object-cover" data-alt="A stylish 3D avatar of a young modern traveler with a friendly smile, wearing a minimalist purple hoodie. The avatar is rendered in a soft, matte claymorphic style with gentle studio lighting and a clean lavender background to match the friendly brand aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpLgHrkWM5MJRyVAsEb2-O0c7jsOCEE5mvjdxspyYVWyXhi6v3eh3EiLN-oiyQ1MD2F7HcHCMEVO6Zg8I9CfU4C5tlJYkabi_NBiiAsH6cVfZA3VFOEV_WYdgOGCEG8S5cfUvZOMqL1wBcU_EJbW-20TwQQOzrSxhwGYPt2ct_cDLz1mrXMJppQ5l70K4JM6KYUqP1ttPPOUE-jYzVaxodV3LXHfI-hafmqDOBpwTSPn2TXIB4bAF3cg"/>
</div>
</div>
</header>
<main className="px-screen-margin pt-lg space-y-grid-gap max-w-2xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gap">

<section className="clay-card rounded-3xl p-lg flex flex-col justify-between border border-white/40">
<div>
<p className="font-label-pill text-on-surface-variant opacity-70 mb-1">Total Payment</p>
<h2 className="font-headline-lg text-headline-lg text-primary">Rp 467.500</h2>
</div>
<div className="mt-4 pt-4 border-t border-surface-container-highest flex justify-between items-center">
<span className="font-caption-sm text-on-surface-variant">Order ID: #TRV-202394</span>
<button className="material-symbols-outlined text-primary text-sm">content_copy</button>
</div>
</section>

<section className="clay-card rounded-3xl p-lg space-y-md border border-white/40 flex flex-col justify-center">
<div className="flex items-center gap-lg">
<div className="w-12 h-12 bg-surface-container-high rounded-2xl flex items-center justify-center clay-card-inner">
<span className="material-symbols-outlined text-primary">account_balance</span>
</div>
<div>
<p className="font-headline-md text-headline-md text-on-surface">Bank BCA</p>
<p className="font-label-pill text-on-surface-variant">Transfer Manual</p>
</div>
</div>
<div className="bg-surface-container rounded-2xl p-md clay-card-inner">
<p className="font-caption-sm text-on-surface-variant mb-1">Account Number</p>
<div className="flex justify-between items-center">
<span className="font-headline-md text-headline-md tracking-wider">802 045 2210</span>
<span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">content_copy</span>
</div>
<p className="font-label-pill text-on-surface mt-2">a.n. TRAVELER GLOBAL MANDIRI</p>
</div>
</section>
</div>

<section className="clay-card rounded-3xl p-2xl border border-white/40 bg-white relative overflow-hidden group">
<div className="text-center space-y-lg">
<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-container/20 clay-card mb-md group-hover:scale-105 transition-transform duration-300">
<span className="material-symbols-outlined text-primary text-4xl" data-weight="fill">cloud_upload</span>
</div>
<div className="space-y-sm">
<h3 className="font-headline-md text-headline-md text-on-surface">Upload Receipt</h3>
<p className="font-body-md text-on-surface-variant max-w-xs mx-auto">Snap a photo of your payment receipt and upload it here to confirm your order.</p>
</div>
<div className="mt-xl">
<label className="cursor-pointer">
<input className="hidden" type="file"/>
<div className="clay-button bg-primary text-on-primary font-label-pill px-2xl py-lg rounded-full inline-flex items-center gap-md hover:bg-primary/90 transition-all active:scale-95">
<span className="material-symbols-outlined text-xl">add_photo_alternate</span>
                            Select Image
                        </div>
</label>
</div>
<p className="font-caption-sm text-outline-variant italic">Supported formats: JPG, PNG, PDF (Max 5MB)</p>
</div>

<div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
<div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-pink/5 rounded-full blur-3xl"></div>
</section>

<section className="bg-clay-pink rounded-3xl p-lg border border-white/40 space-y-lg relative overflow-hidden">
<div className="flex items-start gap-lg relative z-10">
<div className="w-12 h-12 bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center">
<span className="material-symbols-outlined text-on-error-container" style={{fontVariationSettings: '\'FILL\' 1'}}>warning</span>
</div>
<div className="flex-1">
<h4 className="font-headline-md text-headline-md text-on-error-container">Need to Cancel?</h4>
<p className="font-body-md text-on-error-container/80 mt-1 leading-snug">Ghosting akan mengakibatkan penalti akun. Please inform us early!</p>
</div>
</div>
<button className="w-full bg-white text-on-error-container font-label-pill py-lg rounded-full clay-card hover:bg-surface-bright transition-colors active:scale-95 flex items-center justify-center gap-md relative z-10">
                Ajukan Pembatalan
                <span className="material-symbols-outlined text-xl">cancel</span>
</button>

<div className="absolute -bottom-4 -right-4 opacity-10">
<span className="material-symbols-outlined text-[120px]">heart_broken</span>
</div>
</section>
</main>

<nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md rounded-full bg-text-dark dark:bg-surface-container-highest shadow-2xl z-50 flex justify-around items-center h-16 px-2 mx-auto">
<button className="flex flex-col items-center justify-center text-outline-variant dark:text-outline px-6 py-2 hover:bg-primary/10 transition-colors active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined">home</span>
<span className="font-label-pill text-label-pill mt-1">Home</span>
</button>
<button className="flex flex-col items-center justify-center bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container rounded-full px-6 py-2 active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>shopping_bag</span>
<span className="font-label-pill text-label-pill mt-1">Orders</span>
</button>
<button className="flex flex-col items-center justify-center text-outline-variant dark:text-outline px-6 py-2 hover:bg-primary/10 transition-colors active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined">person</span>
<span className="font-label-pill text-label-pill mt-1">Profile</span>
</button>
</nav>


    </div>
  );
}
