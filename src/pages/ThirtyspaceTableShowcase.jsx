import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function ThirtyspaceTableShowcase() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-gutter h-16 bg-primary border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
<div className="font-headline-main-mobile text-headline-main-mobile font-black text-on-primary">Thirtyspace</div>
<nav className="hidden md:flex gap-lg items-center">
<a className="font-body-md text-on-primary underline decoration-2 underline-offset-4 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">Components</a>
<a className="font-body-md text-on-primary/80 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">Layout</a>
<a className="font-body-md text-on-primary/80 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">Tokens</a>
<a className="font-body-md text-on-primary/80 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">Guides</a>
</nav>
<button className="bg-secondary-container text-on-secondary-container px-lg py-sm font-label-bold rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
            Get Started
        </button>
</header>
<main className="flex-grow pt-32 pb-xl px-margin max-w-7xl mx-auto w-full">
{/*  Hero Section  */}
<section className="mb-xl">
<div className="inline-block bg-black p-md md:p-lg mb-md">
<h1 className="font-headline-main text-headline-main-mobile md:text-headline-main text-white uppercase leading-none">
                    TABLE VARIANTS
                </h1>
</div>
<p className="font-body-md text-on-surface-variant max-w-2xl text-lg">
                High-contrast, brutalist table components designed for maximum legibility and structural impact. Built for data-heavy interfaces that refuse to be boring.
            </p>
