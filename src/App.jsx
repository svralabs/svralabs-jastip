import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Testimonials from './components/Testimonials';
import HeroBanner from './components/HeroBanner';
import OrderForm from './pages/OrderForm';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-slate-900 text-white flex flex-col">
          <HeroBanner />
          <div className="max-w-5xl mx-auto px-4 py-8 flex-1 w-full space-y-12">
            <OrderForm />
            <Testimonials />
          </div>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
