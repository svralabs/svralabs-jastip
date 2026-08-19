import { useState } from 'react';

const FilterSidebar = ({ onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    onFilterChange({ category: newCategory, priceRange });
  };

  const handlePriceChange = (e) => {
    const newPriceRange = [0, parseInt(e.target.value)];
    setPriceRange(newPriceRange);
    onFilterChange({ category, priceRange: newPriceRange });
  };

  return (
    <div className="w-full md:w-64 bg-gray-50 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-6">Filters</h2>

      <div className="mb-6">
        <h3 className="font-semibold mb-3">Category</h3>
        <select
          value={category}
          onChange={handleCategoryChange}
          className="w-full border rounded px-3 py-2"
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home">Home</option>
        </select>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm">$0</span>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="flex-1"
          />
          <span className="text-sm">${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
