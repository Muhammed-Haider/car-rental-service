"use client";

import { useState } from 'react';
import ContactInfo from "./ContactInfo";
import BusinessHours from "./BusinessHours";
import { useFormSubmission } from '../lib/emailService';

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
    const result = await submitForm(data, 'Contact Form');

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
    <section className="w-full bg-gradient-to-b from-[#000000] to-[#0D0D0D] py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side: Form */}
          <div className="bg-[#1A1A1A] p-8 md:p-10 rounded-3xl shadow-lg ring-1 ring-white/10">
            <h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {isSubmitted ? '✅ Message Sent!' : 'We will contact you in a minute'}
            </h2>
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100/20 mb-4">
                  <svg className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white/80 text-lg">Thank you for your message! We'll get back to you soon.</p>
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
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#B844E8]/50 focus:border-[#B844E8]/50 text-sm transition-all duration-300"
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
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#B844E8]/50 focus:border-[#B844E8]/50 text-sm transition-all duration-300"
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
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#B844E8]/50 focus:border-[#B844E8]/50 text-sm transition-all duration-300"
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
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#B844E8]/50 focus:border-[#B844E8]/50 text-sm transition-all duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] border border-[#6B4FE8] text-white font-semibold text-sm rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
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
