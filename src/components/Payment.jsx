import { useState, useEffect } from 'react';

const Payment = ({ payment, setPayment, nextStep, prevStep }) => {
  const [form, setForm] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setForm(payment);
  }, [payment]);

  useEffect(() => {
    validateForm();
  }, [form]);

  const validateForm = () => {
    const newErrors = {};
    if (!form.cardNumber || form.cardNumber.length !== 16) newErrors.cardNumber = 'Card number must be 16 digits';
    if (!form.expiryDate || !/^\d{2}\/\d{2}$/.test(form.expiryDate)) newErrors.expiryDate = 'Expiry date must be in MM/YY format';
    if (!form.cvv || form.cvv.length !== 3) newErrors.cvv = 'CVV must be 3 digits';
    if (!form.nameOnCard) newErrors.nameOnCard = 'Name on card is required';

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    if (form[name].trim() === '') {
      setErrors({ ...errors, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required` });
    } else {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setPayment(form);
      nextStep();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Payment Information</h2>
      <div>
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={form.cardNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.cardNumber ? 'border-red-500' : ''}`}
        />
        {errors.cardNumber && <p className="mt-2 text-sm text-red-600">{errors.cardNumber}</p>}
      </div>
      <div>
        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date (MM/YY)</label>
        <input
          type="text"
          id="expiryDate"
          name="expiryDate"
          value={form.expiryDate}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.expiryDate ? 'border-red-500' : ''}`}
        />
        {errors.expiryDate && <p className="mt-2 text-sm text-red-600">{errors.expiryDate}</p>}
      </div>
      <div>
        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={form.cvv}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.cvv ? 'border-red-500' : ''}`}
        />
        {errors.cvv && <p className="mt-2 text-sm text-red-600">{errors.cvv}</p>}
      </div>
      <div>
        <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700">Name on Card</label>
        <input
          type="text"
          id="nameOnCard"
          name="nameOnCard"
          value={form.nameOnCard}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.nameOnCard ? 'border-red-500' : ''}`}
        />
        {errors.nameOnCard && <p className="mt-2 text-sm text-red-600">{errors.nameOnCard}</p>}
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={!isValid}
          className={`px-4 py-2 rounded ${isValid ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        >
          Place Order
        </button>
      </div>
    </form>
  );
};

export default Payment;
