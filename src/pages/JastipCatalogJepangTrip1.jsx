import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function JastipCatalogJepangTrip1() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
{/*  Top Navigation Bar  */}
<header className="bg-primary border-b-2 border-black sticky top-0 z-50 flex justify-between items-center px-margin py-sm w-full shadow-neubrutal">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-on-primary" data-icon="shopping_bag">shopping_bag</span>
<h1 className="font-headline-main-mobile text-[24px] text-on-primary uppercase tracking-tighter">Jastip Catalog</h1>
</div>
<button className="w-10 h-10 flex items-center justify-center bg-accent-pink border-2 border-black shadow-neubrutal-sm active:translate-y-0.5 active:shadow-none transition-all">
<span className="material-symbols-outlined" data-icon="search">search</span>
</button>
</header>
<main className="px-margin pt-6">
{/*  Event Info Section  */}
<section className="mb-6">
<div className="bg-primary-container border-2 border-black p-4 shadow-neubrutal rounded-xl">
<div className="flex justify-between items-start">
<div>
<p className="font-label-bold text-on-primary-container uppercase text-xs tracking-widest mb-1">Live Event</p>
<h2 className="font-heading-card text-on-primary-fixed">Event Jepang Trip</h2>
<div className="flex items-center mt-1 text-on-primary-fixed-variant">
<span className="material-symbols-outlined text-sm mr-1" data-icon="calendar_today">calendar_today</span>
<span className="text-sm font-bold">12–18 Jul 2026</span>
</div>
</div>
<div className="bg-accent-orange text-white px-3 py-1 border-2 border-black font-label-bold shadow-neubrutal-sm">
                        ACTIVE
                    </div>
</div>
</div>
</section>
{/*  Search Bar  */}
<div className="relative mb-6">
<input className="w-full h-14 pl-12 pr-4 bg-white border-2 border-black font-label-bold shadow-neubrutal-sm focus:outline-none focus:ring-0 rounded-xl placeholder-outline" placeholder="Cari barang titipan..." type="text"/>
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2" data-icon="search">search</span>
</div>
{/*  Categories Chips  */}
<div className="flex overflow-x-auto no-scrollbar gap-3 mb-8 pb-2">
<button className="whitespace-nowrap px-6 py-2 bg-secondary-container text-on-secondary-container border-2 border-black font-label-bold rounded-full shadow-neubrutal-sm active:translate-y-0.5 active:shadow-none transition-all">Semua</button>
<button className="whitespace-nowrap px-6 py-2 bg-white text-on-surface border-2 border-black font-label-bold rounded-full shadow-neubrutal-sm hover:bg-accent-pink active:translate-y-0.5 active:shadow-none transition-all">Skincare</button>
<button className="whitespace-nowrap px-6 py-2 bg-white text-on-surface border-2 border-black font-label-bold rounded-full shadow-neubrutal-sm hover:bg-accent-pink active:translate-y-0.5 active:shadow-none transition-all">Snack</button>
<button className="whitespace-nowrap px-6 py-2 bg-white text-on-surface border-2 border-black font-label-bold rounded-full shadow-neubrutal-sm hover:bg-accent-pink active:translate-y-0.5 active:shadow-none transition-all">Fashion</button>
<button className="whitespace-nowrap px-6 py-2 bg-white text-on-surface border-2 border-black font-label-bold rounded-full shadow-neubrutal-sm hover:bg-accent-pink active:translate-y-0.5 active:shadow-none transition-all">Mainan</button>
</div>
{/*  Product Grid  */}
<div className="grid grid-cols-2 gap-4 mb-10">
{/*  Card 1: Hada Labo  */}
<div className="bg-white border-2 border-black shadow-neubrutal rounded-xl overflow-hidden flex flex-col">
<div className="relative aspect-square border-b-2 border-black overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A high-contrast studio photograph of a Hada Labo Gokujyun Lotion bottle on a vibrant yellow background. The lighting is harsh and direct, characteristic of neubrutalist photography, creating deep shadows. The product is center-aligned, showcasing its clean minimalist packaging with Japanese text. The overall aesthetic is bold, modern, and high-fidelity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn_2-zPEoXEcPQArGUXUHzft6MLSWYK2SmMuROCygS7FoDXi-WBMoF76jTsARdEtnNgnj6O-cELokk-jC9QibAGIEezLLi3KAIjFt5WWs4OOXJXsGHwS_7gzNPdhQ4wGj0QyJD8g7hfUCtiDXbYaoxzEUJuQ9pP9e4Wqw_yd2jcj6tSz_qDvVGSiluxU1p0UVurHYCWX_qzVSyxqo48JRV_GcJF-VtNH60rwyqTjaQAHRJlZeie_Tb"/>
<div className="absolute top-2 left-2 bg-accent-purple text-white text-[10px] font-bold px-2 py-1 border-2 border-black shadow-neubrutal-sm uppercase">SKINCARE</div>
</div>
<div className="p-3 flex-grow flex flex-col">
<h3 className="font-label-bold text-sm text-on-surface leading-tight mb-2 line-clamp-2">Hada Labo Lotion Gokujyun Premium</h3>
<p className="font-headline-main text-[16px] text-primary mb-2">Rp185.000</p>
<div className="mt-auto">
<span className="inline-block bg-tertiary-container text-on-tertiary-container text-[10px] font-bold px-2 py-0.5 border border-black mb-3">Fee 10%</span>
<button className="w-full py-2 bg-accent-orange text-white border-2 border-black font-label-bold shadow-neubrutal-sm active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1 rounded-lg">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                            Titip
                        </button>
