import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShopperListWorkspace() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="sticky top-0 z-40 bg-surface-bright shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full flex justify-between items-center px-screen-margin py-md">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full overflow-hidden clay-card bg-surface active:scale-95 transition-transform duration-200">
<img className="w-full h-full object-cover" data-alt="A professional close-up portrait of a friendly personal shopper, a woman in her late 20s with a warm smile, wearing a stylish branded apron. The lighting is soft and natural, emphasizing a trustworthy and helpful personality. The background is a blurred, high-end organic grocery store with soft pastel colors and modern wooden textures, maintaining a clean light-mode aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa_K9L836y-G4669LrmE1yfGPdw7LsZgfc7ED5kj8jSvomYBcEC3u0gQFn9HMa1WRc4eGdbcXnXUOAVbfkAtsAKnB9jyXsd1Aunb6VlUaPjvX8IdyLVCpUQ8NPmWDvzja9WC6J5V9prSAvpw2nGK4YxXJkolCebya9abOMiNGCOJ__GJGGwmWdgh0AWLi0xYY4UwhzAkW7ebuyMX3PWZ8Dj6uweDSgf344axq0Ut-CF7yy9vvSr9Ce5g"/>
</div>
<h1 className="font-headline-md-mobile text-headline-md-mobile text-primary">Shopper Workspace</h1>
</div>
<button className="w-11 h-11 flex items-center justify-center rounded-full hover:opacity-80 active:scale-95 transition-all duration-200">
<span className="material-symbols-outlined text-primary text-2xl">more_vert</span>
</button>
</header>
<main className="px-screen-margin pt-md pb-32">

<div className="flex gap-md overflow-x-auto pb-4 mb-2 no-scrollbar">
<div className="flex-shrink-0 bg-surface clay-card rounded-full px-6 py-3 flex items-center gap-2 border-primary border-[1.5px]">
<span className="font-label-pill text-label-pill text-primary">Today's List</span>
<span className="bg-primary text-on-primary text-[10px] px-2 py-0.5 rounded-full">12</span>
</div>
<div className="flex-shrink-0 bg-surface-container clay-card rounded-full px-6 py-3 flex items-center gap-2">
<span className="font-label-pill text-label-pill text-text-secondary">Completed</span>
</div>
<div className="flex-shrink-0 bg-surface-container clay-card rounded-full px-6 py-3 flex items-center gap-2">
<span className="font-label-pill text-label-pill text-text-secondary">Urgent</span>
</div>
</div>

<div className="grid grid-cols-1 gap-grid-gap">

<div className="clay-card bg-surface rounded-[28px] p-lg flex flex-col gap-md">
<div className="flex gap-md">
<div className="w-24 h-24 rounded-[20px] overflow-hidden flex-shrink-0 clay-card">
<img className="w-full h-full object-cover" data-alt="A high-quality, vibrant studio shot of a large Matcha Pocky XL box. The packaging is a lush green with playful illustrations of tea leaves and creamy matcha coating. The lighting is bright and cheerful with soft shadows, set against a clean, off-white minimalist background that matches the app's tactile claymorphic visual style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1SE6lvolfCUgLDIHyf1zzBjKPxqFlGM4J2yG8u2_lKwZzyq3QoK9mOmIDhHfOxDAqhd8iFYadZirj5QdvRPw0HGwlCOnsmlaLHZUmVuKPXQAeLknQnk9mG2X0be5JZE-vNOntZVodMNJ1LiP9ZdTY4jY57wEtuh9DhLFEF6GOix6vJ8aumdRP4mo6ROosxKMdLRE6RP8rfvho0V1IrJjeng7OnNdJkDTpni6SAph64jkYbvGXEbKKzA"/>
</div>
<div className="flex flex-col justify-center flex-grow">
<span className="text-text-secondary font-caption-sm text-caption-sm uppercase tracking-wider">Aisle 4, Snacks</span>
<h3 className="font-h2 text-h2 text-text-dark mt-0.5">Matcha Pocky XL</h3>
<div className="mt-1 flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-lg">shopping_basket</span>
<span className="font-label-pill text-label-pill text-primary">Qty: 3</span>
</div>
</div>
</div>
<div className="flex items-center gap-md mt-1">

<button className="status-toggle flex-grow h-[52px] bg-surface-container-highest rounded-full flex items-center px-2 transition-all duration-300 relative overflow-hidden group" onclick="toggleStatus(this)">
<div className="toggle-pill h-10 px-6 rounded-full bg-surface-bright flex items-center justify-center shadow-sm transition-all duration-300 transform translate-x-0">
<span className="text-text-secondary font-label-pill text-label-pill whitespace-nowrap toggle-label">Sedang Dibeli</span>
</div>
<div className="absolute right-6 opacity-0 transition-opacity duration-300 check-icon">
<span className="material-symbols-outlined text-on-primary">check_circle</span>
</div>
</button>

