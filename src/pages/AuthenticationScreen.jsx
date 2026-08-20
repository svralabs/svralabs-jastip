import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AuthenticationScreen() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<main className="w-full max-w-[400px] flex flex-col gap-2xl">

<header className="flex flex-col items-center text-center gap-md">
<div className="w-16 h-16 bg-accent-yellow border border-border-black rounded-xl flex items-center justify-center transform -rotate-3">
<span className="material-symbols-outlined text-[40px] text-border-black" data-icon="shopping_bag">shopping_bag</span>
</div>
<div className="mt-sm">
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">JastipBuddy</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Selamat Datang di JastipApp</p>
</div>
</header>

<div className="flex p-xs bg-surface border border-border-black rounded-full w-full">
<button className="flex-1 py-sm font-label-bold text-label-bold rounded-full border border-border-black bg-primary-container text-on-primary-container transition-all" id="tab-masuk">
                Masuk
            </button>
<button className="flex-1 py-sm font-label-bold text-label-bold rounded-full border border-transparent text-on-surface-variant hover:bg-surface-container transition-all" id="tab-daftar">
                Daftar
            </button>
</div>

<form className="flex flex-col gap-lg" onsubmit="event.preventDefault();">

<div className="flex flex-col gap-xs">
<label className="font-label-bold text-label-bold text-on-surface-variant px-xs" htmlFor="email">Email</label>
<input className="w-full px-lg py-md bg-white border border-border-black rounded-xl font-body-md text-body-md placeholder:text-outline focus:ring-0" id="email" placeholder="nama@email.com" type="email" />
</div>

<div className="flex flex-col gap-xs">
<label className="font-label-bold text-label-bold text-on-surface-variant px-xs" htmlFor="password">Kata Sandi</label>
<div className="relative">
<input className="w-full px-lg py-md bg-white border border-border-black rounded-xl font-body-md text-body-md placeholder:text-outline focus:ring-0" id="password" placeholder="••••••••" type="password" />
<button className="absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant" type="button">
<span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span>
</button>
</div>
<div className="flex justify-end mt-xs">
<a className="font-label-bold text-label-bold text-secondary hover:underline" href="#">Lupa kata sandi?</a>
</div>
</div>

<button className="w-full py-lg mt-sm bg-secondary-container text-on-secondary-container font-headline-md text-headline-md font-bold rounded-full border border-border-black active:translate-x-[2px] active:translate-y-[2px] transition-all" type="submit">
                Masuk Sekarang
            </button>
</form>

<div className="flex items-center gap-md">
<div className="flex-1 h-[1px] bg-outline-variant"></div>
<span className="font-label-caps text-label-caps text-outline">ATAU</span>
<div className="flex-1 h-[1px] bg-outline-variant"></div>
</div>

<button className="w-full py-md flex items-center justify-center gap-md bg-white border border-border-black rounded-xl font-label-bold text-label-bold text-on-surface hover:bg-surface-container transition-colors">
<svg className="w-5 h-5" viewBox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"></path>
</svg>
            Lanjutkan dengan Google
        </button>

<footer className="text-center">
<p className="font-body-md text-body-md text-on-surface-variant">
                Belum punya akun? 
                <a className="font-label-bold text-label-bold text-primary hover:underline" href="#">Daftar</a>
</p>
</footer>
</main>




    </div>
  );
}