</div>
</div>
</div>
{/*  Card 2: ERROR PLACEHOLDER  */}
<div className="bg-white border-2 border-black shadow-neubrutal rounded-xl overflow-hidden flex flex-col">
<div className="relative aspect-square border-b-2 border-black bg-surface-variant flex flex-col items-center justify-center p-4 text-center">
{/*  Patterned Background via CSS Grid/Stripes  */}
<div className="absolute inset-0 opacity-10 pointer-events-none" style={{ "backgroundImage": "radial-gradient(#000 1px, transparent 0)", "backgroundSize": "10px 10px" }}></div>
<span className="material-symbols-outlined text-4xl mb-2 text-outline" data-icon="image_not_supported">image_not_supported</span>
<p className="font-label-bold text-[10px] uppercase text-outline">Product Image Missing</p>
<div className="absolute top-2 left-2 bg-accent-pink text-black text-[10px] font-bold px-2 py-1 border-2 border-black shadow-neubrutal-sm uppercase">SNACK</div>
</div>
<div className="p-3 flex-grow flex flex-col">
<h3 className="font-label-bold text-sm text-on-surface leading-tight mb-2 line-clamp-2">KitKat Matcha Kyoto Limited Edition</h3>
<p className="font-headline-main text-[16px] text-primary mb-2">Rp95.000</p>
<div className="mt-auto">
<span className="inline-block bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold px-2 py-0.5 border border-black mb-3">Fee Rp15.000</span>
<button className="w-full py-2 bg-accent-orange text-white border-2 border-black font-label-bold shadow-neubrutal-sm active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1 rounded-lg">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                            Titip
                        </button>
