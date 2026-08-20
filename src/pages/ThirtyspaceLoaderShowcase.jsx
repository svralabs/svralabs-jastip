import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function ThirtyspaceLoaderShowcase() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-gutter h-16 bg-primary dark:bg-primary border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
<div className="flex items-center gap-md">
<span className="font-headline-main-mobile text-headline-main-mobile font-black text-on-primary dark:text-on-primary">Thirtyspace</span>
</div>
<nav className="hidden md:flex items-center gap-lg">
<a className="text-on-primary/80 font-label-bold text-label-bold hover:translate-x-[2px] hover:translate-y-[2px] transition-all" href="#">Components</a>
<a className="text-on-primary underline decoration-2 underline-offset-4 font-label-bold text-label-bold hover:translate-x-[2px] hover:translate-y-[2px] transition-all" href="#">Layout</a>
<a className="text-on-primary/80 font-label-bold text-label-bold hover:translate-x-[2px] hover:translate-y-[2px] transition-all" href="#">Tokens</a>
<a className="text-on-primary/80 font-label-bold text-label-bold hover:translate-x-[2px] hover:translate-y-[2px] transition-all" href="#">Guides</a>
</nav>
<button className="bg-surface border-2 border-black px-md py-xs font-label-bold text-label-bold neubrutalist-shadow-sm active-shadow hover:translate-x-[1px] hover:translate-y-[1px] transition-all">
            Get Started
        </button>
</header>
<main className="pt-32 pb-xl px-margin max-w-7xl mx-auto">
{/*  Title Section  */}
<section className="mb-xl">
<div className="inline-block bg-black px-md py-sm mb-md">
<h1 className="font-headline-main text-headline-main-mobile md:text-headline-main text-white uppercase leading-none">
                    Loader Variants
                </h1>
</div>
<p className="font-body-md text-body-md max-w-2xl text-on-surface-variant">
                Standardizing visual feedback loops. From mechanical spinners to bento-integrated progress bars, maintain user engagement during high-latency operations with high-contrast, neubrutalist state indicators.
            </p>
</section>
{/*  Main Content Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
{/*  Section 1: Circular Spinners  */}
<div className="bg-surface border-2 border-black p-lg rounded-xl neubrutalist-shadow flex flex-col gap-md">
<h3 className="font-heading-card text-heading-card uppercase">Circular Spinners</h3>
<div className="grid grid-cols-2 gap-md flex-grow content-center place-items-center py-md">
<div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin-mechanical"></div>
<div className="w-12 h-12 border-4 border-secondary-container border-t-transparent rounded-full animate-spin-mechanical"></div>
<div className="w-12 h-12 border-4 border-accent-pink border-t-transparent rounded-full animate-spin-mechanical"></div>
<div className="w-12 h-12 border-4 border-accent-purple border-t-transparent rounded-full animate-spin-mechanical"></div>
</div>
<p className="font-body-md text-body-md italic text-on-surface-variant">Mechanical 4-step rotation.</p>
</div>
{/*  Section 2: Progress Bars  */}
<div className="bg-surface border-2 border-black p-lg rounded-xl neubrutalist-shadow flex flex-col gap-md">
<h3 className="font-heading-card text-heading-card uppercase">Progress Bars</h3>
<div className="flex flex-col gap-lg py-md">
{/*  40% Cyan  */}
<div className="w-full">
<div className="flex justify-between mb-xs">
<span className="font-label-bold text-label-bold">UPLOADING</span>
<span className="font-label-bold text-label-bold">40%</span>
</div>
<div className="w-full h-8 bg-surface border-2 border-black">
<div className="h-full bg-secondary-container border-r-2 border-black" style={{ "width": "40%" }}></div>
</div>
</div>
{/*  80% Pink  */}
<div className="w-full">
<div className="flex justify-between mb-xs">
<span className="font-label-bold text-label-bold">RENDER</span>
<span className="font-label-bold text-label-bold">80%</span>
</div>
<div className="w-full h-8 bg-surface border-2 border-black">
<div className="h-full bg-accent-pink border-r-2 border-black" style={{ "width": "80%" }}></div>
</div>
</div>
{/*  Striped Purple  */}
<div className="w-full">
<div className="flex justify-between mb-xs">
<span className="font-label-bold text-label-bold">LOADING...</span>
</div>
<div className="w-full h-8 bg-accent-purple border-2 border-black striped-loading"></div>
</div>
</div>
</div>
{/*  Section 3: Skeleton Screens  */}
<div className="bg-surface border-2 border-black p-lg rounded-xl neubrutalist-shadow flex flex-col gap-md">
<h3 className="font-heading-card text-heading-card uppercase">Skeleton State</h3>
<div className="border-2 border-black p-md rounded-lg flex flex-col gap-md">
<div className="w-full h-32 border-2 border-black skeleton-shimmer rounded-lg"></div>
<div className="w-3/4 h-6 border-2 border-black skeleton-shimmer"></div>
<div className="w-1/2 h-4 border-2 border-black skeleton-shimmer"></div>
<div className="flex gap-sm">
<div className="w-16 h-8 rounded-full border-2 border-black skeleton-shimmer"></div>
<div className="w-16 h-8 rounded-full border-2 border-black skeleton-shimmer"></div>
</div>
</div>
<p className="font-body-md text-body-md italic text-on-surface-variant">Anticipatory loading layout.</p>
</div>
{/*  Section 4: Interactive Loaders  */}
<div className="bg-surface border-2 border-black p-lg rounded-xl neubrutalist-shadow flex flex-col gap-md lg:col-span-1">
<h3 className="font-heading-card text-heading-card uppercase">Interactive</h3>
<div className="flex flex-col gap-md py-md">
<button className="w-full bg-primary-container border-2 border-black py-md font-label-bold text-label-bold neubrutalist-shadow-sm flex items-center justify-center gap-md">
<span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin-mechanical"></span>
                        PROCESSING TRANSACTION
                    </button>
