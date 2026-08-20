import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminPaymentCancellationDashboard() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      
<div className="flex h-screen overflow-hidden">

<aside className="fixed left-0 top-0 h-full flex flex-col p-lg w-64 bg-surface dark:bg-surface-container shadow-sm m-md rounded-3xl z-50">
<div className="mb-2xl flex items-center gap-md">
<div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
<span className="material-symbols-outlined">dashboard_customize</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-primary">Admin Panel</h1>
<p className="text-caption-sm text-on-surface-variant">Jastip Management</p>
</div>
</div>
<nav className="flex-grow flex flex-col gap-sm">
<a className="flex items-center gap-md text-on-surface-variant p-md hover:bg-surface-container-highest rounded-lg transition-all hover:translate-x-1" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-pill text-label-pill">Dashboard</span>
</a>
<a className="flex items-center gap-md bg-primary-container text-on-primary-container rounded-lg p-md transition-all" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-pill text-label-pill">Payments</span>
</a>
<a className="flex items-center gap-md text-on-surface-variant p-md hover:bg-surface-container-highest rounded-lg transition-all hover:translate-x-1" href="#">
<span className="material-symbols-outlined">shopping_cart</span>
<span className="font-label-pill text-label-pill">Orders</span>
</a>
<a className="flex items-center gap-md text-on-surface-variant p-md hover:bg-surface-container-highest rounded-lg transition-all hover:translate-x-1" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-pill text-label-pill">Settings</span>
</a>
</nav>
<button className="mt-auto w-full py-md px-lg bg-surface-container-low rounded-xl text-primary font-bold hover:bg-surface-container-high transition-colors text-label-pill">
                Support Center
            </button>
</aside>

<main className="flex-grow ml-72 p-lg h-screen flex flex-col">

<header className="flex justify-between items-center w-full px-lg py-md mb-lg">
<div className="flex items-center gap-lg flex-1">
<div className="relative w-full max-w-md">
<span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full bg-surface rounded-full py-md pl-12 pr-md border-none focus:ring-2 focus:ring-primary-container text-body-md placeholder:text-on-surface-variant shadow-sm" placeholder="Search transactions..." type="text"/>
</div>
</div>
<div className="flex items-center gap-md">
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high text-on-surface-variant transition-colors active:scale-95">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high text-on-surface-variant transition-colors active:scale-95">
<span className="material-symbols-outlined">settings</span>
</button>
<button className="bg-primary px-lg py-sm rounded-full text-white font-bold text-label-pill active:scale-95 transition-transform shadow-lg shadow-primary/20">
                        New Order
                    </button>
<div className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden ml-md">
<img className="w-full h-full object-cover" data-alt="A professional studio portrait of a modern office administrator with a friendly expression. The background is a soft-focus office environment with natural lighting and pastel color tones, maintaining a high-quality light-mode aesthetic for a premium corporate dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKs48ddTc2AXblOWRjiDJAgTTMNa84T58oHI3jIz1t7K8z_ma9vMeUozNhMDvwHTKCimwHJWCKZLtreDOxs9KBlUPvawveJ6FPbRgGlQUPgwMRGLcPVS5rsL11FJdduhXkoq76ox4f418ZCSQMdtAJSl2tBbg3wQ24bONahOCzaA97y6CADgPQmnllIlLgHdB00qBsS1mu1vHqDjLxy495krrJ7PLgo5mHXmMwn0s54U758bvtQHJGKA"/>
</div>
</div>
</header>

<div className="flex-grow overflow-y-auto custom-scrollbar pb-10">
<div className="bento-grid">

<div className="col-span-12 mb-md">
<h2 className="font-h1 text-h1 text-text-dark">Payment Validation</h2>
<p className="text-text-secondary font-body-md">Review user receipts and handle cancellation requests.</p>
</div>

<div className="col-span-12 lg:col-span-8 clay-card p-2xl flex flex-col min-h-[600px]">
<div className="flex justify-between items-center mb-xl">
<h3 className="font-h2 text-h2 flex items-center gap-sm">
<span className="material-symbols-outlined text-primary" style={{fontVariationSettings: '\'FILL\' 1'}}>receipt_long</span>
                                Pending Verifications
                            </h3>
<span className="px-md py-xs bg-primary-container text-on-primary-container rounded-full text-label-pill">12 Pending</span>
</div>

