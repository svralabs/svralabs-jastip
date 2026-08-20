import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShoppingCart() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="fixed top-0 left-0 w-full z-50 bg-background flex justify-between items-center px-screen-margin py-md">
<div className="flex items-center gap-md">
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container transition-transform active:scale-95">
<span className="material-symbols-outlined text-primary">arrow_back</span>
</button>
<h1 className="font-headline-md text-headline-md font-bold text-primary">Your Cart</h1>
</div>
<div className="w-10 h-10 rounded-full overflow-hidden bg-primary-fixed clay-card">
<img className="w-full h-full object-cover" data-alt="A professional high-quality studio portrait of a smiling young person with warm lighting and a soft bokeh background. The aesthetic is clean, modern, and youthful, matching the friendly Claymorphism design system with pastel purple and white tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEX2_5MxfvK81b2QVJse3-TauomwqHh6YAe9JExzcSJWNoRtNKlowbPaHM7SmuepqJ7czny4JMa9Gnf72bD9Tu1C6eB3P9SvNOFbOWvNwt4cSERL4JlNC7NXDBv62lU2ztCbYKZ2tku82QxmPOXYOl2j6fQMvxUiWyzx-UDQzdyZ1_rEE0z4MwvSVxQISXiybKKoqSaOUtjfK1oVmYZgaqJDJQdrQo4T-HW8i98ffEJa4npeQ3EoZ6_Q"/>
</div>
</header>
<main className="mt-20 px-screen-margin space-y-grid-gap">

<div className="flex items-center gap-sm mt-4">
<span className="material-symbols-outlined text-secondary text-[20px]" style={{fontVariationSettings: '\'FILL\' 1'}}>local_mall</span>
<h2 className="font-headline-md text-body-md font-bold text-on-surface uppercase tracking-wider">Bangkok Sale</h2>
</div>

<div className="grid grid-cols-1 gap-grid-gap">

<div className="clay-card bg-surface p-md rounded-2xl flex gap-md items-center group">
<div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-primary-fixed border-4 border-white clay-card">
<img className="w-full h-full object-cover" data-alt="A close-up shot of a trendy Thai designer handbag in soft lilac leather, presented on a minimalist platform. The lighting is soft and diffused to emphasize the matte, tactile texture, fitting the pillowy Claymorphic aesthetic of the health and wellness app." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtANHVuFK2hh66As02APMFNFUcob1Xh59aStzsce5B3FN0_ivN9q25gZ3VFj9KpIKgWdtAYEkU2j6_iUeenO3cjP2L5KAt3daVk32Kh4hO2Nc4eA1uehuz22sz8N4WVFGSP1G51oPiwVGv6CsE0qm7SesxKHUT3SXs_G72QAsTEtVfXhikJwrCTyHaFokF7rM6NM5ij32Xx51LJMh-d04jO2vUpU2xsziwqBe0Sv9P61d2WEww29nrkg"/>
</div>
<div className="flex-grow flex flex-col justify-between h-24 py-1">
<div>
<h3 className="font-body-md text-body-md font-bold text-on-surface leading-tight">Gentlewoman Canvas Tote</h3>
<p className="font-caption-sm text-caption-sm text-text-secondary mt-xs">Premium Edition • Beige</p>
</div>
<div className="flex justify-between items-end">
<span className="font-headline-md text-primary font-bold">฿790</span>
<div className="clay-counter bg-surface-container rounded-full flex items-center px-1 py-1">
<button className="w-7 h-7 flex items-center justify-center text-primary hover:bg-white rounded-full transition-colors active:scale-90">
<span className="material-symbols-outlined text-[18px]">remove</span>
</button>
<span className="px-3 font-bold text-on-surface">1</span>
<button className="w-7 h-7 flex items-center justify-center text-primary hover:bg-white rounded-full transition-colors active:scale-90">
<span className="material-symbols-outlined text-[18px]">add</span>
</button>
</div>
</div>
</div>
<button className="text-error opacity-40 hover:opacity-100 transition-opacity p-1">
<span className="material-symbols-outlined">delete</span>
</button>
</div>

