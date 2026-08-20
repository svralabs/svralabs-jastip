import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminInvoiceFeesManager() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low flex flex-col py-xl gap-sm shadow-sm z-50">
<div className="px-xl mb-xl">
<span className="font-headline-md text-headline-md text-primary font-bold">Admin Master</span>
<p className="text-on-surface-variant text-caption-sm">Workspace</p>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center gap-md text-on-surface-variant hover:bg-surface-variant rounded-xl px-lg py-md mx-md transition-all" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-body-md text-body-md">Dashboard</span>
</a>
<a className="flex items-center gap-md bg-secondary-container text-on-secondary-container rounded-xl px-lg py-md mx-md font-bold" href="#">
<span className="material-symbols-outlined">shopping_cart</span>
<span className="font-body-md text-body-md">Orders</span>
</a>
<a className="flex items-center gap-md text-on-surface-variant hover:bg-surface-variant rounded-xl px-lg py-md mx-md transition-all" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-body-md text-body-md">Shoppers</span>
</a>
<a className="flex items-center gap-md text-on-surface-variant hover:bg-surface-variant rounded-xl px-lg py-md mx-md transition-all" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-body-md text-body-md">Payments</span>
</a>
<a className="flex items-center gap-md text-on-surface-variant hover:bg-surface-variant rounded-xl px-lg py-md mx-md transition-all" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-body-md text-body-md">Settings</span>
</a>
<a className="flex items-center gap-md text-on-surface-variant hover:bg-surface-variant rounded-xl px-lg py-md mx-md transition-all" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-body-md text-body-md">Help</span>
</a>
</nav>
<div className="px-xl mt-auto pt-xl flex items-center gap-md">
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
<img className="w-full h-full object-cover" data-alt="A professional headshot of a friendly business administrator in a modern office, featuring soft studio lighting and a clean, high-key background. The person wears a minimalist professional outfit, representing a helpful and organized user persona within the light-mode UI design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVbQ_KDQF1nPoe0k7Dhm3NUeDR1N63a_kL2K3MAFn-qWOIMzrAUWz2WaY4ac5PdIaiVME8rPygMg0YA3HtdSp_rD9Z0dAEfYGJFxmU6WuEy2ahfXFHJWVm7P3O5jKfV6XA7f-_ZPnfJsnR8VcQpJBevgU4HjEg6fNZA-gPnoO2WRKCIFEg78xjiuy3jlXp9wM_mx3z9LE8KwKzD7HlAnvz1F1zUXR6ylRpb1DZnWCmWlizle4MlfE7DQ"/>
</div>
<div>
<p className="font-bold text-on-surface text-sm">Alex Admin</p>
<p className="text-xs text-on-surface-variant">Super User</p>
</div>
</div>
</aside>

<header className="h-16 fixed top-0 right-0 left-64 bg-surface-container-lowest flex items-center justify-between px-2xl z-40 shadow-sm">
<div className="flex items-center gap-xl w-1/3">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full bg-surface-variant/30 border-none rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-primary/20 text-sm" placeholder="Search orders or invoices..." type="text"/>
</div>
</div>
<div className="flex items-center gap-md">
<h1 className="font-headline-md text-headline-md font-bold text-on-surface mr-xl">Payments & Invoices</h1>
<button className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-high rounded-full transition-all">
<span className="material-symbols-outlined text-on-surface-variant">notifications</span>
</button>
<button className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-high rounded-full transition-all">
<span className="material-symbols-outlined text-on-surface-variant">apps</span>
</button>
</div>
</header>

<main className="ml-64 mt-16 p-2xl min-h-screen">
<div className="max-w-[1400px] mx-auto">

<div className="mb-xl flex items-end justify-between">
<div>
<h2 className="font-headline-lg text-headline-lg text-text-dark">Fee Management Center</h2>
<p className="text-text-secondary mt-1">Adjust shipping and packing fees for active order batches.</p>
</div>
<div className="flex gap-md">
<div className="px-lg py-sm bg-accent-blue/20 text-blue-700 rounded-full font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-lg">calendar_today</span>
                        Oct 24, 2023
                    </div>
</div>
</div>
<div className="bento-grid">

<section className="clay-card col-span-8 p-2xl flex flex-col">
<div className="flex items-center justify-between mb-xl">
<h3 className="font-headline-md text-headline-md flex items-center gap-md">
<span className="material-symbols-outlined p-2 bg-primary-container/20 rounded-xl text-primary">receipt_long</span>
                            Transaction Processing
                        </h3>
<span className="bg-surface-variant text-on-surface-variant px-md py-xs rounded-full text-xs font-bold uppercase tracking-wider">2 Selected Orders</span>
</div>
<div className="space-y-md flex-1">

