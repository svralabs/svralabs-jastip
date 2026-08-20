import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function ThirtyspaceButtonShowcase() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-gutter h-16 bg-primary border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
<div className="font-headline-main-mobile text-headline-main-mobile font-black text-on-primary">
            Thirtyspace
        </div>
<nav className="hidden md:flex items-center gap-lg">
<a className="text-on-primary/80 font-label-bold text-label-bold hover:translate-x-[2px] hover:translate-y-[2px] transition-all" href="#">Components</a>
<a className="text-on-primary/80 font-label-bold text-label-bold hover:translate-x-[2px] hover:translate-y-[2px] transition-all" href="#">Layout</a>
<a className="text-on-primary/80 font-label-bold text-label-bold hover:translate-x-[2px] hover:translate-y-[2px] transition-all" href="#">Tokens</a>
<a className="text-on-primary underline decoration-2 underline-offset-4 font-label-bold text-label-bold" href="#">Guides</a>
</nav>
<button className="neubrutalist-btn bg-primary-container px-lg py-sm rounded-full text-on-primary-container text-label-bold uppercase">
            Get Started
        </button>
</header>
<main className="pt-32 pb-xl px-margin flex-grow max-w-7xl mx-auto w-full">
{/*  Hero Section  */}
<section className="text-center mb-xl">
<h1 className="font-headline-main-mobile md:text-headline-main font-black inline-block px-md py-xs bg-black text-white transform -rotate-1 mb-md">
                BUTTON VARIANTS
            </h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mt-lg">
                The atomic foundation of our interactive ecosystem. Built with pure neubrutalist principles: heavy borders, mechanical depth, and high-impact color tokens.
            </p>
</section>
{/*  Showcase Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
{/*  Category 1: Brand Colors  */}
<div className="bg-surface border-2 border-black rounded-xl p-lg neubrutalist-shadow">
<h3 className="font-heading-card text-heading-card mb-lg uppercase tracking-tight border-b-2 border-black pb-xs inline-block">BRAND COLORS</h3>
<div className="flex flex-wrap gap-md mt-md">
<button className="neubrutalist-btn bg-primary-container text-on-primary-container px-lg py-sm rounded-full text-label-bold">Primary Yellow</button>
<button className="neubrutalist-btn bg-secondary-container text-on-secondary-container px-lg py-sm rounded-full text-label-bold">Accent Cyan</button>
<button className="neubrutalist-btn bg-accent-pink text-white px-lg py-sm rounded-full text-label-bold">Accent Pink</button>
<button className="neubrutalist-btn bg-accent-purple text-white px-lg py-sm rounded-full text-label-bold">Accent Purple</button>
<button className="neubrutalist-btn bg-accent-orange text-white px-lg py-sm rounded-full text-label-bold">Accent Orange</button>
</div>
</div>
{/*  Category 2: Sizes  */}
<div className="bg-surface border-2 border-black rounded-xl p-lg neubrutalist-shadow">
<h3 className="font-heading-card text-heading-card mb-lg uppercase tracking-tight border-b-2 border-black pb-xs inline-block">SIZES</h3>
<div className="flex items-end gap-md mt-md">
<button className="neubrutalist-btn bg-primary-container text-on-primary-container px-md py-xs rounded-full text-xs font-bold">Small</button>
<button className="neubrutalist-btn bg-primary-container text-on-primary-container px-lg py-sm rounded-full text-label-bold">Medium</button>
<button className="neubrutalist-btn bg-primary-container text-on-primary-container px-xl py-md rounded-full text-xl font-extrabold">Large</button>
</div>
</div>
{/*  Category 3: States  */}
<div className="bg-surface border-2 border-black rounded-xl p-lg neubrutalist-shadow">
<h3 className="font-heading-card text-heading-card mb-lg uppercase tracking-tight border-b-2 border-black pb-xs inline-block">STATES (MOCKUP)</h3>
<div className="flex flex-wrap gap-md mt-md">
<div className="flex flex-col items-center gap-xs">
<span className="text-xs font-label-bold text-on-surface-variant uppercase">Default</span>
<button className="neubrutalist-btn bg-secondary-container text-on-secondary-container px-lg py-sm rounded-full text-label-bold">Click Me</button>
</div>
<div className="flex flex-col items-center gap-xs">
<span className="text-xs font-label-bold text-on-surface-variant uppercase">Hover (2px)</span>
<button className="neubrutalist-btn bg-secondary-container text-on-secondary-container px-lg py-sm rounded-full text-label-bold btn-state-hover">Hovered</button>
</div>
<div className="flex flex-col items-center gap-xs">
<span className="text-xs font-label-bold text-on-surface-variant uppercase">Active (4px)</span>
<button className="neubrutalist-btn bg-secondary-container text-on-secondary-container px-lg py-sm rounded-full text-label-bold btn-state-active">Pressed</button>
</div>
</div>
<p className="text-xs font-body-md mt-lg text-on-surface-variant italic border-l-4 border-accent-orange pl-sm">
                    Interactive simulation: The actual CSS handles the translation via :hover and :active pseudo-classes.
                </p>
