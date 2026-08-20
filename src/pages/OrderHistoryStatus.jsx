import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const STATUS_CONFIG = {
  'Menunggu Konfirmasi': { color: 'bg-yellow-100 text-yellow-700', icon: 'hourglass_top' },
  'Dikonfirmasi': { color: 'bg-blue-100 text-blue-700', icon: 'check_circle' },
  'Dalam Perjalanan': { color: 'bg-purple-100 text-purple-700', icon: 'local_shipping' },
  'Selesai': { color: 'bg-green-100 text-green-700', icon: 'done_all' },
  'Dibatalkan': { color: 'bg-red-100 text-red-700', icon: 'cancel' },
};

export default function OrderHistoryStatus() {
  const navigate = useNavigate();
  const { state } = useStore();
  const { orders } = state;

  function formatDate(iso) {
    return new Date(iso).toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric', hour:'2-digit', minute:'2-digit' });
  }

  return (
    <div className="w-full min-h-screen bg-[#F5F0FF] font-sans pb-10">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md px-4 py-4 flex items-center gap-3 shadow-sm">
        <button onClick={function(){ navigate('/product-catalog'); }} className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-100 text-purple-700">
          <span className="material-symbols-outlined text-[20px]">home</span>
        </button>
        <h1 className="font-bold text-lg text-gray-800 flex-1">Riwayat Pesanan</h1>
        <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">{orders.length} Pesanan</span>
      </header>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 px-8 text-center">
          <span className="material-symbols-outlined text-7xl text-purple-200">receipt_long</span>
          <h2 className="text-xl font-bold text-gray-700 mt-4">Belum Ada Pesanan</h2>
          <p className="text-gray-400 text-sm mt-2">Pesanan kamu akan muncul di sini setelah checkout.</p>
          <button onClick={function(){ navigate('/product-catalog'); }} className="mt-6 bg-purple-600 text-white px-8 py-3 rounded-2xl font-bold text-sm">
            Mulai Belanja
          </button>
        </div>
      ) : (
        <div className="px-4 pt-4 space-y-4">
          {orders.map(function(order) {
            const cfg = STATUS_CONFIG[order.status] || STATUS_CONFIG['Menunggu Konfirmasi'];
            return (
              <div key={order.id} className="bg-white rounded-3xl p-4 shadow-sm border border-purple-50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-xs text-gray-400">{formatDate(order.createdAt)}</p>
                    <p className="font-bold text-gray-800 mt-0.5">{order.id}</p>
                  </div>
                  <span className={'px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ' + cfg.color}>
                    <span className="material-symbols-outlined text-[14px]">{cfg.icon}</span>
                    {order.status}
                  </span>
                </div>

                <div className="space-y-2 mb-3">
                  {order.items.map(function(item, idx) {
                    return (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-gray-600 truncate flex-1 pr-2">{item.product.name} <span className="text-gray-400">x{item.qty}</span></span>
                        <span className="font-semibold text-gray-700 flex-shrink-0">Rp {((item.product.price_idr + item.product.service_fee) * item.qty).toLocaleString('id-ID')}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-purple-50 pt-3 flex justify-between items-center">
                  <div className="text-xs text-gray-400">
                    <p className="font-semibold text-gray-600">{order.customer && order.customer.name}</p>
                    <p>{order.customer && order.customer.phone}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Total</p>
                    <p className="font-bold text-purple-700 text-lg">Rp {order.total.toLocaleString('id-ID')}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
