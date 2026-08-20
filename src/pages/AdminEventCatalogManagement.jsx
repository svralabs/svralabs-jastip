import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminEventCatalogManagement() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="bg-surface-container dark:bg-surface-container-low h-screen w-64 fixed left-0 top-0 rounded-r-3xl shadow-md flex flex-col py-6 z-50">
<div className="px-6 mb-8">
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Jastip Admin</h1>
<p className="text-on-surface-variant opacity-70 text-sm">Management Hub</p>
</div>
<div className="flex flex-col gap-2 flex-grow">

<a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-container-high rounded-xl px-4 py-3 mx-2 transition-colors duration-200" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-body-md text-body-md">Dashboard</span>
</a>

<a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-container-high rounded-xl px-4 py-3 mx-2 transition-colors duration-200" href="#">
<span className="material-symbols-outlined">shopping_bag</span>
<span className="font-body-md text-body-md">Orders</span>
</a>

<a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-container-high rounded-xl px-4 py-3 mx-2 transition-colors duration-200" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-body-md text-body-md">Shoppers</span>
</a>

<a className="flex items-center gap-3 bg-primary-container text-on-primary-container rounded-xl px-4 py-3 mx-2 nav-active" href="#">
<span className="material-symbols-outlined">event</span>
<span className="font-body-md text-body-md">Events</span>
</a>

<a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-container-high rounded-xl px-4 py-3 mx-2 transition-colors duration-200" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-body-md text-body-md">Settings</span>
</a>
</div>
<div className="px-6 py-4 flex items-center gap-3 border-t border-outline-variant/20">
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A professional studio portrait of a modern office administrator with a friendly expression, wearing minimalist professional attire, shot with soft volumetric lighting and a clean, high-end commercial aesthetic consistent with modern digital workspace designs." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhIGnQF_QHdvbSYc84JbNKudZK2N1H4f8z_2bUkPgUzrjIZdefL4c6Ou9x3z-ebciHkwzcfkHsLKOG3P6L4kKlWx0I6i7rwU_bYHKhslYpePElefaCzxNaf7wzeyIfbJbxIahsPFEH6H_X_f_oZ4lsVhBfWWXVpeSC7BY1JoqOhaBAvYrtnafYns_pNFweQ2O0TkC9kRevqTHQubzy6p6GtZ7V2fVQ7PTnGcCbQPRhOApuRq6s2cuezQ"/>
</div>
<div>
<p className="text-xs font-bold text-text-dark">Admin User</p>
<p className="text-[10px] text-text-secondary">Master Access</p>
</div>
</div>
</nav>

<main className="ml-64 flex-grow flex flex-col h-screen overflow-hidden">

<header className="h-20 bg-background/80 backdrop-blur-md flex justify-between items-center px-screen-margin sticky top-0 z-40">
<div className="flex items-center gap-4">
<h2 className="font-h1 text-h1 text-text-dark">Events &amp; Catalog</h2>
<div className="relative ml-8">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-sm">search</span>
<input className="clay-input pl-10 pr-4 py-2 w-64 text-sm bg-surface" placeholder="Search catalog..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex gap-4">
<button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-text-secondary">notifications</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-text-secondary">help</span>
</button>
</div>
<div className="h-8 w-[1px] bg-outline-variant/30"></div>
<button className="bg-primary text-white px-6 py-2 rounded-full font-label-pill text-label-pill hover:shadow-lg transition-all active:scale-95">
                    Save Changes
                </button>
</div>
</header>

<div className="flex-grow overflow-y-auto p-6 custom-scrollbar">
<div className="max-w-[1200px] mx-auto flex flex-col gap-grid-gap">

<div className="grid grid-cols-12 gap-grid-gap">

<div className="col-span-12 lg:col-span-8 clay-card p-8">
<div className="flex items-center justify-between mb-8">
<h3 className="font-h2 text-h2 text-text-dark flex items-center gap-2">
<span className="material-symbols-outlined text-primary">add_circle</span>
                                Create Event
                            </h3>