<div className="flex-grow space-y-lg overflow-y-auto pr-md custom-scrollbar">

<div className="flex flex-col md:flex-row gap-lg p-lg bg-surface-container-low rounded-3xl border border-white/50">
<div className="w-full md:w-48 h-64 md:h-auto rounded-2xl overflow-hidden relative group">
<img className="w-full h-full object-cover" data-alt="A macro photograph of a crumpled retail store receipt placed on a light wooden surface. The lighting is soft and directional, highlighting the black ink and paper texture. The style is clean and professional, suitable for a financial validation interface with a soft-focus background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaBhKLsfn_X34AGSPzM-Q2N-GisyRySRV_-FmfH7EL3DuwVnBEV6E0bx2sUGKFz1soa4ilnujRtNzLILL3q3vOwphy3RRyfzICl_TP-ii8pZZBgtyTIQC8nSHkeE9LrXX9a-YeLw3eiBQBqrGzOjSg6IQ-mXwi6lt0T_Sph-CGXMslKTkrXfz9xo3zfGs911tVFUkt9sv9D3It7cOzy6IeqkzBo4JnRVOuyEYbmhTeKrqBBBKhXz0KYQ"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-zoom-in">
<span className="text-white font-bold">View Full Receipt</span>
</div>
</div>
<div className="flex-grow flex flex-col">
<div className="flex justify-between items-start">
<div>
<p className="text-caption-sm text-primary font-bold uppercase tracking-wider mb-xs">Order #JF-88291</p>
<h4 className="font-headline-md text-text-dark">Alexander Graham</h4>
<p className="text-body-md text-text-secondary">Bank Central Transfer</p>
</div>
<p className="text-headline-md font-bold text-primary">Rp 1,250,000</p>
</div>
<div className="mt-lg grid grid-cols-2 gap-md text-caption-sm text-text-secondary">
<div className="bg-white/50 p-sm rounded-xl">
<span className="block font-bold">Date Uploaded</span>
<span>Oct 24, 2023 - 14:32</span>
</div>
<div className="bg-white/50 p-sm rounded-xl">
<span className="block font-bold">Status Match</span>
<span className="text-green-600 flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: '\'FILL\' 1'}}>check_circle</span> 
                                                Ledger Sync OK
                                            </span>
</div>
</div>
<div className="mt-auto pt-lg flex gap-md">
<button className="flex-grow py-md clay-btn-primary text-white rounded-2xl font-bold flex items-center justify-center gap-sm">
<span className="material-symbols-outlined">verified</span>
                                            Approve Lunas
                                        </button>
<button className="w-14 h-14 flex items-center justify-center rounded-2xl bg-surface-container-highest text-on-surface-variant hover:bg-red-50 hover:text-error transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-lg p-lg bg-surface-container-low rounded-3xl border border-white/50 opacity-90">
<div className="w-full md:w-48 h-64 md:h-auto rounded-2xl overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A clean, close-up shot of a modern credit card terminal with a printed paper receipt flowing out. Bright, warm lighting highlights the tactile buttons of the terminal. The composition is artistic yet clear, embodying the friendly and approachable aesthetic of a modern financial app." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF-KUc8SVOWYC4CTkTIdXMzlL-vDuSgNN59hegLRRIbR-8EhN0_YftQ6sZuRl-KjEy2OCUxeY-jm6h9phdvrrUV8JB0ppUFWvZ8LjbOQr_sDi9-cvtrV9gUb9XFzj-9Ds6bzxZjO83MrWfWwIL_2WYU-fWDT7iDEr8OdHYKuNuK3TRx-USygOuTPF6by73BSkkfz30BeO9JIt8K6YlVD8zhWFjMzsNORQkYB7p2KpHZVEJ-R7WKKZksA"/>
</div>
<div className="flex-grow flex flex-col">
<div className="flex justify-between items-start">
<div>
<p className="text-caption-sm text-primary font-bold uppercase tracking-wider mb-xs">Order #JF-88285</p>
<h4 className="font-headline-md text-text-dark">Sarah Jenks</h4>
<p className="text-body-md text-text-secondary">E-Wallet (Dana)</p>
</div>
<p className="text-headline-md font-bold text-primary">Rp 455,000</p>
</div>
<div className="mt-lg grid grid-cols-2 gap-md text-caption-sm text-text-secondary">
<div className="bg-white/50 p-sm rounded-xl">
<span className="block font-bold">Date Uploaded</span>
<span>Oct 24, 2023 - 12:10</span>
</div>
<div className="bg-white/50 p-sm rounded-xl">
<span className="block font-bold">Manual Review</span>
<span className="text-amber-600 flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]">warning</span> 
                                                Check Name Match
                                            </span>
