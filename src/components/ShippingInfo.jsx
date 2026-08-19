import { useState, useEffect } from 'react';

const ShippingInfo = ({ shipping, setShipping, nextStep, prevStep }) => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setForm(shipping);
  }, [shipping]);

  useEffect(() => {
    validateForm();
  }, [form]);

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.address) newErrors.address = 'Address is required';
    if (!form.city) newErrors.city = 'City is required';
    if (!form.postalCode) newErrors.postalCode = 'Postal code is required';
    if (!form.country) newErrors.country = 'Country is required';

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
      setShipping(form);
      nextStep();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Shipping Information</h2>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={form.address}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.address ? 'border-red-500' : ''}`}
        />
        {errors.address && <p className="mt-2 text-sm text-red-600">{errors.address}</p>}
      </div>
      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={form.city}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.city ? 'border-red-500' : ''}`}
        />
        {errors.city && <p className="mt-2 text-sm text-red-600">{errors.city}</p>}
      </div>
      <div>
        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={form.postalCode}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.postalCode ? 'border-red-500' : ''}`}
        />
        {errors.postalCode && <p className="mt-2 text-sm text-red-600">{errors.postalCode}</p>}
      </div>
      <div>
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          value={form.country}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.country ? 'border-red-500' : ''}`}
        />
        {errors.country && <p className="mt-2 text-sm text-red-600">{errors.country}</p>}
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
          Continue to Payment
        </button>
      </div>
    </form>
  );
};

export default ShippingInfo;