<span className="px-4 py-1 bg-primary-container/20 text-primary rounded-full text-xs font-bold">New Management</span>
</div>
<form className="grid grid-cols-2 gap-6">
<div className="col-span-2">
<label className="block text-xs font-bold text-text-secondary mb-2 uppercase tracking-wider">Event Name</label>
<input className="clay-input w-full font-body-md" placeholder="e.g. Bangkok Shopping Festival 2024" type="text"/>
</div>
<div>
<label className="block text-xs font-bold text-text-secondary mb-2 uppercase tracking-wider">Start Date</label>
<div className="relative">
<input className="clay-input w-full font-body-md" type="date"/>
</div>
</div>
<div>
<label className="block text-xs font-bold text-text-secondary mb-2 uppercase tracking-wider">End Date</label>
<div className="relative">
<input className="clay-input w-full font-body-md" type="date"/>
</div>
</div>
<div className="col-span-2 p-6 bg-surface-container-lowest rounded-2xl border border-dashed border-outline-variant/50">
<label className="block text-xs font-bold text-text-secondary mb-4 uppercase tracking-wider">Custom Fee Configuration</label>
<div className="flex items-center gap-8">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input checked="" className="w-5 h-5 text-primary border-outline-variant focus:ring-primary/20" name="fee_type" type="radio"/>
</div>
<span className="font-body-md text-text-dark group-hover:text-primary transition-colors">Percentage (%)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="w-5 h-5 text-primary border-outline-variant focus:ring-primary/20" name="fee_type" type="radio"/>
</div>
<span className="font-body-md text-text-dark group-hover:text-primary transition-colors">Fixed (Rp)</span>
</label>
<div className="flex-grow ml-4">
<input className="clay-input w-full py-2" placeholder="Value..." type="number"/>
</div>
</div>
</div>
</form>
</div>

<div className="col-span-12 lg:col-span-4 clay-accent-blue p-8 flex flex-col justify-center items-center text-center group cursor-pointer">
<div className="w-20 h-20 bg-white/40 rounded-full flex items-center justify-center mb-6 shadow-inner transition-transform group-hover:scale-110">
<span className="material-symbols-outlined text-4xl text-on-primary-container" style={{fontVariationSettings: '\'FILL\' 1'}}>cloud_upload</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-primary-container mb-2">Bulk Import</h3>
<p className="text-on-primary-container/80 font-body-md mb-6 px-4">Upload your Excel or CSV template to populate the catalog instantly.</p>
<div className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/40 font-label-pill text-label-pill text-on-primary-container transition-all group-hover:bg-white group-hover:shadow-lg">
                            Select Template
                        </div>
</div>
</div>

<div className="clay-card p-8 mt-4">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="font-h2 text-h2 text-text-dark">Uploaded Catalog</h3>
<p className="text-text-secondary text-sm">Managing 24 active items</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container text-sm font-bold text-text-primary hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-lg">filter_list</span>
                                Filter
                            </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container text-sm font-bold text-text-primary hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-lg">sort</span>
                                Sort
                            </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="bg-surface-container-lowest border border-outline-variant/20 rounded-[24px] p-4 flex gap-4 hover:shadow-md transition-shadow group">
<div className="w-24 h-24 rounded-2xl overflow-hidden bg-surface-container flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="A high-quality studio product shot of a luxury designer handbag on a soft peach background, lit with soft matte claymorphic studio lighting, featuring premium textures and subtle shadows that emphasize its high-end finish for an e-commerce catalog." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfNfGh0IO-cdfqR3j8YvPJAqlv8gHjOyHaYXsXvo-ZFXxLyZMLwus09czstq9HLdMKF820ZxOLKNYp7pt1w1U9tBODeGm_AlGK1H_w2DOvGwQjnylKbNo0-6HB8XhlGJEQMdZhNmulzh6nIg94WokgUX22O41AH0JFgYpxHEnLFp81CQHG_mftC3NPpizPZn2ngMRy4XJFt-hK-ArrvJvndUzDoFwly_DR1jjAx2URo9AHXLzwAivMZQ"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<button className="bg-white rounded-full p-2 text-primary shadow-lg">
<span className="material-symbols-outlined text-sm">edit_square</span>
</button>
</div>
</div>
<div className="flex flex-col justify-between flex-grow">
<div>
<h4 className="font-bold text-text-dark leading-tight mb-1">Luxury Velvet Pouch</h4>
<p className="text-xs text-primary font-bold">Rp 1.450.000</p>
</div>
<div className="flex justify-end">
<button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                                        Edit Image
                                        <span className="material-symbols-outlined text-xs">open_in_full</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant/20 rounded-[24px] p-4 flex gap-4 hover:shadow-md transition-shadow group">
