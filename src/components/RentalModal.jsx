"use client";

import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function RentalModal({ car, show, onClose }) {
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    setIsSubmitted(true);
  };

  if (!show) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm`}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`relative m-4 w-full max-w-4xl rounded-3xl bg-[#0A1A2F] text-white shadow-2xl ring-1 ring-white/10 transform transition-all duration-300`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side: Content */}
          <div className="p-8 md:p-10 border-r border-white/10 flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#00E0B8] mb-6">
                  <svg className="h-8 w-8 text-[#0A1A2F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Thank you!
                </h2>
                <p className="text-white/70 mb-8">
                  We will call you back within 20 minutes.
                </p>
                <button
                  onClick={onClose}
                  className="w-full max-w-xs rounded-lg bg-[#00E0B8] py-3.5 text-center text-base font-bold text-[#0A1A2F] transition-all hover:bg-white active:scale-95 shadow-lg shadow-[#00E0B8]/20"
                >
                  Okay
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  We will contact you <br />
                  <span className="text-[#00E0B8]">in a minute</span>
                </h2>
                <p className="mt-2 text-sm text-white/60">
                  Share your phone number with us so we can give you a call back.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name*"
                      required
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:border-[#00E0B8] focus:ring-2 focus:ring-[#00E0B8]/50 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                    <PhoneInput
                      international
                      id="phone"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={setPhone}
                      defaultCountry="PK"
                      required
                      className="phone-input-custom"
                    />
                  </div>
                  <fieldset className="pt-2">
                    <legend className="sr-only">Contact method</legend>
                    <div className="flex items-center space-x-6">
                      {['Phone', 'WhatsApp', 'Telegram'].map((method) => (
                        <div key={method} className="flex items-center">
                          <input id={method} name="contact-method" type="radio" className="h-4 w-4 accent-[#00E0B8] bg-white/10 border-white/30 focus:ring-[#00E0B8]" defaultChecked={method === 'Phone'} />
                          <label htmlFor={method} className="ml-2 block text-sm font-medium text-white/80">{method}</label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#00E0B8] py-3.5 text-center text-base font-bold text-[#0A1A2F] transition-all hover:bg-white active:scale-95 shadow-lg shadow-[#00E0B8]/20"
                  >
                    Contact us
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Right Side: Car Image */}
          <div className="relative hidden md:block">
            <img
              src={car?.image || '/car.jpeg'}
              alt={car?.name || 'Car'}
              className="h-full w-full object-cover rounded-r-3xl"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-bold text-white shadow-black/50 [text-shadow:_0_2px_10px_var(--tw-shadow-color)]" style={{ fontFamily: 'var(--font-heading)' }}>
                {car?.name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
