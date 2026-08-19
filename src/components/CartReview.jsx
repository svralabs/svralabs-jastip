import { useState, useEffect } from 'react';

const CartReview = ({ cart, setCart, nextStep }) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(cart.length > 0);
  }, [cart]);

  const handleQuantityChange = (index, quantity) => {
    const newCart = [...cart];
    newCart[index].quantity = quantity;
    setCart(newCart);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Review Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {cart.map((item, index) => (
            <li key={index} className="py-4 flex justify-between items-center">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
              </div>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                className="w-16 border rounded px-2 py-1"
              />
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-between">
        <button
          onClick={nextStep}
          disabled={!isValid}
          className={`px-4 py-2 rounded ${isValid ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        >
          Continue to Shipping
        </button>
      </div>
    </div>
  );
};

export default CartReview;
