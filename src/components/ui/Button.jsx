import React from 'react';

const Button = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <button
      className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#6B4FE8] to-[#9D5FFF] border border-[#6B4FE8] text-white font-semibold text-sm rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
