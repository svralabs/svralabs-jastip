import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function JastipLandingPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="w-full top-0 sticky z-40 bg-background/80 backdrop-blur-md flex justify-between items-center px-screen-margin py-md">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-container clay-card overflow-hidden border-2 border-white">
<img className="w-full h-full object-cover" data-alt="A high-quality 3D clay-style avatar of a young smiling traveler wearing a yellow beanie, set against a soft purple background. The visual style is matte, toy-like, and highly approachable, using soft ambient lighting to create depth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKpKANe7PD2X4YYr9TFTKH4NSUawTwib3I_EoIkwhRWNtE4Bu_OqzAsCf0zAx0abbpc_bBWMEDANKAnEoWT4SiojhyZBc6X2ZLBYF-eDxPFAAPqPK3biJ4kqe4DJCGr5umeYj_U1_Q1cQmaRxWbOWsr8vzh0tXTnMGBpnEBnLL5RODmhqotwK-VeIej4GIkFp2WTNAKks1CRkQwdwpGs1hV6BAH0-3-iOk8vdpUBAMUqtnpQ6nycYuqA"/>
</div>
<h1 className="font-headline-md text-headline-md text-primary">Hi, Traveler!</h1>
</div>
<button className="w-10 h-10 rounded-full bg-surface clay-card flex items-center justify-center text-primary active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</header>
<main className="px-screen-margin pt-4 space-y-6">

<div className="relative w-full clay-card rounded-full bg-surface px-4 py-3 flex items-center gap-3">
<span className="material-symbols-outlined text-outline" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 w-full text-body-md text-on-surface-variant placeholder:text-outline-variant" placeholder="Where do you want to shop?" type="text"/>
</div>

<div className="grid grid-cols-2 gap-grid-gap">

<section className="col-span-2 relative overflow-hidden bg-primary-container rounded-[28px] p-6 clay-card-primary text-white h-52 flex flex-col justify-between">
<div className="z-10 relative">
<span className="bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-caption-sm font-label-pill uppercase tracking-wider">Live Now</span>
<h2 className="font-headline-lg text-headline-lg mt-2">Jastip Bangkok Sale</h2>
<p className="font-body-md opacity-90">25 - 30 Nov</p>
</div>
<div className="z-10 relative flex justify-between items-end">
<div className="bg-text-dark/20 backdrop-blur-lg px-4 py-2 rounded-2xl border border-white/20">
<p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Ends in</p>
<p className="font-label-pill text-lg">2d 14h 05m</p>
</div>
<button className="bg-white text-primary px-5 py-2.5 rounded-full font-label-pill clay-card active:scale-95 transition-transform">
                        Browse Store
                    </button>
</div>

<div className="absolute -right-4 -top-4 w-40 h-40 opacity-90 pointer-events-none">
<img className="w-full h-full object-contain transform rotate-12" data-alt="A 3D clay-style shopping bag overflowing with colorful gift boxes and trendy items, rendered in a playful matte finish with soft, pillow-like edges. The colors include vibrant purples, pinks, and yellows, perfectly matching a modern app interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuATSwbu4ouAidNUFaFc0qvBX_md9pg6c_nI1-2QPjnJlce-j7cwVu4pEfwJOxxf-AMuvTRQoMwzKLXaQPmwQ8zTFx5oOB09UJB53pyeL7DTuUcLK0ORnMQSR9ycUt9rmi078G73S-Jcu-rtSoPgj5hwqdIaDc6pNImFL7qzwXbAFK70JJXYPdeLC-UsbTVbtuOoxJ4NQG3ID8q4lV9djkVylsvIv5La32Tm3hb-NobCDIET7DdWXw7POQ"/>
</div>
</section>

<section className="col-span-2 bg-accent-blue rounded-[28px] p-5 clay-card-blue relative overflow-hidden">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline-md text-on-secondary-container">Upcoming Trips</h3>
<p className="text-caption-sm text-on-secondary-container/70">Mark your calendars!</p>
</div>
<span className="material-symbols-outlined text-on-secondary-container" data-icon="calendar_month">calendar_month</span>
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

<section className="bg-surface rounded-[28px] p-4 clay-card flex flex-col items-center text-center group cursor-pointer active:scale-95 transition-transform">
<div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center mb-2 overflow-hidden">
<img className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" data-alt="A 3D claymorphic model of a stylish sneaker and a tiny designer handbag, colored in soft pastel pinks and purples with a matte finish. High quality rendering with soft ambient occlusion shadows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnV9ONG4-sEp3G-DfvTIxqayWdoEbnMrecidmruIE6r0Ifj0qcB2cGvbY975Xpjx-LTTg-aI_OJIFDGwxse-3S3KFg1Fdj3_9MPh_o5tYbfEZ2pK2_iy0EiE1MQuO6OZvHjhs9RUDzdc2IKpThco77AGVcozzyGert8tMvZ9Y_w57FZCo0d3weWk9AlCCf54pmUH5eix0tPcyRzE4CyBRAahnFsGc6zQdDh7n5dYGU4p25et1WXUU7cg"/>
</div>
<h4 className="font-label-pill text-on-surface">Fashion</h4>
</section>

