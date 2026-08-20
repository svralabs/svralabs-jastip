import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <span className="material-symbols-outlined text-5xl text-purple-200">search_off</span>
        <p className="text-gray-400 mt-2 text-sm">Tidak ada produk tersedia</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-3">
      {products.map(function(product) {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductGrid;
