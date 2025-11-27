"use client";

import { useState } from 'react';
import ContactInfo from "./ContactInfo";
import BusinessHours from "./BusinessHours";
import { useFormSubmission } from '../../../lib/emailService';

export default function ContactForm() {
  const { submitForm } = useFormSubmission();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Collect form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Send email with form data
    const result = await submitForm(data, 'Contact Page Form');

    if (result.success) {
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        e.target.reset();
        setIsSubmitted(false);
      }, 3000);
    } else {
      alert('Failed to send message. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#F8FAFC] to-white pt-12 md:pt-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side: Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg ring-1 ring-slate-100">
            <h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {isSubmitted ? '✅ Message Sent!' : 'We will contact you in a minute'}
            </h2>
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600 text-lg">Thank you for your message! We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0057FF]/50 focus:border-[#0057FF]/50 text-sm transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0057FF]/50 focus:border-[#0057FF]/50 text-sm transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0057FF]/50 focus:border-[#0057FF]/50 text-sm transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0057FF]/50 focus:border-[#0057FF]/50 text-sm transition-all duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3.5 bg-[#0057FF] border border-[#0057FF] text-white font-semibold text-sm rounded-xl hover:bg-white hover:text-[#0057FF] transition-all duration-300 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Right Side: Info & Hours */}
          <div className="space-y-8">
            <ContactInfo />
            <BusinessHours />
          </div>
        </div>
      </div>
    </section>
  );
}
