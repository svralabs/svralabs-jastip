import React from 'react';
import { useStore } from '../context/StoreContext';

const ProductCard = ({ product }) => {
  const { dispatch } = useStore();

  function handleAdd() {
    dispatch({ type: 'ADD_TO_CART', product: product });
    dispatch({ type: 'SHOW_TOAST', message: product.name + ' ditambahkan!', toastType: 'success' });
  }

  return (
    <div className="rounded-3xl overflow-hidden shadow-sm bg-white border border-purple-50 flex flex-col">
      <img
        src={product.image || 'https://placehold.co/300x200/EDE9FE/7C3AED?text=' + encodeURIComponent(product.name)}
        alt={product.name}
        className="w-full h-40 object-cover"
        onError={function(e){ e.target.src = 'https://placehold.co/300x200/EDE9FE/7C3AED?text=' + encodeURIComponent(product.name); }}
      />
      <div className="p-3 flex flex-col flex-1">
        <h3 className="font-bold text-gray-800 text-sm leading-tight">{product.name}</h3>
        <p className="text-xs text-gray-400 mt-1">{product.category}</p>
        <div className="mt-auto pt-3 flex justify-between items-center">
          <span className="font-bold text-purple-700">Rp {product.price_idr ? product.price_idr.toLocaleString('id-ID') : product.price}</span>
          <button
            onClick={handleAdd}
            className="bg-purple-600 text-white px-3 py-1.5 rounded-xl text-xs font-bold hover:bg-purple-700 active:scale-95 transition-all"
          >+ Keranjang</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
