import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function OrderHistoryStatus() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="sticky top-0 z-50 bg-background pt-4 pb-2 px-screen-margin flex justify-between items-center w-full">
<button className="w-12 h-12 flex items-center justify-center bg-surface clay-card active:scale-95 transition-transform">
<span className="material-symbols-outlined text-primary">arrow_back</span>
</button>
<h1 className="font-headline-md text-headline-md font-bold text-primary">Order Status</h1>
<button className="w-12 h-12 flex items-center justify-center bg-surface clay-card active:scale-95 transition-transform">
<span className="material-symbols-outlined text-primary">help</span>
</button>
</header>
<main className="px-screen-margin mt-6 space-y-grid-gap">

<section className="clay-card p-6 bg-surface">
<div className="flex justify-between items-start mb-8">
<div>
<span className="text-on-surface-variant font-label-pill text-xs uppercase tracking-wider">Order Reference</span>
<h2 className="font-headline-md text-headline-md text-text-dark">Order #BK-9901</h2>
</div>
<div className="bg-primary-container/20 text-on-primary-container px-3 py-1 rounded-full font-label-pill text-xs">
                    In Progress
                </div>
</div>

<div className="relative pt-4 pb-8 overflow-x-auto hide-scrollbar">
<div className="flex items-center min-w-[600px] px-2">

<div className="flex flex-col items-center gap-2 relative z-10">
<div className="w-4 h-4 bg-primary rounded-full clay-dot-active"></div>
<span className="text-[10px] font-semibold text-primary text-center">Order Masuk</span>
</div>
<div className="h-[3px] flex-1 bg-primary/20 min-w-[40px]"></div>
<div className="flex flex-col items-center gap-2 relative z-10">
<div className="w-4 h-4 bg-primary rounded-full clay-dot-active"></div>
<span className="text-[10px] font-semibold text-primary text-center">Diproses</span>
</div>
<div className="h-[3px] flex-1 bg-primary/20 min-w-[40px]"></div>
<div className="flex flex-col items-center gap-2 relative z-10">
<div className="w-4 h-4 bg-primary rounded-full clay-dot-active"></div>
<span className="text-[10px] font-semibold text-primary text-center">Terbeli</span>
</div>
<div className="h-[3px] flex-1 bg-primary/20 min-w-[40px]"></div>
<div className="flex flex-col items-center gap-2 relative z-10">
<div className="w-4 h-4 bg-primary rounded-full clay-dot-active"></div>
<span className="text-[10px] font-semibold text-primary text-center">Invoice</span>
</div>
<div className="h-[3px] flex-1 bg-primary/20 min-w-[40px]"></div>

<div className="flex flex-col items-center gap-2 relative z-10">
<div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center clay-dot-active ring-4 ring-primary-container/30">
<span className="material-symbols-outlined text-white text-xs" style={{fontVariationSettings: '\'FILL\' 1'}}>payments</span>
</div>
<span className="text-[10px] font-bold text-primary text-center whitespace-nowrap">Menunggu Bayar</span>
</div>
<div className="h-[3px] flex-1 bg-outline-variant/30 min-w-[40px]"></div>
<div className="flex flex-col items-center gap-2 relative z-10 opacity-40">
<div className="w-4 h-4 bg-outline-variant rounded-full clay-dot-inactive"></div>
<span className="text-[10px] font-semibold text-on-surface-variant text-center">Validasi Lunas</span>
</div>
</div>
</div>
</section>

<div className="bento-grid">

<section className="clay-card bg-accent-blue p-5 col-span-2">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-on-primary-container">fact_check</span>
<h3 className="font-label-pill text-on-primary-container">Items Found</h3>
</div>
<ul className="space-y-3">
<li className="flex items-center justify-between bg-white/50 p-3 rounded-2xl">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl overflow-hidden bg-white">
<img className="w-full h-full object-cover" data-alt="A clean, studio-lit commercial product shot of a Mistine Glow Serum bottle, set against a soft lavender and mint green pastel background. Professional high-quality lighting creates a premium clay-like soft matte finish on the packaging, consistent with a modern skincare brand aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6pw2SVuEl929L41hVTb7xQ9fQJYuNhfRSHcuLCZnBNiriAjO9i_MCmY-3mG7N9xtxXlLkfarRO7JX_VoiWKsBEbAPMwXO-37EeHiPh0NyFzU0lSPcFQHDX0DxxbEtxJlNcL0eIYmwnIu1i-f0UsrEZ38Cayr4prknJUJTiIwMTAIat59UtX0vJmmvclpsgUuFa2-puO2xtKr7pa299XHnDpXP3---EP4vOYW8BlYGsH6XSN9i_IEc_g"/>
</div>
<span className="font-medium text-sm">Mistine Glow Serum</span>
</div>
<div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
</li>
<li className="flex items-center justify-between bg-white/50 p-3 rounded-2xl">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl overflow-hidden bg-white">
<img className="w-full h-full object-cover" data-alt="Close-up macro photography of trendy Japanese snack packaging with vibrant characters. The scene is bright and airy with high-key lighting and soft shadows, featuring a premium matte paper texture and playful design elements typical of modern Asian confectionery." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjW1-VJIVFpX7CXeQbyFyWin7vw3OyA75UFyzoEiQz-B2IGP03DubC6x9l_IrKrhqFOXJzVPnZBHQDP5f7xDJPCktPGuYQ-KmuMCkErvydatNceSLeUKDILMnuZK3xa1DL7JYFv9R5g8gu0wnKVYi4l38b5s7EMZozcfT8pvgNttsMHzu86VKjSwRK9jT96BMdnOCoxeA11zrKwZ_SuJ7Ze1rAB1yz3PGMCw67SN09OXcfUEUxCQcd7Q"/>
</div>
<span className="font-medium text-sm">Matcha Pocky XL</span>
</div>
<div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
</li>
</ul>
</section>

