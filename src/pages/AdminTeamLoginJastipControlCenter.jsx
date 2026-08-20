import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminTeamLoginJastipControlCenter() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="fixed top-0 w-full z-50 flex items-center justify-center px-lg h-16 bg-surface border-b border-border-black">
<h1 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter">Jastip Control Center</h1>
</header>

<main className="w-full max-w-[420px] mt-16 animate-in fade-in duration-700">

<div className="relative w-full mb-8 flex justify-center">
<div className="absolute -top-4 -left-4 w-12 h-12 bg-accent-yellow border-2 border-border-black rounded-lg rotate-[-12deg] flex items-center justify-center">
<span className="material-symbols-outlined text-border-black" style={{fontVariationSettings: '\'FILL\' 1'}}>bolt</span>
</div>
<div className="absolute -bottom-4 -right-2 w-16 h-16 bg-accent-pink border-2 border-border-black rounded-full rotate-[15deg] flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A vibrant digital illustration of a smiling delivery courier holding a parcel, styled in high-contrast neubrutalist art with thick black outlines and bold pastel fills. The lighting is flat and bright, consistent with a modern SaaS aesthetic, using primary green and soft pinks." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB24gGDU8TK9GFiXcwYCLujTevcjhXXc6mZTUDIuJNpINVSHaOqzvN7pB4LFrVJ3U3avXJBOtH0b_UMiVYWHMCosnzgo43s7qHBwAGdF6yD0ZOQD5ikHwZeVasPnXgFpZY5KxPa6b5zdb0bS2Q-pKB6lhQSYJddyi1yfwbdreDnn2nwtKj5pTZq2izzsNg5ShNCUIbkH-6K1846L62oLnmFpLdG5GIWSDLYXy4BajpAUCv_8hfH6qS6" />
</div>

<div className="w-24 h-24 bg-primary-container border-2 border-border-black rounded-2xl flex items-center justify-center rotate-3 neubrutalist-shadow">
<span className="material-symbols-outlined text-border-black scale-[2.5]" style={{fontVariationSettings: '\'FILL\' 1'}}>shield_person</span>
</div>
</div>
<div className="text-center mb-xl">
<h2 className="font-headline-lg text-headline-lg text-text-primary mb-xs">Welcome Back</h2>
<p className="font-body-md text-body-md text-text-secondary">Secure access to your dashboard</p>
</div>

<div className="mb-2xl">
<label className="font-label-bold text-label-bold text-on-surface uppercase mb-sm block px-1">Select Role</label>
<div className="flex p-1 bg-surface-container border-2 border-border-black rounded-xl overflow-hidden" id="roleSwitcher">
<button className="flex-1 py-3 px-2 font-label-bold text-label-bold transition-all rounded-lg bg-primary-container text-on-primary-container border border-border-black" data-role="Admin Owner" onclick="switchRole(this)">
                    Admin Owner
                </button>
<button className="flex-1 py-3 px-2 font-label-bold text-label-bold transition-all rounded-lg text-on-surface hover:bg-surface-variant" data-role="Tim Sorver" onclick="switchRole(this)">
                    Tim Sorver
                </button>
<button className="flex-1 py-3 px-2 font-label-bold text-label-bold transition-all rounded-lg text-on-surface hover:bg-surface-variant" data-role="Customer View" onclick="switchRole(this)">
                    Customer View
                </button>
</div>
</div>

<form className="space-y-xl" onsubmit="return false">
<div className="space-y-sm">
<label className="font-label-bold text-label-bold text-on-surface uppercase px-1" htmlFor="email">Email Address</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-secondary">mail</span>
<input className="w-full pl-12 pr-4 py-4 bg-surface border border-border-black rounded-xl font-body-md text-body-md focus:ring-0 focus:outline-none focus:bg-accent-yellow transition-colors placeholder:text-text-secondary/50" id="email" placeholder="admin@jastip.com" type="email" />
</div>
</div>
<div className="space-y-sm">
<div className="flex justify-between items-center px-1">
<label className="font-label-bold text-label-bold text-on-surface uppercase" htmlFor="password">Password</label>
<a className="font-label-bold text-label-bold text-primary hover:underline" href="#">Forgot?</a>
</div>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-secondary">lock</span>
<input className="w-full pl-12 pr-4 py-4 bg-surface border border-border-black rounded-xl font-body-md text-body-md focus:ring-0 focus:outline-none focus:bg-accent-yellow transition-colors" id="password" placeholder="••••••••" type="password" />
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary" type="button">
<span className="material-symbols-outlined">visibility</span>
</button>
</div>
</div>
<div className="pt-2">
<button className="w-full py-5 bg-secondary-container text-text-primary border-2 border-border-black rounded-full font-headline-md text-headline-md hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-sm active:scale-95" type="submit">
                    Masuk Dashboard
                    <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</form>
<div className="mt-2xl text-center">
<p className="font-body-sm text-body-sm text-text-secondary">
                Need help? <a className="font-label-bold text-label-bold text-primary border-b border-primary" href="#">Contact System Support</a>
</p>
</div>
</main>

<footer className="mt-auto py-lg text-center opacity-40">
<span className="font-label-caps text-label-caps uppercase">System Build v4.2.0-Alpha</span>
</footer>





    </div>
  );
}
