import { useState } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { givingOptions } from '../../pages/givingData';

const GivingSection = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    amount: '',
    phone: '',
    email: '',
    name: ''
  });

  const config = {
    reference: (new Date()).getTime().toString(),
    email: paymentDetails.email,
    amount: parseInt(paymentDetails.amount) * 100, // Paystack expects amount in kobo
    publicKey: import.meta.env.PAYSTACK_PUBLIC_KEY,
    currency: 'KES',
    channels: ['mobile_money'],
    metadata: {
      custom_fields: [
        {
          display_name: "Donor Name",
          variable_name: "donor_name",
          value: paymentDetails.name
        },
        {
          display_name: "Phone Number",
          variable_name: "phone",
          value: paymentDetails.phone
        }
      ]
    }
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference) => {
    console.log('Payment successful:', reference);
    setShowPaymentModal(false);
    // Add success notification or redirect
  };

  const onClose = () => {
    console.log('Payment closed');
  };

  const handlePayment = () => {
    initializePayment(onSuccess, onClose);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ways to Give</h2>
          <p className="text-lg text-gray-600">
            Choose the method that works best for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {givingOptions.map((option, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              data-aos="fade-up" 
              data-aos-delay={200 + (index * 100)}
              onClick={() => option.title === "Online Giving" ? setShowPaymentModal(true) : null}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <option.icon className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {option.description}
                  </p>
                  <div className="text-sm text-gray-700 bg-gray-50 p-4 rounded whitespace-pre-line">
                    {option.details}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Mobile Money Payment</h3>
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={paymentDetails.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={paymentDetails.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={paymentDetails.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="2547XXXXXXXX"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount (KES)</label>
                <input
                  type="number"
                  name="amount"
                  value={paymentDetails.amount}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="1000"
                  min="1"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  onClick={handlePayment}
                  disabled={!paymentDetails.amount || !paymentDetails.phone || !paymentDetails.email}
                  className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                    !paymentDetails.amount || !paymentDetails.phone || !paymentDetails.email 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GivingSection;