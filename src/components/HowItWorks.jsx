const steps = [
  { id: 1, title: 'Browse Products', description: 'Explore our wide range of products' },
  { id: 2, title: 'Add to Cart', description: 'Select items you want to purchase' },
  { id: 3, title: 'Checkout', description: 'Complete your purchase securely' },
];

export default function HowItWorks() {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">{step.id}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
