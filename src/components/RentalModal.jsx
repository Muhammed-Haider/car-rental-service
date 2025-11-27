"use client";

import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useFormSubmission } from '../lib/emailService';

export default function RentalModal({ car, show, onClose }) {
  const { submitForm } = useFormSubmission();
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose();
    };

    if (show) {
      // Reset form state when modal opens
      setIsSubmitted(false);
      setPhone('');
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [show, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Collect form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Add car information and phone
    data.phone = phone;
    data.carName = car?.name || 'Unknown Car';
    data.carPrice = car?.price || 'Price not available';
    data.formType = 'Car Rental Request';

    // Send email with form data
    const result = await submitForm(data, 'Car Rental Request');

    if (result.success) {
      setIsSubmitted(true);
    } else {
      alert('Failed to submit rental request. Please try again.');
    }

    setIsSubmitting(false);
  };

  if (!show) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md`}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`relative m-4 w-full max-w-5xl rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 text-white shadow-2xl ring-1 ring-white/10 backdrop-blur-xl transform transition-all duration-300 hover:shadow-blue-500/10`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm text-white transition-all hover:from-white/30 hover:to-white/20 hover:scale-110 active:scale-95 shadow-lg border border-white/20"
          aria-label="Close modal"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={2.5} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-white"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Left Side: Content */}
          <div className="lg:col-span-3 p-8 lg:p-12 border-r border-white/10 flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-8 shadow-lg shadow-green-500/25">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Thank You!
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
                  We will call you back within 20 minutes to confirm your rental details.
                </p>
                <button
                  onClick={onClose}
                  className="w-full max-w-xs rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-4 text-center text-lg font-bold text-white transition-all hover:from-blue-700 hover:to-blue-800 active:scale-95 shadow-lg shadow-blue-500/25 transform hover:scale-105"
                >
                  Got it
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                    We will contact you 
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">in a minute</span>
                  </h2>
                  <p className="text-white/70 text-lg">
                    Share your contact details and we'll call you back to arrange your dream car rental.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Hidden fields for car info */}
                  <input type="hidden" name="carName" value={car?.name || ''} />
                  <input type="hidden" name="carPrice" value={car?.price || ''} />
                  
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-white/80">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name*"
                      required
                      className="w-full rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-white placeholder-white/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all backdrop-blur-sm text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-white/80">Phone Number</label>
                    <PhoneInput
                      international
                      id="phone"
                      placeholder="Enter your phone number*"
                      value={phone}
                      onChange={setPhone}
                      defaultCountry="PK"
                      required
                      className="phone-input-custom"
                      style={{
                        '--react-phone-number-input__country-flag-height': '24px',
                        '--react-phone-number-input__country-select-border-color': 'rgba(255, 255, 255, 0.2)',
                        '--react-phone-number-input__country-select-background': 'rgba(255, 255, 255, 0.05)',
                        '--react-phone-number-input__input-background': 'rgba(255, 255, 255, 0.05)',
                        '--react-phone-number-input__input-color': 'white',
                        '--react-phone-number-input__input-border-color': 'rgba(255, 255, 255, 0.2)',
                        '--react-phone-number-input__input-padding': '16px 24px',
                        '--react-phone-number-input__input-font-size': '18px',
                        '--react-phone-number-input__input-border-radius': '12px',
                      }}
                    />
                  </div>

                  <fieldset className="space-y-3">
                    <legend className="text-sm font-medium text-white/80">Preferred Contact Method</legend>
                    <div className="flex flex-wrap gap-6">
                      {['Phone', 'WhatsApp'].map((method) => (
                        <div key={method} className="flex items-center">
                          <input 
                            id={method} 
                            name="contact-method" 
                            type="radio" 
                            className="h-5 w-5 accent-blue-500 bg-white/10 border-white/30 focus:ring-2 focus:ring-blue-500/50" 
                            defaultChecked={method === 'Phone'} 
                          />
                          <label htmlFor={method} className="ml-3 block text-sm font-medium text-white/90">{method}</label>
                        </div>
                      ))}
                    </div>
                  </fieldset>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-4 text-center text-lg font-bold text-white transition-all hover:from-white hover:to-white hover:text-blue-600 hover:border-2 hover:border-blue-600 active:scale-95 shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Contact Me Now'}
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Right Side: Car Image */}
          <div className="lg:col-span-2 relative h-full min-h-[400px] lg:min-h-0">
            {car?.image ? (
              <>
                <img
                  src={car.image}
                  alt={car.name || 'Car'}
                  className="h-full w-full object-cover object-center rounded-r-3xl"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                      {car?.name || 'Car Details'}
                    </h3>
                    
                    <div className="flex items-center space-x-6 text-white/90">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-xl lg:text-2xl font-bold">{car?.price || '0'}</span>
                        <span className="text-sm lg:text-base opacity-80">/day</span>
                      </div>
                    </div>

                    {car?.specs && (
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm">
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span className="text-sm text-white/90">{car.specs.horsepower}hp</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm">
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span className="text-sm text-white/90">{car.specs.seats} seats</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm">
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-white/90">{car.specs.acceleration}s</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm">
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-sm text-white/90">{car.specs.engine}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center rounded-r-3xl">
                <div className="text-center">
                  <svg className="w-16 h-16 text-white/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-white/50 text-lg">No image available</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .phone-input-custom input {
          background: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          color: white !important;
          border-radius: 12px !important;
          padding: 16px 24px !important;
          font-size: 18px !important;
          backdrop-filter: blur(10px);
        }
        .phone-input-custom input:focus {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5) !important;
          outline: none !important;
        }
        .phone-input-custom input::placeholder {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        .phone-input-custom .react-phone-number-input__country-select {
          background: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          color: white !important;
          border-radius: 8px !important;
        }
        .phone-input-custom .react-phone-number-input__country-select:focus {
          border-color: #3b82f6 !important;
          outline: none !important;
        }
      `}</style>
    </div>
  );
}
