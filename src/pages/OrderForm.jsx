import { useState } from 'react';
import CartReview from '../components/CartReview';
import ShippingInfo from '../components/ShippingInfo';
import Payment from '../components/Payment';
import Confirmation from '../components/Confirmation';

const OrderForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    cart: [],
    shipping: {},
    payment: {}
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async () => {
    console.log('Order submitted:', formData);
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    nextStep();
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {step === 1 && (
        <CartReview
          cart={formData.cart}
          setCart={(cart) => setFormData({...formData, cart})}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <ShippingInfo
          shipping={formData.shipping}
          setShipping={(shipping) => setFormData({...formData, shipping})}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Payment
          payment={formData.payment}
          setPayment={(payment) => setFormData({...formData, payment})}
          nextStep={handleSubmit}
          prevStep={prevStep}
        />
      )}
      {step === 4 && (
        <Confirmation
          order={formData}
          prevStep={prevStep}
        />
      )}
    </div>
  );
};

export default OrderForm;
