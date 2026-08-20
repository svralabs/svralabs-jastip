import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function ProductDetailOrderForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch, cartCount } = useStore();

  const product = location.state && location.state.product;
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('desc');

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F0FF] px-8 text-center">
        <span className="material-symbols-outlined text-6xl text-purple-200">inventory_2</span>
        <h2 className="text-xl font-bold text-gray-700 mt-4">Produk tidak ditemukan</h2>
        <p className="text-gray-400 text-sm mt-2">Silakan pilih produk dari katalog</p>
        <button
          onClick={function(){ navigate('/product-catalog'); }}
          className="mt-6 bg-purple-600 text-white px-8 py-3 rounded-2xl font-bold text-sm hover:bg-purple-700 active:scale-95 transition-all"
        >Ke Katalog</button>
      </div>
    );
  }

  const totalPrice = (product.price_idr + product.service_fee) * qty;

  function addToCart() {
    for (let i = 0; i < qty; i++) {
      dispatch({ type: 'ADD_TO_CART', product: product });
    }
    dispatch({ type: 'SHOW_TOAST', message: qty + 'x ' + product.name + ' ditambahkan!', toastType: 'success' });
  }

  function buyNow() {
    addToCart();
    navigate('/shopping-cart');
  }

  const DEST_FLAG = { 'Bangkok': '🇹🇭', 'Jepang': '🇯🇵' };

  return (
    <div className="w-full min-h-screen bg-[#F5F0FF] font-sans pb-40">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md px-4 py-4 flex justify-between items-center shadow-sm">
        <button onClick={function(){ navigate(-1); }} className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-100 text-purple-700">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <h1 className="font-bold text-sm text-gray-700 max-w-[180px] truncate">{product.name}</h1>
        <button onClick={function(){ navigate('/shopping-cart'); }} className="relative w-9 h-9 flex items-center justify-center rounded-full bg-purple-100 text-purple-700">
          <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>
          )}
        </button>
      </header>

      {/* Product Image */}
      <div className="relative bg-white mx-4 mt-4 rounded-3xl overflow-hidden aspect-square shadow-sm">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={function(e){ e.target.src = 'https://placehold.co/400x400/EDE9FE/7C3AED?text=' + encodeURIComponent(product.name); }}
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-purple-600 text-white text-[11px] font-bold px-3 py-1 rounded-full">
            {DEST_FLAG[product.destination] || ''} {product.destination}
          </span>
          <span className="bg-white text-purple-600 text-[11px] font-bold px-3 py-1 rounded-full border border-purple-200">
            {product.category}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-2xl px-3 py-1.5 flex items-center gap-1">
          <span className="material-symbols-outlined text-yellow-400 text-[16px]" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
          <span className="font-bold text-gray-700 text-sm">{product.rating}</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="px-4 mt-4 space-y-4">
        <div className="bg-white rounded-3xl p-4 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 leading-tight">{product.name}</h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-gray-400 bg-purple-50 px-2 py-1 rounded-full">Trip: {product.trip}</span>
            <span className="text-xs text-gray-400 bg-purple-50 px-2 py-1 rounded-full">Stok: {product.stock}</span>
          </div>

          {/* Price breakdown */}
          <div className="mt-4 p-3 bg-purple-50 rounded-2xl space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Harga produk</span>
              <span className="font-semibold text-gray-700">Rp {product.price_idr.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Biaya jastip</span>
              <span className="font-semibold text-purple-600">Rp {product.service_fee.toLocaleString('id-ID')}</span>
            </div>
            <div className="border-t border-purple-100 pt-2 flex justify-between">
              <span className="font-bold text-gray-700">Total / item</span>
              <span className="font-bold text-purple-700">Rp {(product.price_idr + product.service_fee).toLocaleString('id-ID')}</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-3xl p-4 shadow-sm">
          <div className="flex gap-2 mb-3">
            {[['desc','Deskripsi'],['trip','Info Trip'],['tnc','Ketentuan']].map(function(t){
              return (
                <button
                  key={t[0]}
                  onClick={function(){ setActiveTab(t[0]); }}
                  className={'px-3 py-1.5 rounded-full text-xs font-bold transition-all ' + (activeTab === t[0] ? 'bg-purple-600 text-white' : 'bg-purple-50 text-gray-500')}
                >{t[1]}</button>
              );
            })}
          </div>

          {activeTab === 'desc' && (
            <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
          )}
          {activeTab === 'trip' && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Nama Trip</span>
                <span className="font-semibold text-gray-700">{product.trip}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tanggal Trip</span>
                <span className="font-semibold text-gray-700">{product.trip_date}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tujuan</span>
                <span className="font-semibold text-gray-700">{DEST_FLAG[product.destination]} {product.destination}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Mata Uang</span>
                <span className="font-semibold text-gray-700">{product.currency} {product.price_original.toLocaleString()}</span>
              </div>
            </div>
          )}
          {activeTab === 'tnc' && (
            <ul className="text-sm text-gray-600 space-y-2 list-none">
              {['Pemesanan ditutup 5 hari sebelum keberangkatan','Pembayaran DP 50% saat konfirmasi pesanan','Jika barang habis di toko, admin akan menghubungi via WhatsApp','Pengiriman ke Indonesia estimasi 7-14 hari setelah tiba','Barang yang sudah dibeli tidak dapat di-refund kecuali ada kerusakan'].map(function(rule, i){
                return (
                  <li key={i} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-purple-400 text-[16px] mt-0.5 flex-shrink-0">check_circle</span>
                    <span>{rule}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Quantity selector */}
        <div className="bg-white rounded-3xl p-4 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Jumlah</p>
            <p className="text-lg font-bold text-purple-700 mt-0.5">
              Rp {totalPrice.toLocaleString('id-ID')}
            </p>
          </div>
          <div className="flex items-center bg-purple-50 rounded-full px-1 py-1 gap-1">
            <button
              onClick={function(){ if (qty > 1) setQty(function(q){ return q-1; }); }}
              disabled={qty <= 1}
              className={'w-10 h-10 flex items-center justify-center rounded-full transition-all font-bold text-lg ' + (qty <= 1 ? 'text-gray-300 cursor-not-allowed' : 'bg-white text-purple-700 shadow-sm active:scale-90')}
            >
              <span className="material-symbols-outlined text-[20px]">remove</span>
            </button>
            <span className="px-4 font-bold text-gray-800 text-xl min-w-[40px] text-center">{qty}</span>
            <button
              onClick={function(){ if (qty < product.stock) setQty(function(q){ return q+1; }); }}
              disabled={qty >= product.stock}
              className={'w-10 h-10 flex items-center justify-center rounded-full transition-all font-bold text-lg ' + (qty >= product.stock ? 'text-gray-300 cursor-not-allowed' : 'bg-purple-600 text-white shadow-sm active:scale-90')}
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-purple-100 flex gap-3">
        <button
          onClick={addToCart}
          className="flex-1 border-2 border-purple-600 text-purple-600 py-4 rounded-2xl font-bold text-sm hover:bg-purple-50 active:scale-95 transition-all"
        >
          + Keranjang
        </button>
        <button
          onClick={buyNow}
          className="flex-[2] bg-purple-600 text-white py-4 rounded-2xl font-bold text-sm hover:bg-purple-700 active:scale-95 transition-all shadow-lg shadow-purple-200 flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
          Beli Sekarang
        </button>
      </div>
    </div>
  );
}
