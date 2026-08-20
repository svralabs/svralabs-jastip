import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function ThirtyspaceSidebarShowcase() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
{/*  Top Navigation Bar (Shared Component Reference)  */}
<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-lg h-16 bg-primary-fixed border-b-2 border-black shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]">
<div className="flex items-center gap-md">
<span className="font-headline-main text-heading-card text-on-primary-fixed">Thirtyspace</span>
<div className="hidden md:flex gap-md ml-lg">
<a className="font-label-bold text-label-bold border-b-4 border-black text-on-primary-fixed pb-1" href="#">Showcase</a>
<a className="font-label-bold text-label-bold text-on-primary-fixed-variant opacity-80 hover:opacity-100 transition-opacity" href="#">Docs</a>
<a className="font-label-bold text-label-bold text-on-primary-fixed-variant opacity-80 hover:opacity-100 transition-opacity" href="#">Components</a>
</div>
</div>
<div className="flex items-center gap-md">
<div className="hidden md:flex items-center bg-surface border-2 border-black px-sm py-1 rounded-lg neubrutalist-shadow-sm">
<span className="material-symbols-outlined text-on-surface">search</span>
<input className="border-none focus:ring-0 bg-transparent text-sm w-32" placeholder="Search variants..." type="text"/>
</div>
<button className="bg-accent-orange text-white border-2 border-black px-md py-1 rounded-full font-label-bold neubrutalist-shadow-sm active-press">Upgrade</button>
<div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden neubrutalist-shadow-sm bg-accent-pink">
<img className="w-full h-full object-cover" data-alt="A close-up studio portrait of a professional creative director with a minimalist aesthetic, featuring bold lighting and a high-contrast background that matches a premium neubrutalist design system. The subject has a confident expression and is styled in a modern, clean fashion." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0DXFbRYy4R5W89OLIZzfeVxWucL_YvkqAw3vQIosloN0-maDQI7iAdgJpKqxN0z5a7UVn1Kmj78z1AuomFWK3hiSGcF0itkK_XSi59p0hQrAEEVeS24f11ZaAg7q6pn6lDfJxk5IUT81381V4vmY47T8QHUNmhcW3iHRs0uiTgIyY50d_YLLjqysy1iPqg9CUZvi9A7CSUwQtLcI418MjXOW9j94w0wOb_goVsLx5IO5047PtAmcR"/>
</div>
</div>
</nav>
{/*  Main Content Area  */}
<main className="pt-32 pb-xl px-lg max-w-7xl mx-auto">
{/*  Header Title Section  */}
<header className="mb-xl">
<div className="inline-block bg-black px-lg py-sm border-2 border-black neubrutalist-shadow">
<h1 className="font-headline-main text-headline-card text-white">SIDEBAR VARIANTS</h1>
</div>
<p className="mt-md text-on-surface-variant font-label-bold max-w-2xl">
                A definitive collection of navigation shells designed for maximum density, clear hierarchy, and bold interaction states. Built with hard shadows and strict mechanical depth.
            </p>
