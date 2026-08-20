import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function JastipHomeScreenMobile() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 px-margin h-16 flex items-center justify-between bg-primary border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-white">
<img className="w-full h-full object-cover" data-alt="A portrait of a cheerful Indonesian traveler in her late 20s, smiling warmly at the camera. She is wearing a modern mustard-yellow hijab and a stylish denim jacket. The background is a clean, bright minimalist studio with soft high-key lighting, maintaining a premium light-mode UI aesthetic that matches the vibrant yellow and black neubrutalist theme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7uJFPBKyoKzedtWA20XxJJKzujnXJ7ephT6fs2yOuW6ItDIVk5vNtRPOSxe1Q82_vaKXTyDtDdHn8HMNGvT05B13wFz2VI5gJQ39d0yHGauPG0eHReBPw8OsrWc0UaBRLHoZdMsYGDJ_7ShVgv7Sx-lnr72reiktIi_4zt0Pm7xs7hkmEtGDcpfk60HKU5GnkghuPEfCSNu44hY8akO-oZA8RhqMjsIgsLwrKPAnfPNdb7yagxz5J"/>
</div>
<h1 className="font-headline-main-mobile text-[24px] text-on-primary">Halo, Jastiper!</h1>
</div>
<button className="relative w-10 h-10 flex items-center justify-center bg-white border-2 border-black rounded-full active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
<span className="material-symbols-outlined text-black" data-icon="notifications">notifications</span>
<span className="absolute top-0 right-0 w-3 h-3 bg-accent-orange border-2 border-black rounded-full"></span>
</button>
</header>
<main className="mt-24 px-margin">
{/*  Hero Section / Search  */}
<div className="mb-8">
<div className="neubrutalist-card bg-secondary-container p-4 rounded-xl flex items-center gap-3">
<span className="material-symbols-outlined text-black" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 w-full font-label-bold placeholder:text-on-secondary-container/60" placeholder="Cari jastip apa hari ini?" type="text"/>
</div>
</div>
{/*  Event Aktif Section  */}
<section className="mb-10">
<div className="flex justify-between items-end mb-4">
<h2 className="font-heading-card text-heading-card underline decoration-accent-pink decoration-4 underline-offset-4">Event Aktif</h2>
<a className="font-label-bold text-sm underline" href="#">Lihat Semua</a>
</div>
<div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar -mx-margin px-margin">
{/*  Card 1  */}
<div className="neubrutalist-card bg-white min-w-[280px] rounded-xl overflow-hidden flex-shrink-0">
<div className="h-32 bg-accent-pink relative overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A dynamic shot of a busy shopping street in Bangkok at dusk, filled with glowing neon signs in Thai script. The image captures the energy of travel with vibrant pink and teal tones. High-contrast lighting and a wide-angle perspective emphasize the modern urban sprawl, fitting the bold neubrutalist aesthetic of the app." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBV9FmSzHmMElYvNkNaTfltT1RizeUA5MnOa_GeoMEzL0q6X1-O1T46f8mKsCvFRWrz6gwZWzBgSS7I1PGoSG62Pq2la4upprHhrMVGFWaVYgRgKmTp97BXSMBxjv9x6fEGY--PL0Krb3ueee-vkZnX8HZd3z-5bU3sxy8T--wqD6SrHXNbnP1DKpMsTrcdRqhx6mYHwqNITOHVpGvNMc9jaJY_HGD-__MPpQcDnZ_Y5LoJnx76ZFA"/>
<div className="absolute top-2 right-2 bg-white border-2 border-black px-2 py-1 rounded-full text-[10px] font-bold">LIVE</div>
</div>
<div className="p-4">
<h3 className="font-heading-card text-[18px] mb-1">Jastip Bangkok July</h3>
<p className="text-sm opacity-70 mb-4 flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="calendar_today">calendar_today</span>
                            12–18 Jul 2026
                        </p>
<button className="neubrutalist-btn bg-primary-container w-full py-2 rounded-full font-label-bold text-on-primary-container">
                            Lihat Katalog
                        </button>
