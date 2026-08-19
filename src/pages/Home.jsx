import SearchBar from '../components/SearchBar';

const featuredItems = [
  { id: 1, name: 'Product 1', price: '$19.99', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: '$29.99', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: '$39.99', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: '$49.99', image: 'https://via.placeholder.com/150' },
];

export default function Home() {
  const handleSearch = (query) => {
    console.log('Searching for:', query);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Banner */}
      <div className="bg-blue-500 text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-xl mb-8">Discover amazing products at great prices</p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300">
          Shop Now
        </button>
      </div>

      {/* Search Bar */}
      <div className="py-8 px-4">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Featured Items */}
      <div className="py-8 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
