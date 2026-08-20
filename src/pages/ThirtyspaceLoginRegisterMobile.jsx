import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function ThirtyspaceLoginRegisterMobile() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
{/*  TopAppBar  */}
<header className="w-full top-0 sticky bg-primary dark:bg-primary z-50 border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between px-margin py-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-on-primary" style={{ "fontVariationSettings": "'FILL' 1" }}>shopping_bag</span>
<h1 className="font-headline-main-mobile text-headline-main-mobile text-on-primary uppercase tracking-tighter" style={{ "fontSize": "24px" }}>TITIPIN</h1>
</div>
<div className="md:hidden">
<span className="material-symbols-outlined text-on-primary">menu</span>
</div>
</header>
<main className="px-margin py-xl flex flex-col items-center">
{/*  Brand Intro Area  */}
<div className="w-full max-w-md mb-lg">
<h2 className="font-headline-main-mobile text-headline-main-mobile text-on-background mb-xs">Halo!</h2>
<p className="text-on-surface-variant font-body-md">Titip belanja dari mana saja jadi makin mudah dan aman.</p>
</div>
{/*  Auth Container  */}
<div className="w-full max-w-md neubrutal-card bg-surface p-md rounded-xl">
{/*  Tabs  */}
<div className="flex border-2 border-black rounded-lg mb-lg overflow-hidden">
<button className="flex-1 py-sm font-label-bold text-label-bold tab-active transition-all duration-200" id="tab-masuk" onclick="switchTab('masuk')">
                    Masuk
                </button>
<button className="flex-1 py-sm font-label-bold text-label-bold hover:bg-surface-container transition-all duration-200" id="tab-daftar" onclick="switchTab('daftar')">
                    Daftar
                </button>
</div>
{/*  Masuk Form View  */}
<div className="space-y-md" id="view-masuk">
<div className="space-y-sm">
<label className="font-label-bold text-label-bold block">Email</label>
<input className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-primary-container/10" placeholder="nama@email.com" type="email"/>
</div>
<div className="space-y-sm">
<label className="font-label-bold text-label-bold block">Password</label>
<input className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-primary-container/10" placeholder="••••••••" type="password"/>
<div className="text-right">
<a className="text-secondary font-label-bold text-label-bold hover:underline" href="#">Lupa password?</a>
</div>
</div>
<button className="w-full py-md bg-primary-container text-on-primary-fixed-variant font-headline-main-mobile text-[20px] neubrutal-card neubrutal-button-active transition-all mt-md">
                    Masuk
                </button>
<p className="text-center text-on-surface-variant font-body-md text-sm mt-md">
                    Login menggunakan otentikasi email.
                </p>
</div>
{/*  Daftar Form View  */}
<div className="hidden space-y-md" id="view-daftar">
<div className="space-y-sm">
<label className="font-label-bold text-label-bold block">Nama Lengkap</label>
<input className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-secondary-container/10" placeholder="Budi Santoso" type="text"/>
</div>
<div className="space-y-sm">
<label className="font-label-bold text-label-bold block">Email</label>
<input className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-secondary-container/10" placeholder="budi@email.com" type="email"/>
</div>
<div className="space-y-sm">
<label className="font-label-bold text-label-bold block">No. Telepon</label>
<input className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-secondary-container/10" placeholder="08123456789" type="tel"/>
</div>
<div className="space-y-sm">
<label className="font-label-bold text-label-bold block">Alamat</label>
<textarea className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-secondary-container/10" placeholder="Jl. Mawar No. 123, Jakarta" rows="3"></textarea>
</div>
<div className="space-y-sm">
<label className="font-label-bold text-label-bold block">Password</label>
<input className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-secondary-container/10" placeholder="Minimal 8 karakter" type="password"/>
</div>
<button className="w-full py-md bg-secondary-container text-on-secondary-container font-headline-main-mobile text-[20px] neubrutal-card neubrutal-button-active transition-all mt-md">
                    Daftar
                </button>
</div>
</div>
{/*  Visual Asset  */}
<div className="mt-xl w-full max-w-md overflow-hidden rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
<img className="w-full h-48 object-cover" data-alt="A vibrant neubrutalist illustration of a young person holding multiple shopping bags and a smartphone. The background is a bold yellow and the style features heavy black outlines and flat high-contrast colors, matching a modern Indonesian tech app vibe. The lighting is flat and energetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdqRmzikApM6UBVfmlzTFtngXWZiqGVxUR1pXozs4GgRKy0KgroyIxxRnOgOltY888ImuExPQvpdJ8nDHczT9penhlAgshZjoN-BdFAe0V8icjF5eqGKNsEUyO9IMtOH5R460cwCSU3pJwAqoyWNQK1zIM3_t0EayLO_Yl81I4rzZ6EtXWksJfxXjWiYyxrEHOFigMxuHHfrwPKrpoVnJwg12aYhnRPnIBROqK4zHnD6euPntL3K53"/>
</div>
</main>
{/*  Bottom Spacing for mobile  */}
<div className="h-xl"></div>


    </div>
  );
}