</div>
</div>
{/*  Card 2  */}
<div className="neubrutalist-card bg-white min-w-[280px] rounded-xl overflow-hidden flex-shrink-0">
<div className="h-32 bg-accent-purple relative overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A collection of trendy Japanese snacks and skincare products arranged artistically on a clean white surface. The photo uses sharp, direct lighting to create deep shadows, echoing the neubrutalist style. Vibrant purples and blues dominate the color scheme, portraying a high-end personal shopping service vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcaaOGOzHT-EXDIW2kIpsuzjLU-qucF-5-XvOe5tI435Py-Fv4eJAhb0vTYU8ZlgBjaWKjXotacSwfH_h9wP3N_FNKvjcC0YFz_TexBrc6557xlzL2aCdkHkm22OFEEOPhAmqrMCyuSj039Jrq0Sl2PRan_KEPOj6Qpq6OqBKF0DHAhFXGeGYkJyLkPheJXl8KmwAwTlf8xmSOoNTukpbFoJuKbFb3BIDR8cWz1ITQ84y4S9YCKw4o"/>
</div>
<div className="p-4">
<h3 className="font-heading-card text-[18px] mb-1">Tokyo Summer Haul</h3>
<p className="text-sm opacity-70 mb-4 flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="calendar_today">calendar_today</span>
                            20–25 Jul 2026
                        </p>
<button className="neubrutalist-btn bg-secondary-container w-full py-2 rounded-full font-label-bold text-on-secondary-container">
                            Lihat Katalog
                        </button>
