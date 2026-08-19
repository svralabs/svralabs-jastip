export default function HeroBanner() {
  return (
    <section className="w-full bg-blue-600 text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to SVRALABS Jastip</h1>
        <p className="text-xl md:text-2xl mb-8">Find the best products at unbeatable prices</p>
        <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
}
