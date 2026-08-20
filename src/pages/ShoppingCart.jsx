import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function ShoppingCart() {
  const navigate = useNavigate();
  const { state, dispatch, cartTotal } = useStore();
  const { cart } = state;

  function updateQty(productId, qty) {
    dispatch({ type: 'UPDATE_QTY', productId: productId, qty: qty });
  }

  function removeItem(productId) {
    dispatch({ type: 'REMOVE_FROM_CART', productId: productId });
    dispatch({ type: 'SHOW_TOAST', message: 'Item dihapus dari keranjang', toastType: 'info' });
  }

  function goCheckout() {
    if (cart.length === 0) {
      dispatch({ type: 'SHOW_TOAST', message: 'Keranjang masih kosong!', toastType: 'error' });
      return;
    }
    navigate('/customer-checkout-form');
  }

  const serviceFeeTotal = cart.reduce(function(s,i){ return s + i.product.service_fee * i.qty; }, 0);
  const productTotal = cart.reduce(function(s,i){ return s + i.product.price_idr * i.qty; }, 0);

  return (
    <div className="w-full min-h-screen bg-[#F5F0FF] font-sans pb-40">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md px-4 py-4 flex items-center gap-3 shadow-sm">
        <button onClick={function(){ navigate(-1); }} className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-100 text-purple-700">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <h1 className="font-bold text-lg text-gray-800 flex-1">Keranjang Belanja</h1>
        {cart.length > 0 && (
          <button
            onClick={function(){ dispatch({type:'CLEAR_CART'}); dispatch({type:'SHOW_TOAST', message:'Keranjang dikosongkan', toastType:'info'}); }}
            className="text-xs text-red-400 font-semibold"
          >Hapus Semua</button>
        )}
      </header>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 px-8 text-center">
          <span className="material-symbols-outlined text-7xl text-purple-200">shopping_bag</span>
          <h2 className="text-xl font-bold text-gray-700 mt-4">Keranjang Kosong</h2>
          <p className="text-gray-400 text-sm mt-2">Yuk tambahkan produk titipan dari katalog kami!</p>
          <button
            onClick={function(){ navigate('/product-catalog'); }}
            className="mt-6 bg-purple-600 text-white px-8 py-3 rounded-2xl font-bold text-sm hover:bg-purple-700 active:scale-95 transition-all"
          >Lihat Katalog</button>
        </div>
      ) : (
        <div className="px-4 pt-4 space-y-3">
          {cart.map(function(item) {
            return (
              <div key={item.product.id} className="bg-white rounded-3xl p-4 flex gap-3 items-center shadow-sm">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 rounded-2xl object-cover flex-shrink-0"
                  onError={function(e){ e.target.src = 'https://placehold.co/80x80/EDE9FE/7C3AED?text=?'; }}
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] bg-purple-100 text-purple-600 font-bold px-2 py-0.5 rounded-full">{item.product.destination}</span>
                  <h3 className="font-bold text-gray-800 text-sm mt-1 leading-tight truncate">{item.product.name}</h3>
                  <p className="text-purple-700 font-bold mt-1">Rp {(item.product.price_idr * item.qty).toLocaleString('id-ID')}</p>
                  <p className="text-[10px] text-gray-400">+Rp {(item.product.service_fee * item.qty).toLocaleString('id-ID')} biaya jastip</p>
                </div>
                <div className="flex flex-col items-end gap-3 flex-shrink-0">
                  <button onClick={function(){ removeItem(item.product.id); }} className="text-red-300 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                  </button>
                  <div className="flex items-center bg-purple-50 rounded-full px-1 py-1 gap-1">
                    <button
                      onClick={function(){ updateQty(item.product.id, item.qty - 1); }}
                      className="w-7 h-7 flex items-center justify-center bg-white rounded-full text-purple-700 shadow-sm active:scale-90 transition-transform"
                    ><span className="material-symbols-outlined text-[16px]">remove</span></button>
                    <span className="px-2 font-bold text-gray-700 text-sm min-w-[20px] text-center">{item.qty}</span>
                    <button
                      onClick={function(){ updateQty(item.product.id, item.qty + 1); }}
                      className="w-7 h-7 flex items-center justify-center bg-purple-600 rounded-full text-white shadow-sm active:scale-90 transition-transform"
                    ><span className="material-symbols-outlined text-[16px]">add</span></button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Order Summary */}
          <div className="bg-white rounded-3xl p-4 space-y-3 shadow-sm mt-2">
            <h3 className="font-bold text-gray-700">Ringkasan Pesanan</h3>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Harga Produk</span>
              <span className="font-semibold">Rp {productTotal.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Biaya Jastip</span>
              <span className="font-semibold">Rp {serviceFeeTotal.toLocaleString('id-ID')}</span>
            </div>
            <div className="border-t border-purple-100 pt-3 flex justify-between">
              <span className="font-bold text-gray-800">Total Estimasi</span>
              <span className="font-bold text-purple-700 text-lg">Rp {cartTotal.toLocaleString('id-ID')}</span>
            </div>
            <p className="text-[11px] text-gray-400 bg-purple-50 rounded-xl p-3">
              * Biaya packing & pengiriman akhir akan dikonfirmasi oleh admin setelah pesanan masuk.
            </p>
          </div>
        </div>
      )}

      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-purple-100">
          <button
            onClick={goCheckout}
            className="w-full bg-purple-600 text-white py-4 rounded-2xl font-bold text-base hover:bg-purple-700 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-200"
          >
            <span>Lanjut ke Checkout</span>
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      )}
    </div>
  );
}
