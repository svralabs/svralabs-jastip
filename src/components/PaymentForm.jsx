const PaymentForm = ({ formData, handleChange }) => {
  return (
    <form className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
      <div className="mb-4">
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={(e) => handleChange(e, 'payment')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
          Expiry Date
        </label>
        <input
          type="text"
          id="expiryDate"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={(e) => handleChange(e, 'payment')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={formData.cvv}
          onChange={(e) => handleChange(e, 'payment')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
    </form>
  );
};

export default PaymentForm;
