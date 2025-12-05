const contactItems = [
  {
    icon: (
      <svg className="h-6 w-6 text-[#B844E8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+971 55 407 9239",
    href: "tel:+971554079239",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-[#B844E8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "info@wtbdxb.ae",
    href: "mailto:info@wtbdxb.ae",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-[#B844E8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    value: "Dubai, United Arab Emirates",
  },
];

export default function ContactInfo() {
  return (
    <div className="bg-[#1A1A1A] p-8 md:p-10 rounded-3xl shadow-lg ring-1 ring-white/10">
      <h3 
        className="text-2xl font-bold text-white mb-6"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Contact Information
      </h3>
      <div className="space-y-6">
        {contactItems.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B844E8]/10 border border-[#B844E8]/20">
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-white/60 font-medium" style={{ fontFamily: "Inter, sans-serif" }}>{item.label}</p>
              {item.href ? (
                <a 
                  href={item.href} 
                  className="text-base font-semibold text-white hover:text-[#B844E8] transition-colors duration-300"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {item.value}
                </a>
              ) : (
                <p 
                  className="text-base font-semibold text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {item.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