<div className="w-24 h-24 rounded-2xl overflow-hidden bg-surface-container flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Close-up professional product photography of sleek, white modern wireless headphones on a soft lavender background. The lighting is bright and diffuse, creating a premium matte claymorphic aesthetic with soft shadows and clean lines." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrbqvouOHHGTl7K_ule9c2uDKB-j0adzYxgBna1g_g3eqwbHHKzjSWMuNVK0Wf7vPca4hU4FO23uGuenMJt68bV9-E-jEu7BWBNmorice15hoEyv3NbH3NcGQ3DS-R-c0N3DnivV1dNoNTlRqCltBrrxMidWAek5i_xTND9OPXM8TzI5Se3V-SRRPFcQ46snnmJXgkOFaDZjW7zVF2d7pONkRXvB6gNfxBEZ4yMTkeV5QO-OmfRColnQ"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<button className="bg-white rounded-full p-2 text-primary shadow-lg">
<span className="material-symbols-outlined text-sm">edit_square</span>
</button>
</div>
</div>
<div className="flex flex-col justify-between flex-grow">
<div>
<h4 className="font-bold text-text-dark leading-tight mb-1">Pro-Listen Wireless</h4>
<p className="text-xs text-primary font-bold">Rp 3.899.000</p>
</div>
<div className="flex justify-end">
<button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                                        Edit Image
                                        <span className="material-symbols-outlined text-xs">open_in_full</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant/20 rounded-[24px] p-4 flex gap-4 hover:shadow-md transition-shadow group">
<div className="w-24 h-24 rounded-2xl overflow-hidden bg-surface-container flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Gourmet artisanal chocolates arranged elegantly on a minimalist white ceramic plate, captured with high-end food photography techniques. The background is a soft, warm pastel tone, with natural, bright light creating a welcoming, high-quality claymorphic vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbmO4XfBePjzFTThl8h1ETGnwXV2XSJzjh4Mf5IaadU8AQ0c4GTdRH-Mh-o5d4DIiEogeYpr8gp83kqjbK_4QdCvdqyIx8hKmaGgWC34XeUSCz-ADFoq4Hl4ruNUjMma9N1cIg2hEXuKM4DT5mshCQH1s1ntBj63Mjc3xSagDkFKHeVuG7M7RYT0UC2c13-BFeCMmP-P6e9RosQQ9hYnXObVK5JLsV595FQGjoakmp_lrii8V_F6iieA"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<button className="bg-white rounded-full p-2 text-primary shadow-lg">
<span className="material-symbols-outlined text-sm">edit_square</span>
</button>
</div>
</div>
<div className="flex flex-col justify-between flex-grow">
<div>
<h4 className="font-bold text-text-dark leading-tight mb-1">Artisan Cocoa Set</h4>
<p className="text-xs text-primary font-bold">Rp 450.000</p>
</div>
<div className="flex justify-end">
<button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                                        Edit Image
                                        <span className="material-symbols-outlined text-xs">open_in_full</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant/20 rounded-[24px] p-4 flex gap-4 hover:shadow-md transition-shadow group">
<div className="w-24 h-24 rounded-2xl overflow-hidden bg-surface-container flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="A stylish, minimalist glass perfume bottle with a golden cap, set against a soft misty-blue background. Soft, pillowy shadows and high-key lighting emphasize the transparency and elegant design, fitting the premium claymorphic UI aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFJnL60Lixe9CcmecJzrG2yj3emfs_NZg1zl0kVgGJeNK4y3XTeoAIitX-cfyhlcRUJY-VNkAdhtBzf4mVzs6mmgDhEksIxlDIcNTBQN0hDYFhGA01pXFIL0UfnJXP6S4qJSQ_XmxXXG56yiZRAlH-JydWbvcmCOABiTRmQV9c7HdjpqtE4G3dmrqtXaEaayTg-OUmpoFJ04XTkHoVrP14VArf4hSFnDLHxp-LLZ30hnhtwT6W2JIfYA"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<button className="bg-white rounded-full p-2 text-primary shadow-lg">
<span className="material-symbols-outlined text-sm">edit_square</span>
</button>
</div>
</div>
<div className="flex flex-col justify-between flex-grow">
<div>
<h4 className="font-bold text-text-dark leading-tight mb-1">Ethereal Fragrance</h4>
<p className="text-xs text-primary font-bold">Rp 1.200.000</p>
</div>
<div className="flex justify-end">
<button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                                        Edit Image
                                        <span className="material-symbols-outlined text-xs">open_in_full</span>
</button>
</div>
</div>
</div>

<button className="bg-dashed border-2 border-dashed border-outline-variant/40 rounded-[24px] p-4 flex items-center justify-center gap-4 hover:bg-surface-container-low transition-colors group">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-outline transition-transform group-hover:scale-110">
<span className="material-symbols-outlined">add</span>
</div>
<span className="font-bold text-text-secondary">Add New Item</span>
</button>
</div>
</div>
</div>
</div>
</main>


    </div>
  );
}
