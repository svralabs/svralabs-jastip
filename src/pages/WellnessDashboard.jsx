import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function WellnessDashboard() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="flex justify-between items-center px-screen-margin py-md bg-background sticky top-0 z-40">
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-surface shadow-sm transition-transform active:scale-95">
<img className="w-full h-full object-cover" data-alt="A clean professional studio portrait of a friendly smiling young woman with warm skin tones and dark hair, wearing a stylish minimalist neutral-colored workout top. The lighting is soft and high-key, emphasizing a modern light-mode fitness app aesthetic with high clarity and a serene atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVjdI-BXkihloINF9uOKxD-jIUXNHdV6LvCkL_mcWGC86STMm1kC9-0TtjZUbPhEoyunkCUsJ01Pk2qfU7VSfVQrMloM_2ALrsNdMiBQNMekj4v25DD0bs_SuhAgmlTIX_2HpRLmIMVnCuXDhYog9ADP2dFihcy0uk4RJfpL_VcUutfA8pDntYCsSZswrFwVITPodBCxLAxEVrhhS4GTRsPQkRyT-LzfvfvSw_zItr61maGze57atIWQ"/>
</div>
<div>
<p className="text-on-surface-variant font-caption-sm text-caption-sm">Today 25 Nov.</p>
<h1 className="font-h2 text-h2 text-text-dark">Hello, Sandra</h1>
</div>
</div>
<button className="w-11 h-11 flex items-center justify-center rounded-full bg-white clay-button text-primary transition-transform active:scale-95">
<span className="material-symbols-outlined" style={{fontSize: '24px'}}>search</span>
</button>
</header>
<main className="flex-1 px-screen-margin space-y-2xl">

<section className="relative w-full bg-primary-container rounded-clay p-lg clay-card overflow-hidden h-44 flex flex-col justify-center">
<div className="relative z-10 space-y-sm max-w-[65%]">
<h2 className="font-headline-lg text-headline-lg text-on-primary-container leading-tight">Daily challenge</h2>
<p className="text-on-primary-container/80 font-body-md text-body-md">Do your plan before 09:00 AM</p>
<div className="flex items-center -space-x-md pt-sm">
<div className="w-8 h-8 rounded-full border-2 border-primary-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close up face of a motivated young athlete with beads of sweat, high quality digital photography, bright gym lighting, soft depth of field, pastel purple background tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtM54fLp1d8oMFAob_KNRRXYqAsTK3G73UWT9UvKDwjY2Pxv470-Y2QnC_eiLdJGb8OMbcAGaqs_Qg3xzDGKU4qtCI59YwR0Pkn8T6D1JmNJaQGMDA3QendVOhqxeiibm_Ibvl2vQeDGonDzvhCofQdA5sFBu85ik8FRoRtvz6OyQ2nUFegwlYH-hrR-8-CdySx8JWuy8zTgXQGrNrJFAzV9IV8Sn7EWU65bhNb7NsDOCbiS033PXzQw"/>
</div>
<div className="w-8 h-8 rounded-full border-2 border-primary-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Young man smiling while exercising, vibrant athletic wear, bright high-key lighting, modern fitness aesthetic, clean sharp focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJj57YsPQjhoTDeg3U-mBc4tx0by2rNNDdCddlvohaoloyM8Z4IvuzrRcCX31sA04eA6cBwCvXad_F-xqkVHBfHk6SDSf_jjTzxtVODIke_0U7l-N_1f8IG6VFNjWWg3pNVdZHCSVVJbLiewe_IAW8Fweg_YC3FW7WR8ceAy2Gn6o0GbpbYaOYoBBIcVSsx1TTm0WizpKPlC0UdR27t5bmq9AtDLz4D-WUu4HVkKKAuwLpwII4ss5x7A"/>
</div>
<div className="w-8 h-8 rounded-full border-2 border-primary-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Professional yoga instructor in a serene pose, soft morning light, minimalist studio setting, high-end commercial photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbF6nspvLpXKqcYAoDKxczZfwXyp_BJbCrvJAVhQ-1n_yHFJzAHICxdnfA7p9_TH7Hq8iEfChKuMZZReFRvgDOnl-8TXMYt_fmGFJ6n4IVbsYEJgvZUv_f8Wy9olqJk9WUbtqtIQACgdWLAVtL0wKiO-2-TYeO-PalLIOdY5ywjLg9ES9Qqn1SwzQIAi6mBYwWAW5Yxb1J4ASrvEYulP7OxisWt0T8UndajJjiigsxHHSgmJeDK_i5iA"/>
</div>
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-[10px] font-bold text-on-primary-container">
                        +12
                    </div>
