import React from 'react';

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#B844E8]/50 focus:border-[#B844E8]/50 text-sm backdrop-blur-xl transition-all duration-300 ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export { Input };