<div className="flex items-center justify-between p-lg clay-input border-2 border-transparent hover:border-primary/10 cursor-pointer">
<div className="flex items-center gap-xl">
<div className="w-12 h-12 rounded-2xl bg-accent-pink/20 flex items-center justify-center">
<span className="material-symbols-outlined text-accent-pink">person</span>
</div>
<div>
<p className="font-bold text-text-dark">#JP-2938 Anita Rahayu</p>
<p className="text-caption-sm text-text-secondary">3 Items (Skincare Set, Lip Gloss, Serum)</p>
</div>
</div>
<div className="text-right">
<p className="font-bold text-primary">Rp 450.000</p>
<span className="bg-secondary-container/30 text-on-secondary-container px-sm py-1 rounded-lg text-[10px] font-bold uppercase">Pending Fees</span>
</div>
</div>

<div className="flex items-center justify-between p-lg clay-input border-2 border-transparent hover:border-primary/10 cursor-pointer">
<div className="flex items-center gap-xl">
<div className="w-12 h-12 rounded-2xl bg-accent-blue/20 flex items-center justify-center">
<span className="material-symbols-outlined text-accent-blue">person</span>
</div>
<div>
<p className="font-bold text-text-dark">#JP-2937 Budi Santoso</p>
<p className="text-caption-sm text-text-secondary">1 Item (Mechanical Keyboard)</p>
</div>
</div>
<div className="text-right">
<p className="font-bold text-primary">Rp 1.250.000</p>
<span className="bg-secondary-container/30 text-on-secondary-container px-sm py-1 rounded-lg text-[10px] font-bold uppercase">Pending Fees</span>
</div>
</div>
</div>
<div className="mt-xl pt-lg border-t border-surface-variant">
<div className="flex justify-between items-center text-on-surface-variant font-medium">
<span>Subtotal Items</span>
<span className="font-bold text-text-dark">Rp 1.700.000</span>
</div>
</div>
</section>

<section className="clay-card col-span-4 p-2xl">
<h3 className="font-headline-md text-headline-md mb-xl flex items-center gap-md">
<span className="material-symbols-outlined p-2 bg-secondary-container/20 rounded-xl text-secondary">tune</span>
                        Manual Adjustments
                    </h3>
<div className="space-y-xl">
<div>
<label className="block text-sm font-bold text-text-secondary mb-2 px-1">Packing Fees</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary font-bold">Rp</span>
<input className="clay-input w-full py-4 pl-12 pr-4 font-bold text-lg text-text-dark" type="text" value="25.000"/>
</div>
</div>
<div>
<label className="block text-sm font-bold text-text-secondary mb-2 px-1">Shipping Cost</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary font-bold">Rp</span>
<input className="clay-input w-full py-4 pl-12 pr-4 font-bold text-lg text-text-dark" placeholder="0" type="text"/>
</div>
</div>
<div className="p-lg bg-surface-container-low rounded-3xl border border-dashed border-outline-variant">
<p className="text-xs text-on-surface-variant italic leading-relaxed text-center">
                                Fees will be applied equally across all selected transactions in this batch processing session.
                            </p>
</div>
</div>
</section>

<section className="clay-card col-span-12 p-2xl grid grid-cols-2 gap-2xl relative overflow-hidden">

<div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
<div className="relative z-10 flex flex-col h-full">
<h3 className="font-headline-md text-headline-md mb-xl">Preview Breakdown</h3>
<div className="flex gap-2xl flex-1 items-stretch">

<div className="flex-1 p-xl rounded-[28px] bg-surface-container-lowest border-2 border-surface-container-high">
<p className="text-xs font-bold uppercase tracking-widest text-outline mb-lg">Initial Invoice</p>
<div className="space-y-sm">
<div className="flex justify-between text-sm">
<span className="text-on-surface-variant">Item Total</span>
<span className="font-bold">Rp 1.700.000</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-on-surface-variant">Tax (0%)</span>
<span className="font-bold">Rp 0</span>
</div>
</div>
<div className="mt-lg pt-md border-t border-surface-variant flex justify-between items-center">
<span className="font-bold text-text-dark">Subtotal</span>
<span className="font-bold text-text-dark">Rp 1.700.000</span>
</div>
</div>