</div>
</div>
</div>
</section>
{/*  Kalender Event Section  */}
<section className="mb-10">
<h2 className="font-heading-card text-heading-card mb-4 underline decoration-secondary-container decoration-4 underline-offset-4">Kalender Event</h2>
<div className="neubrutalist-card bg-white rounded-xl p-4 mb-6">
<div className="flex justify-between items-center mb-4">
<span className="font-label-bold text-lg">Juli 2026</span>
<div className="flex gap-2">
<button className="w-8 h-8 flex items-center justify-center border-2 border-black rounded-md active:bg-gray-100">
<span className="material-symbols-outlined text-[18px]" data-icon="chevron_left">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center border-2 border-black rounded-md active:bg-gray-100">
<span className="material-symbols-outlined text-[18px]" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
<div className="grid grid-cols-7 gap-1 text-center">
{/*  Days header  */}
<div className="text-[10px] font-bold opacity-50 uppercase">Sn</div>
<div className="text-[10px] font-bold opacity-50 uppercase">Sl</div>
<div className="text-[10px] font-bold opacity-50 uppercase">Rb</div>
<div className="text-[10px] font-bold opacity-50 uppercase">Km</div>
<div className="text-[10px] font-bold opacity-50 uppercase">Jm</div>
<div className="text-[10px] font-bold opacity-50 uppercase">Sb</div>
<div className="text-[10px] font-bold opacity-50 uppercase">Mg</div>
{/*  Calendar days (sample)  */}
<div className="h-8 flex items-center justify-center text-sm opacity-30">29</div>
<div className="h-8 flex items-center justify-center text-sm opacity-30">30</div>
<div className="h-8 flex items-center justify-center text-sm font-bold">1</div>
<div className="h-8 flex items-center justify-center text-sm font-bold">2</div>
<div className="h-8 flex items-center justify-center text-sm font-bold">3</div>
<div className="h-8 flex items-center justify-center text-sm font-bold">4</div>
<div className="h-8 flex items-center justify-center text-sm font-bold">5</div>
{/*  Week 2  */}
<div className="h-8 flex items-center justify-center text-sm font-bold">6</div>
<div className="h-8 flex items-center justify-center text-sm font-bold">7</div>
<div className="h-8 flex items-center justify-center text-sm font-bold">8</div>
<div className="h-8 flex items-center justify-center text-sm font-bold">9</div>
<div className="h-8 flex items-center justify-center text-sm font-bold">10</div>
<div className="h-8 flex items-center justify-center text-sm font-bold">11</div>
<div className="h-8 flex items-center justify-center text-sm font-bold bg-accent-pink rounded-md border-2 border-black">12</div>
{/*  Week 3 (Event Highlighting)  */}
<div className="h-8 flex items-center justify-center text-sm font-bold bg-accent-pink/40 border-b-2 border-black">13</div>
<div className="h-8 flex items-center justify-center text-sm font-bold bg-accent-pink/40 border-b-2 border-black">14</div>
<div className="h-8 flex items-center justify-center text-sm font-bold bg-accent-pink/40 border-b-2 border-black">15</div>
<div className="h-8 flex items-center justify-center text-sm font-bold bg-accent-pink/40 border-b-2 border-black">16</div>
<div className="h-8 flex items-center justify-center text-sm font-bold bg-accent-pink/40 border-b-2 border-black">17</div>
<div className="h-8 flex items-center justify-center text-sm font-bold bg-accent-pink rounded-md border-2 border-black">18</div>
<div className="h-8 flex items-center justify-center text-sm font-bold">19</div>
{/*  Week 4  */}
<div className="h-8 flex items-center justify-center text-sm font-bold bg-secondary-container rounded-md border-2 border-black">20</div>
<div className="h-8 flex items-center justify-center text-sm font-bold bg-secondary-container/40 border-b-2 border-black">21</div>
<div className="h-8 flex items-center justify-center text-sm font-bold bg-secondary-container/40 border-b-2 border-black">22</div>
<div className="h-8 flex items-center justify-center text-sm font-bold bg-secondary-container/40 border-b-2 border-black">23</div>
<div className="h-8 flex items-center justify-center text-sm font-bold bg-secondary-container/40 border-b-2 border-black">24</div>
<div className="h-8 flex items-center justify-center text-sm font-bold bg-secondary-container rounded-md border-2 border-black">25</div>
<div className="h-8 flex items-center justify-center text-sm font-bold">26</div>
</div>
</div>
{/*  List of upcoming  */}
<div className="space-y-4">
<div className="neubrutalist-card bg-white p-4 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-accent-pink border-2 border-black flex items-center justify-center rounded-lg">
<span className="material-symbols-outlined text-black" data-icon="shopping_bag">shopping_bag</span>
</div>
<div>
<h4 className="font-label-bold">BKK Flash Sale</h4>
<p className="text-xs opacity-60">12 Jul - 18 Jul 2026</p>
</div>
</div>
<span className="material-symbols-outlined text-gray-400" data-icon="chevron_right">chevron_right</span>
</div>
<div className="neubrutalist-card bg-white p-4 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-secondary-container border-2 border-black flex items-center justify-center rounded-lg">
<span className="material-symbols-outlined text-black" data-icon="explore">explore</span>
</div>
<div>
<h4 className="font-label-bold">Japan Limited Drop</h4>
<p className="text-xs opacity-60">20 Jul - 25 Jul 2026</p>
</div>
</div>
<span className="material-symbols-outlined text-gray-400" data-icon="chevron_right">chevron_right</span>
</div>
<div className="neubrutalist-card bg-white p-4 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-accent-purple border-2 border-black flex items-center justify-center rounded-lg text-white">
<span className="material-symbols-outlined" data-icon="flight_takeoff">flight_takeoff</span>
</div>
<div>
<h4 className="font-label-bold">Singapore Pre-order</h4>
<p className="text-xs opacity-60">28 Jul - 02 Aug 2026</p>
</div>
</div>
<span className="material-symbols-outlined text-gray-400" data-icon="chevron_right">chevron_right</span>
</div>
</div>
</section>
{/*  Promotional Bento Card  */}
<section className="mb-10">
<div className="neubrutalist-card bg-accent-purple text-white p-6 rounded-2xl relative overflow-hidden">
<div className="relative z-10">
<h3 className="font-headline-main-mobile text-[32px] leading-tight mb-2">Jadi<br/>Traveller?</h3>
<p className="font-body-md text-sm mb-4 max-w-[180px]">Buka jastip dan dapatkan cuan tambahan saat jalan-jalan!</p>
<button className="neubrutalist-btn bg-white text-black px-6 py-2 rounded-full font-label-bold">Daftar Sekarang</button>
</div>
{/*  Abstract visual element  */}
<div className="absolute -right-8 -bottom-8 w-40 h-40 border-4 border-black rotate-12 bg-primary-container rounded-3xl opacity-90"></div>
<div className="absolute -right-4 -bottom-4 w-40 h-40 border-4 border-black rotate-45 bg-accent-pink rounded-3xl opacity-80"></div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-surface py-2 px-4 border-t-2 border-black shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)]">
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container border-2 border-black rounded-full px-4 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="home" style={{ "fontVariationSettings": "'FILL' 1" }}>home</span>
<span className="font-label-bold text-[10px]">Beranda</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant p-2 rounded-xl transition-colors active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="storefront">storefront</span>
<span className="font-label-bold text-[10px]">Katalog</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant p-2 rounded-xl transition-colors active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span className="font-label-bold text-[10px]">Transaksi</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant p-2 rounded-xl transition-colors active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-bold text-[10px]">Akun</span>
</a>
</nav>


    </div>
  );
}
