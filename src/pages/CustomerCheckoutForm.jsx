import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CustomerCheckoutForm() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

    
    <header className="w-full top-0 sticky z-40 bg-background flex items-center justify-between px-screen-margin py-md shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <button className="w-11 h-11 flex items-center justify-center rounded-full hover:opacity-80 transition-opacity active:scale-95 transition-transform duration-200" aria-label="Go Back">
            <span className="material-symbols-outlined text-primary text-2xl" data-original-icon="arrow_back">arrow_back</span>
        </button>
        <h1 className="font-headline-md text-headline-md-mobile text-primary">Checkout</h1>
        <button className="w-11 h-11 flex items-center justify-center rounded-full hover:opacity-80 transition-opacity active:scale-95 transition-transform duration-200" aria-label="Help">
            <span className="material-symbols-outlined text-primary text-2xl">help</span>
        </button>
    </header>

    <main className="px-screen-margin mt-lg space-y-grid-gap">
        
        
        <section className="space-y-sm">
            <h2 className="font-h2 text-h2 text-text-dark px-xs">Data Penerima</h2>
            
            
            <div className="bg-surface clay-card rounded-input p-xs">
                <div className="clay-input-inset rounded-input px-lg py-md bg-surface"><label className="block text-xs font-label-pill text-text-secondary mb-1" htmlFor="nama">Nama Penerima</label><input className="w-full bg-transparent border-none focus:ring-0 p-0 text-text-dark font-body-md placeholder:text-outline-variant" id="nama" placeholder="Masukkan nama lengkap" type="text" style={{fontFamily: '&quot'}} /></div>
            </div>

            
            <div className="bg-surface clay-card rounded-input p-xs">
                <div className="clay-input-inset rounded-input px-lg py-md bg-surface"><label className="block text-xs font-label-pill text-text-secondary mb-1" htmlFor="alamat">Alamat Lengkap</label><textarea className="w-full bg-transparent border-none focus:ring-0 p-0 text-text-dark font-body-md placeholder:text-outline-variant resize-none" id="alamat" placeholder="Masukkan alamat pengiriman detail..." rows="3" style={{fontFamily: '&quot'}}></textarea></div>
            </div>

            
            <div className="bg-surface clay-card rounded-input p-xs">
                <div className="clay-input-inset rounded-input px-lg py-md bg-surface"><label className="block text-xs font-label-pill text-text-secondary mb-1" htmlFor="phone">No. Telepon</label><input className="w-full bg-transparent border-none focus:ring-0 p-0 text-text-dark font-body-md placeholder:text-outline-variant" id="phone" placeholder="0812 XXXX XXXX" type="tel" style={{fontFamily: '&quot'}} /></div>
            </div>
        </section>

        
        <section className="mt-lg">
            <div className="bg-accent-blue/40 clay-card rounded-[32px] p-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/30 blur-3xl rounded-full -mr-16 -mt-16"></div>
                
                <h3 className="font-h2 text-h2 text-on-primary-container mb-lg">Order Overview</h3>
                
                <div className="space-y-md relative z-10">
                    <div className="flex justify-between items-center text-on-primary-container/80">
                        <span className="font-body-md">Product Total</span>
                        <span className="font-label-pill">Rp 450.000</span>
                    </div>
                    <div className="flex justify-between items-center text-on-primary-container/80">
                        <span className="font-body-md">Admin Fee</span>
                        <span className="font-label-pill">Rp 2.500</span>
                    </div>
                    <div className="flex justify-between items-center text-on-primary-container/80 pb-md border-b border-on-primary-container/10">
                        <span className="font-body-md">Shipping</span>
                        <span className="font-label-pill">Rp 15.000</span>
                    </div>
                    <div className="flex justify-between items-center pt-md">
                        <span className="font-h2 text-h2 text-on-primary-container">Grand Total</span>
                        <span className="font-h1 text-h1 text-primary">Rp 467.500</span>
                    </div>
                </div>
            </div>
        </section>

        
        <div className="pt-lg">
            <button className="clay-button w-full bg-primary-container text-on-primary-container font-h2 text-h2 py-xl rounded-full active:scale-95 transition-all duration-300 ease-out flex items-center justify-center gap-sm">
                <span className="">Kirim Pesanan</span>
                <span className="material-symbols-outlined">send</span>
            </button>
        </div>
    </main>

    
    <nav className="fixed bottom-4 left-4 right-4 rounded-full z-50 h-16 bg-text-dark flex justify-around items-center px-4 w-[calc(100%-32px)] shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
        <button className="flex items-center justify-center text-surface-variant/60 w-12 h-12 hover:scale-110 active:scale-90 transition-all">
            <span className="material-symbols-outlined">home</span>
        </button>
        <button className="flex items-center justify-center bg-primary-container text-on-primary-container rounded-full w-12 h-12 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:scale-110 active:scale-90 transition-all">
            <span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>shopping_bag</span>
        </button>
        <button className="flex items-center justify-center text-surface-variant/60 w-12 h-12 hover:scale-110 active:scale-90 transition-all">
            <span className="material-symbols-outlined">receipt_long</span>
        </button>
        </nav>
    </div>
  );
}
