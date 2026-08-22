import React from 'react'

const IMG = {
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7uJFPBKyoKzedtWA20XxJJKzujnXJ7ephT6fs2yOuW6ItDIVk5vNtRPOSxe1Q82_vaKXTyDtDdHn8HMNGvT05B13wFz2VI5gJQ39d0yHGauPG0eHReBPw8OsrWc0UaBRLHoZdMsYGDJ_7ShVgv7Sx-lnr72reiktIi_4zt0Pm7xs7hkmEtGDcpfk60HKU5GnkghuPEfCSNu44hY8akO-oZA8RhqMjsIgsLwrKPAnfPNdb7yagxz5J',
  bangkok: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBV9FmSzHmMElYvNkNaTfltT1RizeUA5MnOa_GeoMEzL0q6X1-O1T46f8mKsCvFRWrz6gwZWzBgSS7I1PGoSG62Pq2la4upprHhrMVGFWaVYgRgKmTp97BXSMBxjv9x6fEGY--PL0Krb3ueee-vkZnX8HZd3z-5bU3sxy8T--wqD6SrHXNbnP1DKpMsTrcdRqhx6mYHwqNITOHVpGvNMc9jaJY_HGD-__MPpQcDnZ_Y5LoJnx76ZFA',
  tokyo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcaaOGOzHT-EXDIW2kIpsuzjLU-qucF-5-XvOe5tI435Py-Fv4eJAhb0vTYU8ZlgBjaWKjXotacSwfH_h9wP3N_FNKvjcC0YFz_TexBrc6557xlzL2aCdkHkm22OFEEOPhAmqrMCyuSj039Jrq0Sl2PRan_KEPOj6Qpq6OqBKF0DHAhFXGeGYkJyLkPheJXl8KmwAwTlf8xmSOoNTukpbFoJuKbFb3BIDR8cWz1ITQ84y4S9YCKw4o',
}

const EVENTS = [
  {
    img: IMG.bangkok, bg: 'bg-accent-pink', live: true, title: 'Jastip Bangkok July',
    date: '12–18 Jul 2026', btnCls: 'bg-primary-container text-on-primary-container',
  },
  {
    img: IMG.tokyo, bg: 'bg-accent-purple', live: false, title: 'Tokyo Summer Haul',
    date: '20–25 Jul 2026', btnCls: 'bg-secondary-container text-on-secondary-container',
  },
]

const DAYS_HEAD = ['Sn', 'Sl', 'Rb', 'Km', 'Jm', 'Sb', 'Mg']
const CAL = [
  { d: '29', cls: 'opacity-30' }, { d: '30', cls: 'opacity-30' },
  { d: '1' }, { d: '2' }, { d: '3' }, { d: '4' }, { d: '5' },
  { d: '6' }, { d: '7' }, { d: '8' }, { d: '9' }, { d: '10' }, { d: '11' },
  { d: '12', cls: 'bg-accent-pink rounded-md border-2 border-black' },
  { d: '13', cls: 'bg-accent-pink/40 border-b-2 border-black' },
  { d: '14', cls: 'bg-accent-pink/40 border-b-2 border-black' },
  { d: '15', cls: 'bg-accent-pink/40 border-b-2 border-black' },
  { d: '16', cls: 'bg-accent-pink/40 border-b-2 border-black' },
  { d: '17', cls: 'bg-accent-pink/40 border-b-2 border-black' },
  { d: '18', cls: 'bg-accent-pink rounded-md border-2 border-black' },
  { d: '19' },
  { d: '20', cls: 'bg-secondary-container rounded-md border-2 border-black' },
  { d: '21', cls: 'bg-secondary-container/40 border-b-2 border-black' },
  { d: '22', cls: 'bg-secondary-container/40 border-b-2 border-black' },
  { d: '23', cls: 'bg-secondary-container/40 border-b-2 border-black' },
  { d: '24', cls: 'bg-secondary-container/40 border-b-2 border-black' },
  { d: '25', cls: 'bg-secondary-container rounded-md border-2 border-black' },
  { d: '26' },
]

const UPCOMING = [
  { icon: 'shopping_bag', bg: 'bg-accent-pink', textBlack: true, title: 'BKK Flash Sale', date: '12 Jul - 18 Jul 2026' },
  { icon: 'explore', bg: 'bg-secondary-container', textBlack: true, title: 'Japan Limited Drop', date: '20 Jul - 25 Jul 2026' },
  { icon: 'flight_takeoff', bg: 'bg-accent-purple', textBlack: false, title: 'Singapore Pre-order', date: '28 Jul - 02 Aug 2026' },
]

