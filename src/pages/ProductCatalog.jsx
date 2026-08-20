import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="bg-background w-full top-0 left-0 flex justify-between items-center px-screen-margin py-md sticky z-40">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container shadow-sm border-2 border-white">
<img className="w-full h-full object-cover" data-alt="A stylized 3D avatar portrait of a friendly Thai personal shopper with a soft matte finish, set against a clean purple background. The character has a cheerful expression, wearing a trendy streetwear cap, rendered in a high-quality claymorphic digital art style with soft studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTUPCwuYkUIHHQ5b9wS1XCN0uq6L1UOyx4FwrZ6Y8MkljNdYjexUVgFMfjEmazdmMyFIiNI1FiPMvtBaC33bDNM0DVnctrhccJ1qJHH_zHt20yIxEj9Njo-4Pk86QDfIZvUe0YClVX36mFSGS5w-t8mKXWj_4bUKTI055tXgVvuIWsGds2s7h_3exAZC74d7ZUhuE--OeKEcBCSarX7xMgzUd62ocnvuCeqYzrgzQ8eyuqQ9PXpisr_Q"/>
</div>
<h1 className="font-headline-md text-headline-md font-bold text-primary">Daily Flow</h1>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface transition-transform active:scale-95 hover:opacity-80">
<span className="material-symbols-outlined text-primary" data-icon="search">search</span>
</button>
</header>

<main className="px-screen-margin">

<div className="py-xl">
<h2 className="font-headline-lg text-headline-lg tracking-tight text-text-dark">Bangkok Sale Catalog</h2>
<p className="text-text-secondary font-body-md mt-xs">Curated deals from Siam Square &amp; Beyond</p>
</div>

<nav className="flex overflow-x-auto gap-md hide-scrollbar pb-lg -mx-screen-margin px-screen-margin">
<button className="bg-primary-container text-on-primary-container px-lg py-sm rounded-full font-label-pill text-label-pill whitespace-nowrap clay-shadow">
                All
            </button>
<button className="bg-surface text-text-secondary px-lg py-sm rounded-full font-label-pill text-label-pill whitespace-nowrap shadow-sm border border-outline-variant/30">
                Fashion
            </button>
<button className="bg-surface text-text-secondary px-lg py-sm rounded-full font-label-pill text-label-pill whitespace-nowrap shadow-sm border border-outline-variant/30">
                Skincare
            </button>
<button className="bg-surface text-text-secondary px-lg py-sm rounded-full font-label-pill text-label-pill whitespace-nowrap shadow-sm border border-outline-variant/30">
                Snacks
            </button>
<button className="bg-surface text-text-secondary px-lg py-sm rounded-full font-label-pill text-label-pill whitespace-nowrap shadow-sm border border-outline-variant/30">
                Electronics
            </button>
</nav>

<div className="grid grid-cols-2 gap-grid-gap">

<div className="col-span-1 row-span-2 rounded-clay bg-[#FBBF24] p-lg flex flex-col justify-between clay-shadow relative overflow-hidden h-[340px]">
<div className="clay-card-inner absolute inset-0 pointer-events-none"></div>
<div className="z-10 h-full flex flex-col">
<span className="bg-white/30 backdrop-blur-md px-sm py-xs rounded-full text-[10px] font-bold self-start text-dark uppercase tracking-wider">New Arrival</span>
<div className="mt-xl flex-grow flex items-center justify-center">
<img className="w-full h-auto drop-shadow-2xl" data-alt="A premium 3D claymorphic streetwear sneaker illustration with soft rounded edges and a matte plastic texture. The shoe features bold purple and white accents, floating slightly in mid-air with soft ambient occlusion shadows. The style is playful and tactile, matching a high-end digital toy aesthetic against a bright yellow background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0T7VEKmggwNY_cKA_B3MSNlotUL31bGfiF_Sghdp8jgqgQDATK88oL2heVDpXFhRIQuLAZsG2RR9KeGW3ZaPs4NhxuBdTkKrGKZoa1L--8m_rWqs0m1dbVYoDRmMhcI_BkG6pBzOmcy-h72a_Pc9Yen9mmLXHVlNiHA-64T5JaYcdDI2t_OKLuBbMcthkkeNp2g2Fc0HkFogdCfLok_rbqbDaam_8myPvi-lXRJhWAiWecwOyrROhHQ"/>
</div>
<div className="mt-auto">
<h3 className="font-headline-md text-headline-md text-text-dark leading-tight">Streetwear Tee</h3>
<p className="font-body-md text-text-dark/80 mt-xs">฿450 + 50 Fee</p>
</div>
</div>
<button className="absolute bottom-md right-md w-11 h-11 bg-white rounded-full flex items-center justify-center clay-button transition-all active:scale-90 z-20">
<span className="material-symbols-outlined text-text-dark font-bold">add</span>
</button>
</div>

