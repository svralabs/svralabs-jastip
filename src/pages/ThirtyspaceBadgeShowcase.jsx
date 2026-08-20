import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function ThirtyspaceBadgeShowcase() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
{/*  TopNavBar  */}
<header className="w-full sticky top-0 z-50 bg-primary-fixed border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center px-margin py-md">
<div className="font-headline-main-mobile text-headline-main-mobile font-black text-on-primary-fixed">BRUTAL.BADGE</div>
<nav className="hidden md:flex gap-lg items-center">
<a className="font-heading-card text-label-bold text-on-primary-fixed underline decoration-2 underline-offset-4" href="#">Components</a>
<a className="font-heading-card text-label-bold text-on-primary-fixed/80 hover:translate-x-[2px] hover:translate-y-[2px] transition-all" href="#">Styles</a>
<a className="font-heading-card text-label-bold text-on-primary-fixed/80 hover:translate-x-[2px] hover:translate-y-[2px] transition-all" href="#">Docs</a>
<a className="font-heading-card text-label-bold text-on-primary-fixed/80 hover:translate-x-[2px] hover:translate-y-[2px] transition-all" href="#">Themes</a>
</nav>
<div className="flex items-center gap-md">
<button className="bg-secondary-container text-on-secondary-fixed border-2 border-black rounded-full px-lg py-sm font-label-bold brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all">Sign Up</button>
</div>
</header>
<main className="max-w-7xl mx-auto px-margin py-xl space-y-xl">
{/*  Hero Header  */}
<section className="flex flex-col items-center text-center space-y-md py-xl">
<div className="inline-block bg-black px-md py-sm mb-sm brutal-shadow">
<h1 className="font-headline-main text-headline-main text-white uppercase tracking-tighter">Badge Variants</h1>
</div>
<p className="max-w-2xl text-body-md font-medium text-on-surface-variant">
                The atomic system for emphasis, categorization, and status. Built with raw geometry and mechanical depth to ensure your information is never ignored.
            </p>
