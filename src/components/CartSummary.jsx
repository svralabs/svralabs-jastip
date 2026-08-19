const CartSummary = () => {
  // Mock cart items
  const cartItems = [
    { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 1 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
      <ul className="divide-y divide-gray-200">
        {cartItems.map((item) => (
          <li key={item.id} className="py-4 flex justify-between">
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-500">Quantity: {item.quantity}</p>
            </div>
            <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between">
        <span className="font-medium">Total</span>
        <span className="font-bold">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartSummary;
