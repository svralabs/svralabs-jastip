import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import products from '../data/jastip_products.json';

const CATEGORIES = ['Semua', 'Fashion', 'Beauty', 'Food & Snack'];
const DESTINATIONS = ['Semua', 'Bangkok', 'Jepang'];

export default function ProductCatalog() {
  const navigate = useNavigate();
  const { dispatch, cartCount } = useStore();
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [activeDest, setActiveDest] = useState('Semua');
  const [search, setSearch] = useState('');

  const filtered = products.filter(function(p) {
    const matchCat = activeCategory === 'Semua' || p.category === activeCategory;
    const matchDest = activeDest === 'Semua' || p.destination === activeDest;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchDest && matchSearch;
  });

  function addToCart(product) {
    dispatch({ type: 'ADD_TO_CART', product: product });
    dispatch({ type: 'SHOW_TOAST', message: product.name + ' ditambahkan ke keranjang!', toastType: 'success' });
  }

  return (
    <div className="w-full min-h-screen bg-[#F5F0FF] font-sans pb-32">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md px-4 py-4 flex justify-between items-center shadow-sm">
        <button onClick={function(){ navigate(-1); }} className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-100 text-purple-700">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <h1 className="font-bold text-lg text-gray-800">Katalog Titipan</h1>
        <button onClick={function(){ navigate('/shopping-cart'); }} className="relative w-9 h-9 flex items-center justify-center rounded-full bg-purple-100 text-purple-700">
          <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>
          )}
        </button>
      </header>

      <div className="px-4 pt-4 space-y-3">
        <div className="flex items-center bg-white rounded-2xl px-4 py-3 gap-3 shadow-sm">
          <span className="material-symbols-outlined text-purple-400">search</span>
          <input
            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
            placeholder="Cari produk titipan..."
            value={search}
            onChange={function(e){ setSearch(e.target.value); }}
          />
          {search && (
            <button onClick={function(){ setSearch(''); }} className="text-gray-400">
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {DESTINATIONS.map(function(d) {
            return (
              <button
                key={d}
                onClick={function(){ setActiveDest(d); }}
                className={'px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ' + (activeDest === d ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' : 'bg-white text-gray-600')}
              >{d}</button>
            );
          })}
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {CATEGORIES.map(function(c) {
            return (
              <button
                key={c}
                onClick={function(){ setActiveCategory(c); }}
                className={'px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ' + (activeCategory === c ? 'bg-purple-100 text-purple-700 border border-purple-300' : 'bg-white text-gray-500')}
              >{c}</button>
            );
          })}
        </div>
      </div>

      <div className="px-4 pt-4 grid grid-cols-2 gap-3">
        {filtered.length === 0 && (
          <div className="col-span-2 text-center py-16">
            <span className="material-symbols-outlined text-5xl text-purple-200">search_off</span>
            <p className="text-gray-400 mt-2 text-sm">Produk tidak ditemukan</p>
          </div>
        )}
        {filtered.map(function(p) {
          return (
            <div key={p.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-purple-50 flex flex-col">
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-36 object-cover cursor-pointer"
                  onClick={function(){ navigate('/product-detail-order-form', { state: { product: p } }); }}
                  onError={function(e){ e.target.src = 'https://placehold.co/300x200/EDE9FE/7C3AED?text=' + encodeURIComponent(p.name); }}
                />
                <span className="absolute top-2 left-2 bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{p.destination}</span>
              </div>
              <div className="p-3 flex flex-col flex-1">
                <p className="text-[11px] text-purple-500 font-semibold">{p.category}</p>
                <h3 className="text-sm font-bold text-gray-800 leading-tight mt-0.5 mb-1">{p.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <span className="material-symbols-outlined text-yellow-400 text-[14px]" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                  <span className="text-xs text-gray-500">{p.rating}</span>
                  <span className="text-xs text-gray-300 ml-1">• Stok {p.stock}</span>
                </div>
                <div className="mt-auto">
                  <p className="text-xs text-gray-400">{p.currency} {p.price_original.toLocaleString('id-ID')}</p>
                  <p className="text-base font-bold text-purple-700">Rp {p.price_idr.toLocaleString('id-ID')}</p>
                  <p className="text-[10px] text-gray-400">+Rp {p.service_fee.toLocaleString('id-ID')} biaya jastip</p>
                  <button
                    onClick={function(){ addToCart(p); }}
                    className="mt-2 w-full bg-purple-600 text-white rounded-2xl py-2 text-xs font-bold hover:bg-purple-700 active:scale-95 transition-all"
                  >+ Tambah ke Keranjang</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