</div>
</div>

<div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-40 h-40">
<div className="w-full h-full relative">

<div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-2xl"></div>
<div className="w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/30 rounded-clay rotate-12 backdrop-blur-sm clay-card"></div>
<div className="w-24 h-24 absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/4 bg-on-primary-container/10 rounded-full blur-xl"></div>
</div>
</div>
</section>

<section className="space-y-md">
<div className="flex items-center justify-between">
<h3 className="font-h2 text-h2 text-text-dark">Calendar</h3>
<span className="text-primary font-label-pill text-label-pill">View all</span>
</div>
<div className="flex gap-md overflow-x-auto no-scrollbar py-sm -mx-screen-margin px-screen-margin">
<div className="flex flex-col items-center justify-center min-w-[56px] h-20 rounded-full bg-white clay-card border-outline-variant/30 text-on-surface-variant transition-all active:scale-95">
<span className="font-caption-sm text-[11px] uppercase tracking-wider">Sun</span>
<span className="font-bold text-lg">22</span>
</div>
<div className="flex flex-col items-center justify-center min-w-[56px] h-20 rounded-full bg-white clay-card border-outline-variant/30 text-on-surface-variant transition-all active:scale-95">
<span className="font-caption-sm text-[11px] uppercase tracking-wider">Mon</span>
<span className="font-bold text-lg">23</span>
</div>
<div className="flex flex-col items-center justify-center min-w-[56px] h-20 rounded-full bg-white clay-card border-outline-variant/30 text-on-surface-variant transition-all active:scale-95">
<span className="font-caption-sm text-[11px] uppercase tracking-wider">Tue</span>
<span className="font-bold text-lg">24</span>
</div>
<div className="flex flex-col items-center justify-center min-w-[56px] h-20 rounded-full bg-text-dark text-white shadow-lg shadow-text-dark/20 transition-all active:scale-95">
<span className="font-caption-sm text-[11px] uppercase tracking-wider">Wed</span>
<span className="font-bold text-lg">25</span>
</div>
<div className="flex flex-col items-center justify-center min-w-[56px] h-20 rounded-full bg-white clay-card border-outline-variant/30 text-on-surface-variant transition-all active:scale-95">
<span className="font-caption-sm text-[11px] uppercase tracking-wider">Thu</span>
<span className="font-bold text-lg">26</span>
</div>
<div className="flex flex-col items-center justify-center min-w-[56px] h-20 rounded-full bg-white clay-card border-outline-variant/30 text-on-surface-variant transition-all active:scale-95">
<span className="font-caption-sm text-[11px] uppercase tracking-wider">Fri</span>
<span className="font-bold text-lg">27</span>
</div>
<div className="flex flex-col items-center justify-center min-w-[56px] h-20 rounded-full bg-white clay-card border-outline-variant/30 text-on-surface-variant transition-all active:scale-95">
<span className="font-caption-sm text-[11px] uppercase tracking-wider">Sat</span>
<span className="font-bold text-lg">28</span>
</div>
</div>
</section>

<section className="space-y-md">
<h3 className="font-h2 text-h2 text-text-dark">Your plan</h3>
<div className="grid grid-cols-2 gap-grid-gap">

