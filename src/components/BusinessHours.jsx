export default function BusinessHours() {
  return (
    <div className="bg-[#1A1A1A] p-8 md:p-10 rounded-3xl shadow-lg ring-1 ring-white/10">
      <h3 
        className="text-2xl font-bold text-white mb-6"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Business Hours
      </h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center pb-2 border-b border-white/10">
          <p className="text-base text-white/80" style={{ fontFamily: "Inter, sans-serif" }}>Monday - Friday</p>
          <p className="text-base font-semibold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>9:00 AM - 7:00 PM</p>
        </div>
        <div className="flex justify-between items-center pb-2 border-b border-white/10">
          <p className="text-base text-white/80" style={{ fontFamily: "Inter, sans-serif" }}>Saturday</p>
          <p className="text-base font-semibold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>10:00 AM - 5:00 PM</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base text-white/80" style={{ fontFamily: "Inter, sans-serif" }}>Sunday</p>
          <p className="text-base font-semibold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>Closed</p>
        </div>
      </div>
    </div>
  );
}