<button className="w-[52px] h-[52px] flex-shrink-0 bg-accent-pink rounded-full flex items-center justify-center clay-button-pink active:scale-90 transition-transform">
<span className="material-symbols-outlined text-white text-xl">chat</span>
</button>
</div>
</div>

<div className="clay-card bg-surface rounded-[28px] p-lg flex flex-col gap-md">
<div className="flex gap-md">
<div className="w-24 h-24 rounded-[20px] overflow-hidden flex-shrink-0 clay-card">
<img className="w-full h-full object-cover" data-alt="A macro photograph of premium, artisan sourdough bread, showing deep golden-brown crust and dusting of flour. The setting is a rustic but clean modern kitchen with warm ambient lighting. The style is focused and high-contrast, designed to look delicious and tactile, fitting the app's energetic and approachable brand personality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCaUVSBfSheN74zTsWvmn1d-8hzUWZaX6K67i3o8iSG85GhIvS30hDdaBQ-PpP9ia7bgGuD2I65RnGZwEiho9WkiiRcmwQ6tA5gT9aML0a_TnAaFtNNMrWh0dRsTj1NyvxfRDh4wLL1PIDTwwFwp7BkvmDSCgNGV4eBsDPKz1II6qSGXxFM0np9JhM-S5EXrCMNk5f3ErTNqLc97LJnlrDGLhzMXS-RWvHnNbQRnWuYSXNdjTlDyiVDA"/>
</div>
<div className="flex flex-col justify-center flex-grow">
<span className="text-text-secondary font-caption-sm text-caption-sm uppercase tracking-wider">Aisle 1, Bakery</span>
<h3 className="font-h2 text-h2 text-text-dark mt-0.5">Artisan Sourdough</h3>
<div className="mt-1 flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-lg">shopping_basket</span>
<span className="font-label-pill text-label-pill text-primary">Qty: 1</span>
</div>
</div>
</div>
<div className="flex items-center gap-md mt-1">
<button className="status-toggle flex-grow h-[52px] bg-surface-container-highest rounded-full flex items-center px-2 transition-all duration-300 relative overflow-hidden group" onclick="toggleStatus(this)">
<div className="toggle-pill h-10 px-6 rounded-full bg-surface-bright flex items-center justify-center shadow-sm transition-all duration-300 transform translate-x-0">
<span className="text-text-secondary font-label-pill text-label-pill whitespace-nowrap toggle-label">Sedang Dibeli</span>
</div>
<div className="absolute right-6 opacity-0 transition-opacity duration-300 check-icon">
<span className="material-symbols-outlined text-on-primary">check_circle</span>
</div>
</button>
<button className="w-[52px] h-[52px] flex-shrink-0 bg-accent-pink rounded-full flex items-center justify-center clay-button-pink active:scale-90 transition-transform">
<span className="material-symbols-outlined text-white text-xl">chat</span>
</button>
</div>
</div>

<div className="clay-card bg-surface rounded-[28px] p-lg flex flex-col gap-md">
<div className="flex gap-md">
<div className="w-24 h-24 rounded-[20px] overflow-hidden flex-shrink-0 clay-card">
<img className="w-full h-full object-cover" data-alt="A crisp, vibrant product shot of organic Hass avocados, sliced in half to show the creamy light green interior and dark textured skin. The background is a soft, warm pastel yellow. The lighting is high-key and studio-quality, emphasizing freshness and a 'toy-like' high-quality finish typical of the claymorphism aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlTOxokiWjNkKYb0vAkwsbIsdmlxvhSznbZix6d1AmL6gvwobWfc5fWXoQGTlDeB-HwTzJSSV4xq0JtpNR1kMMP5-BBoCEv5EFy7r6Jz-AlZrxOepOkRFAkcWtpcWCfiXOsUCoyfm8WZDKSIDFVzbFYfShAmoSzpabkP74EBI66bmTgAeL95b3669G1F2932WB-SNd0hMRFHBjIpMSZqsBLg_SJzZabocW_N4E5ossbrdf3dY4CdGtsA"/>
</div>
<div className="flex flex-col justify-center flex-grow">
<span className="text-text-secondary font-caption-sm text-caption-sm uppercase tracking-wider">Aisle 9, Produce</span>
<h3 className="font-h2 text-h2 text-text-dark mt-0.5">Organic Avocado</h3>
<div className="mt-1 flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-lg">shopping_basket</span>
<span className="font-label-pill text-label-pill text-primary">Qty: 4</span>
</div>
</div>
</div>
<div className="flex items-center gap-md mt-1">
<button className="status-toggle flex-grow h-[52px] bg-surface-container-highest rounded-full flex items-center px-2 transition-all duration-300 relative overflow-hidden group" onclick="toggleStatus(this)">
<div className="toggle-pill h-10 px-6 rounded-full bg-surface-bright flex items-center justify-center shadow-sm transition-all duration-300 transform translate-x-0">
<span className="text-text-secondary font-label-pill text-label-pill whitespace-nowrap toggle-label">Sedang Dibeli</span>
</div>
<div className="absolute right-6 opacity-0 transition-opacity duration-300 check-icon">
<span className="material-symbols-outlined text-on-primary">check_circle</span>
</div>
</button>
<button className="w-[52px] h-[52px] flex-shrink-0 bg-accent-pink rounded-full flex items-center justify-center clay-button-pink active:scale-90 transition-transform">
<span className="material-symbols-outlined text-white text-xl">chat</span>
</button>
</div>
</div>

