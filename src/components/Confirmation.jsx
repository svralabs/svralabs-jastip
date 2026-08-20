import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Confirmation({ order, onReset }) {
  return (
    <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4">
      <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
      <h3 className="text-2xl font-bold text-white">Jastip Order Placed!</h3>
      <p className="text-sm text-gray-300">Your shopping request is received by our international travelers.</p>
      {onReset && (
        <button onClick={onReset} className="px-6 py-2 rounded-full bg-emerald-500 text-black font-bold text-xs uppercase">
          New Request
        </button>
      )}
    </div>
  );
}