<section className="clay-card bg-accent-pink p-5 col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-red-600">cancel</span>
<h3 className="font-label-pill text-red-800">Out of Stock</h3>
</div>
<div className="flex items-center justify-between bg-white/30 p-3 rounded-2xl border border-white/40">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl overflow-hidden bg-white/50 grayscale">
<img className="w-full h-full object-cover" data-alt="Spicy seaweed snack packaging in a dark red and black theme, presented as a high-quality 3D render with a soft matte clay texture. The lighting is diffused and professional, emphasizing the package's shape while maintaining a playful, friendly brand identity despite the 'out of stock' context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU9ZMhORMjNCZgSEhnH1ty9wjQIbtm3HM69SQ8haJTWDVF64lbQnzcC2EnIO3-PYcOue4VLTEt_cKnssyUXpJkVYWQkygVdtDqxBqNqkylIGphG7KxrQIrke7kEC71swyuwtJe8gh7Mb4YFNLVRGZxCrNB6R0_zCRJnObAkGdjzSNwoesfcyexEMFxQKQGibYa48NwAcfbPKARNvqhpdk8fLqxHSc4gfIiozSPAlmOG5ipxINfWg57Qg"/>
</div>
<span className="font-medium text-sm text-red-900">Spicy Seaweed</span>
</div>
<span className="text-[10px] font-bold bg-white/80 text-red-600 px-2 py-1 rounded-full uppercase">Sold Out</span>
</div>
</section>

<section className="clay-card bg-surface p-5 col-span-2 md:col-span-1">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border-2 border-primary-container p-0.5">
<img className="w-full h-full rounded-full object-cover" data-alt="Portrait of a friendly, smiling female personal shopper in her 20s, wearing a trendy purple hoodie. The background is a brightly lit, modern shopping mall in Bangkok, with soft bokeh. The overall aesthetic is energetic, trustworthy, and styled like a social media profile picture with a soft clay-like finish." src="https://lh3.googleusercontent.com/aida-public/AB6AXuApl2tMePifUR1iVtP4FrrstVmn5cZNQmYtXK6BbEQ0OJdFvoZE0TbMyj0gTDskza9UfvXZ17FrcQyj51GtzCRa6fzIsNb4aMzMEN-BUi9H83q1Yoh825JMsvL5vfnrDPlLWCXSZrJiRbA9fFSqZObPCIW8VqKrNTufzkvc9URA0fw3PZai-mx8PTUf-KKdKvCJLMpnfmWYaOvGAM5G-Q4YmmFH4CXLOnae7rgVOXz-shKL5W1ETz2seQ"/>
</div>
<div>
<p className="text-xs text-on-surface-variant">Your Shopper</p>
<p className="font-bold text-primary">Sasiwimon P.</p>
</div>
<button className="ml-auto w-10 h-10 bg-primary-container/10 rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined">chat_bubble</span>
</button>
</div>
</section>
</div>

<div className="py-6">
<button className="clay-button w-full py-5 bg-primary text-white font-headline-md flex items-center justify-center gap-3 active:scale-[0.98] transition-all hover:brightness-110">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>receipt_long</span>
                View Invoice
            </button>
<p className="text-center text-on-surface-variant text-xs mt-4 font-medium italic">
                Please complete payment within 12:45:02
            </p>
</div>
</main>

<nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-text-dark rounded-full py-4 px-8 flex justify-between items-center shadow-2xl z-50">
<button className="flex flex-col items-center gap-1 group">
<div className="w-10 h-10 flex items-center justify-center rounded-full transition-all group-active:scale-90 text-surface-container-lowest">
<span className="material-symbols-outlined">home</span>
</div>
</button>
<button className="flex flex-col items-center gap-1 group">
<div className="w-12 h-12 flex items-center justify-center bg-primary-container text-on-primary-container rounded-full clay-dot-active shadow-lg shadow-primary/20 -mt-2 transition-all group-active:scale-90">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>shopping_bag</span>
</div>
<span className="text-[10px] font-bold text-primary-container">Orders</span>
</button>
<button className="flex flex-col items-center gap-1 group">
<div className="w-10 h-10 flex items-center justify-center rounded-full transition-all group-active:scale-90 text-surface-container-lowest">
<span className="material-symbols-outlined">person</span>
</div>
</button>
</nav>


    </div>
  );
}