<div className="col-span-1 rounded-clay bg-accent-blue p-lg flex flex-col justify-between clay-shadow relative overflow-hidden h-[164px]">
<div className="clay-card-inner absolute inset-0 pointer-events-none"></div>
<div className="z-10 flex flex-col justify-between h-full">
<div className="flex justify-between items-start">
<div className="w-16 h-16">
<img className="w-full h-full object-contain" data-alt="A 3D claymorphic glass serum bottle with a white dropper cap, rendered in a soft matte finish. The bottle has a gentle blue tint and contains a translucent liquid. The lighting is soft and diffused, creating a calm and premium cosmetic vibe within a blue-themed digital interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqZVsKM60KFXMLz-g646xftbFsHW_NDqDB626oydYxbgZWaq5aEX3IfTtFAYPh4dY8nrpB4NrNSHV0rPkY3HRYl45O5Q9jVQNDwuK_tcv2fvB7gNJYiAaKZdKMD66AANSDtfadVQF4idGVzrvEBqq8-toWp5yKqWPvjr9rC00y_h-3XncJsfyR1FKzkXgjguJ7DHRLWlHiBa3MjUFtw4C0wSUofmxHt5I4b-TfbrhuH9aP0PdhyJezxQ"/>
</div>
</div>
<div>
<h3 className="font-label-pill text-label-pill text-text-dark">Glow Serum</h3>
<p className="text-[12px] font-semibold text-text-dark/70">฿800 + 100 Fee</p>
</div>
</div>
<button className="absolute bottom-md right-md w-11 h-11 bg-white rounded-full flex items-center justify-center clay-button transition-all active:scale-90 z-20">
<span className="material-symbols-outlined text-text-dark font-bold">add</span>
</button>
</div>

<div className="col-span-1 rounded-clay bg-accent-pink p-lg flex flex-col justify-between clay-shadow relative overflow-hidden h-[164px]">
<div className="clay-card-inner absolute inset-0 pointer-events-none"></div>
<div className="z-10 flex flex-col justify-between h-full">
<div className="flex justify-between items-start">
<div className="w-16 h-16">
<img className="w-full h-full object-contain" data-alt="A 3D claymorphic bag of Thai seaweed snacks with a glossy but soft-touch finish. The packaging is stylized with vibrant green and red elements, appearing puffed up like a toy. It sits in a high-contrast environment with soft shadows, fitting a playful bento-grid design for a shopping app." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCDtd9PaekmNRt6ApIMiSDwjCYfb23LO4Dpd3tYMAa_08gUppDuzsg_mX1gqvHu-cUF9ErkIxzXKvFYrvWZEnBcwlHLVkgf3oQocUAbdZT6jIDawwsuLHRip_0Nzy2xgp2-XVqfXohFo_NMqKms9EAbZmwHmwFD8C8QHWGjEW17n1Ukw9762jucUMyA_6CA_RXeR2CoBssV3HJyfnfHuv4L259R-VfGVFyWWaRUXLNLYLeG9XA7V8aOw"/>
</div>
</div>
<div>
<h3 className="font-label-pill text-label-pill text-text-dark">Spicy Seaweed</h3>
<p className="text-[12px] font-semibold text-text-dark/70">฿120 + 30 Fee</p>
</div>
</div>
<button className="absolute bottom-md right-md w-11 h-11 bg-white rounded-full flex items-center justify-center clay-button transition-all active:scale-90 z-20">
<span className="material-symbols-outlined text-text-dark font-bold">add</span>
</button>
</div>

<div className="col-span-2 rounded-clay bg-surface-container-high p-lg flex items-center justify-between clay-shadow relative overflow-hidden h-[100px]">
<div className="clay-card-inner absolute inset-0 pointer-events-none"></div>
<div className="z-10 flex items-center gap-lg">
<div className="w-14 h-14 bg-white/50 rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-3xl" style={{fontVariationSettings: '\'FILL\' 1'}}>bolt</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-text-dark">Flash Sale Ends In</h3>
<p className="text-primary font-bold text-lg">02:45:12</p>
</div>
</div>
<button className="z-10 bg-inverse-surface text-white px-lg py-sm rounded-full font-label-pill transition-transform active:scale-95">
                    View
                 </button>
</div>
</div>
</main>

<nav className="fixed bottom-lg left-0 right-0 mx-auto z-50 flex justify-around items-center h-16 px-md bg-inverse-surface dark:bg-surface-container-highest shadow-2xl fixed bottom-lg left-1/2 -translate-x-1/2 w-[calc(100%-32px)] rounded-full">

<a className="flex items-center justify-center bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container rounded-full w-12 h-12 active:scale-90 transition-all duration-200 ease-out hover:scale-110" href="#">
<span className="material-symbols-outlined" data-icon="grid_view" style={{fontVariationSettings: '\'FILL\' 1'}}>grid_view</span>
</a>
<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant w-12 h-12 active:scale-90 transition-all duration-200 ease-out hover:scale-110" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
</a>
<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant w-12 h-12 active:scale-90 transition-all duration-200 ease-out hover:scale-110" href="#">
<span className="material-symbols-outlined" data-icon="favorite">favorite</span>
</a>
<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant w-12 h-12 active:scale-90 transition-all duration-200 ease-out hover:scale-110" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
</a>
</nav>


    </div>
  );
}