</div>
</div>
</div>
{/*  Card 3: Uniqlo  */}
<div className="bg-white border-2 border-black shadow-neubrutal rounded-xl overflow-hidden flex flex-col">
<div className="relative aspect-square border-b-2 border-black overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A lifestyle product shot of a neatly folded Uniqlo Airism shirt in a soft grey color. The composition uses a flat-lay perspective on a clean, stark white background. Sharp, geometric black shadows define the edges of the fabric. The image represents the clean, functional aesthetic of Japanese fashion within a neubrutalist UI context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB88eC9r3J1XD0ooddSm7_0E2f2YCT42EB4CeP3I_mF4ECq1QzqJ56zuidg7uvBccZ2kq61dWnD0-GrO5V8n7lsic9xYzTYrSpCAZ3Kvc4nXnYCm_3xs2bzCzIAeozgiUcLK8eAndARAA9o6fUhaiKtg0hQc9x5eyiVxFDX8YOKnZ8PXklI9F3IKr8LwSr_sknyZq_OXuR_kehIpBqBkpSIciweKsE_SO-scKNQwEU40pZ3L7aTiU-e"/>
<div className="absolute top-2 left-2 bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-1 border-2 border-black shadow-neubrutal-sm uppercase">FASHION</div>
</div>
<div className="p-3 flex-grow flex flex-col">
<h3 className="font-label-bold text-sm text-on-surface leading-tight mb-2 line-clamp-2">Uniqlo Airism V-Neck Mesh</h3>
<p className="font-headline-main text-[16px] text-primary mb-2">Rp245.000</p>
<div className="mt-auto">
<span className="inline-block bg-tertiary-container text-on-tertiary-container text-[10px] font-bold px-2 py-0.5 border border-black mb-3">Fee 10%</span>
<button className="w-full py-2 bg-accent-orange text-white border-2 border-black font-label-bold shadow-neubrutal-sm active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1 rounded-lg">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                            Titip
                        </button>
</div>
</div>
</div>
{/*  Card 4: Mainan  */}
<div className="bg-white border-2 border-black shadow-neubrutal rounded-xl overflow-hidden flex flex-col">
<div className="relative aspect-square border-b-2 border-black overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A vibrant, close-up photograph of a Japanese Gashapon toy, specifically a miniature anime figure with bright saturated colors. The background is a solid cyan color with a hard black line separating the foreground. The lighting is pop-art style with high contrast and no soft gradients, fitting perfectly with a neubrutalist design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfpV5z6kranczX49Ok-XCP-XsCjMV4pdeWcdwY7DK6OGm7cIHgUryro6xZFk3EEBB-7UVrwjl-hWHTj84oDxAbpmWo44vctxwCJDzMsK7Q2GrLBG6KuQlnyTzHRHq9GcN0_P8hbADUQw4AcIC11BhG6JCURllNzQ-2Efy3jYs5gH51hmjhMYyaaSVYfUrYcb9324wRqr4WcT8h547NT1SLauTgeC1UufJRvzs38FghqUr9tMQrm702"/>
<div className="absolute top-2 left-2 bg-primary-container text-on-primary-container text-[10px] font-bold px-2 py-1 border-2 border-black shadow-neubrutal-sm uppercase">MAINAN</div>
</div>
<div className="p-3 flex-grow flex flex-col">
<h3 className="font-label-bold text-sm text-on-surface leading-tight mb-2 line-clamp-2">Gashapon Bandai - Demon Slayer Vol 3</h3>
<p className="font-headline-main text-[16px] text-primary mb-2">Rp55.000</p>
<div className="mt-auto">
<span className="inline-block bg-accent-pink text-black text-[10px] font-bold px-2 py-0.5 border border-black mb-3">Fee Rp10.000</span>
<button className="w-full py-2 bg-accent-orange text-white border-2 border-black font-label-bold shadow-neubrutal-sm active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1 rounded-lg">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                            Titip
                        </button>
</div>
</div>
</div>
</div>
</main>
{/*  Bottom Navigation Bar  */}
<nav className="fixed bottom-0 w-full z-50 bg-surface border-t-2 border-black h-20 px-2 flex justify-around items-center shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)]">
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-accent-orange active:scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-label-bold text-[12px]">Beranda</span>
</a>
{/*  Active Tab: Katalog  */}
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container border-2 border-black rounded-full px-4 py-1 shadow-neubrutal-sm active:scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined" data-icon="import_contacts" style={{ "fontVariationSettings": "'FILL' 1" }}>import_contacts</span>
<span className="font-label-bold text-[12px]">Katalog</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-accent-orange active:scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span className="font-label-bold text-[12px]">Transaksi</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-accent-orange active:scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-bold text-[12px]">Akun</span>
</a>
</nav>


    </div>
  );
}