</header>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
{/*  1. Standard Expanded Sidebar  */}
<div className="lg:col-span-4 flex flex-col gap-md">
<div className="bg-surface border-2 border-black p-xs rounded-xl neubrutalist-shadow h-[700px] overflow-hidden flex flex-col">
<div className="p-md flex items-center justify-between border-b-2 border-black bg-surface-container">
<span className="font-label-bold text-lg">Expanded</span>
<span className="bg-primary-container px-2 py-0.5 border-2 border-black rounded text-[10px] font-bold">DEFAULT</span>
</div>
{/*  The Actual Sidebar Component  */}
<div className="flex-grow flex flex-col p-md bg-background">
<div className="flex items-center gap-sm mb-lg">
<div className="w-10 h-10 bg-black flex items-center justify-center rounded-lg">
<span className="material-symbols-outlined text-white">dashboard</span>
</div>
<div>
<h3 className="font-headline-main text-sm text-on-background leading-none">Thirtyspace</h3>
<p className="text-[10px] font-bold text-on-surface-variant">PRO WORKSPACE</p>
</div>
</div>
<nav className="flex flex-col gap-sm flex-grow">
{/*  Dashboard (Active)  */}
<a className="flex items-center gap-md p-md bg-secondary-container text-on-secondary-container border-2 border-black neubrutalist-shadow-sm rounded-xl font-label-bold text-label-bold" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
{/*  Inactive items  */}
<a className="flex items-center gap-md p-md text-on-surface hover:bg-surface-container-high hover:translate-x-1 transition-transform font-label-bold text-label-bold" href="#">
<span className="material-symbols-outlined" data-icon="folder_open">folder_open</span>
<span>Projects</span>
</a>
<a className="flex items-center gap-md p-md text-on-surface hover:bg-surface-container-high hover:translate-x-1 transition-transform font-label-bold text-label-bold" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span>Team</span>
</a>
<a className="flex items-center gap-md p-md text-on-surface hover:bg-surface-container-high hover:translate-x-1 transition-transform font-label-bold text-label-bold" href="#">
<span className="material-symbols-outlined" data-icon="insights">insights</span>
<span>Analytics</span>
</a>
<a className="flex items-center gap-md p-md text-on-surface hover:bg-surface-container-high hover:translate-x-1 transition-transform font-label-bold text-label-bold" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>Settings</span>
</a>
</nav>
<div className="mt-auto pt-md border-t-2 border-black flex items-center gap-sm">
<div className="w-10 h-10 rounded-full border-2 border-black bg-accent-orange overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A vibrant, stylized illustration of a high-tech user avatar in a modern minimalist style, set against an energetic orange background. The portrait uses bold, clean lines and flat color fields typical of a professional digital workspace interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuACGUi-5c_WkgMHJr92RBMGtTn8Y2oq69qqaYA1yYFQAUf_G-4cWMyXxNWk9qqMQfXBIaZ5RW78v74nMce5V1Ar2iIkKhMU-N38Jmi44j3vmQ5Oz0L1cWNzBbSJa51swo6XuRymDprRviACjYXJzqaug2iXiB1R3JDywPZQioDv2c5AM3LF3Qk0ZO1xQAz3BWgSHN8DOO04V-m9o40g11o16HfYlBIXySJi-opCijRuZVEit8kfgDcM"/>
</div>
<div className="flex-grow overflow-hidden">
<p className="font-label-bold text-xs truncate">Alex Rivier</p>
<p className="text-[10px] text-on-surface-variant truncate">alex@thirtyspace.pro</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-error">logout</span>
</div>
</div>
</div>
</div>
{/*  2. Mini / Collapsed Sidebar  */}
<div className="lg:col-span-3 flex flex-col gap-md">
<div className="bg-surface border-2 border-black p-xs rounded-xl neubrutalist-shadow h-[700px] overflow-hidden flex flex-col">
<div className="p-md flex items-center justify-between border-b-2 border-black bg-surface-container">
<span className="font-label-bold text-lg text-center w-full">Mini</span>
</div>
{/*  The Actual Mini Sidebar  */}
<div className="flex-grow flex flex-col items-center py-lg px-2 bg-background-alt">
<div className="w-12 h-12 bg-black flex items-center justify-center rounded-xl mb-xl border-2 border-black neubrutalist-shadow-sm">
<span className="text-white font-black text-xl">T</span>
</div>
<nav className="flex flex-col gap-lg items-center flex-grow">
<button className="w-12 h-12 flex items-center justify-center bg-secondary-container text-on-secondary-container border-2 border-black neubrutalist-shadow-sm rounded-xl active-press">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
</button>
<button className="w-12 h-12 flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors rounded-xl">
<span className="material-symbols-outlined" data-icon="folder_open">folder_open</span>
</button>
<button className="w-12 h-12 flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors rounded-xl">
<span className="material-symbols-outlined" data-icon="group">group</span>
</button>
<button className="w-12 h-12 flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors rounded-xl">
<span className="material-symbols-outlined" data-icon="insights">insights</span>
</button>
<button className="w-12 h-12 flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors rounded-xl">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</nav>
<div className="mt-auto flex flex-col items-center gap-md">
<button className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-full bg-white hover:bg-accent-pink transition-colors">
<span className="material-symbols-outlined">first_page</span>
</button>
<div className="w-10 h-10 rounded-full border-2 border-black bg-accent-purple overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A creative professional portrait in profile, highlighting a modern aesthetic with bright lighting and sharp shadows. The character design is bold and digital-native, fitting a high-fidelity creative tool interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF9oRp-fNV4V-n8chtBgOCiIH0LW0Cz8bL7ximi4RJkB4kqeg0fjUJ4G0oxhH4WCke4j6sxS_L7s1mehbOChfWg7PevyzFB3U0p6kYwzi2C4QFSBa_NgxC9lygeSlfTlOzX6wUYsS9FAYVAgz-2JhDnYVgQlObt2ZII2a3Qo7tiLMN6RGQpLNhdkoVjPPuDnmpyycPyV_1JVChyhRfMltNp7JJEHNPB2iFio_Z52UHPH1zg6eQbJLR"/>
</div>
</div>
</div>
</div>
</div>
{/*  3. Categorized / Hierarchical Sidebar  */}
<div className="lg:col-span-5 flex flex-col gap-md">
<div className="bg-surface border-2 border-black p-xs rounded-xl neubrutalist-shadow h-[700px] overflow-hidden flex flex-col">
<div className="p-md flex items-center justify-between border-b-2 border-black bg-surface-container">
<span className="font-label-bold text-lg">Hierarchical</span>
<span className="bg-accent-pink px-2 py-0.5 border-2 border-black rounded text-[10px] font-bold">COMPLEX</span>
</div>
{/*  The Actual Categorized Sidebar  */}
<div className="flex-grow flex flex-col p-lg bg-surface">
<div className="flex items-center justify-between mb-xl">
<span className="font-headline-main text-heading-card">TS.</span>
<button className="bg-black text-white p-2 rounded-lg border-2 border-black active-press">
<span className="material-symbols-outlined">add</span>
</button>
</div>
<div className="space-y-xl">
{/*  Section: Workspace  */}
<section>
<h4 className="text-[11px] font-black tracking-widest text-on-surface-variant mb-md px-md uppercase flex items-center gap-xs">
<span className="w-2 h-2 bg-accent-orange border-[1px] border-black rounded-full"></span>
                                    WORKSPACE
                                </h4>