<div className="clay-card bg-surface rounded-[28px] p-lg flex flex-col gap-md">
<div className="flex gap-md">
<div className="w-24 h-24 rounded-[20px] overflow-hidden flex-shrink-0 clay-card">
<img className="w-full h-full object-cover" data-alt="Close-up of a carton of premium oat milk with modern, minimalist graphic design. The carton is a soft cream color with bold typography. The lighting is soft and airy, creating a pillowy soft UI feel. The product looks fresh and inviting, set in a bright, modern digital grocery environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpdDadTLlvqifXmXcwwImGgs-nqfCPF56TLjj3xX8vl0_Hz6Og_1oU5pQdXNGgYSlEocJPxxvGJTwtB81MHSbmGFvpn9mBLDVmU8N5Z3Zft4fJFujRgow81s4v-GGlqCcWPPwsSKzyQoQH0SEQ9iMxoLI_bjoJKdJgDrK-FhWf4cSAiTA9lxwxvLDS61G_gN-3KIxYNO73J69YTm-itL7z1zsNqL2I92h1IyQWnEW1YIz2QKPGfgpWvQ"/>
</div>
<div className="flex flex-col justify-center flex-grow">
<span className="text-text-secondary font-caption-sm text-caption-sm uppercase tracking-wider">Aisle 12, Dairy</span>
<h3 className="font-h2 text-h2 text-text-dark mt-0.5">Oat Milk Barista</h3>
<div className="mt-1 flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-lg">shopping_basket</span>
<span className="font-label-pill text-label-pill text-primary">Qty: 2</span>
</div>
</div>
</div>
<div className="flex items-center gap-md mt-1">
<button className="status-toggle flex-grow h-[52px] bg-surface-container-highest rounded-full flex items-center px-2 transition-all duration-300 relative overflow-hidden group" onclick="toggleStatus(this)">
<div className="toggle-pill h-10 px-6 rounded-full bg-surface-bright flex items-center justify-center shadow-sm transition-all duration-300 transform translate-x-0">
<span className="text-text-secondary font-label-pill text-label-pill whitespace-nowrap toggle-label">Sedang Dibeli</span>
</div>
<div className="absolute right-6 opacity-0 transition-opacity duration-300 check-icon">
<span className="material-symbols-outlined text-on-primary">check_circle</span>
</div>
</button>
<button className="w-[52px] h-[52px] flex-shrink-0 bg-accent-pink rounded-full flex items-center justify-center clay-button-pink active:scale-90 transition-transform">
<span className="material-symbols-outlined text-white text-xl">chat</span>
</button>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-xl left-0 right-0 z-50 flex justify-center items-center gap-grid-gap">
<div className="bg-text-dark dark:bg-on-background w-[90%] rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex items-center justify-around py-2 px-2 h-[72px]">
<a className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-full px-8 py-2 active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>home</span>
<span className="font-label-pill text-label-pill mt-0.5">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-outline-variant px-8 py-2 active:scale-90 transition-transform duration-200 hover:text-primary-fixed-dim" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-pill text-label-pill mt-0.5">Profile</span>
</a>
</div>
</nav>

<div className="fixed bottom-32 right-screen-margin z-40">
<button className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-transform clay-button-active">
<span className="material-symbols-outlined text-on-primary text-3xl">add</span>
</button>
</div>


    </div>
  );
}
