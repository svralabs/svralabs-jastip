import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F0FF] px-8 text-center">
      <div className="text-8xl font-black text-purple-200">404</div>
      <span className="material-symbols-outlined text-5xl text-purple-300 mt-2">travel_explore</span>
      <h2 className="text-xl font-bold text-gray-700 mt-4">Halaman Tidak Ditemukan</h2>
      <p className="text-gray-400 text-sm mt-2">Sepertinya halaman ini sudah pergi jastip...</p>
      <button
        onClick={function(){ navigate('/'); }}
        className="mt-8 bg-purple-600 text-white px-8 py-3 rounded-2xl font-bold text-sm hover:bg-purple-700 active:scale-95 transition-all shadow-lg shadow-purple-200"
      >Kembali ke Beranda</button>
    </div>
  );
}
