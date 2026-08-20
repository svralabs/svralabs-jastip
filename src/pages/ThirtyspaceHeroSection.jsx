import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function ThirtyspaceHeroSection() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
{/*  TopNavBar  */}
<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin py-sm bg-primary-container border-b-2 border-on-surface">
<div className="flex items-center gap-sm">
<span className="text-label-bold font-label-bold text-on-primary-container tracking-tighter text-xl">TS THIRTYSPACE</span>
</div>
<div className="hidden md:flex items-center gap-xl">
<a className="font-label-bold text-label-bold text-on-surface underline decoration-2 underline-offset-4" href="#">Features</a>
<a className="font-label-bold text-label-bold text-on-surface-variant hover:text-on-surface transition-all" href="#">Team</a>
<a className="font-label-bold text-label-bold text-on-surface-variant hover:text-on-surface transition-all" href="#">Case Studies</a>
<a className="font-label-bold text-label-bold text-on-surface-variant hover:text-on-surface transition-all" href="#">Pricing</a>
</div>
<button className="bg-white neubrutal-border neubrutal-shadow px-6 py-2 rounded-full font-label-bold text-label-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:scale-95 duration-100 uppercase">
            MULAI GRATIS
        </button>
</nav>
{/*  Ticker Bar  */}
<div className="mt-[64px] bg-white border-b-2 border-on-surface overflow-hidden py-3">
<div className="flex whitespace-nowrap animate-marquee">
<div className="flex items-center space-x-12 px-6">
<span className="font-label-bold text-label-bold flex items-center gap-2"><span className="material-symbols-outlined text-sm">code</span> DEV TEAM ALPHA</span>
<span className="text-2xl font-bold">/</span>
<span className="font-label-bold text-label-bold flex items-center gap-2"><span className="material-symbols-outlined text-sm">mic</span> PODCAST ID</span>
<span className="text-2xl font-bold">/</span>
<span className="font-label-bold text-label-bold flex items-center gap-2"><span className="material-symbols-outlined text-sm">rocket_launch</span> STARTUP X</span>
<span className="text-2xl font-bold">/</span>
<span className="font-label-bold text-label-bold flex items-center gap-2"><span className="material-symbols-outlined text-sm">code</span> DEV TEAM ALPHA</span>
<span className="text-2xl font-bold">/</span>
<span className="font-label-bold text-label-bold flex items-center gap-2"><span className="material-symbols-outlined text-sm">mic</span> PODCAST ID</span>
<span className="text-2xl font-bold">/</span>
<span className="font-label-bold text-label-bold flex items-center gap-2"><span className="material-symbols-outlined text-sm">rocket_launch</span> STARTUP X</span>
</div>
{/*  Duplicated for seamless loop  */}
<div className="flex items-center space-x-12 px-6">
<span className="font-label-bold text-label-bold flex items-center gap-2"><span className="material-symbols-outlined text-sm">code</span> DEV TEAM ALPHA</span>
<span className="text-2xl font-bold">/</span>
<span className="font-label-bold text-label-bold flex items-center gap-2"><span className="material-symbols-outlined text-sm">mic</span> PODCAST ID</span>
<span className="text-2xl font-bold">/</span>
<span className="font-label-bold text-label-bold flex items-center gap-2"><span className="material-symbols-outlined text-sm">rocket_launch</span> STARTUP X</span>
<span className="text-2xl font-bold">/</span>
<span className="font-label-bold text-label-bold flex items-center gap-2"><span className="material-symbols-outlined text-sm">code</span> DEV TEAM ALPHA</span>
<span className="text-2xl font-bold">/</span>
<span className="font-label-bold text-label-bold flex items-center gap-2"><span className="material-symbols-outlined text-sm">mic</span> PODCAST ID</span>
<span className="text-2xl font-bold">/</span>
<span className="font-label-bold text-label-bold flex items-center gap-2"><span className="material-symbols-outlined text-sm">rocket_launch</span> STARTUP X</span>
</div>
</div>
</div>
{/*  Hero Section  */}
<main className="max-w-7xl mx-auto px-margin pt-20 pb-40">
<div className="flex flex-col items-center text-center mb-16">
<h1 className="font-headline-main text-headline-main text-on-surface mb-6">
                SATU TEMPAT, <br/>
<span className="bg-on-surface text-white px-6 inline-block neubrutal-shadow rotate-[-1deg]">SEMUA ADA!</span>
</h1>
<p className="font-body-md text-xl text-on-surface-variant max-w-xl">
                Tinggalkan tab browser yang menumpuk. Pindah ke Thirtyspace. Ruang kerja kolaboratif paling berisik tapi paling rapi.
            </p>
