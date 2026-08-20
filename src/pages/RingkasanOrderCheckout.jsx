import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RingkasanOrderCheckout() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="bg-surface docked full-width top-0 border-b border-black flex justify-between items-center w-full px-lg py-md z-40 sticky top-0">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-2xl">shopping_bag</span>
<h1 className="font-headline-lg text-headline-lg font-black text-primary tracking-tight">Ringkasan Order</h1>
</div>
<button className="material-symbols-outlined p-2 hover:bg-surface-container transition-colors rounded-full text-on-surface-variant">close</button>
</header>
<main className="px-lg py-xl max-w-md mx-auto space-y-xl">

<section className="space-y-sm">
<h2 className="font-label-bold text-label-bold uppercase tracking-widest text-on-surface-variant px-1">Produk Dipesan</h2>
<div className="neubrutalist-border bg-surface rounded-xl p-md flex gap-md">
<div className="w-20 h-20 rounded-lg overflow-hidden neubrutalist-border flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="A stylish canvas tote bag with bold black typography reading 'GENTLE WOMAN' on a cream-colored background. The bag is neatly folded on a minimal wooden table under warm, high-contrast studio lighting. The overall aesthetic is modern, clean, and commercial, fitting a trendy personal shopper app interface with a pastel color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz0uGWlFvQJcEwDXzcCPHkU7i7OE5JNYDf6lzOfC4HIQa3svU3WgdAdsVdWKoELPkWLm8OQlDBHJeotwtDnFUk8b2V8xb32YXU74cKqy5zUHyK_cDCdQuFkJF78ZbVolkHzIIeEMBCfgThNMvYH1OnPJJYZ2sSlhMLRpoUUi5pOKNoUFyuPTYH4kkZ_mVaOVHXsB_EJ0hVprnTDMKEsehq0yTDT4E9r6CkEMZqZ6GjVFLNCd4Lci9y" />
</div>
<div className="flex flex-col justify-between flex-grow py-1">
<div>
<div className="flex justify-between items-start">
<h3 className="font-headline-md text-headline-md text-text-primary leading-tight">Gentle Woman Tote Bag</h3>
<span className="font-label-bold text-label-bold bg-surface-container-high px-2 py-1 rounded neubrutalist-border">1x</span>
</div>
<p className="font-body-md text-body-md text-text-secondary mt-1">Rp 350.000</p>
</div>
<div className="flex">
<span className="bg-badge-green-bg text-badge-green-text font-label-bold text-label-bold px-2 py-1 rounded-full neubrutalist-border flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">local_mall</span>
                            Fee Jastip: Rp 50.000
                        </span>
</div>
</div>
</div>
</section>

<section className="neubrutalist-border bg-badge-purple-bg rounded-2xl p-lg space-y-md">
<div className="space-y-sm">
<div className="flex justify-between items-center">
<span className="font-body-md text-body-md text-on-surface-variant">Total Harga Barang</span>
<span className="font-body-md text-body-md text-on-surface">Rp 350.000</span>
</div>
<div className="flex justify-between items-center">
<span className="font-body-md text-body-md text-on-surface-variant">Total Fee Jastip</span>
<span className="font-body-md text-body-md text-on-surface">Rp 50.000</span>
</div>
</div>
<div className="h-px bg-black opacity-20"></div>
<div className="flex justify-between items-center">
<span className="font-headline-md text-headline-md font-bold">Subtotal</span>
<span className="font-headline-md text-headline-md font-bold">Rp 400.000</span>
</div>

<div className="bg-surface/50 neubrutalist-border rounded-lg p-sm flex gap-sm items-start mt-md">
<span className="material-symbols-outlined text-primary text-body-md mt-0.5">info</span>
<p className="font-body-sm text-body-sm italic leading-tight text-on-surface-variant">
                    *Biaya packing &amp; ongkir akan dihitung di Invoice Final setelah barang terbeli
                </p>
</div>
</section>

<div className="h-12"></div>
</main>

<div className="fixed bottom-24 left-0 right-0 px-lg z-30 max-w-md mx-auto">
<button className="active-scale w-full py-4 bg-primary-container text-on-primary-container font-headline-md text-headline-md font-bold rounded-full neubrutalist-border flex items-center justify-center gap-2">
            Kirim Pesanan
            <span className="material-symbols-outlined">send</span>
</button>
</div>

<nav className="fixed bottom-6 left-0 right-0 mx-auto w-[90%] max-w-md z-50 flex justify-around items-center h-16 bg-surface border border-black rounded-full no shadows">
<button className="text-on-surface-variant p-md hover:bg-surface-container-high rounded-full active:scale-90 transition-transform duration-150">
<span className="material-symbols-outlined">home</span>
</button>
<button className="text-on-surface-variant p-md hover:bg-surface-container-high rounded-full active:scale-90 transition-transform duration-150">
<span className="material-symbols-outlined">search</span>
</button>
<button className="bg-primary-container text-on-primary-container rounded-full p-md border border-black active:scale-90 transition-transform duration-150">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>shopping_cart</span>
</button>
<button className="text-on-surface-variant p-md hover:bg-surface-container-high rounded-full active:scale-90 transition-transform duration-150">
<span className="material-symbols-outlined">person</span>
</button>
</nav>




    </div>
  );
}
