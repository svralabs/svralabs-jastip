import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Thirtyspace404NavigationBentoVariant() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
    {/*  TopNavBar  */}
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-gutter h-16 bg-primary border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-md">
            <span className="font-headline-main-mobile text-headline-main-mobile font-black text-on-primary">Thirtyspace</span>
            <div className="hidden md:flex gap-md ml-xl">
                <a className="text-on-primary/80 font-label-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">Components</a>
                <a className="text-on-primary/80 font-label-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">Layout</a>
                <a className="text-on-primary/80 font-label-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">Tokens</a>
                <a className="text-on-primary/80 font-label-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">Guides</a>
            </div>
        </div>
        <button className="bg-primary-container text-on-primary-container px-lg py-sm rounded-full border-2 border-black font-label-bold neubrutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
            Get Started
        </button>
    </nav>

    {/*  Main Content Canvas  */}
    <main className="flex-grow pt-24 pb-xl px-margin max-w-7xl mx-auto w-full">
        {/*  Concise Hero Section  */}
        <section className="flex flex-col items-center text-center mb-md">
            <div className="relative inline-block mb-sm">
                <h1 className="font-headline-main text-[80px] md:text-[120px] leading-none text-accent-orange font-black drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] select-none">
                    404
                </h1>
                <div className="absolute -top-2 -right-6 bg-accent-pink border-2 border-black px-md py-xs neubrutal-shadow font-label-bold -rotate-12 text-xs md:text-sm">
                    LOST IN SPACE
                </div>
            </div>
            <h2 className="font-headline-main text-2xl md:text-4xl max-w-2xl mb-xs uppercase tracking-tight">
                Destination Not Found
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-xl">
                We've recalculated your trajectory. Choose a new destination from the flight deck below.
            </p>
        </section>

        {/*  High-Density Asymmetric Bento Grid  */}
        <section className="mt-lg">
            <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-md md:h-[700px]">
                
                {/*  Dashboard (Large Feature)  */}
                <a href="#" className="md:col-span-8 md:row-span-3 group bg-primary-container border-2 border-black p-lg rounded-xl neubrutal-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <span className="material-symbols-outlined text-4xl mb-md">dashboard</span>
                        <h4 className="font-heading-card text-2xl md:text-4xl mb-xs">Dashboard</h4>
                        <p className="font-body-md max-w-xs">Return to your primary mission control and overview.</p>
                    </div>
                    <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-symbols-outlined text-[160px]">rocket</span>
                    </div>
                    <div className="mt-auto relative z-10">
                        <span className="font-label-bold group-hover:underline">Enter Command Center →</span>
                    </div>
                </a>

                {/*  Settings (Square)  */}
                <a href="#" className="md:col-span-4 md:row-span-2 group bg-secondary-container border-2 border-black p-lg rounded-xl neubrutal-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none flex flex-col justify-center items-center text-center">
                    <span className="material-symbols-outlined text-4xl mb-md">settings</span>
                    <h4 className="font-heading-card text-heading-card">Settings</h4>
                    <p className="font-body-md text-sm">Configure your station</p>
                </a>

                {/*  API Docs (Vertical)  */}
                <a href="#" className="md:col-span-3 md:row-span-3 group bg-accent-pink border-2 border-black p-lg rounded-xl neubrutal-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none flex flex-col">
                    <span className="material-symbols-outlined text-4xl mb-md">terminal</span>
                    <h4 className="font-heading-card text-heading-card mb-xs">API Docs</h4>
                    
                    <span className="font-label-bold group-hover:underline mt-md">Read Docs →</span>
                </a>

                {/*  Profile (Small Square)  */}
                <a href="#" className="md:col-span-4 md:row-span-1 group bg-accent-purple text-white border-2 border-black p-md rounded-xl neubrutal-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none flex items-center gap-md">
                    <span className="material-symbols-outlined text-3xl">account_circle</span>
                    <h4 className="font-label-bold text-lg">My Profile</h4>
                </a>

                {/*  Community (Wide)  */}
                <a href="#" className="md:col-span-5 md:row-span-2 group bg-surface border-2 border-black p-lg rounded-xl neubrutal-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none flex flex-col">
                    <div className="flex justify-between items-start">
                        <h4 className="font-heading-card text-heading-card">Community</h4>
                        <span className="material-symbols-outlined text-accent-purple">groups</span>
                    </div>
                    <p className="font-body-md text-sm mt-xs">Join test of other designers in the void.</p>
                    <div className="mt-auto flex -space-x-2">
                        <div className="w-8 h-8 rounded-full border-2 border-black bg-primary"></div>
                        <div className="w-8 h-8 rounded-full border-2 border-black bg-accent-pink"></div>
                        <div className="w-8 h-8 rounded-full border-2 border-black bg-secondary-container"></div>
                        <div className="flex items-center pl-4 font-label-bold text-xs">+12k joined</div>
                    </div>
                </a>

                {/*  Help Center (Tall)  */}
                <a href="#" className="md:col-span-4 md:row-span-3 group bg-accent-orange text-white border-2 border-black p-lg rounded-xl neubrutal-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none flex flex-col justify-end">
                    <span className="material-symbols-outlined text-5xl mb-auto">help_center</span>
                    <h4 className="font-heading-card text-2xl mb-xs">Help Center</h4>
                    <p className="font-body-md text-sm opacity-90">Ground control is always here to assist you.</p>
                </a>

                {/*  Status Page (Horizontal bottom)  */}
                <a href="#" className="md:col-span-5 md:row-span-1 group bg-surface-container-highest border-2 border-black px-lg py-md rounded-xl neubrutal-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none flex items-center justify-between">
                    <div className="flex items-center gap-md">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse border border-black"></div>
                        <h4 className="font-label-bold">Status Page</h4>
                    </div>
                    <span className="text-xs font-body-md text-on-surface-variant">All Systems Operational</span>
                </a>

            </div>
        </section>
    </main>

    {/*  Footer  */}
    <footer className="w-full mt-auto bg-surface border-t-2 border-black py-lg px-margin flex flex-col md:flex-row justify-between items-center gap-md">
        <div className="flex flex-col items-center md:items-start">
            <span className="font-headline-main-mobile text-xl font-black text-on-surface">Thirtyspace</span>
            <p className="font-body-md text-on-surface-variant text-sm mt-1">© 2024 Thirtyspace Design. Built for the bold.</p>
        </div>
        <div className="flex gap-lg">
            <a className="text-on-surface-variant text-sm font-body-md hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="text-on-surface-variant text-sm font-body-md hover:text-primary transition-colors" href="#">Terms</a>
            <a className="text-on-surface-variant text-sm font-body-md hover:text-primary transition-colors" href="#">Globe</a>
            <a className="text-on-surface-variant text-sm font-body-md hover:text-primary transition-colors" href="#">Globe</a>
        </div>
    </footer>

    
    </div>
  );
}