<div className="bg-surface-container border-2 border-black p-md flex items-center justify-between">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined animate-spin-mechanical text-accent-purple" style={{ "fontVariationSettings": "'wght' 700" }}>sync</span>
<span className="font-label-bold text-label-bold uppercase">Cloud Syncing</span>
</div>
<span className="text-xs font-bold bg-black text-white px-xs">ACTIVE</span>
</div>
</div>
</div>
{/*  Bento Grid Context: Large Widget  */}
<div className="bg-surface border-2 border-black p-lg rounded-xl neubrutalist-shadow md:col-span-2 flex flex-col gap-lg">
<div className="flex justify-between items-start">
<div>
<h3 className="font-heading-card text-heading-card uppercase">Database Pulse</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Real-time synchronization metrics</p>
</div>
<div className="bg-secondary-container border-2 border-black px-md py-xs font-bold text-sm neubrutalist-shadow-sm">
                        LIVE_FEED
                    </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
{/*  File Upload Bento Item  */}
<div className="border-2 border-black p-md bg-surface-container-low flex flex-col gap-sm">
<div className="flex justify-between items-center">
<span className="font-label-bold text-label-bold">ASSET_EXPORT.ZIP</span>
<span className="text-xs font-bold">1.2 GB</span>
</div>
<div className="w-full h-12 bg-white border-2 border-black flex items-center px-xs">
<div className="h-8 bg-accent-orange border-2 border-black" style={{ "width": "65%" }}></div>
<span className="ml-auto pr-md font-black italic">65%</span>
</div>
<p className="text-xs font-bold uppercase text-on-surface-variant">Destination: AWS-EAST-1</p>
</div>
{/*  Sync Status Bento Item  */}
<div className="border-2 border-black p-md bg-surface-container-low flex flex-col justify-between">
<div className="flex items-center gap-md mb-md">
<div className="w-12 h-12 border-2 border-black bg-primary flex items-center justify-center">
<span className="material-symbols-outlined text-white text-3xl animate-spin-mechanical">database</span>
</div>
<div>
<div className="font-label-bold text-label-bold">TABLES_PRIMARY</div>
<div className="text-xs font-bold text-accent-purple">INDEXING...</div>
</div>
</div>
<div className="flex gap-xs">
<div className="h-2 flex-grow bg-accent-purple border-black border"></div>
<div className="h-2 flex-grow bg-accent-purple border-black border"></div>
<div className="h-2 flex-grow bg-accent-purple border-black border"></div>
<div className="h-2 flex-grow bg-white border-black border opacity-20"></div>
<div className="h-2 flex-grow bg-white border-black border opacity-20"></div>
</div>
</div>
</div>
</div>
</div>
{/*  Featured Asset Section  */}
<section className="mt-xl grid grid-cols-1 md:grid-cols-3 gap-lg">
<div className="md:col-span-2 relative h-96 border-4 border-black neubrutalist-shadow overflow-hidden bg-white">
<div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-xl bg-white/40 backdrop-blur-sm">
<div className="bg-black text-white p-lg text-center neubrutalist-shadow">
<div className="w-24 h-24 border-8 border-white border-t-accent-pink rounded-full animate-spin-mechanical mx-auto mb-lg"></div>
<h2 className="font-headline-main-mobile text-headline-main-mobile uppercase mb-md">System Overload</h2>
<p className="font-body-md text-body-md max-w-sm">Simulating heavy data hydration processes within the Thirtyspace environment.</p>
</div>
</div>
<div className="w-full h-full" data-alt="A highly detailed, macro digital art composition showing neon purple and cyan data streams moving through a complex grid of mechanical gears and circuitry. The aesthetic is clean neubrutalist, with high contrast black borders around glowing elements and a sense of intense computational power. Bright laboratory-style lighting creates deep, hard black shadows." style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBxnMxG7472etXcFO_ZX0p210W2tkdMsGhp8zXpktq7G8Tb4CDO1vA-IiX80CCQSPVkSKLkK0dlfWLhyxLMZEo0rxOJYvfxhwvopjSAqfORnhlCDFbay3G-Xcy1Zl6K7OzEPik1S53q81aRp_z-GZlH8y71epbq2YLQ47nsOKCUiK1yZvs0DAWuQTHNuwzIrOc-gmgXY5MSoJm6IfwgPJ-HJLVWGkKUdlTBVnPzy19RAurAXy7xzOW')" }}></div>
</div>
<div className="bg-accent-orange border-4 border-black p-lg neubrutalist-shadow flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-5xl mb-md">warning</span>
<h3 className="font-headline-main-mobile text-headline-main-mobile text-white leading-tight uppercase">Wait for it...</h3>
</div>
<div className="bg-black text-white p-md font-label-bold text-label-bold text-center">
                    RETRY ATTEMPT: 03
                </div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full mt-auto bg-surface dark:bg-surface-dim border-t-2 border-black py-xl px-margin flex flex-col md:flex-row justify-between items-center gap-md">
<div className="flex items-center gap-md">
<span className="font-headline-main-mobile text-xl font-black text-on-surface">Thirtyspace</span>
</div>
<div className="flex gap-lg">
<a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors" href="#">Privacy</a>
<a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors" href="#">Terms</a>
<a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors" href="#">Globe</a>
<a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors" href="#">Globe</a>
</div>
<div className="text-on-surface-variant font-body-md text-body-md text-center md:text-right">
            © 2024 Thirtyspace Design. Built for the bold.
        </div>
</footer>


    </div>
  );
}