<div className="clay-card bg-surface p-md rounded-2xl flex gap-md items-center group">
<div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-primary-fixed border-4 border-white clay-card">
<img className="w-full h-full object-cover" data-alt="A set of high-quality organic Thai skincare products in elegant pastel packaging. The setting is bright and airy with soft shadows, highlighting the clean and friendly wellness theme of the application. High-end product photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfObMVNMTGHQUgHI51iLdJnmPzcXg06Wn0gpqBu9QU7p7KdrTjc4fFU9AsNesIEakWqUoT-au2L_o-UnPL4kBbeD6DsuJfyXvmgGOCmIrqQFGQbNS3GEyOLoFZCytgZee2GXIi62moWMpwKZyuP6djbG25fB5GryeuOyA4qvexbfuRQnOPLShyA6_k9bVdr2IE2UMV5qkJeyFZ0TAfN94qB2RAPB5ZMsEVXsxdN8WlhLf2yZdPPi28OA"/>
</div>
<div className="flex-grow flex flex-col justify-between h-24 py-1">
<div>
<h3 className="font-body-md text-body-md font-bold text-on-surface leading-tight">Mistine Glow Serum</h3>
<p className="font-caption-sm text-caption-sm text-text-secondary mt-xs">Skin Brightening • 30ml</p>
</div>
<div className="flex justify-between items-end">
<span className="font-headline-md text-primary font-bold">฿450</span>
<div className="clay-counter bg-surface-container rounded-full flex items-center px-1 py-1">
<button className="w-7 h-7 flex items-center justify-center text-primary hover:bg-white rounded-full transition-colors active:scale-90">
<span className="material-symbols-outlined text-[18px]">remove</span>
</button>
<span className="px-3 font-bold text-on-surface">2</span>
<button className="w-7 h-7 flex items-center justify-center text-primary hover:bg-white rounded-full transition-colors active:scale-90">
<span className="material-symbols-outlined text-[18px]">add</span>
</button>
</div>
</div>
</div>
<button className="text-error opacity-40 hover:opacity-100 transition-opacity p-1">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</div>

<div className="clay-card bg-secondary-container p-xl rounded-2xl mt-4 space-y-md">
<div className="flex justify-between items-center">
<span className="font-body-md text-on-secondary-container opacity-80">Product Total</span>
<span className="font-headline-md text-on-secondary-container font-bold">฿1,690</span>
</div>
<div className="flex justify-between items-center">
<span className="font-body-md text-on-secondary-container opacity-80">Est. Admin Fee</span>
<span className="font-headline-md text-on-secondary-container font-bold">฿150</span>
</div>
<hr className="border-on-secondary-container opacity-10"/>
<div className="flex gap-sm items-start bg-white/30 p-md rounded-xl">
<span className="material-symbols-outlined text-on-secondary-container text-[20px]" style={{fontVariationSettings: '\'FILL\' 1'}}>info</span>
<p className="font-caption-sm text-on-secondary-container leading-tight">Final shipping/packing fees will be adjusted by admin later.</p>
</div>
</div>
</main>

<div className="fixed bottom-32 left-0 w-full px-screen-margin z-40">
<button className="w-full clay-button bg-primary-container text-on-primary py-lg rounded-full font-headline-md text-body-md font-bold transition-all hover:brightness-105 active:scale-95 flex items-center justify-center gap-sm">
            Lanjut ke Pembayaran
            <span className="material-symbols-outlined">chevron_right</span>
</button>
</div>

<nav className="fixed bottom-lg left-0 right-0 mx-auto z-50 flex justify-around items-center h-16 px-md bg-inverse-surface dark:bg-surface-container-highest fixed bottom-lg left-1/2 -translate-x-1/2 w-[calc(100%-32px)] rounded-full shadow-2xl">
<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant w-12 h-12 hover:scale-110 transition-transform active:scale-90 transition-all duration-200 ease-out" href="#">
<span className="material-symbols-outlined">grid_view</span>
</a>
<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant w-12 h-12 hover:scale-110 transition-transform active:scale-90 transition-all duration-200 ease-out" href="#">
<span className="material-symbols-outlined">fitness_center</span>
</a>
<a className="flex items-center justify-center bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container rounded-full w-12 h-12 hover:scale-110 transition-transform active:scale-90 transition-all duration-200 ease-out" href="#">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>favorite</span>
</a>
<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant w-12 h-12 hover:scale-110 transition-transform active:scale-90 transition-all duration-200 ease-out" href="#">
<span className="material-symbols-outlined">person</span>
</a>
</nav>


    </div>
  );
}
