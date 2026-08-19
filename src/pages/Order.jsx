import { useState } from 'react';
import CartSummary from '../components/CartSummary';
import ShippingForm from '../components/ShippingForm';
import PaymentForm from '../components/PaymentForm';

const Order = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    shipping: {
      name: '',
      address: '',
      city: '',
      postalCode: '',
      country: ''
    },
    payment: {
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    }
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [name]: value
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="flex justify-between mb-8">
        <div className={`flex-1 text-center ${step >= 1 ? 'font-bold' : ''}`}>Cart Review</div>
        <div className={`flex-1 text-center ${step >= 2 ? 'font-bold' : ''}`}>Shipping Details</div>
        <div className={`flex-1 text-center ${step >= 3 ? 'font-bold' : ''}`}>Payment</div>
      </div>

      {step === 1 && <CartSummary />}
      {step === 2 && <ShippingForm formData={formData.shipping} handleChange={handleChange} />}
      {step === 3 && <PaymentForm formData={formData.payment} handleChange={handleChange} />}

      <div className="flex justify-between mt-8">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Back
          </button>
        )}
        {step < 3 ? (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ml-auto"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ml-auto"
          >
            Place Order
          </button>
        )}
      </div>
    </div>
  );
};

export default Order;
