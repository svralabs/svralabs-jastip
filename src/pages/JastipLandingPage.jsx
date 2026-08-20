import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(function() {
    function tick() {
      var diff = new Date(targetDate) - new Date();
      if (diff <= 0) { setTimeLeft({ d: 0, h: 0, m: 0, s: 0 }); return; }
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    }
    tick();
    var t = setInterval(tick, 1000);
    return function() { clearInterval(t); };
  }, [targetDate]);
  return timeLeft;
}

export default function JastipLandingPage() {
  const navigate = useNavigate();
  const { cartCount, state } = useStore();
  const orderCount = state.orders.length;
  const countdown = useCountdown('2025-11-30T23:59:59');

  var pad = function(n) { return String(n).padStart(2, '0'); };

  return (
    <div className="w-full min-h-screen bg-background font-sans pb-28">

      {/* HEADER */}
      <header className="w-full top-0 sticky z-40 bg-background/80 backdrop-blur-md flex justify-between items-center px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container clay-card overflow-hidden border-2 border-white">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKpKANe7PD2X4YYr9TFTKH4NSUawTwib3I_EoIkwhRWNtE4Bu_OqzAsCf0zAx0abbpc_bBWMEDANKAnEoWT4SiojhyZBc6X2ZLBYF-eDxPFAAPqPK3biJ4kqe4DJCGr5umeYj_U1_Q1cQmaRxWbOWsr8vzh0tXTnMGBpnEBnLL5RODmhqotwK-VeIej4GIkFp2WTNAKks1CRkQwdwpGs1hV6BAH0-3-iOk8vdpUBAMUqtnpQ6nycYuqA"
              alt="avatar"
            />
          </div>
          <h1 className="font-headline-md text-headline-md text-primary">Hi, Traveler!</h1>
        </div>
        <div className="flex items-center gap-2">
          {/* Cart badge */}
          <button
            onClick={function() { navigate('/shopping-cart'); }}
            className="relative w-10 h-10 rounded-full bg-surface clay-card flex items-center justify-center text-primary active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>
            )}
          </button>
          <button className="w-10 h-10 rounded-full bg-surface clay-card flex items-center justify-center text-primary active:scale-95 transition-transform">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      {/* SEARCH */}
      <div className="px-4 mb-4">
        <button
          onClick={function() { navigate('/product-catalog'); }}
          className="relative w-full clay-card rounded-full bg-surface px-4 py-3 flex items-center gap-3 text-left"
        >
          <span className="material-symbols-outlined text-outline">search</span>
          <span className="text-body-md text-outline-variant">Where do you want to shop?</span>
        </button>
      </div>

      <main className="px-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">

          {/* HERO BANNER — Bangkok Sale */}
          <section className="col-span-2 relative overflow-hidden bg-primary-container rounded-[28px] p-6 clay-card-primary text-white h-52 flex flex-col justify-between">
            <div className="z-10 relative">
              <span className="bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-caption-sm font-label-pill uppercase tracking-wider">Live Now</span>
              <h2 className="font-headline-lg text-headline-lg mt-2">Jastip Bangkok Sale</h2>
              <p className="font-body-md opacity-90">25 - 30 Nov</p>
            </div>
            <div className="z-10 relative flex justify-between items-end">
              <div className="bg-black/20 backdrop-blur-lg px-4 py-2 rounded-2xl border border-white/20">
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Ends in</p>
                <p className="font-label-pill text-lg">{pad(countdown.d)}d {pad(countdown.h)}h {pad(countdown.m)}m</p>
              </div>
              <button
                onClick={function() { navigate('/product-catalog'); }}
                className="bg-white text-primary px-5 py-2.5 rounded-full font-label-pill clay-card active:scale-95 transition-transform hover:shadow-lg"
              >Browse Store</button>
            </div>
            <div className="absolute -right-4 -top-4 w-40 h-40 opacity-90 pointer-events-none">
              <img
                className="w-full h-full object-contain transform rotate-12"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATSwbu4ouAidNUFaFc0qvBX_md9pg6c_nI1-2QPjnJlce-j7cwVu4pEfwJOxxf-AMuvTRQoMwzKLXaQPmwQ8zTFx5oOB09UJB53pyeL7DTuUcLK0ORnMQSR9ycUt9rmi078G73S-Jcu-rtSoPgj5hwqdIaDc6pNImFL7qzwXbAFK70JJXYPdeLC-UsbTVbtuOoxJ4NQG3ID8q4lV9djkVylsvIv5La32Tm3hb-NobCDIET7DdWXw7POQ"
                alt="shopping bag"
              />
            </div>
          </section>

          {/* UPCOMING TRIPS */}
          <section
            onClick={function() { navigate('/kalender-event-jastip'); }}
            className="col-span-2 bg-accent-blue rounded-[28px] p-5 clay-card-blue relative overflow-hidden cursor-pointer active:scale-95 transition-transform"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-headline-md text-on-secondary-container">Upcoming Trips</h3>
                <p className="text-caption-sm text-on-secondary-container/70">Mark your calendars!</p>
              </div>
              <span className="material-symbols-outlined text-on-secondary-container">calendar_month</span>
            </div>
            <div className="flex justify-between items-center bg-white/40 backdrop-blur-sm rounded-2xl p-3">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold text-on-secondary-container opacity-60">DEC</span>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white clay-card text-on-secondary-container font-bold text-sm">12</div>
              </div>
              <div className="h-0.5 flex-1 bg-on-secondary-container/10 mx-2 relative">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"></div>
                <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-pink"></div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold text-on-secondary-container opacity-60">DEC</span>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-on-secondary-container text-white clay-card-blue font-bold text-sm">24</div>
              </div>
              <div className="ml-4 text-right">
                <p className="font-label-pill text-xs text-on-secondary-container">Tokyo Disney</p>
                <p className="text-[10px] font-body-md text-on-secondary-container/70">Limited Slots</p>
              </div>
            </div>
          </section>

          {/* CATEGORY — Fashion */}
          <section
            onClick={function() { navigate('/product-catalog'); }}
            className="bg-surface rounded-[28px] p-4 clay-card flex flex-col items-center text-center group cursor-pointer active:scale-95 transition-transform"
          >
            <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center mb-2 overflow-hidden">
              <img
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnV9ONG4-sEp3G-DfvTIxqayWdoEbnMrecidmruIE6r0Ifj0qcB2cGvbY975Xpjx-LTTg-aI_OJIFDGwxse-3S3KFg1Fdj3_9MPh_o5tYbfEZ2pK2_iy0EiE1MQuO6OZvHjhs9RUDzdc2IKpThco77AGVcozzyGert8tMvZ9Y_w57FZCo0d3weWk9AlCCf54pmUH5eix0tPcyRzE4CyBRAahnFsGc6zQdDh7n5dYGU4p25et1WXUU7cg"
                alt="Fashion"
              />
            </div>
            <h4 className="font-label-pill text-on-surface">Fashion</h4>
          </section>

          {/* CATEGORY — Beauty */}
          <section
            onClick={function() { navigate('/product-catalog'); }}
            className="bg-surface rounded-[28px] p-4 clay-card flex flex-col items-center text-center group cursor-pointer active:scale-95 transition-transform"
          >
            <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center mb-2 overflow-hidden">
              <img
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzs9DiqPpCxURk15RVmmujlNGGq1ur-ZrfbHGph4Zm0Vz5l8kPFeqLRrvSWjEA8CMFXif-BZBUTi7yRwcHRk7D3ISlhVb0OaRs9Dbh7xROBzY8Bpi4AR5Rs1uKTvm9fuPA9XvV-oT76MpBqdXBxCf8xN0God1UTD_2bRerRFa0vwin2HdvSNkSoXoVD2at5EdnMfAUHd3_te5jGNuagDl64EUTIWF1c5lwl2qjxW4sKyBlE090XP-vdQ"
                alt="Beauty"
              />
            </div>
            <h4 className="font-label-pill text-on-surface">Beauty</h4>
          </section>

          {/* CATEGORY — Snacks */}
          <section
            onClick={function() { navigate('/product-catalog'); }}
            className="col-span-2 bg-accent-pink/30 rounded-[28px] p-4 clay-card-pink flex items-center justify-between group cursor-pointer active:scale-95 transition-transform border border-white/40"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center overflow-hidden clay-card">
                <img
                  className="w-10 h-10 object-contain group-hover:rotate-12 transition-transform"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7SnrFwTPYcBKOvkfRT879ROUar-8XTZrLX_Yb22dZ_VsMUgXmMja9En4eRNEUy9SuUv2_6T-QSYB4fMxEkX5xUk25N_QoTQOXtbWJUeWWtZBeIysrabMH5JDemxmMGK2VQMCDEHGTZeL-YdptUmj_EWMlTdcgpNybVRgKwk1iGB186SuMgPBAO8Tj6K7ouYhTmpoRz1zAlB3A-jNLEH-nGXe4d7rVUXwM44hN8xK5VLO9NubeVlZ_rw"
                  alt="Snacks"
                />
              </div>
              <div>
                <h4 className="font-label-pill text-on-surface">Snacks &amp; Treats</h4>
                <p className="text-caption-sm text-on-surface-variant">Imported favorites</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant pr-2">arrow_forward_ios</span>
          </section>

          {/* PLANE ANIMATION */}
          <div className="col-span-2 flex justify-center py-4">
            <img
              className="w-48 h-auto opacity-80 animate-bounce"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsqKy-ZOUAH5NUZHK7mVzPYyeGvX7EHSlgIUnu87o873Qrt5jVl052S_gBVjao4DbZQykr2QNRp8lyF7h_NdMFW9GBsbMz1lok5tgM6KAu5g8TZYTbDwEZCMRgcRXQaezq3UsPYzIijR60crd65z46tTGUoJXU5F9sEw_RSdGLpNj73OmK3enH9gbAdI3UaDVrC6hp-eSpwQuxwxwKppxGTIdIkuby7730cNgBOQkrjeFSp8RJ3MUwJw"
              alt="plane"
              style={{animationDuration: '3s'}}
            />
          </div>

        </div>
      </main>

      {/* BOTTOM NAV — fully wired */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex justify-around items-center h-16 px-2 bg-[#1C1B1F] shadow-2xl w-[calc(100%-32px)] max-w-md rounded-full">
        <button
          onClick={function() { navigate('/'); }}
          className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-full px-6 py-2 transition-all active:scale-90 duration-200"
        >
          <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>home</span>
          <span className="font-label-pill text-[10px] mt-1">Home</span>
        </button>

        <button
          onClick={function() { navigate('/order-history-status'); }}
          className="relative flex flex-col items-center justify-center text-outline-variant px-6 py-2 hover:bg-white/10 transition-all rounded-full active:scale-90 duration-200"
        >
          <span className="material-symbols-outlined">shopping_bag</span>
          {orderCount > 0 && (
            <span className="absolute top-1 right-3 bg-red-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">{orderCount}</span>
          )}
          <span className="font-label-pill text-[10px] mt-1">Orders</span>
        </button>

        <button
          onClick={function() { navigate('/product-catalog'); }}
          className="flex flex-col items-center justify-center text-outline-variant px-6 py-2 hover:bg-white/10 transition-all rounded-full active:scale-90 duration-200"
        >
          <span className="material-symbols-outlined">grid_view</span>
          <span className="font-label-pill text-[10px] mt-1">Catalog</span>
        </button>

        <button
          onClick={function() { navigate('/authentication-screen'); }}
          className="flex flex-col items-center justify-center text-outline-variant px-6 py-2 hover:bg-white/10 transition-all rounded-full active:scale-90 duration-200"
        >
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-pill text-[10px] mt-1">Profile</span>
        </button>
      </nav>

    </div>
  );
}