</div>
{/*  Feature Grid (4 columns)  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mb-xl">
{/*  Card 1: Yellow  */}
<div className="bg-primary-container neubrutal-border neubrutal-shadow rounded-xl p-md flex flex-col justify-between h-48 hover-lift">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-4xl">view_kanban</span>
<span className="bg-white neubrutal-border px-2 py-0.5 rounded-full font-label-bold text-[10px]">NEW</span>
</div>
<h3 className="font-heading-card text-heading-card uppercase">SPRINT BOARD</h3>
</div>
{/*  Card 2: Cyan  */}
<div className="bg-cyan-neubrutalist neubrutal-border neubrutal-shadow rounded-xl p-md flex flex-col justify-between h-48 hover-lift">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-4xl">video_call</span>
<span className="bg-white neubrutal-border px-2 py-0.5 rounded-full font-label-bold text-[10px]">HOT</span>
</div>
<h3 className="font-heading-card text-heading-card uppercase">VIDEO CALL</h3>
</div>
{/*  Card 3: Pink  */}
<div className="bg-accent-pink neubrutal-border neubrutal-shadow rounded-xl p-md flex flex-col justify-between h-48 hover-lift">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-4xl">edit_note</span>
<span className="bg-white neubrutal-border px-2 py-0.5 rounded-full font-label-bold text-[10px]">SYNC</span>
</div>
<h3 className="font-heading-card text-heading-card uppercase">SHARED NOTES</h3>
</div>
{/*  Card 4: Purple  */}
<div className="bg-purple-neubrutalist neubrutal-border neubrutal-shadow rounded-xl p-md flex flex-col justify-between h-48 hover-lift text-white">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-4xl">link</span>
<span className="bg-white text-black neubrutal-border px-2 py-0.5 rounded-full font-label-bold text-[10px]">HUB</span>
</div>
<h3 className="font-heading-card text-heading-card uppercase">LINK HUB</h3>
</div>
</div>
{/*  Bento Preview Card (Large Wide)  */}
<div className="bg-white neubrutal-border neubrutal-shadow rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[400px]">
{/*  Left Info  */}
<div className="lg:col-span-5 p-12 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-on-surface">
<div className="mb-6">
<span className="bg-primary-container neubrutal-border px-4 py-1 rounded-full font-label-bold text-label-bold uppercase">
                        Real-time Collab
                    </span>
</div>
<h2 className="font-headline-main text-[48px] leading-tight mb-8">
                    BERASA KERJA SEMEJA.
                </h2>
<div className="flex -space-x-3 items-center">
<div className="w-12 h-12 rounded-full border-2 border-on-surface bg-primary-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A professional headshot of a creative director in a high-contrast lighting setup, vibrant neon background, clean neubrutalist style with sharp focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAttU_07Ye9MfNFDHfQ5iKwJgA9gCj4fZTbBjd-Ny6-71-GzrZ7t9ZAElWk1tMfpzahW0HfzR9MBCITbWZbBGZW3X6T2wWLTK1P39herzLfvQ0K8mqP6Nz981uBQts3Q9GGf61UBlMti6tdTD7xxGy3gfn9BLOCxHRL7EuO5ooRw7b3r4pva3Qwiq_FqXjwUe7Uo3bD-FCVRMcejjmcCDy36M0Vu7xxNWw7Ii7X8_QMxYifWtXjWUQC"/>
</div>
<div className="w-12 h-12 rounded-full border-2 border-on-surface bg-accent-pink overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A smiling software developer wearing glasses, close-up portrait, bold solid color background, minimalist and high-quality photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwxv1nTmyFZs3zyqyYtHsGOr07BSEr65j22_ADCYdN2gudM6qtJ6J01QNds60UZsJE7UrDd8R9wQEHmiYyCRiQJGOiYwWTBUkm_ZbFwWYAXo18AA_TAO-8U8ibtCG34W55A8gYC7JXi79dTKWwE0Ic52d86KR393Cq7As-E5vDelwWUA6DtlZiDDDCbcmsdr8hDhMkQQWNpICyd4dpk0A3pteqmiCLV8fRuOSl2yjxv1cOpUpaZ8sx"/>
</div>
<div className="w-12 h-12 rounded-full border-2 border-on-surface bg-cyan-neubrutalist overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close-up of a young artist with colorful hair, energetic expression, bright high-key lighting, neubrutalist studio aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_U3-SBIxkce95uHYQ_xYMZaygX0c2dEGVL_tInhK1NxjM5AV5mz5VfLHzxmVAxH5_OW71IRhiEhKOHihEImDIyFIuql4pPjTXXCbDJGYe1ShuA8QPm4ZXsqPsXOncViGXF8Td-pJ2BonhM5yxKi3HeKfvIyki_kH298oP-EVLPxVf1xvOLJZKLhrJDwan2sz7NvwkaJ-uE6QbeR_T2EuXOgxiovY2AOnQ0xrpfG7UzgXS2IJvWrLn"/>
</div>
<div className="ml-6 font-label-bold text-label-bold">
                        +12 Orang sedang online
                    </div>
