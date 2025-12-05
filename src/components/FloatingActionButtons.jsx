import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const FloatingActionButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[9999] flex flex-col gap-3 md:gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/971554079239"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} className="md:w-7 md:h-7" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+971554079239"
        className="bg-[#007AFF] text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="Call Us"
      >
        <FaPhoneAlt size={20} className="md:w-6 md:h-6" />
      </a>
    </div>
  );
};

export default FloatingActionButtons;