</section>
{/*  Section 1: Standard Data Table  */}
<section className="mb-xl">
<div className="flex items-center gap-sm mb-lg">
<span className="w-8 h-8 bg-accent-purple border-2 border-black rounded-full flex items-center justify-center brutalist-shadow">
<span className="material-symbols-outlined text-white text-sm">database</span>
</span>
<h2 className="font-heading-card text-heading-card text-on-surface">Standard Data Grid</h2>
</div>
<div className="overflow-x-auto brutalist-card">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-primary-container border-b-2 border-black">
<th className="p-md font-label-bold text-on-primary-container uppercase border-r-2 border-black">Member Name</th>
<th className="p-md font-label-bold text-on-primary-container uppercase border-r-2 border-black">Role</th>
<th className="p-md font-label-bold text-on-primary-container uppercase border-r-2 border-black">Status</th>
<th className="p-md font-label-bold text-on-primary-container uppercase">Actions</th>
</tr>
</thead>
<tbody className="font-body-md">
<tr className="border-b-2 border-black last:border-b-0 hover:bg-background transition-colors">
<td className="p-md border-r-2 border-black">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-accent-pink">
<img className="w-full h-full object-cover" data-alt="A vibrant and professional headshot of a young female software engineer with glasses, wearing a bright orange hoodie, set against a solid neon yellow background. The lighting is crisp and flat, mimicking a modern digital design aesthetic with high contrast and bold colors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNB2FTbQIfkaQC0xPxzZTUjvwiSxGICoxpDgKwXDrFKmX4iySDgEY51AurU41r7QyCKIHfggKBGN2CeFXgjtaSyA39JTcQNa_yR_evcRBQXFghbUWFpPm1RfVWaekOJmm_v3dgeJSNOQwUkelunnZlOWPr31s3vvg0uFp5Pzo16pi2Ue_PwHaBkfJ17IiwrTtFrw2Z4FEW3eNBWcF6-Uj9OufpGIZDIzV6Ibt3idZflKSX66cvQ4Qe"/>
</div>
<span className="font-bold">Alex Rivera</span>
</div>
</td>
<td className="p-md border-r-2 border-black">
<span className="px-3 py-1 bg-accent-purple text-white border-2 border-black rounded-full font-label-bold text-xs">Lead Architect</span>
</td>
<td className="p-md border-r-2 border-black">
<div className="flex items-center gap-xs">
<span className="w-3 h-3 bg-green-500 border-2 border-black rounded-full"></span>
<span className="font-medium text-sm">Online</span>
</div>
</td>
<td className="p-md">
<div className="flex gap-sm">
<button className="px-3 py-1 bg-tertiary-container border-2 border-black brutalist-shadow text-xs font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">EDIT</button>
<button className="px-3 py-1 bg-white border-2 border-black brutalist-shadow text-xs font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">DELETE</button>
</div>
</td>
</tr>
<tr className="border-b-2 border-black last:border-b-0 hover:bg-background transition-colors">
<td className="p-md border-r-2 border-black">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-secondary-container">
<img className="w-full h-full object-cover" data-alt="A stylish close-up portrait of a man with a beard and creative haircut, wearing a minimalist black turtleneck. The background is a vibrant flat cyan, creating a striking pop-art look. The image features sharp lines and bold lighting, perfect for a high-end design system's user interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm30WPPdFMJnKN5L6qLud7-pszwPIesGZvX8GjBUFnlf7tRw95-bxmWiOVI3HuKTw5cy4jN1pAIxqvzNA77UE1iy8rTjlP71T4BMONTNQgscxYlirzRvcgNchhNSWczXe9uIP4Zadu8c5-YvJZFgsx0kE0djRJmvAugl59zNX-GUY_khvj8m0nypS_WaEuP4sLSovm2oIoYxGBrOgCbREsqruH9r-OaDgBO_6ZTj8F3OBoPGoUDbgJ"/>
</div>
<span className="font-bold">Jordan Smith</span>
</div>
</td>
<td className="p-md border-r-2 border-black">
<span className="px-3 py-1 bg-secondary-container text-on-secondary-container border-2 border-black rounded-full font-label-bold text-xs">UI Designer</span>
</td>
<td className="p-md border-r-2 border-black">
<div className="flex items-center gap-xs">
<span className="w-3 h-3 bg-gray-400 border-2 border-black rounded-full"></span>
<span className="font-medium text-sm">Offline</span>
</div>
</td>
<td className="p-md">
<div className="flex gap-sm">
<button className="px-3 py-1 bg-tertiary-container border-2 border-black brutalist-shadow text-xs font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">EDIT</button>
<button className="px-3 py-1 bg-white border-2 border-black brutalist-shadow text-xs font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">DELETE</button>
</div>
</td>
</tr>
<tr className="border-b-2 border-black last:border-b-0 hover:bg-background transition-colors">
<td className="p-md border-r-2 border-black">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-accent-orange">
<img className="w-full h-full object-cover" data-alt="A portrait of a cheerful person with short curly hair, wearing a denim jacket over a white t-shirt. The background is a clean, solid peach color. The style is contemporary and bright, with high-definition details and a focus on approachable, energetic personality suitable for a modern workspace tool." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAonaZ77bAehNBeINzAQSv9eZbVu41jl3uSQXap8D8YpuEYaaDzo9VbeFWmCtXCsm_La1OqYqOIXVIZXHIQFeynMfgWl957nBfHh0Sj1WmtAzIUnlX6idMSvHoUjF516Q_vrSubECVPBwgyBqds3EZlDmqp2HwS752PYMd__IuKgImkpYmjEEJ2mz5D4TD5IIKIlMS7HA1c18adVIoMte8Qflt1RGSQ7bO3Wc5njQxEXkoULnXATYay"/>
</div>
<span className="font-bold">Casey Chen</span>
</div>
</td>
<td className="p-md border-r-2 border-black">
<span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed border-2 border-black rounded-full font-label-bold text-xs">Fullstack</span>
</td>
<td className="p-md border-r-2 border-black">
<div className="flex items-center gap-xs">
<span className="w-3 h-3 bg-green-500 border-2 border-black rounded-full"></span>
<span className="font-medium text-sm">Online</span>
</div>
</td>
<td className="p-md">
<div className="flex gap-sm">
<button className="px-3 py-1 bg-tertiary-container border-2 border-black brutalist-shadow text-xs font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">EDIT</button>
<button className="px-3 py-1 bg-white border-2 border-black brutalist-shadow text-xs font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">DELETE</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</section>
{/*  Section 2: Interactive Table  */}
<section className="mb-xl">
<div className="flex items-center gap-sm mb-lg">
<span className="w-8 h-8 bg-accent-orange border-2 border-black rounded-full flex items-center justify-center brutalist-shadow">
<span className="material-symbols-outlined text-white text-sm">touch_app</span>
</span>
<h2 className="font-heading-card text-heading-card text-on-surface">Interactive &amp; Selectable</h2>
</div>
<div className="brutalist-card overflow-hidden">
<div className="bg-surface-variant p-sm border-b-2 border-black flex justify-between items-center px-md">
<span className="font-label-bold text-xs uppercase">Batch actions enabled</span>
<button className="bg-black text-white px-3 py-1 text-xs font-bold rounded-full">Export CSV</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-white border-b-2 border-black">
<th className="p-md border-r-2 border-black w-12">
<input className="w-5 h-5 border-2 border-black rounded-none focus:ring-0 text-black" type="checkbox"/>
</th>
<th className="p-md font-label-bold border-r-2 border-black">Task ID</th>
<th className="p-md font-label-bold border-r-2 border-black">Project Title</th>
<th className="p-md font-label-bold">Priority</th>
</tr>
</thead>
<tbody className="font-body-md">
<tr className="group transition-all hover:bg-tertiary-container/30 border-b-2 border-black last:border-b-0">
<td className="p-md border-r-2 border-black">
<input className="w-5 h-5 border-2 border-black rounded-none focus:ring-0 text-black" type="checkbox"/>
</td>
<td className="p-md border-r-2 border-black font-mono">#TS-4092</td>
<td className="p-md border-r-2 border-black">Dashboard Redesign Phase 2</td>
<td className="p-md">
<span className="flex items-center gap-sm">
<span className="w-2 h-2 bg-error rounded-full"></span>
                                        Urgent
                                    </span>
