import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PaymentReceiptUploadScreen() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="fixed top-0 w-full z-50 bg-surface border-b border-border-black flex justify-between items-center px-lg h-16">
<div className="flex items-center gap-md">
<button className="material-symbols-outlined text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full active:scale-95 duration-100">arrow_back</button>
<h1 className="font-headline-lg text-headline-lg font-bold text-primary">Pembayaran</h1>
</div>
<div className="w-10 h-10 rounded-full border border-border-black overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A stylish, vibrant close-up portrait of a modern young Indonesian woman with a creative professional look, featuring a clean minimalist background. The photography uses high-key lighting, emphasizing a trendy, high-contrast Neubrutalist aesthetic with punchy colors and sharp focus on facial features." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9AWYJQdPBgDh8X0_BvSJ2SJnqup9iwCRkntDrYlRfdtyMdHLMqHEDBdL_17CRyTF9Hi5C5odmI52Mn8QvMcFwHssxpXK-xn5xGIFWEdwwPJwErnsaXWizssawTHtA0Lbs6bFRhJKEhuF0cMbKyJp3wLss-ze9PtbSb1sVTbG9qzOyOYpCsW6YlTDWeyOuaol6i6f80vVVPNOpnbdSfAqRJHKC5tOftDZ77YanBG19sZNmzgERbSXu" />
</div>
</header>
<main className="mt-20 px-lg space-y-lg max-w-md mx-auto">

<section className="bg-accent-yellow neubrutalist-border rounded-2xl p-lg flex flex-col gap-md relative overflow-hidden">
<div className="absolute top-2 right-2 opacity-10">
<span className="material-symbols-outlined text-[64px]">receipt_long</span>
</div>
<div>
<p className="font-label-caps text-label-caps text-border-black/60 mb-1">TOTAL TAGIHAN</p>
<h2 className="font-headline-lg text-[2rem] text-border-black">Rp 435.000</h2>
</div>
<div className="border-t border-border-black/10 pt-md flex flex-col gap-xs">
<div className="flex justify-between items-center">
<span className="font-body-sm text-border-black/70">Barang + Fee Jastip</span>
<span className="font-label-bold">Rp 400.000</span>
</div>
<div className="flex justify-between items-center">
<span className="font-body-sm text-border-black/70">Packing Fee</span>
<span className="font-label-bold">Rp 10.000</span>
</div>
<div className="flex justify-between items-center">
<span className="font-body-sm text-border-black/70">Ongkos Kirim</span>
<span className="font-label-bold">Rp 25.000</span>
</div>
</div>
</section>

<section className="bg-surface neubrutalist-border rounded-2xl p-lg space-y-md">
<div className="flex items-center gap-md">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center border border-border-black">
<span className="font-bold text-blue-700 italic text-xl">BCA</span>
</div>
<div>
<p className="font-label-caps text-label-caps text-on-surface-variant">Transfer ke Bank BCA</p>
<p className="font-headline-md text-headline-md text-on-surface">JastipBuddy Official</p>
</div>
</div>
<div className="bg-surface-container-low p-md rounded-xl border border-border-black flex justify-between items-center">
<div>
<p className="font-body-sm text-on-surface-variant">Nomor Rekening</p>
<p className="font-headline-md text-headline-md tracking-wider" id="accountNumber">8821 0032 991</p>
</div>
<button className="bg-surface neubrutalist-border px-4 py-2 rounded-lg font-label-bold hover:bg-surface-container-high active:scale-95 transition-all text-primary" onclick="copyToClipboard()">
                    Salin
                </button>
</div>
</section>

<section className="relative">
<label className="block mb-2 font-label-bold text-on-surface ml-1">Bukti Transfer</label>
<div className="border-2 border-dashed border-border-black rounded-2xl bg-surface-container-lowest p-8 flex flex-col items-center justify-center gap-md cursor-pointer hover:bg-surface-container transition-colors group" id="dropZone">
<div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center border border-border-black transition-transform group-hover:scale-110">
<span className="material-symbols-outlined text-on-primary-container text-3xl">upload</span>
</div>
<div className="text-center">
<p className="font-headline-md text-headline-md text-on-surface">Unggah Bukti Transfer</p>
<p className="font-body-sm text-on-surface-variant mt-1">Mendukung format JPG, PNG, atau PDF</p>
</div>
<input accept="image/*" className="hidden" id="fileInput" type="file" />
<div className="hidden w-full mt-md" id="previewContainer">
<div className="relative w-full aspect-video rounded-xl border border-border-black overflow-hidden bg-surface">
<img className="w-full h-full object-cover" data-alt="A clean top-down flat lay photograph of a paper bank transaction receipt and a modern smartphone showing a successful payment confirmation screen. The lighting is bright and even, casting soft shadows on a minimalist pastel-colored tabletop, reflecting a professional and trustworthy financial technology environment." id="imagePreview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA14Cj2Pk_yHgeNtC-AnvCri9qhgHKazVMzC56m7PKN792hCggeNak0Tw_0vyJEYOlnNk7mqWxAwcGerH_VqeV_30_OSzYBpNPKgEMA4L3G9qpzFIqHZL0jiv3fsq6q1TI0987QpRKvGfwJNXHpm6ArZhdLkgLOFjr-GuYja1xxPysu4tkiEMIRWyKg-9Wmqsp3T3sC41tbPGGjhEDLlkWhpl1mBI1vltENSuKMJhlNH3PDKzcSzpk1" />
<button className="absolute top-2 right-2 bg-error text-on-error p-1 rounded-full border border-border-black" id="removeImage">
<span className="material-symbols-outlined text-sm">close</span>
</button>
</div>
</div>
</div>
</section>

<button className="bg-badge-pink-bg text-border-black border border-border-black font-bold rounded-full w-full py-4 text-headline-md active:translate-y-0.5 duration-75 hover:brightness-105 transition-all flex items-center justify-center gap-2">
<span className="">Kirim Bukti Pembayaran</span>
<span className="material-symbols-outlined">send</span>
</button>

<div className="flex items-center gap-md p-md bg-secondary-fixed rounded-xl border border-border-black mt-md">
<span className="material-symbols-outlined text-secondary">info</span>
<p className="font-body-sm text-on-secondary-fixed-variant">Pastikan nominal transfer sesuai hingga 3 digit terakhir untuk verifikasi otomatis yang lebih cepat.</p>
</div>
</main>

<nav className="fixed bottom-xl left-0 right-0 z-50 flex justify-around items-center px-md py-sm mx-auto max-w-md bg-surface border border-border-black rounded-full w-[calc(100%-40px)]">
<button className="flex items-center justify-center text-on-surface-variant p-md hover:bg-surface-container-highest transition-all rounded-full active:translate-y-0.5 duration-75">
<span className="material-symbols-outlined">home</span>
</button>
<button className="flex items-center justify-center text-on-surface-variant p-md hover:bg-surface-container-highest transition-all rounded-full active:translate-y-0.5 duration-75">
<span className="material-symbols-outlined">calendar_month</span>
</button>
<button className="flex items-center justify-center bg-primary-container text-on-primary-container rounded-full p-md neubrutalist-border active:translate-y-0.5 duration-75">
<span className="material-symbols-outlined active-icon">shopping_bag</span>
</button>
<button className="flex items-center justify-center text-on-surface-variant p-md hover:bg-surface-container-highest transition-all rounded-full active:translate-y-0.5 duration-75">
<span className="material-symbols-outlined">person</span>
</button>
</nav>




    </div>
  );
}