</div>
</div>
{/*  Right Preview Mockup  */}
<div className="lg:col-span-7 bg-surface-container p-8 relative overflow-hidden flex items-center justify-center">
{/*  Mockup Content  */}
<div className="w-full aspect-video bg-white neubrutal-border neubrutal-shadow rounded-lg p-6 relative">
{/*  Fake UI Header  */}
<div className="flex gap-2 mb-6">
<div className="w-3 h-3 rounded-full bg-error border border-on-surface"></div>
<div className="w-3 h-3 rounded-full bg-primary-container border border-on-surface"></div>
<div className="w-3 h-3 rounded-full bg-secondary-container border border-on-surface"></div>
</div>
{/*  Workspace lines  */}
<div className="space-y-4">
<div className="h-4 w-3/4 bg-surface-container-highest rounded-full"></div>
<div className="h-4 w-1/2 bg-surface-container-highest rounded-full"></div>
<div className="h-4 w-5/6 bg-surface-container-highest rounded-full"></div>
<div className="grid grid-cols-3 gap-4 mt-8">
<div className="h-24 bg-primary-container/20 neubrutal-border rounded-lg border-dashed"></div>
<div className="h-24 bg-cyan-neubrutalist/20 neubrutal-border rounded-lg border-dashed"></div>
<div className="h-24 bg-accent-pink/20 neubrutal-border rounded-lg border-dashed"></div>
</div>
</div>
{/*  Multiplayer Cursors  */}
<div className="absolute top-20 left-40 flex items-center gap-1 group transition-all duration-300 hover:translate-x-10">
<span className="material-symbols-outlined text-primary scale-125 rotate-[-20deg]">near_me</span>
<span className="bg-primary-container neubrutal-border px-2 py-0.5 text-[10px] font-label-bold rounded shadow-sm">ahdi kf</span>
</div>
<div className="absolute bottom-32 right-24 flex items-center gap-1 group transition-all duration-300 hover:translate-y-[-20px]">
<span className="material-symbols-outlined text-accent-purple scale-125 rotate-[-45deg]">near_me</span>
<span className="bg-purple-neubrutalist text-white neubrutal-border px-2 py-0.5 text-[10px] font-label-bold rounded shadow-sm">budy</span>
</div>
<div className="absolute top-1/2 left-20 flex items-center gap-1 group transition-all duration-300 hover:scale-110">
<span className="material-symbols-outlined text-accent-pink scale-125 rotate-[15deg]">near_me</span>
<span className="bg-accent-pink neubrutal-border px-2 py-0.5 text-[10px] font-label-bold rounded shadow-sm">guest</span>
</div>
</div>
{/*  Background decorative elements  */}
<div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
</div>
</div>
</main>
{/*  Footer Partial from Shared Components  */}
<footer className="w-full px-margin py-xl flex flex-col md:flex-row justify-between items-center bg-surface-container-highest border-t-2 border-on-surface">
<div className="mb-md md:mb-0">
<span className="text-heading-card font-heading-card text-primary">Thirtyspace.</span>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 text-center md:text-left">
                © 2024 Thirtyspace. Built for the bold.
            </p>
</div>
<div className="flex gap-xl">
<a className="font-label-bold text-label-bold text-on-surface-variant hover:text-accent-orange transition-colors" href="#">Privacy Policy</a>
<a className="font-label-bold text-label-bold text-on-surface-variant hover:text-accent-orange transition-colors" href="#">Terms of Service</a>
<a className="font-label-bold text-label-bold text-on-surface-variant hover:text-accent-orange transition-colors" href="#">Contact Us</a>
</div>
</footer>
{/*  Simple Interactivity Scripts  */}


    </div>
  );
}