</td>
</tr>
<tr className="group transition-all hover:bg-tertiary-container/30 border-b-2 border-black last:border-b-0">
<td className="p-md border-r-2 border-black">
<input className="w-5 h-5 border-2 border-black rounded-none focus:ring-0 text-black" type="checkbox"/>
</td>
<td className="p-md border-r-2 border-black font-mono">#TS-4093</td>
<td className="p-md border-r-2 border-black">API Authentication Layer</td>
<td className="p-md">
<span className="flex items-center gap-sm">
<span className="w-2 h-2 bg-primary rounded-full"></span>
                                        Medium
                                    </span>
</td>
</tr>
<tr className="group transition-all hover:bg-tertiary-container/30 border-b-2 border-black last:border-b-0">
<td className="p-md border-r-2 border-black">
<input className="w-5 h-5 border-2 border-black rounded-none focus:ring-0 text-black" type="checkbox"/>
</td>
<td className="p-md border-r-2 border-black font-mono">#TS-4094</td>
<td className="p-md border-r-2 border-black">Asset Library Cleanup</td>
<td className="p-md">
<span className="flex items-center gap-sm">
<span className="w-2 h-2 bg-secondary-container rounded-full"></span>
                                        Low
                                    </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
{/*  Section 3: Bento Preview Integration  */}
<section className="mb-xl">
<div className="flex items-center gap-sm mb-lg">
<span className="w-8 h-8 bg-accent-pink border-2 border-black rounded-full flex items-center justify-center brutalist-shadow">
<span className="material-symbols-outlined text-white text-sm">dashboard_customize</span>
</span>
<h2 className="font-heading-card text-heading-card text-on-surface">Bento Grid Context</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-lg h-full">
{/*  Large Feature Card  */}
<div className="md:col-span-8 brutalist-card p-lg bg-white flex flex-col">
<div className="flex justify-between items-end mb-lg">
<div>
<h3 className="font-heading-card text-heading-card mb-xs">Project Overview</h3>
<p className="font-body-md text-on-surface-variant">Live tracking of all active sprints and resource allocation.</p>
</div>
<div className="hidden sm:block">
<button className="bg-black text-white px-md py-sm font-label-bold rounded-full brutalist-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">VIEW ALL</button>
</div>
</div>
<div className="flex-grow overflow-x-auto border-2 border-black rounded-xl bg-background">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-high border-b-2 border-black">
<th className="p-md font-label-bold">Project</th>
<th className="p-md font-label-bold text-center">Progress</th>
<th className="p-md font-label-bold text-right">Team</th>
</tr>
</thead>
<tbody className="font-body-md">
<tr className="border-b-2 border-black last:border-b-0">
<td className="p-md font-bold">Mobile App v2</td>
<td className="p-md">
<div className="w-full bg-white border-2 border-black h-4 rounded-full overflow-hidden">
<div className="bg-accent-purple h-full w-3/4 border-r-2 border-black"></div>
</div>
</td>
<td className="p-md text-right">
<div className="flex justify-end -space-x-3">
<div className="w-8 h-8 rounded-full border-2 border-black bg-pink-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-black bg-blue-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-black bg-yellow-200"></div>
</div>
</td>
</tr>
<tr className="border-b-2 border-black last:border-b-0">
<td className="p-md font-bold">Web Refactor</td>
<td className="p-md">
<div className="w-full bg-white border-2 border-black h-4 rounded-full overflow-hidden">
<div className="bg-accent-orange h-full w-1/2 border-r-2 border-black"></div>
</div>
</td>
<td className="p-md text-right">
<div className="flex justify-end -space-x-3">
<div className="w-8 h-8 rounded-full border-2 border-black bg-green-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-black bg-purple-200"></div>
</div>
</td>
</tr>
<tr className="border-b-2 border-black last:border-b-0">
<td className="p-md font-bold">Cloud Migrate</td>
<td className="p-md">
<div className="w-full bg-white border-2 border-black h-4 rounded-full overflow-hidden">
<div className="bg-secondary-container h-full w-full"></div>
</div>
</td>
<td className="p-md text-right">
<div className="flex justify-end -space-x-3">
<div className="w-8 h-8 rounded-full border-2 border-black bg-red-200"></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Side Bento Components  */}
<div className="md:col-span-4 flex flex-col gap-lg">
<div className="brutalist-card p-lg bg-secondary-container flex-1">
<span className="material-symbols-outlined text-4xl mb-md">analytics</span>
<h4 className="font-heading-card text-heading-card mb-xs">Efficiency</h4>
<div className="text-4xl font-black mb-md">94.2%</div>
<p className="font-body-md font-medium">Uptime across all database clusters this month.</p>
</div>
<div className="brutalist-card p-lg bg-accent-pink flex-1">
<span className="material-symbols-outlined text-4xl mb-md">bolt</span>
<h4 className="font-heading-card text-heading-card mb-xs">Active Sprints</h4>
<div className="text-4xl font-black mb-md">12</div>
<p className="font-body-md font-medium">High-velocity projects currently in production.</p>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full mt-auto py-xl px-margin flex flex-col md:flex-row justify-between items-center gap-md bg-surface border-t-2 border-black">
<div className="flex flex-col items-center md:items-start">
<div className="font-headline-main-mobile text-xl font-black text-on-surface">Thirtyspace</div>
<p className="font-body-md text-body-md text-on-surface-variant">© 2024 Thirtyspace Design. Built for the bold.</p>
</div>
<div className="flex gap-lg">
<a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy</a>
<a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Terms</a>
<a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Globe</a>
<a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Globe</a>
</div>
</footer>


    </div>
  );
}