</div>
{/*  Category 4: Icons  */}
<div className="bg-surface border-2 border-black rounded-xl p-lg neubrutalist-shadow">
<h3 className="font-heading-card text-heading-card mb-lg uppercase tracking-tight border-b-2 border-black pb-xs inline-block">WITH ICONS</h3>
<div className="flex flex-wrap gap-md mt-md">
<button className="neubrutalist-btn bg-accent-purple text-white px-lg py-sm rounded-full text-label-bold">
<span className="material-symbols-outlined" data-icon="rocket_launch">rocket_launch</span>
                        Leading Icon
                    </button>
<button className="neubrutalist-btn bg-accent-orange text-white px-lg py-sm rounded-full text-label-bold">
                        Trailing Icon
                        <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
<button className="neubrutalist-btn bg-white text-black px-sm py-sm rounded-full text-label-bold w-12 h-12">
<span className="material-symbols-outlined" data-icon="favorite" data-weight="fill" style={{ "fontVariationSettings": "'FILL' 1" }}>favorite</span>
</button>
<button className="neubrutalist-btn bg-black text-white px-lg py-sm rounded-lg text-label-bold">
<span className="material-symbols-outlined" data-icon="add">add</span>
                        New Project
                    </button>
</div>
</div>
{/*  Bento Card: Complex UI Usage  */}
<div className="md:col-span-2 bg-accent-pink/10 border-2 border-black rounded-xl p-xl neubrutalist-shadow overflow-hidden relative group">
<div className="absolute top-0 right-0 p-lg opacity-20 pointer-events-none transform group-hover:rotate-12 transition-transform">
<span className="material-symbols-outlined !text-9xl" data-icon="ads_click">ads_click</span>
</div>
<div className="relative z-10">
<h2 className="font-headline-main-mobile text-headline-main-mobile font-black mb-md text-on-surface">HI-FIDELITY BENTO PREVIEW</h2>
<p className="font-body-md text-body-md mb-lg max-w-xl">
                        Combining variants allows for expressive layouts. Use pill shapes for primary calls-to-action and secondary rounded corners for utility functions.
                    </p>
<div className="flex flex-col sm:flex-row gap-lg">
<div className="flex-1 bg-white border-2 border-black p-lg rounded-xl neubrutalist-shadow">
<span className="inline-block px-sm py-xs bg-tertiary text-white font-label-bold text-xs rounded mb-sm uppercase">Quick Action</span>
<h4 className="font-heading-card text-xl mb-md">Manage Storage</h4>
<div className="flex gap-sm">
<button className="neubrutalist-btn bg-primary-container text-on-primary-container px-md py-xs rounded-full text-xs">Upgrade</button>
<button className="neubrutalist-btn bg-surface border-2 border-black px-md py-xs rounded-full text-xs">Details</button>
</div>
</div>
<div className="flex-1 bg-accent-purple text-white border-2 border-black p-lg rounded-xl neubrutalist-shadow">
<div className="flex justify-between items-start mb-md">
<h4 className="font-heading-card text-xl">Cloud Sync</h4>
<span className="material-symbols-outlined" data-icon="sync">sync</span>
</div>
<button className="neubrutalist-btn bg-white text-accent-purple w-full py-sm rounded-full text-label-bold">Sync Now</button>
</div>
</div>
</div>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="w-full mt-auto py-xl px-margin flex flex-col md:flex-row justify-between items-center gap-md bg-surface border-t-2 border-black">
<div className="font-headline-main-mobile text-xl font-black text-on-surface">
            Thirtyspace
        </div>
<p className="font-body-md text-body-md text-on-surface-variant">
            © 2024 Thirtyspace Design. Built for the bold.
        </p>
<div className="flex gap-lg">
<a className="text-on-surface-variant font-body-md hover:text-primary transition-colors" href="#">Privacy</a>
<a className="text-on-surface-variant font-body-md hover:text-primary transition-colors" href="#">Terms</a>
<a className="text-on-surface-variant font-body-md hover:text-primary transition-colors" href="#">Globe</a>
<a className="text-accent-purple font-bold font-body-md hover:text-primary transition-colors" href="#">Globe</a>
</div>
</footer>


    </div>
  );
}