export default function App() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 px-margin h-16 flex items-center justify-between bg-primary border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-white">
            <img className="w-full h-full object-cover" src={IMG.avatar} alt="avatar" />
          </div>
          <h1 className="font-headline-main-mobile text-[24px] text-on-primary">Halo, Jastiper!</h1>
        </div>
        <button className="relative w-10 h-10 flex items-center justify-center bg-white border-2 border-black rounded-full active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
          <span className="material-symbols-outlined text-black">notifications</span>
          <span className="absolute top-0 right-0 w-3 h-3 bg-accent-orange border-2 border-black rounded-full" />
        </button>
      </header>

      <main className="mt-24 px-margin">
        {/* Search */}
        <div className="mb-8">
          <div className="neubrutalist-card bg-secondary-container p-4 rounded-xl flex items-center gap-3">
            <span className="material-symbols-outlined text-black">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 w-full font-label-bold placeholder:text-on-secondary-container/60 outline-none"
              placeholder="Cari jastip apa hari ini?"
              type="text"
            />
          </div>
        </div>

        {/* Event Aktif */}
        <section className="mb-10">
          <div className="flex justify-between items-end mb-4">
            <h2 className="font-heading-card text-heading-card underline decoration-accent-pink decoration-4 underline-offset-4">Event Aktif</h2>
            <a className="font-label-bold text-sm underline" href="#">Lihat Semua</a>
          </div>
          <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar -mx-margin px-margin">
            {EVENTS.map((e) => (
              <div key={e.title} className="neubrutalist-card bg-white min-w-[280px] rounded-xl overflow-hidden flex-shrink-0">
                <div className={`h-32 ${e.bg} relative overflow-hidden`}>
                  <img className="w-full h-full object-cover" src={e.img} alt={e.title} />
                  {e.live && <div className="absolute top-2 right-2 bg-white border-2 border-black px-2 py-1 rounded-full text-[10px] font-bold">LIVE</div>}
                </div>
                <div className="p-4">
                  <h3 className="font-heading-card text-[18px] mb-1">{e.title}</h3>
                  <p className="text-sm opacity-70 mb-4 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    {e.date}
                  </p>
                  <button className={`neubrutalist-btn ${e.btnCls} w-full py-2 rounded-full font-label-bold`}>
                    Lihat Katalog
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Kalender Event */}
        <section className="mb-10">
          <h2 className="font-heading-card text-heading-card mb-4 underline decoration-secondary-container decoration-4 underline-offset-4">Kalender Event</h2>
          <div className="neubrutalist-card bg-white rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-label-bold text-lg">Juli 2026</span>
              <div className="flex gap-2">
                <button className="w-8 h-8 flex items-center justify-center border-2 border-black rounded-md active:bg-gray-100">
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center border-2 border-black rounded-md active:bg-gray-100">
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {DAYS_HEAD.map((d) => (
                <div key={d} className="text-[10px] font-bold opacity-50 uppercase">{d}</div>
              ))}
              {CAL.map((c) => (
                <div key={c.d} className={`h-8 flex items-center justify-center text-sm font-bold ${c.cls || ''}`}>{c.d}</div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {UPCOMING.map((u) => (
              <div key={u.title} className="neubrutalist-card bg-white p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${u.bg} border-2 border-black flex items-center justify-center rounded-lg ${u.textBlack ? 'text-black' : 'text-white'}`}>
                    <span className="material-symbols-outlined">{u.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold">{u.title}</h4>
                    <p className="text-xs opacity-60">{u.date}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-gray-400">chevron_right</span>
              </div>
            ))}
          </div>
        </section>

        {/* Promo Bento */}
        <section className="mb-10">
          <div className="neubrutalist-card bg-accent-purple text-white p-6 rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-headline-main-mobile text-[32px] leading-tight mb-2">Jadi<br />Traveller?</h3>
              <p className="font-body-md text-sm mb-4 max-w-[180px]">Buka jastip dan dapatkan cuan tambahan saat jalan-jalan!</p>
              <button className="neubrutalist-btn bg-white text-black px-6 py-2 rounded-full font-label-bold">Daftar Sekarang</button>
            </div>
            <div className="absolute -right-8 -bottom-8 w-40 h-40 border-4 border-black rotate-12 bg-primary-container rounded-3xl opacity-90" />
            <div className="absolute -right-4 -bottom-4 w-40 h-40 border-4 border-black rotate-45 bg-accent-pink rounded-3xl opacity-80" />
          </div>
        </section>
      </main>

      {/* BottomNav */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-surface py-2 px-4 border-t-2 border-black shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)]">
        <a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container border-2 border-black rounded-full px-4 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95 transition-transform" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="font-label-bold text-[10px]">Beranda</span>
        </a>
        {[
          { icon: 'storefront', label: 'Katalog' },
          { icon: 'receipt_long', label: 'Transaksi' },
          { icon: 'person', label: 'Akun' },
        ].map((n) => (
          <a key={n.label} className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant p-2 rounded-xl transition-colors active:scale-95" href="#">
            <span className="material-symbols-outlined">{n.icon}</span>
            <span className="font-label-bold text-[10px]">{n.label}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}
