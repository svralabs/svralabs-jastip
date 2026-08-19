import React, { useState } from 'react';
import Home from './pages/Home';
import Catalog1 from './pages/Catalog1';
import Catalog2 from './pages/Catalog2';
import OrderForm from './pages/OrderForm';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');

  return (
    <div className="min-h-screen flex flex-col bg-[#fff8ef]">
      {/* Top Demo Navigation Bar */}
      <header className="bg-black text-white px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-xs z-50 sticky top-0 border-b border-yellow-400">
        <span className="font-bold text-yellow-400 tracking-wider uppercase">🛍️ Jastip App Demo:</span>
        <nav className="flex items-center gap-1 sm:gap-2">
          <button 
            onClick={() => setCurrentTab('home')} 
            className={`px-3 py-1 rounded font-semibold transition ${currentTab === 'home' ? 'bg-yellow-400 text-black shadow' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`}>
            1. Home Mobile
          </button>
          <button 
            onClick={() => setCurrentTab('cat1')} 
            className={`px-3 py-1 rounded font-semibold transition ${currentTab === 'cat1' ? 'bg-yellow-400 text-black shadow' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`}>
            2. Catalog Trip #1
          </button>
          <button 
            onClick={() => setCurrentTab('cat2')} 
            className={`px-3 py-1 rounded font-semibold transition ${currentTab === 'cat2' ? 'bg-yellow-400 text-black shadow' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`}>
            3. Catalog Trip #2
          </button>
          <button 
            onClick={() => setCurrentTab('order')} 
            className={`px-3 py-1 rounded font-semibold transition ${currentTab === 'order' ? 'bg-yellow-400 text-black shadow' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`}>
            4. Order Form
          </button>
        </nav>
      </header>

      {/* Main Screen Content */}
      <main className="flex-1">
        {currentTab === 'home' && <Home />}
        {currentTab === 'cat1' && <Catalog1 />}
        {currentTab === 'cat2' && <Catalog2 />}
        {currentTab === 'order' && <OrderForm />}
      </main>
    </div>
  );
}
