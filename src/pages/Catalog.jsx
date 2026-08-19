import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', priceRange: [0, 1000] });
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    const mockProducts = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      price: Math.floor(Math.random() * 1000) + 1,
      category: ['Electronics', 'Clothing', 'Home'][Math.floor(Math.random() * 3)],
      image: `https://via.placeholder.com/150?text=Product+${i + 1}`
    }));
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  useEffect(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter(product => product.category === filters.category);
    }

    result = result.filter(product =>
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [filters, sortOption, products]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <FilterSidebar onFilterChange={handleFilterChange} />
        <div className="flex-1">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Catalog</h1>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm font-medium">Sort by:</label>
              <select
                id="sort"
                value={sortOption}
                onChange={handleSortChange}
                className="border rounded px-2 py-1"
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A-Z</option>
                <option value="name-desc">Name: Z-A</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