<div className="flex flex-col gap-xs">
<a className="flex items-center gap-md px-md py-sm bg-primary-container border-2 border-black neubrutalist-shadow-sm rounded-lg font-label-bold text-sm" href="#">
<span className="material-symbols-outlined text-sm">home</span>
                                        Overview
                                    </a>
<a className="flex items-center gap-md px-md py-sm hover:bg-surface-container-low rounded-lg font-label-bold text-sm transition-colors" href="#">
<span className="material-symbols-outlined text-sm">assignment</span>
                                        Tasks
                                        <span className="ml-auto bg-black text-white text-[9px] px-1.5 py-0.5 rounded">12</span>
</a>
<a className="flex items-center gap-md px-md py-sm hover:bg-surface-container-low rounded-lg font-label-bold text-sm transition-colors" href="#">
<span className="material-symbols-outlined text-sm">calendar_today</span>
                                        Schedule
                                    </a>
</div>
</section>
{/*  Section: Resources  */}
<section>
<h4 className="text-[11px] font-black tracking-widest text-on-surface-variant mb-md px-md uppercase flex items-center gap-xs">
<span className="w-2 h-2 bg-secondary-container border-[1px] border-black rounded-full"></span>
                                    RESOURCES
                                </h4>
<div className="flex flex-col gap-xs">
<div className="group">
<a className="flex items-center gap-md px-md py-sm hover:bg-surface-container-low rounded-lg font-label-bold text-sm transition-colors" href="#">
<span className="material-symbols-outlined text-sm">description</span>
                                            Documents
                                            <span className="material-symbols-outlined ml-auto text-xs opacity-0 group-hover:opacity-100">expand_more</span>
</a>
</div>
<a className="flex items-center gap-md px-md py-sm hover:bg-surface-container-low rounded-lg font-label-bold text-sm transition-colors" href="#">
<span className="material-symbols-outlined text-sm">inventory_2</span>
                                        Assets
                                    </a>
</div>
</section>
{/*  Section: Account  */}
<section>
<h4 className="text-[11px] font-black tracking-widest text-on-surface-variant mb-md px-md uppercase flex items-center gap-xs">
<span className="w-2 h-2 bg-accent-pink border-[1px] border-black rounded-full"></span>
                                    ACCOUNT
                                </h4>
<div className="flex flex-col gap-xs">
<a className="flex items-center gap-md px-md py-sm hover:bg-accent-pink hover:text-black border-2 border-transparent hover:border-black rounded-lg font-label-bold text-sm transition-all" href="#">
<span className="material-symbols-outlined text-sm">person</span>
                                        Profile
                                    </a>
<a className="flex items-center gap-md px-md py-sm hover:bg-accent-pink hover:text-black border-2 border-transparent hover:border-black rounded-lg font-label-bold text-sm transition-all" href="#">
<span className="material-symbols-outlined text-sm">credit_card</span>
                                        Billing
                                    </a>
</div>
</section>
</div>
<div className="mt-auto">
<div className="bg-surface-container border-2 border-black p-md rounded-xl neubrutalist-shadow-sm flex items-center gap-md">
<div className="w-8 h-8 rounded bg-black flex items-center justify-center text-white text-[10px] font-bold">PRO</div>
<div className="flex-grow">
<p className="text-[10px] font-black uppercase">Plan Usage</p>
<div className="w-full h-2 bg-white border-2 border-black rounded-full mt-1 overflow-hidden">
<div className="w-3/4 h-full bg-accent-orange"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Footer Stats / Feature Matrix  */}
<section className="mt-xl grid grid-cols-1 md:grid-cols-3 gap-lg">
<div className="bg-primary-fixed border-2 border-black p-lg rounded-xl neubrutalist-shadow">
<h3 className="font-headline-main text-xl mb-xs">84%</h3>
<p className="font-label-bold text-xs uppercase text-on-primary-fixed-variant">User Adoption Rate</p>
</div>
<div className="bg-secondary-fixed border-2 border-black p-lg rounded-xl neubrutalist-shadow">
<h3 className="font-headline-main text-xl mb-xs">0.4s</h3>
<p className="font-label-bold text-xs uppercase text-on-secondary-fixed-variant">Transition Speed</p>
</div>
<div className="bg-tertiary-fixed border-2 border-black p-lg rounded-xl neubrutalist-shadow">
<h3 className="font-headline-main text-xl mb-xs">32+</h3>
<p className="font-label-bold text-xs uppercase text-on-tertiary-fixed-variant">Theme Variations</p>
</div>
</section>
</main>
{/*  Floating Action Button Context Check  */}
<button className="fixed bottom-lg right-lg w-16 h-16 bg-accent-orange border-2 border-black rounded-full neubrutalist-shadow active-press flex items-center justify-center group">
<span className="material-symbols-outlined text-white text-3xl group-hover:rotate-90 transition-transform">add</span>
</button>


    </div>
  );
}