<section className="bg-surface rounded-[28px] p-4 clay-card flex flex-col items-center text-center group cursor-pointer active:scale-95 transition-transform">
<div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center mb-2 overflow-hidden">
<img className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" data-alt="A 3D clay-style cosmetic set including a lipstick tube and a skincare bottle, rendered in soft peach and cream colors with a smooth matte texture. Playful and toy-like design style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzs9DiqPpCxURk15RVmmujlNGGq1ur-ZrfbHGph4Zm0Vz5l8kPFeqLRrvSWjEA8CMFXif-BZBUTi7yRwcHRk7D3ISlhVb0OaRs9Dbh7xROBzY8Bpi4AR5Rs1uKTvm9fuPA9XvV-oT76MpBqdXBxCf8xN0God1UTD_2bRerRFa0vwin2HdvSNkSoXoVD2at5EdnMfAUHd3_te5jGNuagDl64EUTIWF1c5lwl2qjxW4sKyBlE090XP-vdQ"/>
</div>
<h4 className="font-label-pill text-on-surface">Beauty</h4>
</section>

<section className="col-span-2 bg-accent-pink/30 rounded-[28px] p-4 clay-card-pink flex items-center justify-between group cursor-pointer active:scale-95 transition-transform border border-white/40">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center overflow-hidden clay-card">
<img className="w-10 h-10 object-contain group-hover:rotate-12 transition-transform" data-alt="3D claymorphic snack pack with a cute illustrated mascot on the label, rendered in vibrant yellow and red with soft rounded corners. Matte texture, high quality 3D icon." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7SnrFwTPYcBKOvkfRT879ROUar-8XTZrLX_Yb22dZ_VsMUgXmMja9En4eRNEUy9SuUv2_6T-QSYB4fMxEkX5xUk25N_QoTQOXtbWJUeWWtZBeIysrabMH5JDemxmMGK2VQMCDEHGTZeL-YdptUmj_EWMlTdcgpNybVRgKwk1iGB186SuMgPBAO8Tj6K7ouYhTmpoRz1zAlB3A-jNLEH-nGXe4d7rVUXwM44hN8xK5VLO9NubeVlZ_rw"/>
</div>
<div>
<h4 className="font-label-pill text-on-surface">Snacks &amp; Treats</h4>
<p className="text-caption-sm text-on-surface-variant">Imported favorites</p>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant pr-2" data-icon="arrow_forward_ios">arrow_forward_ios</span>
</section>

<div className="col-span-2 flex justify-center py-4">
<img className="w-48 h-auto opacity-80 animate-bounce" data-alt="A playful 3D clay-style commercial airplane flying through white pillowy clay clouds. The plane is painted in white and lavender purple, with a soft matte finish and extreme rounded proportions. Playful lighting on a light gray background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsqKy-ZOUAH5NUZHK7mVzPYyeGvX7EHSlgIUnu87o873Qrt5jVl052S_gBVjao4DbZQykr2QNRp8lyF7h_NdMFW9GBsbMz1lok5tgM6KAu5g8TZYTbDwEZCMRgcRXQaezq3UsPYzIijR60crd65z46tTGUoJXU5F9sEw_RSdGLpNj73OmK3enH9gbAdI3UaDVrC6hp-eSpwQuxwxwKppxGTIdIkuby7730cNgBOQkrjeFSp8RJ3MUwJw" style={{animationDuration: '3s'}}/>
</div>
</div>
</main>

<nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-around items-center h-16 px-2 mx-auto bg-text-dark dark:bg-surface-container-highest shadow-2xl fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md rounded-full">
<a className="flex flex-col items-center justify-center bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container rounded-full px-6 py-2 transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined active-pill" data-icon="home">home</span>
<span className="font-label-pill text-[10px] mt-1">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-outline-variant dark:text-outline px-6 py-2 hover:bg-primary/10 transition-all rounded-full active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
<span className="font-label-pill text-[10px] mt-1">Orders</span>
</a>
<a className="flex flex-col items-center justify-center text-outline-variant dark:text-outline px-6 py-2 hover:bg-primary/10 transition-all rounded-full active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-pill text-[10px] mt-1">Profile</span>
</a>
</nav>


    </div>
  );
}
