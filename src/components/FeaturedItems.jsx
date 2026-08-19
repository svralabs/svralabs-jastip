const featuredItems = [
  { id: 1, name: 'Premium Headphones', price: '$199', image: 'https://via.placeholder.com/300x200' },
  { id: 2, name: 'Smart Watch', price: '$299', image: 'https://via.placeholder.com/300x200' },
  { id: 3, name: 'Wireless Earbuds', price: '$149', image: 'https://via.placeholder.com/300x200' },
];

export default function FeaturedItems() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.price}</p>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