</div>
</div>
<div className="mt-auto pt-lg flex gap-md">
<button className="flex-grow py-md clay-btn-primary text-white rounded-2xl font-bold flex items-center justify-center gap-sm">
<span className="material-symbols-outlined">verified</span>
                                            Approve Lunas
                                        </button>
<button className="w-14 h-14 flex items-center justify-center rounded-2xl bg-surface-container-highest text-on-surface-variant hover:bg-red-50 hover:text-error transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 space-y-lg">

<div className="clay-card p-xl bg-accent-blue/10 border-2 border-accent-blue/20">
<h3 className="font-h2 text-h2 flex items-center gap-sm mb-lg">
<span className="material-symbols-outlined text-on-secondary-container">cancel</span>
                                Cancellation Queue
                            </h3>
<div className="space-y-md">

<div className="bg-white p-lg rounded-3xl shadow-sm">
<div className="flex items-center gap-md mb-md">
<div className="w-12 h-12 bg-accent-pink/20 rounded-2xl flex items-center justify-center text-accent-pink">
<span className="material-symbols-outlined">shopping_bag</span>
</div>
<div>
<h5 className="font-bold text-text-dark">Nike Air Jordan 1</h5>
<p className="text-caption-sm text-text-secondary">Request by @jane_doe</p>
</div>
</div>
<div className="bg-surface-container-low p-md rounded-2xl mb-lg">
<p className="text-body-md italic text-text-secondary">"Change of mind, found it cheaper elsewhere."</p>
</div>
<div className="flex items-center justify-between mb-lg">
<span className="flex items-center gap-xs text-green-600 font-bold text-caption-sm">
<span className="material-symbols-outlined text-[18px]">gpp_good</span>
                                            Safe to Cancel
                                        </span>
<span className="text-caption-sm text-text-secondary">Not bought yet</span>
</div>
<button className="w-full py-md clay-btn-secondary text-white rounded-2xl font-bold active:scale-95 transition-transform">
                                        Abort Order
                                    </button>
</div>

<div className="bg-white p-lg rounded-3xl shadow-sm border border-red-100">
<div className="flex items-center gap-md mb-md">
<div className="w-12 h-12 bg-accent-blue/20 rounded-2xl flex items-center justify-center text-accent-blue">
<span className="material-symbols-outlined">watch</span>
</div>
<div>
<h5 className="font-bold text-text-dark">Apple Watch S9</h5>
<p className="text-caption-sm text-text-secondary">Request by @mark_ross</p>
</div>
</div>
<div className="bg-surface-container-low p-md rounded-2xl mb-lg">
<p className="text-body-md italic text-text-secondary">"Emergency hospital bills came up."</p>
</div>
<div className="flex items-center justify-between mb-lg">
<span className="flex items-center gap-xs text-error font-bold text-caption-sm">
<span className="material-symbols-outlined text-[18px]">warning</span>
                                            Item Already Bought
                                        </span>
<span className="text-caption-sm text-text-secondary">In Transit</span>
</div>
<div className="flex gap-sm">
<button className="flex-grow py-md border-2 border-accent-pink text-accent-pink rounded-2xl font-bold hover:bg-accent-pink/5 transition-colors">
                                            Reject Request
                                        </button>
<button className="px-md py-md bg-surface-container-highest rounded-2xl text-on-surface-variant">
<span className="material-symbols-outlined">chat</span>
</button>
</div>
</div>
</div>
</div>

<div className="clay-card p-xl bg-primary-container text-white">
<h4 className="font-bold text-headline-md mb-sm">Verification Speed</h4>
<div className="flex items-end gap-sm mb-lg">
<span className="text-4xl font-extrabold tracking-tighter">4.2m</span>
<span className="text-body-md mb-1 opacity-80">Avg response</span>
</div>
<div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
<div className="bg-white h-full" style={{width: '85%'}}></div>
</div>
<p className="mt-md text-caption-sm opacity-90">Doing better than 92% of last month!</p>
</div>
</div>
</div>
</div>
</main>
</div>



    </div>
  );
}