</section>
{/*  Section 1: Brand Colors  */}
<section className="brutal-card p-lg rounded-xl brutal-shadow">
<h2 className="font-heading-card text-heading-card mb-lg border-b-2 border-black pb-sm inline-block">01. Brand Colors</h2>
<div className="grid grid-cols-2 md:grid-cols-5 gap-gutter mt-md">
<div className="flex flex-col items-center gap-sm">
<span className="badge-base bg-primary-fixed px-md py-xs rounded-full brutal-shadow-sm">PRIMARY</span>
<span className="text-label-bold opacity-60">Primary Yellow</span>
</div>
<div className="flex flex-col items-center gap-sm">
<span className="badge-base bg-secondary-container px-md py-xs rounded-full brutal-shadow-sm">ACCENT</span>
<span className="text-label-bold opacity-60">Cyan</span>
</div>
<div className="flex flex-col items-center gap-sm">
<span className="badge-base bg-accent-pink px-md py-xs rounded-full brutal-shadow-sm">CREATIVE</span>
<span className="text-label-bold opacity-60">Pink</span>
</div>
<div className="flex flex-col items-center gap-sm">
<span className="badge-base bg-accent-purple text-white px-md py-xs rounded-full brutal-shadow-sm">BOLD</span>
<span className="text-label-bold opacity-60">Purple</span>
</div>
<div className="flex flex-col items-center gap-sm">
<span className="badge-base bg-accent-orange px-md py-xs rounded-full brutal-shadow-sm">URGENT</span>
<span className="text-label-bold opacity-60">Orange</span>
</div>
</div>
</section>
{/*  Section 2: Sizes & Shapes  */}
<div className="grid md:grid-cols-2 gap-xl">
<section className="brutal-card p-lg rounded-xl brutal-shadow">
<h2 className="font-heading-card text-heading-card mb-lg border-b-2 border-black pb-sm inline-block">02. Sizes</h2>
<div className="flex flex-wrap items-end gap-lg mt-md">
<div className="flex flex-col items-center gap-sm">
<span className="badge-base bg-white text-[10px] px-sm py-[2px] rounded-full brutal-shadow-sm">SMALL</span>
<span className="text-label-bold">Small</span>
</div>
<div className="flex flex-col items-center gap-sm">
<span className="badge-base bg-white text-[14px] px-md py-xs rounded-full brutal-shadow-sm">MEDIUM</span>
<span className="text-label-bold">Medium</span>
</div>
<div className="flex flex-col items-center gap-sm">
<span className="badge-base bg-white text-[18px] px-lg py-sm rounded-full brutal-shadow-sm">LARGE</span>
<span className="text-label-bold">Large</span>
</div>
</div>
</section>
<section className="brutal-card p-lg rounded-xl brutal-shadow">
<h2 className="font-heading-card text-heading-card mb-lg border-b-2 border-black pb-sm inline-block">03. Shapes</h2>
<div className="flex flex-wrap gap-lg mt-md">
<div className="flex flex-col items-center gap-sm">
<span className="badge-base bg-primary-container px-md py-xs rounded-full brutal-shadow-sm">PILL SHAPE</span>
<span className="text-label-bold">Pill (full)</span>
</div>
<div className="flex flex-col items-center gap-sm">
<span className="badge-base bg-primary-container px-md py-xs rounded-lg brutal-shadow-sm">ROUNDED</span>
<span className="text-label-bold">Rounded (8px)</span>
</div>
<div className="flex flex-col items-center gap-sm">
<span className="badge-base bg-primary-container px-md py-xs rounded-none brutal-shadow-sm">SQUARE</span>
<span className="text-label-bold">Square (0px)</span>
</div>
</div>
</section>
</div>
{/*  Section 3: With Icons & Status  */}
<section className="brutal-card p-lg rounded-xl brutal-shadow">
<h2 className="font-heading-card text-heading-card mb-lg border-b-2 border-black pb-sm inline-block">04. Icons & Semantic Status</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mt-md">
<div className="badge-base bg-[#c8e6c9] px-md py-sm rounded-full brutal-shadow-sm border-2 border-black">
<span className="material-symbols-outlined text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>check_circle</span>
<span>SUCCESS</span>
</div>
<div className="badge-base bg-[#fff9c4] px-md py-sm rounded-full brutal-shadow-sm border-2 border-black">
<span className="material-symbols-outlined text-[18px]">warning</span>
<span>WARNING</span>
</div>
<div className="badge-base bg-error-container text-on-error-container px-md py-sm rounded-full brutal-shadow-sm border-2 border-black">
<span className="material-symbols-outlined text-[18px]">error</span>
<span>ERROR</span>
</div>
<div className="badge-base bg-tertiary-container px-md py-sm rounded-full brutal-shadow-sm border-2 border-black">
<span className="material-symbols-outlined text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>info</span>
<span>INFO</span>
</div>
</div>
<div className="flex flex-wrap gap-md mt-xl items-center">
<span className="text-label-bold">Live Dots:</span>
<div className="badge-base bg-white px-md py-xs rounded-full brutal-shadow-sm border-2 border-black">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span>Online</span>
</div>
<div className="badge-base bg-white px-md py-xs rounded-full brutal-shadow-sm border-2 border-black">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
<span>Busy</span>
</div>
</div>
</section>
{/*  Section 4: Interaction & Emphasis  */}
<section className="brutal-card p-lg rounded-xl brutal-shadow">
<h2 className="font-heading-card text-heading-card mb-lg border-b-2 border-black pb-sm inline-block">05. Emphasis & Weight</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-xl mt-md">
<div className="space-y-md">
<p className="text-label-bold opacity-60">Variants</p>
<div className="flex gap-md">
<span className="badge-base bg-black text-white px-md py-xs rounded-full brutal-shadow-sm">SOLID</span>
<span className="badge-base bg-transparent border-2 border-black px-md py-xs rounded-full">OUTLINE</span>
</div>
</div>
<div className="space-y-md">
<p className="text-label-bold opacity-60">Border Weights</p>
<div className="flex gap-md">
<span className="badge-base bg-white border-1 px-md py-xs rounded-full" style={{ "borderWidth": "1px" }}>1PX BORDER</span>
<span className="badge-base bg-white border-4 px-md py-xs rounded-full">4PX BORDER</span>
</div>
</div>
<div className="space-y-md">
<p className="text-label-bold opacity-60">Shadow Intensities</p>
<div className="flex gap-md">
<span className="badge-base bg-accent-pink px-md py-xs rounded-full">FLAT</span>
<span className="badge-base bg-accent-pink px-md py-xs rounded-full brutal-shadow-lg">HEAVY DEPTH</span>
</div>
</div>
</div>
</section>
{/*  Section 5: Bento Context  */}
<section className="space-y-md">
<h2 className="font-heading-card text-heading-card border-b-2 border-black pb-sm inline-block">06. Bento Grid Context</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter h-auto md:h-[400px]">
{/*  Main Feature Card  */}
<div className="md:col-span-2 brutal-card p-lg rounded-xl brutal-shadow flex flex-col justify-between overflow-hidden relative">
<div className="relative z-10">
<div className="flex gap-sm mb-md">
<span className="badge-base bg-accent-purple text-white px-sm py-[2px] text-xs rounded-full">SYSTEM DESIGN</span>
<span className="badge-base bg-accent-pink px-sm py-[2px] text-xs rounded-full">UI CORE</span>
</div>
<h3 className="font-headline-main text-3xl mb-sm">Atomic Components</h3>
<p className="max-w-md text-on-surface-variant">The building blocks of the Thirtyspace ecosystem. Badges are used here to categorize architectural decisions and project status in real-time.</p>
</div>
<div className="mt-xl flex flex-wrap gap-sm">
<div className="badge-base bg-white px-md py-sm rounded-xl brutal-shadow-sm flex items-center gap-md">
<div className="w-10 h-10 rounded-full border-2 border-black bg-primary-fixed flex items-center justify-center">
<span className="material-symbols-outlined">person</span>
</div>
<div>
<p className="text-label-bold leading-tight">Alex Rivera</p>
<span className="badge-base bg-secondary-container text-[10px] px-sm py-0 rounded-full border-black border leading-none">Lead Designer</span>
</div>
</div>
</div>
{/*  Decorative background element  */}
<div className="absolute -bottom-8 -right-8 w-48 h-48 border-4 border-black bg-primary-fixed opacity-20 rotate-12 -z-0"></div>
</div>
{/*  Status Card  */}
<div className="brutal-card p-lg rounded-xl brutal-shadow bg-surface-container flex flex-col items-center justify-center text-center space-y-md">
<div className="w-20 h-20 rounded-full border-2 border-black bg-white brutal-shadow flex items-center justify-center">
<span className="material-symbols-outlined text-4xl" style={{ "fontVariationSettings": "'FILL' 1" }}>speed</span>
</div>
<h4 className="font-heading-card">Pipeline Status</h4>
<span className="badge-base bg-[#c8e6c9] px-lg py-sm rounded-full brutal-shadow-sm">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        ALL SYSTEMS GO
                    </span>
<p className="text-sm opacity-60">Verified 2m ago</p>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full mt-xl bg-surface-container-highest border-t-2 border-black flex flex-col md:flex-row justify-between items-center px-margin py-xl gap-gutter">
<div className="font-label-bold text-label-bold text-on-surface">© 2024 NEUBRUTAL UI. BUILT FOR THE BOLD.</div>
<div className="flex gap-lg">
<a className="text-on-surface-variant hover:text-accent-orange transition-colors" href="#">Privacy</a>
<a className="text-on-surface-variant hover:text-accent-orange transition-colors" href="#">Terms</a>
<a className="text-on-surface-variant hover:text-accent-orange transition-colors" href="#">Globe</a>
<a className="text-on-surface-variant hover:text-accent-orange transition-colors" href="#">Globe</a>
</div>
</footer>


    </div>
  );
}
