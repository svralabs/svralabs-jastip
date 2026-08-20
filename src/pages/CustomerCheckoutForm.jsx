import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function CustomerCheckoutForm() {
  const navigate = useNavigate();
  const { state, dispatch, cartTotal } = useStore();
  const { cart } = state;

  const [form, setForm] = useState({ name: '', phone: '', address: '', notes: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Nama wajib diisi';
    if (!form.phone.trim()) e.phone = 'No. HP wajib diisi';
    else if (!/^[0-9+]{10,15}$/.test(form.phone.replace(/\s/g,''))) e.phone = 'Format no. HP tidak valid';
    if (!form.address.trim()) e.address = 'Alamat pengiriman wajib diisi';
    return e;
  }

  function handleChange(field, value) {
    setForm(function(prev){ return Object.assign({}, prev, {[field]: value}); });
    if (errors[field]) setErrors(function(prev){ const n = Object.assign({}, prev); delete n[field]; return n; });
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      dispatch({ type: 'SHOW_TOAST', message: 'Lengkapi data terlebih dahulu', toastType: 'error' });
      return;
    }
    setSubmitting(true);
    setTimeout(function() {
      dispatch({ type: 'PLACE_ORDER', total: cartTotal, customer: form });
      dispatch({ type: 'SHOW_TOAST', message: 'Pesanan berhasil dikirim!', toastType: 'success' });
      navigate('/order-history-status');
    }, 1200);
  }

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F0FF] px-8 text-center">
        <span className="material-symbols-outlined text-6xl text-purple-200">shopping_bag</span>
        <p className="text-gray-500 mt-4">Keranjang kosong. Tambahkan produk dulu!</p>
        <button onClick={function(){ navigate('/product-catalog'); }} className="mt-4 bg-purple-600 text-white px-6 py-3 rounded-2xl font-bold text-sm">
          Ke Katalog
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F5F0FF] font-sans pb-40">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md px-4 py-4 flex items-center gap-3 shadow-sm">
        <button onClick={function(){ navigate(-1); }} className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-100 text-purple-700">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <h1 className="font-bold text-lg text-gray-800">Form Checkout</h1>
      </header>

      <div className="px-4 pt-4 space-y-4">
        {/* Order summary strip */}
        <div className="bg-purple-600 text-white rounded-3xl p-4 flex justify-between items-center">
          <div>
            <p className="text-xs opacity-80">{cart.length} item dalam keranjang</p>
            <p className="text-xl font-bold">Rp {cartTotal.toLocaleString('id-ID')}</p>
          </div>
          <span className="material-symbols-outlined text-3xl opacity-50">shopping_cart</span>
        </div>

        {/* Form fields */}
        <div className="bg-white rounded-3xl p-4 space-y-4 shadow-sm">
          <h3 className="font-bold text-gray-700 text-base">Data Pemesan</h3>

          {[
            { field: 'name', label: 'Nama Lengkap', icon: 'person', placeholder: 'Contoh: Fahmi Faza', type: 'text' },
            { field: 'phone', label: 'No. HP / WhatsApp', icon: 'phone', placeholder: '08xx-xxxx-xxxx', type: 'tel' },
          ].map(function(f) {
            return (
              <div key={f.field}>
                <label className="text-xs font-bold text-gray-500 mb-1.5 block">{f.label}</label>
                <div className={'flex items-center bg-purple-50 rounded-2xl px-3 py-3 gap-2 border ' + (errors[f.field] ? 'border-red-400' : 'border-transparent')}>
                  <span className="material-symbols-outlined text-purple-400 text-[20px]">{f.icon}</span>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.field]}
                    onChange={function(e){ handleChange(f.field, e.target.value); }}
                    className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                  />
                </div>
                {errors[f.field] && <p className="text-red-400 text-xs mt-1 pl-1">{errors[f.field]}</p>}
              </div>
            );
          })}

          <div>
            <label className="text-xs font-bold text-gray-500 mb-1.5 block">Alamat Pengiriman</label>
            <div className={'flex bg-purple-50 rounded-2xl px-3 py-3 gap-2 border ' + (errors.address ? 'border-red-400' : 'border-transparent')}>
              <span className="material-symbols-outlined text-purple-400 text-[20px] mt-0.5">location_on</span>
              <textarea
                rows={3}
                placeholder="Jl. Merdeka No. 1, Kota, Provinsi, Kode Pos"
                value={form.address}
                onChange={function(e){ handleChange('address', e.target.value); }}
                className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 resize-none"
              />
            </div>
            {errors.address && <p className="text-red-400 text-xs mt-1 pl-1">{errors.address}</p>}
          </div>

          <div>
            <label className="text-xs font-bold text-gray-500 mb-1.5 block">Catatan (opsional)</label>
            <div className="flex bg-purple-50 rounded-2xl px-3 py-3 gap-2">
              <span className="material-symbols-outlined text-purple-400 text-[20px] mt-0.5">notes</span>
              <textarea
                rows={2}
                placeholder="Ukuran, warna, atau instruksi khusus..."
                value={form.notes}
                onChange={function(e){ handleChange('notes', e.target.value); }}
                className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Items recap */}
        <div className="bg-white rounded-3xl p-4 shadow-sm">
          <h3 className="font-bold text-gray-700 mb-3">Item Pesanan</h3>
          {cart.map(function(item) {
            return (
              <div key={item.product.id} className="flex justify-between items-center py-2 border-b border-purple-50 last:border-0">
                <div className="flex-1 min-w-0 pr-2">
                  <p className="text-sm font-semibold text-gray-700 truncate">{item.product.name}</p>
                  <p className="text-xs text-gray-400">{item.qty}x • {item.product.destination}</p>
                </div>
                <p className="text-sm font-bold text-purple-700 flex-shrink-0">Rp {((item.product.price_idr + item.product.service_fee) * item.qty).toLocaleString('id-ID')}</p>
              </div>
            );
          })}
          <div className="flex justify-between pt-3 border-t border-purple-100 mt-2">
            <span className="font-bold text-gray-800">Total</span>
            <span className="font-bold text-purple-700 text-lg">Rp {cartTotal.toLocaleString('id-ID')}</span>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-purple-100">
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className={'w-full py-4 rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg ' + (submitting ? 'bg-purple-300 text-white cursor-not-allowed' : 'bg-purple-600 text-white hover:bg-purple-700 active:scale-95 shadow-purple-200')}
        >
          {submitting ? (
            <>
              <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
              Memproses Pesanan...
            </>
          ) : (
            <>
              <span className="material-symbols-outlined">send</span>
              Kirim Pesanan
            </>
          )}
        </button>
      </div>
    </div>
  );
}