<div className="flex-1 p-xl rounded-[28px] bg-primary/5 border-2 border-primary/20 shadow-inner">
<p className="text-xs font-bold uppercase tracking-widest text-primary mb-lg">Final Invoice (Adjusted)</p>
<div className="space-y-sm">
<div className="flex justify-between text-sm">
<span className="text-on-surface-variant">Item Total</span>
<span className="font-bold">Rp 1.700.000</span>
</div>
<div className="flex justify-between text-sm text-primary font-medium">
<span>Packing + Shipping</span>
<span className="font-bold">+ Rp 25.000</span>
</div>
</div>
<div className="mt-lg pt-md border-t border-primary/20 flex justify-between items-center">
<span className="font-bold text-primary text-lg">Grand Total</span>
<span className="font-bold text-primary text-xl">Rp 1.725.000</span>
</div>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col justify-center items-center px-xl">
<div className="w-full max-w-sm space-y-lg">
<button className="clay-button w-full bg-primary py-xl rounded-full text-white font-headline-md flex items-center justify-center gap-md hover:bg-primary/90">
<span className="material-symbols-outlined">send</span>
                                Issue and Notify
                            </button>
<div className="flex items-center gap-md justify-center">
<div className="flex items-center gap-2 px-md py-xs bg-white rounded-full shadow-sm border border-surface-variant/50">
<img className="w-4 h-4" data-alt="A clean, minimalist vector logo icon of an envelope, representing email communication via Sumopod. The aesthetic is modern and professional, fitting perfectly with a soft UI design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjjzZ6iLikWho1fkuOzCCYQZOGCikIPZrnfdSWLaiuKsV5x6zhWnl26OmRo12nwefDcNUMw4xDjUxf0b8pXTNzBMzg5ueFb-kboNZGpMki7SW6p76KNaRYAHXMNAyW_HiwJtgiB4IYm5C_QvNCJVg2FCEr6tnG8nu8GqScemrCTlsIgC2wcpq7Ufy1TuDjtyvRZRKJIB_g-TZBbfrueWeOPzaZdj0wxSmUKfsGWiIaP3WeH2wImP4hMw"/>
<span className="text-xs font-bold text-text-secondary">Sumopod Email</span>
</div>
<div className="w-2 h-2 rounded-full bg-surface-variant"></div>
<div className="flex items-center gap-2 px-md py-xs bg-white rounded-full shadow-sm border border-surface-variant/50">
<img className="w-4 h-4" data-alt="A clean, minimalist vector logo icon of a chat bubble, representing instant messaging via Kirimdev WhatsApp. The aesthetic is modern and vibrant, fitting perfectly with a soft UI design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2XtC46JlqbiqU4NHNkVJm--OyeuH-FYckOQal-XJoHOOrEhiqcURfjrDXXm8DL1FjGvmMiN2etmqvwD0FTABWmIXH8u0EsWL9pUZmUkzyKeDkrTRujruxXlpavse0tcsX2w7BRGQ_FFFj1qtTxLYlr55gR_WfoBfzqUkwV5tinjTiAR49LPtY6W_1PT3QlQTVvEqBI_fJtV9SsMMfT-0J862ATQtXmt2EQZUPaXuJtfP0QIPZht5Q1g"/>
<span className="text-xs font-bold text-text-secondary">Kirimdev WA</span>
</div>
</div>
<p className="text-xs text-center text-outline leading-tight px-xl">
                                Clicking 'Issue and Notify' will generate PDF invoices and send automated notifications through connected API integrations.
                            </p>
</div>
</div>
</section>

<div className="col-span-4 clay-card p-xl flex items-center gap-xl">
<div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-3xl">timer</span>
</div>
<div>
<p className="text-xs font-bold text-outline uppercase tracking-wider">Avg Processing Time</p>
<p className="text-2xl font-bold text-text-dark">4.2m <span className="text-sm font-normal text-green-500">(-12%)</span></p>
</div>
</div>
<div className="col-span-4 clay-card p-xl flex items-center gap-xl">
<div className="w-14 h-14 rounded-full bg-accent-pink/20 flex items-center justify-center">
<span className="material-symbols-outlined text-accent-pink text-3xl">trending_up</span>
</div>
<div>
<p className="text-xs font-bold text-outline uppercase tracking-wider">Total Revenue Batch</p>
<p className="text-2xl font-bold text-text-dark">Rp 4.25M</p>
</div>
</div>
<div className="col-span-4 clay-card p-xl flex items-center gap-xl">
<div className="w-14 h-14 rounded-full bg-accent-blue/20 flex items-center justify-center">
<span className="material-symbols-outlined text-accent-blue text-3xl">verified</span>
</div>
<div>
<p className="text-xs font-bold text-outline uppercase tracking-wider">Success Rate</p>
<p className="text-2xl font-bold text-text-dark">99.8%</p>
</div>
</div>
</div>
</div>
</main>


    </div>
  );
}