<div className="bg-secondary-container rounded-clay p-lg clay-card flex flex-col justify-between h-[280px] relative overflow-hidden">
<div>
<div className="inline-block px-md py-1 bg-white/40 rounded-full text-[10px] font-bold text-on-secondary-container uppercase mb-md">Medium</div>
<h4 className="font-h1 text-h1 text-on-secondary-container leading-tight">Yoga Group</h4>
<div className="mt-sm space-y-1">
<p className="text-on-secondary-container/70 text-[11px] font-medium">25 Nov., 14:00-15:00</p>
<p className="text-on-secondary-container/70 text-[11px] font-medium">A5 room</p>
</div>
</div>
<div className="flex items-center gap-sm bg-white/30 backdrop-blur-md p-sm rounded-2xl">
<div className="w-8 h-8 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close up face of a friendly fitness trainer named Tiffany, cinematic lighting, soft facial features, professional yoga attire, vibrant warm color palette consistent with claymorphic design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZeK8f-Ebqi56A1-_EwYgUaAGb09fyeJ0LCjTRzS3EUbah4PcML56qD3VOQ45xTwBp95eiPrq5zECBfc5X0OE95KkMssuPiMYzupK3dOCYKJOGo0vj9oCkGfPa-jPl58EkHoNY5_iWmpr6zw1rxS2wpshSwJ8gD0XlR9p8mQKe0AWhcl4IYGHxINbwgf5iRjTu0548lVoLgg021y-mglvpvln6139tfr2vCBYQ1dWoNa0o9f0NvY7eSQ"/>
</div>
<p className="text-[10px] font-bold text-on-secondary-container leading-tight">Trainer Tiffany Way</p>
</div>

<div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
</div>

<div className="flex flex-col gap-grid-gap">

<div className="bg-accent-blue rounded-clay p-lg clay-card h-[180px] flex flex-col justify-between relative overflow-hidden">
<div>
<div className="inline-block px-md py-1 bg-white/40 rounded-full text-[10px] font-bold text-on-primary-container uppercase mb-sm">Light</div>
<h4 className="font-h2 text-h2 text-on-primary-container">Balance</h4>
</div>
<div className="space-y-0.5">
<p className="text-on-primary-container/70 text-[10px] font-medium">28 Nov., 18:00</p>
<p className="text-on-primary-container/70 text-[10px] font-medium">A2 room</p>
</div>

<div className="absolute bottom-2 right-2 w-12 h-12">
<div className="w-full h-full bg-white/40 rounded-full clay-card"></div>
<div className="absolute -top-1 -right-1 w-6 h-6 bg-white/60 rounded-full clay-card"></div>
</div>
</div>

<div className="bg-accent-pink rounded-clay p-lg clay-card h-[88px] flex items-center justify-around">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center clay-button transition-transform active:scale-90">
<svg className="w-5 h-5 text-accent-pink" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
</div>
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center clay-button transition-transform active:scale-90">
<svg className="w-5 h-5 text-accent-pink" fill="currentColor" viewbox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
</div>
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center clay-button transition-transform active:scale-90">
<svg className="w-5 h-5 text-accent-pink" fill="currentColor" viewbox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-clay p-lg clay-card flex items-center justify-between">
<div className="space-y-xs">
<p className="text-on-surface-variant text-[11px] font-bold uppercase tracking-wide">Weekly Progress</p>
<h4 className="font-h2 text-h2 text-text-dark">85% Completed</h4>
</div>
<div className="w-14 h-14 relative">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-surface-container-highest" cx="28" cy="28" fill="transparent" r="24" stroke="currentColor" strokeWidth="6"></circle>
<circle className="text-primary" cx="28" cy="28" fill="transparent" r="24" stroke="currentColor" stroke-dasharray="150" stroke-dashoffset="22" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-xl" style={{fontVariationSettings: '\'FILL\' 1'}}>bolt</span>
</div>
</div>
</section>
</main>

<nav className="fixed bottom-lg left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md h-16 bg-inverse-surface dark:bg-surface-container-highest rounded-full shadow-2xl z-50 flex items-center justify-around px-md">

<a className="flex items-center justify-center bg-primary text-on-primary rounded-full w-12 h-12 transition-all active:scale-90 duration-200 ease-out hover:scale-110" href="#">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>grid_view</span>
</a>

<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant w-12 h-12 transition-all active:scale-90 duration-200 ease-out hover:scale-110" href="#">
<span className="material-symbols-outlined">fitness_center</span>
</a>

<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant w-12 h-12 transition-all active:scale-90 duration-200 ease-out hover:scale-110" href="#">
<span className="material-symbols-outlined">favorite</span>
</a>

<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant w-12 h-12 transition-all active:scale-90 duration-200 ease-out hover:scale-110" href="#">
<span className="material-symbols-outlined">person</span>
</a>
</nav>


    </div>
  );
}
